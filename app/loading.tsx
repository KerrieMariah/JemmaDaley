import AjaxLoader from "@/components/AjaxLoader";

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-navy text-white">
      <div className="text-center">
        <AjaxLoader label="Loading page" />
        <p className="section-label mt-5 text-white/45">Loading</p>
      </div>
    </main>
  );
}
