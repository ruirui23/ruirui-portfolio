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
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
