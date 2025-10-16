import React from "react";

export function Sidebar() {
  return (
    <div className="resume-side-inner">
      <section className="resume-side-block">
        <h4 className="resume-side-heading">Education</h4>
        <div className="education-entry">
          <div className="education-content">
            <div className="side-rail-wrap">
              <span className="side-rail" aria-hidden />
              <div className="resume-side-body space-y-2">
                <div className="font-medium text-base text-white">BVU</div>
                <div className="text-zinc-300">B.S. in Computer Science (AI & Robotics); Mathematics minor</div>
              </div>
            </div>
          </div>
          <div className="education-year">2023</div>
        </div>
      </section>

      <section className="resume-side-block">
        <h4 className="resume-side-heading">Technical Skills</h4>
        <div className="resume-side-body space-y-4">
          <div>
            <div className="font-medium">Familiar (1–5 years)</div>
            <div className="side-rail-wrap mt-2">
              <span className="side-rail" aria-hidden />
              <div>Typescript, Next.js, AWS CDK, MongoDB, Python, SQL, Java, Drupal, Docker, and Coveo</div>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-side-block">
        <h4 className="resume-side-heading">Projects</h4>
        <div className="side-rail-wrap">
          <span className="side-rail" aria-hidden />
          <ul className="resume-side-body space-y-2">
            <li><strong>Web Scraping Application:</strong> automated data extraction from website using Selenium, AWS, Python</li>
            <li><strong>Pandora:</strong> infinite exploration game in Unity with day-night cycles and procedural world generation</li>
            <li><strong>Predicting Hazardous Asteroids:</strong> machine learning model to identify potentially hazardous space objects</li>
          </ul>
        </div>
      </section>

      <section className="resume-side-block">
        <h4 className="resume-side-heading">Other Skills & Achievements</h4>
        <div className="side-rail-wrap">
          <span className="side-rail" aria-hidden />
          <ul className="resume-side-body space-y-2">
            <li>STEM CAREERS Scholarship</li>
            <li>Student Activities Board</li>
            <li>Men&apos;s Soccer</li>
            <li>ACM and Robotics club</li>
            <li>Orientation team</li>
          </ul>
        </div>
      </section>
    </div>
  );
}