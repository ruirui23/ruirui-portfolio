import Link from "next/link";
import { navItems } from "@/lib/nav";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/90 backdrop-blur-sm dark:bg-black/90">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-medium tracking-widest text-foreground uppercase"
        >
          るいるいのポートフォリオ
        </Link>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className="text-sm text-muted hover:text-foreground transition-colors font-medium"
              >
                ホーム
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted hover:text-foreground transition-colors"
                >
                  <span className="font-medium">{item.labelJa}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
