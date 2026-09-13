import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-3xl px-4 pb-10 pt-4 text-center text-xs text-term-fg-dim">
      <p>
        <span className="text-term-accent">$</span> echo &quot;© {new Date().getFullYear()} {profile.name}. Built with Next.js
        &amp; Tailwind.&quot;
      </p>
    </footer>
  );
}
