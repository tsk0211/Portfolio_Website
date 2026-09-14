import ThemeSwitcher from "./ThemeSwitcher";

const LINKS = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-term-border bg-term-bg/90 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-3xl items-center gap-2 px-4 py-3 text-sm">
        <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
          <span className="mr-3 shrink-0 text-term-accent">$</span>
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded px-2.5 py-1 text-term-fg-dim transition-colors hover:bg-term-bg-elevated hover:text-term-accent"
            >
              ./{link.label}
            </a>
          ))}
        </div>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
