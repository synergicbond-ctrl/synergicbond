type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-white/10
        bg-white/5
        px-4
        py-1
        text-xs
        uppercase
        tracking-[0.25em]
        text-white/70
      "
    >
      {children}
    </span>
  );
}