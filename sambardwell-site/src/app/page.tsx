"use client";

import { useState } from "react";
import Link from "next/link";
import { TrainerCard } from "@/components/trainer-card";

export default function Home() {
  const [showTrainerCard, setShowTrainerCard] = useState(false);

  return (
    <div className="site-container flex flex-col gap-12 max-w-4xl">
      <section className="flex flex-col gap-4 relative">
        <button
          onClick={() => setShowTrainerCard(true)}
          className="absolute top-0 right-0 px-3 py-1.5 rounded-lg border border-zinc-700 hover:border-emerald-500 text-zinc-400 hover:text-emerald-400 font-medium transition-colors text-xs"
        >
          Trainer Card
        </button>

        <h1 className="text-4xl font-bold tracking-tight">Sam Bardwell</h1>
        <p className="text-xl text-zinc-400">
          Software Engineer
        </p>
      </section>

      <TrainerCard 
        show={showTrainerCard} 
        onClose={() => setShowTrainerCard(false)} 
      />

      <section className="flex flex-col gap-4">
        <p className="text-zinc-300 leading-relaxed">
          Hi! I&apos;m Sam, a Software Engineer at{" "}
          <a
            href="https://www.principal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 underline"
          >
            Principal Financial Group
          </a>
          . Check out my{" "}
          <Link href="/blog" className="text-emerald-400 hover:text-emerald-300 underline">
            blog posts
          </Link>{" "}
          and{" "}
          <Link href="/resume" className="text-emerald-400 hover:text-emerald-300 underline">
            resume
          </Link>
          , or find me on{" "}
          <a
            href="https://linkedin.com/in/sambardwell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 underline"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/sambardwell"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 underline"
          >
            GitHub
          </a>
          .
        </p>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Skills & Interests</h2>
        <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/40">
          <p className="text-zinc-300 mb-4">
            Here&apos;s some stuff I enjoy learning about and doing. Technical skills are highlighted in{" "}
            <span className="text-indigo-400 font-medium">purple</span>:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { name: "TypeScript", technical: true },
              { name: "Next.js", technical: true },
              { name: "Philosophy", technical: false },
              { name: "React", technical: true },
              { name: "AI & Machine Learning", technical: false },
              { name: "Python", technical: true },
              { name: "Web Development", technical: true },
              { name: "Cloud Architecture", technical: false },
              { name: "Pokemon", technical: false },
              { name: "UI Design", technical: true },
              { name: "D&D", technical: false },
              { name: "The Universe", technical: false },
            ].map((item) => (
              <span
                key={item.name}
                className={`px-3 py-1.5 rounded-full text-sm ${
                  item.technical
                    ? "bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 font-medium"
                    : "bg-zinc-800 text-zinc-300"
                }`}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Industries I&apos;m Interested In</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { name: "FinTech", icon: "💰" },
            { name: "AI/ML", icon: "🤖" },
            { name: "Space Tech", icon: "🛠️" },
            { name: "Gaming", icon: "🎮" },
            { name: "EdTech", icon: "📚" },
            { name: "Cloud Infrastructure", icon: "☁️" },
          ].map((industry) => (
            <div
              key={industry.name}
              className="flex items-center gap-3 border border-zinc-800 rounded-lg p-3 bg-zinc-900/40 hover:border-zinc-600 transition-colors"
            >
              <span className="text-2xl">{industry.icon}</span>
              <span className="text-sm text-zinc-300">{industry.name}</span>
            </div>
          ))}
        </div>
      </section> */}

      <section className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/40">
          <p className="text-zinc-400 text-sm mb-4">
            Currently working on some exciting projects. Check back soon, or read about my past work in my{" "}
            <Link href="/resume" className="text-emerald-400 hover:text-emerald-300 underline">
              resume
            </Link>
            .
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 opacity-50">
            <div className="border border-zinc-800 rounded-lg p-4">
              <h3 className="font-medium mb-2">Coming Soon</h3>
              <p className="text-sm text-zinc-400">New projects in development</p>
            </div>
            <div className="border border-zinc-800 rounded-lg p-4">
              <h3 className="font-medium mb-2">Coming Soon</h3>
              <p className="text-sm text-zinc-400">New projects in development</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}