import Card from "./Card";

type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <Card className="p-6 text-center">
      <h3 className="text-4xl font-bold tracking-tight">
        {value}
      </h3>

      <p className="mt-2 text-white/60">
        {label}
      </p>
    </Card>
  );
}