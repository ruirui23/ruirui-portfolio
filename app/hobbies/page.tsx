import type { Metadata } from "next";
import { hobbies } from "@/data/hobbies";

export const metadata: Metadata = {
  title: "趣味 | ruirui",
  description: "日常の趣味・好きなこと",
};

export default function HobbiesPage() {
  return (
    <div className="py-20">
      <p className="text-xs font-medium tracking-widest text-muted uppercase mb-2">
        Hobbies
      </p>
      <h1 className="text-3xl font-medium tracking-tight text-foreground mb-16">
        趣味
      </h1>

      {hobbies.length === 0 ? (
        <p className="text-sm text-muted">趣味を追加してください。</p>
      ) : (
        <div className="space-y-10">
          {hobbies.map((hobby) => (
            <article key={hobby.id}>
              <h2 className="text-lg font-medium text-foreground mb-2">
                {hobby.name}
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                {hobby.description}
              </p>

              {hobby.detail && (
                <details className="group mt-4">
                  <summary className="cursor-pointer list-none text-xs text-muted hover:text-foreground transition-colors inline-flex items-center gap-1">
                    {hobby.detail.buttonLabel}
                    <span className="transition-transform group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <div className="mt-4 space-y-5 rounded-xl border border-zinc-200 dark:border-zinc-800 p-5">
                    {hobby.detail.groups.map((group) => (
                      <div key={group.heading}>
                        <p className="text-sm font-medium text-foreground mb-1">
                          {group.heading}
                          {group.note && (
                            <span className="ml-2 text-xs font-normal text-muted">
                              {group.note}
                            </span>
                          )}
                        </p>
                        <ul className="space-y-1">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="text-sm text-muted leading-relaxed"
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </details>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
