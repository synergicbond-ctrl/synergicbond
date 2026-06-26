import Card from "./Card";

interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

export default function StatCard({
  value,
  label,
  description,
}: StatCardProps) {
  return (
    <Card padding="lg" className="text-center">
      <div className="text-5xl font-extrabold tracking-tight text-white">
        {value}
      </div>

      <div className="mt-3 text-lg font-semibold text-white">
        {label}
      </div>

      {description && (
        <p className="mt-2 text-sm leading-6 text-white/60">
          {description}
        </p>
      )}
    </Card>
  );
}