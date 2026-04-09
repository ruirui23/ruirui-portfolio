import type { Metadata } from "next";
import { works } from "@/data/works";

export const metadata: Metadata = {
  title: "作品 | ruirui",
  description: "制作物・活動記録",
};

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
        <div className="space-y-12">
          {works.map((work) => (
            <article key={work.id}>
              <div className="flex items-start justify-between gap-4 mb-2">
                <h2 className="text-lg font-medium text-foreground">
                  {work.url ? (
                    <a
                      href={work.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-muted transition-colors"
                    >
                      {work.title}
                    </a>
                  ) : (
                    work.title
                  )}
                </h2>
                <span className="text-xs text-muted shrink-0 pt-1">
                  {work.year}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed mb-3">
                {work.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {work.repoUrl && (
                  <a
                    href={work.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted hover:text-foreground transition-colors"
                  >
                    GitHub →
                  </a>
                )}
                {work.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-muted bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
