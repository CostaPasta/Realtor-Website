// Marks this section's content as Brazilian Portuguese for screen readers and search engines.
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div lang="pt-BR">{children}</div>;
}
