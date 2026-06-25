import Container from "@/components/ui/Container";
import StatCard from "@/components/ui/StatCard";

const stats = [
  {
    value: "10K+",
    label: "Resources",
  },
  {
    value: "500+",
    label: "JEE Topics",
  },
  {
    value: "200+",
    label: "Olympiad Problems",
  },
  {
    value: "24/7",
    label: "Learning Access",
  },
];

export default function Stats() {
  return (
    <Container>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </Container>
  );
}