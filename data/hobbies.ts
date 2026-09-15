export type HobbyDetailGroup = {
  heading: string;
  note?: string;
  items: string[];
};

export type HobbyDetail = {
  buttonLabel: string;
  groups: HobbyDetailGroup[];
};

export type HobbyItem = {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  /** ボタンを押すと開く詳細情報(任意) */
  detail?: HobbyDetail;
};

export const hobbies: HobbyItem[] = [
  {
    id: "music",
    name: "音楽",
    description:
      "特に邦ロックが好きで、POPSやアニソン、ボカロまで幅広く聴いています。好きなアーティストはsumika、クリープハイプ、Chevon、RADWIMPSなど。ボカロPはOrangestarなどが好きです。ライブやフェスにもよく足を運んでいます。",
    detail: {
      buttonLabel: "今までのライブ参戦一覧",
      groups: [
        {
          heading: "2024年",
          items: ["福岡musicフェスin2024"],
        },
        {
          heading: "2025年",
          items: [
            "福岡musicフェスin2025",
            "バンドリ 分かれ道のその先へ(4/25)",
            "WILDBUNCH FEST.2025(8/22)",
            "TrySail(9/7)",
            "Chevon × 須田景凪(11/6)",
            "キュウソネコカミ × 超能力戦士ドリアン(12/6)",
          ],
        },
        {
          heading: "2026年",
          note: "チケット支払い済のLIVE",
          items: [
            "1/25(日) 福フェス PayPayドーム",
            "1/31(土) ユニゾン 福岡サンパレス",
            "2/6(金) ヤバT×Hump Back Zepp福岡",
            "3/29(日) ずとまよ マリンメッセ福岡",
            "4/19(日) CLANQUEEN BEATSTATION",
            "4/25(土) TRIANGLE ももち浜",
            "5/2(土) ソフトバンク野球観戦 PayPayドーム",
            "5/16(土) yama Zepp福岡",
            "5/17(日) NELKE DRUM LOGOS",
            "5/18(月) クリープハイプ Zepp福岡",
            "5/21(木) Aooo Zepp福岡",
            "5/29(金) ドリアン DRUM LOGOS",
            "6/14(日) Chevon Zepp福岡",
            "7/4(土) sumika 福岡サンパレス",
            "7/19(日) チコはに DRUM LOGOS",
            "7/27(月) RADWIMPS Zepp福岡",
            "8/1(土) NUMBER SHOT2026 PayPayドーム",
            "8/2(日) NUMBER SHOT2026 PayPayドーム",
            "8/5(水) ヨルシカ マリンメッセ福岡",
            "8/25(火) CUTIE STREET 日本武道館",
            "8/29(土) Roselia 有明アリーナ",
            "9/12(土) ROCK IN JAPAN FES 2026 千葉市蘇我スポーツ公園",
            "9/27(日) TOKYO CALLING 渋谷",
            "10/3(土) rockin'star Carnival 国営ひたち海浜公園",
            "10/8(木) 04 Limited Sazabys Zepp福岡",
            "10/10(土) JUNE ROCK FESTIVAL 2026 川崎 昼の部",
            "10/12(月) RAISE A SUILEN 有明アリーナ",
            "10/19(月) ヤバイTシャツ屋さん Zepp福岡",
            "10/20(火) sumika Zepp福岡",
            "10/28(水) CUTIE STREET サンパレス福岡(チケット抽選待ち)",
            "11/6(金) 忘れられねえよ OP's(チケット抽選待ち)",
            "11/12(金) OddRe: DRUM Be-1",
            "11/26(木) WurtS DRUM LOGOS",
            "11/27(金) 米津玄師 マリンメッセ福岡",
            "11/28(土) YOASOBI PayPayドーム",
            "12/5(土) クレイジーウォウウォ!! OP's",
          ],
        },
      ],
    },
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
