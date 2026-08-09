"use client";

import { useMemo, useState } from "react";
import { timeline, TIMELINE_TAGS, type TimelineTag } from "@/data/about";

const ALL = "すべて" as const;
type Filter = typeof ALL | TimelineTag;

export default function Timeline() {
  const [filter, setFilter] = useState<Filter>(ALL);

  // 日付の新しい順に並び替え
  const sorted = useMemo(
    () => [...timeline].sort((a, b) => b.date.localeCompare(a.date)),
    []
  );

  const entries =
    filter === ALL
      ? sorted
      : sorted.filter((entry) => entry.tags.includes(filter));

  const filters: Filter[] = [ALL, ...TIMELINE_TAGS];

  return (
    <div>
      {/* 絞り込みタブ */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((tag) => {
          const active = filter === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => setFilter(tag)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                active
                  ? "bg-blue-500 text-white"
                  : "text-muted hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>

      {/* タイムライン */}
      {entries.length === 0 ? (
        <p className="text-sm text-muted">該当する経歴がありません。</p>
      ) : (
        <ol>
          {entries.map((entry, i) => (
            <li key={`${entry.date}-${i}`} className="pb-10 last:pb-0">
              {/* 日付 */}
              <p className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
                <span aria-hidden>🗓️</span>
                {entry.date}
              </p>

              {/* カード */}
              <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {entry.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed whitespace-pre-line">
                  {entry.description}
                </p>
                {entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {entry.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-200 dark:border-blue-900 px-3 py-0.5 text-xs text-blue-600 dark:text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
