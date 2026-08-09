export type NavItem = {
  href: string;
  labelJa: string;
  labelEn: string;
  previewSummary: string;
};

export const navItems: NavItem[] = [
  {
    href: "/about",
    labelJa: "経歴",
    labelEn: "About",
    previewSummary: "学歴・職歴・スキルセットの概要",
  },
  {
    href: "/works",
    labelJa: "作品",
    labelEn: "Works",
    previewSummary: "制作物・活動記録",
  },
  {
    href: "/hobbies",
    labelJa: "趣味",
    labelEn: "Hobbies",
    previewSummary: "日常の趣味・好きなこと",
  },
];
