import type { Metadata } from "next";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "活動経歴 | ruirui",
  description: "今までの活動の紹介",
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <p className="text-xs font-medium tracking-widest text-muted uppercase mb-2">
        About
      </p>
      <h1 className="text-3xl font-medium tracking-tight text-foreground mb-12">
        経歴
      </h1>

      <Timeline />
    </div>
  );
}
