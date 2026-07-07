import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL;
const toEmail = process.env.CONTACT_TO_EMAIL || "jemma.daley@sjpp.asia";

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      console.warn("[contact-form]", {
        requestId,
        code: "CONTACT_VALIDATION_ERROR",
      });

      return NextResponse.json(
        {
          code: "CONTACT_VALIDATION_ERROR",
          error: "Please complete all required fields.",
          requestId,
        },
        { status: 400 },
      );
    }

    if (!resendApiKey || !fromEmail) {
      console.error("[contact-form]", {
        requestId,
        code: "CONTACT_EMAIL_NOT_CONFIGURED",
        hasResendApiKey: Boolean(resendApiKey),
        hasFromEmail: Boolean(fromEmail),
      });

      return NextResponse.json(
        {
          code: "CONTACT_EMAIL_NOT_CONFIGURED",
          error: "Email service is not configured yet.",
          requestId,
        },
        { status: 500 },
      );
    }

    const resend = new Resend(resendApiKey);

    console.info("[contact-form]", {
      requestId,
      code: "CONTACT_RESEND_ATTEMPT",
      from: fromEmail,
      to: toEmail,
      replyTo: email,
    });

    const result = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #0a1428; line-height: 1.6;">
          <p style="text-transform: uppercase; letter-spacing: 0.18em; color: #3fdcc8; font-size: 12px;">New Website Enquiry</p>
          <h1 style="font-family: Georgia, serif; font-weight: 400; margin: 0 0 24px;">${escapeHtml(name)}</h1>
          <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
          <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid #e5e7eb;">
            ${escapeHtml(message).replace(/\n/g, "<br />")}
          </div>
        </div>
      `,
    });

    if (result.error) {
      console.error("[contact-form]", {
        requestId,
        code: "CONTACT_RESEND_ERROR",
        error: result.error,
      });

      return NextResponse.json(
        {
          code: "CONTACT_RESEND_ERROR",
          error: "Resend did not accept the email.",
          requestId,
        },
        { status: 502 },
      );
    }

    console.info("[contact-form]", {
      requestId,
      code: "CONTACT_RESEND_SUCCESS",
      resendEmailId: result.data?.id,
    });

    return NextResponse.json({
      ok: true,
      code: "CONTACT_RESEND_SUCCESS",
      requestId,
      emailId: result.data?.id,
    });
  } catch (error) {
    console.error("[contact-form]", {
      requestId,
      code: "CONTACT_UNHANDLED_ERROR",
      error,
    });

    return NextResponse.json(
      {
        code: "CONTACT_UNHANDLED_ERROR",
        error: "Unable to send your message right now.",
        requestId,
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
