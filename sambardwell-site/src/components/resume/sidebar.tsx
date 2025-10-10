import React from "react";

export function Sidebar() {
  return (
    <div className="resume-side-inner">
      <section className="resume-side-block">
        <h4 className="resume-side-heading">Education</h4>
        <div className="education-entry">
          <div className="side-rail-wrap">
            <span className="side-rail" aria-hidden />
            <div className="resume-side-body space-y-2">
              <div className="font-medium text-base">Buena Vista University</div>
              <div>Computer Science B.S. with concentration in AI and Robotics.</div>
              <div>Mathematics Minor.</div>
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
            <li><strong>Web Scraping Application, Contracted:</strong> Implemented website query functionality using Selenium, AWS, Python.</li>
            <li><strong>Pandora, Senior Capstone Project:</strong> Developed a 2D exploration game with a top-down perspective in Unity. Utilized Perlin noise for infinite, procedurally generated worlds. Implemented resource collection and inventory management systems, with biomes and a day-night cycle. Players must gather resources to upgrade their oxygen tanks and explore further. The game features resource types and an orbiter inventory to prevent resource loss upon respawn.</li>
            <li><strong>Predicting Hazardous Asteroids (Machine Learning Final):</strong> Compare and contrasted adaptive boosting and decision trees with queried asteroid data from JPL.</li>
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
            <li>Men’s Soccer</li>
            <li>Associated for Computing Machinery</li>
            <li>Orientation team</li>
            <li>Robotics club</li>
          </ul>
        </div>
      </section>
    </div>
  );
}