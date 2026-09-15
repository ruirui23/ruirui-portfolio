export type HobbyItem = {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
};

export const hobbies: HobbyItem[] = [
  {
    id: "music",
    name: "音楽",
    description:
      "特に邦ロックが好きで、POPSやアニソン、ボカロまで幅広く聴いています。好きなアーティストはsumika、クリープハイプ、Chevon、RADWIMPSなど。ボカロPはOrangestarなどが好きです。ライブやフェスにもよく足を運んでいます。",
  },
  {
    id: "comedy",
    name: "お笑い",
    description:
      "漫才が特に好きです。好きな芸人はエバース、カベポスター、ゴージャス、真空ジェシカなどです。",
  },
  {
    id: "anime",
    name: "アニメ",
    description:
      "好きなアニメは「このすば」「まどマギ」「魔女の旅々」「無職転生」などです。",
  },
  {
    id: "sasuke",
    name: "SASUKE鑑賞",
    description:
      "全ての人生をSASUKEに捧げた人たちがプレイする姿や、出場するまでの背景・絆に感動します。",
  },
];
