import Link from "next/link";
import type { NavItem } from "@/lib/nav";

export default function SectionPreviewCard({ item }: { item: NavItem }) {
  return (
    <Link href={item.href} className="group block py-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium tracking-widest text-muted uppercase mb-1">
            {item.labelEn}
          </p>
          <h2 className="text-2xl font-medium text-foreground mb-2">
            {item.labelJa}
          </h2>
          <p className="text-sm text-muted">{item.previewSummary}</p>
        </div>
        <span className="text-muted group-hover:text-foreground transition-colors mt-1 text-lg">
          →
        </span>
      </div>
    </Link>
  );
}
