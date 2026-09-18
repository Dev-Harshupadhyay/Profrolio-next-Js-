export default function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-accent mb-2">
        <span className="text-slate-600">{"//"}</span> {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h2>
      {sub && <p className="mt-3 text-slate-400 max-w-2xl">{sub}</p>}
    </div>
  );
}
