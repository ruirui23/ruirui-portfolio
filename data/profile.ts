export interface SnsLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  bio: string;
  email?: string;
  avatarUrl?: string;
  snsLinks: SnsLink[];
}

export const profile: Profile = {
  name: "和泉瑠生",
  bio: "福岡工業大学 情報工学部 情報工学科3年(28卒)\n情報技術研究部(じょぎ)所属(2025年度代表)\nWebフロントエンドを軸にハッカソンやインターンを通して幅広い技術を勉強中です。\n作る側・運営する側の両方を知る広い視点を活かし、単に要件を満たすだけでなく、チームや事業全体に貢献できるエンジニアとして活躍したいです。",
  email: "kanatata828@gmail.com",
  snsLinks: [
    { label: "GitHub", href: "https://github.com/ruirui23" },
    { label: "X", href: "https://x.com/aur26828" },
  ],
};
