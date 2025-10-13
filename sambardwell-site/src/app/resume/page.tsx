import { TimelineItem } from "@/components/resume/timeline-item";
import { Sidebar } from "@/components/resume/sidebar";
import { PrintButton } from "@/components/resume/print-button";

export const metadata = {
  title: "Resume",
  description: "Profile / Resume",
};

export default function ResumePage() {
  const layoutVars: React.CSSProperties = {
    "--resume-main-max": "800px",
    "--resume-side-width": "300px",
  } as React.CSSProperties;

  return (
    <>
      <div className="resume-paper">
        <div className="print-header">
          <h1>Sam Bardwell</h1>
          <div className="contact-info">
            <span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/email-icon.svg" alt="" style={{ display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', marginRight: '6px' }} />
              s.bardwell@outlook.com
            </span>
            <span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/phone-icon.svg" alt="" style={{ display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', marginRight: '6px' }} />
              (515) 724-2517
            </span>
            <span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/globe-icon.svg" alt="" style={{ display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', marginRight: '6px' }} />
              sambardwell.com
            </span>
            <span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/github-logo.svg" alt="" style={{ display: 'inline-block', width: '14px', height: '14px', verticalAlign: 'middle', marginRight: '6px' }} />
              sambardwell
            </span>
          </div>
        </div>
        <div className="resume-grid gap-8" style={layoutVars}>
          <div className="resume-topbar">
            <h1 className="text-4xl font-semibold">Resume</h1>
            <PrintButton className="print:hidden" label="PDF / Print" />
          </div>

          <section className="resume-main">
            <h2 className="text-2xl font-semibold">Work Experience</h2>
            <div className="resume-timeline">
              <TimelineItem
                year="2023 — present"
                title="Software Engineer 1-2"
                company="Principal Financial Group"
                points={[
                  "Implementing cloud-based technologies by deploying and developing in AWS through AWS CDK in Typescript. New applications and migrating older applications.",
                  "Utilizing and contributing to inner source solutions throughout the company.",
                  "Mentoring new hires and spoke for summer intern kick off.",
                  "Leading team discussions around learning new technologies."
                ]}
              />
              <TimelineItem
                year="Summer 2022"
                title="Software Engineering Intern"
                company="Principal Financial Group"
                points={[
                  "Developed an application that predicts CPU degradation from our departments applications by using Time Series K-Means with Euclidean Distance.",
                  "Automated our developer's setup, reducing the time by a significant amount through Ansible.",
                  "Created an internal developer support system from scratch in AWS, through our weeklong code jam event. We leveraged React framework, DynamoDB, lambdas, and API gateway."
                ]}
              />
              <TimelineItem
                year="Summer 2021"
                title="Software Engineering Intern"
                company="Farmers Mutual Hail"
                points={[
                  "Worked in an Agile team environment where we collaborated and developed web applications and batch processors that automate internal business functions."
                ]}
              />
            </div>
          </section>

          <aside className="resume-side">
            <Sidebar />
          </aside>
        </div>
      </div>
    </>
  );
}