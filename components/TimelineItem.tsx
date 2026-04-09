import type { TimelinePeriod } from "@/data/about";

function formatPeriod(start: string, end?: string): string {
  const fmt = (s: string) => {
    const [year, month] = s.split("-");
    return `${year}.${month}`;
  };
  return end ? `${fmt(start)} – ${fmt(end)}` : `${fmt(start)} –`;
}

export default function TimelineItem({ item }: { item: TimelinePeriod }) {
  return (
    <div className="flex gap-8 py-6 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
      <p className="w-28 shrink-0 text-xs text-muted pt-0.5 leading-relaxed">
        {formatPeriod(item.start, item.end)}
      </p>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground">{item.organization}</p>
        <p className="text-sm text-muted mt-0.5">{item.role}</p>
        <p className="text-sm text-muted mt-2 leading-relaxed">
          {item.description}
        </p>
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-muted bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
