import React from "react";

export function TimelineItem({
  year,
  title,
  company,
  points,
}: {
  year: string;
  title: string;
  company?: string;
  points?: string[];
}) {
  return (
    <div className="resume-item">
      <div className="resume-content">
        <span className="resume-rail" aria-hidden />

        <div className="resume-content-inner">
          <div className="flex items-baseline justify-between">
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              {company && <div className="text-sm text-zinc-400">{company}</div>}
            </div>
          </div>

          <ul className="resume-points mt-3 text-sm text-zinc-300 space-y-3">
            {points?.map((p, i) => (
              <li key={i} className="pl-4">
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="resume-year" aria-hidden>
        {year}
      </div>
    </div>
  );
}