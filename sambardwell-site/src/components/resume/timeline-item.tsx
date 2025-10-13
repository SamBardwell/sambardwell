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
      <span className="resume-rail" aria-hidden />

      <div className="resume-head">
        <h3 className="text-lg font-semibold">{title}</h3>
        {company && <div className="text-sm text-zinc-400">{company}</div>}
      </div>

      <div className="resume-year" aria-hidden>
        {year}
      </div>

      {points && (
        <div className="resume-body">
          <ul className="resume-points mt-2 text-sm text-zinc-300">
            {points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}