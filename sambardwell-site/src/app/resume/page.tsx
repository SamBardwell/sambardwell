export const metadata = {
  title: "Resume",
  description: "Profile / Resume",
};

export default function ResumePage() {
  return (
    <section className="prose prose-invert max-w-3xl">
      <h1>Trainer Profile</h1>
      <p>Short professional summary.</p>
      <h2>Badges</h2>
      <ul>
        <li>⚡ APIs</li>
        <li>🧠 Architecture</li>
      </ul>
      <h2>Moves (Skills)</h2>
      <ul>
        <li>TypeScript (STAB)</li>
        <li>Next.js</li>
        <li>Design Systems</li>
      </ul>
      <h2>Evolutions (Career Growth)</h2>
      <ol>
        <li>Junior Developer → Mid</li>
        <li>Mid → Senior</li>
      </ol>
    </section>
  );
}