export interface SnsLink {
  label: string;
  href: string;
}

export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  email?: string;
  avatarUrl?: string;
  snsLinks: SnsLink[];
}

export const profile: Profile = {
  name: "和泉瑠生",
  tagline: "ひとことで自己紹介",
  bio: "福岡工業大学情報工学部情報工学科3年の和泉瑠生です。",
  email: "your@email.com",
  snsLinks: [
    { label: "GitHub", href: "https://github.com/ruirui23" },
    { label: "X", href: "https://x.com/" },
  ],
};
