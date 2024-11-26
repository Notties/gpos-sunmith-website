export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <h1>Product Layout</h1>
      {children}
    </section>
  );
}
