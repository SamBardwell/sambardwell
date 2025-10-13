"use client";

export function PrintButton({
  className = "",
  label = "PDF / Print",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      aria-label="Print or save as PDF"
      className={`inline-flex items-center gap-2 rounded-md border border-zinc-700/60 bg-zinc-900/40 px-3 py-1.5 text-xs font-medium text-zinc-200 hover:bg-zinc-800/60 hover:border-zinc-500 transition-colors shadow-sm ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="opacity-80"
      >
        <path
          fill="currentColor"
          d="M7 3h10v4H7V3zm12 6a3 3 0 0 1 3 3v5h-4v4H6v-4H2v-5a3 3 0 0 1 3-3h14zM8 18v2h8v-2H8zm12-3h2v-3a1 1 0 0 0-1-1h-2v4zM4 11a1 1 0 0 0-1 1v3h2v-4H4z"
        />
      </svg>
      <span>{label}</span>
    </button>
  );
}