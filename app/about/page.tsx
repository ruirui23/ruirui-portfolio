import type { Metadata } from "next";
import { timeline } from "@/data/about";
import TimelineItem from "@/components/TimelineItem";

export const metadata: Metadata = {
  title: "経歴 | ruirui",
  description: "学歴・職歴・スキルセットの概要",
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <p className="text-xs font-medium tracking-widest text-muted uppercase mb-2">
        About
      </p>
      <h1 className="text-3xl font-medium tracking-tight text-foreground mb-16">
        経歴
      </h1>

      {timeline.length === 0 ? (
        <p className="text-sm text-muted">経歴を追加してください。</p>
      ) : (
        <div>
          {timeline.map((item, i) => (
            <TimelineItem key={i} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}
