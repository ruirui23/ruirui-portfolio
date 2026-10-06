import type { Metadata } from "next";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "作品 | ruirui",
  description: "制作物",
};

const linkButtons = [
  { key: "site", label: "デモ" },
  { key: "github", label: "GitHub" },
  { key: "video", label: "動画" },
  { key: "article", label: "記事" },
] as const;

export default function WorksPage() {
  return (
    <div className="py-20">
      <p className="text-xs font-medium tracking-widest text-muted uppercase mb-2">
        Works
      </p>
      <h1 className="text-3xl font-medium tracking-tight text-foreground mb-16">
        作品
      </h1>

      {works.length === 0 ? (
        <p className="text-sm text-muted">作品を追加してください。</p>
      ) : (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <article
              key={work.id}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800 overflow-hidden flex flex-col"
            >
              {/* サムネイル */}
              {work.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full aspect-video object-cover"
                />
              ) : (
                <div className="w-full aspect-video flex items-center justify-center bg-zinc-100 dark:bg-zinc-800">
                  <span className="text-lg font-medium text-muted">
                    {work.title}
                  </span>
                </div>
              )}

              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <h2 className="text-lg font-medium text-foreground">
                    {work.title}
                  </h2>
                  <p className="text-xs text-muted mt-0.5">{work.period}</p>
                </div>

                <p className="text-sm text-muted leading-relaxed">
                  {work.description}
                </p>

                {work.role && (
                  <p className="text-xs text-muted leading-relaxed">
                    担当: {work.role}
                  </p>
                )}

                {work.tags && work.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-muted bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {linkButtons.map(({ key, label }) => {
                    const href = work.links[key];
                    if (!href) return null;
                    return (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted border border-zinc-200 dark:border-zinc-800 rounded-full px-3 py-1 hover:text-foreground hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                      >
                        {label} ↗
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
