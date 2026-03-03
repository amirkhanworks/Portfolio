type MetricCardProps = {
  label: string;
  value: string;
  description: string;
};

export function MetricCard({ label, value, description }: MetricCardProps) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 shadow-[var(--shadow-sm)]">
      <p className="text-label text-[var(--muted-fg)]">{label}</p>
      <p className="mt-1 text-h1 text-[var(--fg)]">{value}</p>
      <p className="mt-1 text-small text-[var(--muted-fg)]">{description}</p>
    </div>
  );
}
