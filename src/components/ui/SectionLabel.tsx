export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-primary/10 bg-primary-light px-5 py-2 text-sm font-medium tracking-wide text-primary shadow-sm">
      {children}
    </span>
  );
}
