export type WorkLinks = {
  /** デモ・プレイURLなど */
  site?: string;
  /** GitHubリポジトリ */
  github?: string;
  /** 紹介動画 */
  video?: string;
  /** 作品説明・投稿ページなどの記事 */
  article?: string;
};

export type WorkItem = {
  id: string;
  title: string;
  /** 開発期間の表示用文字列 */
  period: string;
  description: string;
  /** チーム開発時の自分の役割(任意) */
  role?: string;
  /** 使用技術タグ */
  tags?: string[];
  imageUrl?: string;
  links: WorkLinks;
};

export const works: WorkItem[] = [
  {
    id: "chebusitu",
    title: "チェブラーシカから部室を守れ！",
    period: "2024/10/26〜2024/10/27(約1週間)",
    description:
      "初めてのハッカソンで作った作品。チェブラーシカからじょぎの部室を守るゲーム。",
    role: "ホーム画面、第2ステージを担当",
    tags: ["Unity"],
    links: {
      site: "https://unityroom.com/games/chebusitu",
      article: "https://topaz.dev/projects/3e264ccb22b7f5f0cc15",
    },
  },
  {
    id: "ai-character-maker",
    title: "AIキャラメーカー",
    period: "2025/02/15〜2025/02/16(約1週間)",
    description:
      "技育CUMPハッカソンで作った作品。プロフィールを入力するとAIイラスト・アイコンとキャラのプロフィールを生成し、そのキャラとトーク・シェアができるアプリ。",
    role: "アプリのボトムナビゲーション遷移、ホーム画面、お気に入り画面を担当",
    tags: ["Flutter"],
    links: {
      github: "https://github.com/jyogi-web/geek2024_vol.22_1",
    },
  },
  {
    id: "kitakyu-shukatsu",
    title: "北九就",
    period: "2025/03/08〜2025/03/14(2週間)",
    description: "DIG IT KITAQで作った作品。北九州向けの就活情報アプリ。",
    role: "アプリ全体のフロント、ログイン機能を担当",
    tags: ["Flutter", "Firebase"],
    links: {
      github: "https://github.com/DIGIT-KITAQ-Flutter/kitakyu-shukatu",
    },
  },
  {
    id: "air-guitar",
    title: "エアギター",
    period: "2025/02/23〜2025/02/24(1週間)",
    description:
      "技育CUMPハッカソンで作った作品。スマートフォン(左手)でタップ、ジョイコン(右手)を振るとギターの音が鳴るアプリ。努力賞を受賞。",
    role: "スマホのタップ画面を担当",
    tags: ["React", "TypeScript"],
    links: {
      github: "https://github.com/KOU050223/AirGuitar",
    },
  },
  {
    id: "mochimochi-maker",
    title: "もちもちMAKER",
    period: "2025/02/18〜2025/02/19(2日間)",
    description:
      "福岡学生ゲームジャムで作った作品。餅をついて、餡子を入れて、はっぱで包んで、餅を仕分けるゲーム。最優秀賞を受賞。",
    role: "1ステージめの餅をつくSTAGEを担当",
    tags: ["Unity"],
    links: {
      site: "https://unityroom.com/games/motimotimaker",
      video: "https://youtu.be/Kilmw2sIfqQ",
    },
  },
  {
    id: "firetail",
    title: "firetail",
    period: "2025/05/24〜2025/05/25(約10日)",
    description:
      "じょぎハッカソンで作った作品。ヒノアラシを題材にした起承転結のあるノベルゲーム。",
    role: "承のゲームシーンと全体の修正を担当",
    links: {
      article: "https://topaz.dev/projects/68aef69585ce0a0e2edc",
      video: "https://www.youtube.com/watch?v=A_jhrQyBLDE",
    },
  },
  {
    id: "band-brothers-2",
    title: "バンドブラザー２",
    period: "2025/06/21〜2025/06/22(2週間)",
    description:
      "自分だけの音ゲーを製作できるアプリ。ローカルとネット通信の対戦機能で遊べる。ハックツハッカソンギガノトカップで優秀賞を受賞。",
    role: "音ゲーや譜面作成のフロント、ログイン、譜面楽曲の保存などを担当",
    links: {
      article: "https://topaz.dev/projects/1b35d74c2c47694f4ccf",
    },
  },
  {
    id: "yakyuban-koushien",
    title: "3D野球盤-KOUSHIEN",
    period: "2025/08/27〜2025/08/28(1週間)",
    description:
      "野球盤をWeb上で再現したアプリ。スペースキー・ジョイコン・VR上でバットを振って遊べる。オンラインのProgateハッカソンで最優秀賞を受賞。",
    role: "React上でジョイコン接続、ホーム画面からの画面遷移を担当",
    tags: ["React"],
    links: {
      article: "https://topaz.dev/projects/203a12f0e3847d71c3cd",
    },
  },
  {
    id: "giji-marathon",
    title: "疑似マラソン",
    period: "2025/09/16〜2025/09/18(1週間)",
    description:
      "VRをつけて24時間疑似マラソンをするアプリ。モバイルで位置情報を取得し、取得したコースをVR上で走れる。座標を取得すれば好きな景色で走れる。ハックツハッカソンイクチオカップで制作。",
    role:
      "React上でストリートビュー表示、ホーム画面からの画面遷移、ログインTimeなどをWebSocketでバックエンドと接続する部分を担当",
    tags: ["React", "WebSocket"],
    links: {
      article: "https://topaz.dev/projects/2dfc326b6e2a50b733d9",
      video: "https://youtu.be/XHYZyYtZBRo",
    },
  },
  {
    id: "laratter",
    title: "Laratter",
    period: "2025年9月(週1〜2で開発)",
    description:
      "Laravelで作成した簡易的なSNSアプリケーション。マイページやTweet作成、検索、一覧、AIチャット機能などがある。ネクストエンジニアカタパルトphase1で制作。",
    role: "個人開発のため全て担当",
    tags: ["Laravel"],
    links: {
      github: "https://github.com/ruirui23/laratter",
      video: "https://www.youtube.com/watch?v=NN4V1XPi1Sc",
    },
  },
  {
    id: "dame-ningen-do",
    title: "今日のダメ人間度管理アプリ",
    period: "2025/10/12〜2025/10/26(2週間)",
    description:
      "ユーザーが自身の「ダメ人間エピソード」を投稿し、他者からの「いいね」によってランキング化されるWebアプリケーション。ネクストエンジニアカタパルトphase2で制作。",
    role:
      "ユーザー一覧タップ時のプロフィールページ表示、プロフィールのカレンダー機能、ダメ人間診断と履歴保存、ランク機能、過去のTDN一覧表示、検索機能、ディレクトリ構造の整理を担当",
    links: {
      github: "https://github.com/otonasi-muonn/dameninngenF",
    },
  },
  {
    id: "sterog",
    title: "ステログ",
    period: "2025/09/24〜2026/01/21(4か月)",
    description:
      "ツイート感覚でできる日記記録とゲーム要素を組み合わせたライフログアプリ。日々の出来事を記録すると、その内容に基づいて4つのステータスパラメータが変動する。大学のプロジェクト型演習という講義で、開発初心者4人を含む6人チームで制作。",
    role: "PM兼フロントエンド担当。開発環境の整備、Gemini APIを用いた日記投稿・パラメータ分析の実装を担当",
    tags: ["Gemini API"],
    links: {
      github: "https://github.com/ruirui23/project2025_team3",
      video: "https://youtu.be/Ktct94lFyF8",
    },
  },
  {
    id: "v-chat",
    title: "V-Chat",
    period: "2025/07/12〜2025/12/13(開発合計約3週間)",
    description:
      "チャレキャラで制作し最終発表に進出。EDD2025福岡でGMOペパボ賞を受賞。3Dモデル(V体)を介して、オンラインで気軽にビデオ通話ができるWebアプリケーション。",
    role: "掲示板機能の実装を担当",
    links: {
      github: "https://github.com/KOU050223/V-Chat",
    },
  },
  {
    id: "promotion-simulator",
    title: "プロモーションシュミレーター",
    period: "2025/11/29〜2026/01/16(1か月)",
    description:
      "広告を出したいがどの分野にどれくらいの資金を割けばいいか分からず困っている企業向けの、広告種類に対する資金分配シミュレーション機能。実施結果に対するクチコミ投稿機能も備える。",
    role: "PM担当。DB設計を含めた資金分配シミュレーション機能を担当",
    links: {
      github: "https://github.com/Gypsophila1912/promotion_simulator",
    },
  },
];
