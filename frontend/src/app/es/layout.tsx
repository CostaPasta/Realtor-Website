// Marks this section's content as Spanish for screen readers and search engines.
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div lang="es">{children}</div>;
}
