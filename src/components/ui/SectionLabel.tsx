export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-medium tracking-wide text-primary">
      {children}
    </span>
  );
}
