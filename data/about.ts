export type TimelinePeriod = {
  start: string;
  end?: string;
  organization: string;
  role: string;
  description: string;
  tags?: string[];
};

export const timeline: TimelinePeriod[] = [
  // 例:
  // {
  //   start: "2023-04",
  //   organization: "○○大学",
  //   role: "学部生",
  //   description: "専攻の概要など。",
  //   tags: ["Python", "機械学習"],
  // },
];
