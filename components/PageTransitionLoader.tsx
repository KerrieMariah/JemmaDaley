"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import AjaxLoader from "@/components/AjaxLoader";

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    setLoading(false);

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [pathname]);

  useEffect(() => {
    const startLoading = () => {
      setLoading(true);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        setLoading(false);
        timeoutRef.current = null;
      }, 3500);
    };

    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const link = (event.target as Element | null)?.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      if (
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        link.href.startsWith("mailto:") ||
        link.href.startsWith("tel:")
      ) {
        return;
      }

      const nextUrl = new URL(link.href);
      const currentUrl = new URL(window.location.href);

      if (nextUrl.origin !== currentUrl.origin) return;

      const isSamePage =
        nextUrl.pathname === currentUrl.pathname &&
        nextUrl.search === currentUrl.search;

      if (isSamePage) return;

      startLoading();
    };

    window.addEventListener("click", handleClick, true);
    window.addEventListener("popstate", startLoading);

    return () => {
      window.removeEventListener("click", handleClick, true);
      window.removeEventListener("popstate", startLoading);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/90 text-white backdrop-blur-sm">
      <div className="text-center">
        <AjaxLoader label="Loading page" />
        <p className="section-label mt-5 text-white/45">Loading</p>
      </div>
    </div>
  );
}
