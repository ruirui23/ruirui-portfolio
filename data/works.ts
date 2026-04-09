export type WorkItem = {
  id: string;
  title: string;
  description: string;
  url?: string;
  repoUrl?: string;
  imageUrl?: string;
  tags?: string[];
  year: number;
};

export const works: WorkItem[] = [
  // 例:
  // {
  //   id: "my-project",
  //   title: "プロジェクト名",
  //   description: "プロジェクトの説明。",
  //   repoUrl: "https://github.com/...",
  //   tags: ["TypeScript", "React"],
  //   year: 2024,
  // },
];
