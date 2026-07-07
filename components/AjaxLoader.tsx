type AjaxLoaderProps = {
  label?: string;
  tone?: "light" | "dark";
};

export default function AjaxLoader({
  label = "Loading",
  tone = "light",
}: AjaxLoaderProps) {
  const color = tone === "dark" ? "border-navy/20 border-t-navy" : "border-white/25 border-t-teal";

  return (
    <span className="inline-flex items-center justify-center gap-3">
      <span
        className={`h-4 w-4 animate-spin rounded-full border ${color}`}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </span>
  );
}
