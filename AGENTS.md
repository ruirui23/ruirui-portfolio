<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# プロジェクト概要

和泉瑠生(ruirui)の個人ポートフォリオサイト。Next.js (App Router) + React + Tailwind CSS v4、TypeScript strict。

## 構成

- `app/` — ページ本体。`layout.tsx` が共通レイアウト、`page.tsx` がトップページ。`about/` `works/` `hobbies/` がセクションページ。
- `data/` — 表示コンテンツを保持する唯一の場所。UIロジックとコンテンツを分離しており、新しい経歴・作品・趣味を追加するときはここだけを編集する。
  - `profile.ts` — 名前・自己紹介・SNSリンクなど静的なプロフィール情報。
  - `about.ts` — `timeline: TimelineEntry[]`。経歴・活動履歴。`date`("YYYY-MM" or "YYYY-MM-DD")で新しい順に自動ソートされる。`tags` は `TIMELINE_TAGS` から選ぶ。
  - `works.ts` — `works: WorkItem[]`。制作物・作品一覧。
  - `hobbies.ts` — `hobbies: HobbyItem[]`。趣味一覧。
- `components/` — `Header.tsx`, `Timeline.tsx`, `SectionPreviewCard.tsx` など。`data/` の内容を描画する側。
- `lib/nav.ts` — ナビゲーション項目(`navItems`)。新しいセクションページを追加するときはここにも登録する。

## コンテンツ追加の原則

- 新しい経歴/作品/趣味を追加するときは、対応する `data/*.ts` の配列にオブジェクトを追加するだけでよい。ページ側(`app/**/page.tsx`)や型定義は変更しない。
- 各データファイル冒頭の `type`/`interface` に厳密に従うこと(必須フィールドを省略しない、`tags` は `TIMELINE_TAGS` の値のみ使用)。
- 一覧が空のときは各ページに「◯◯を追加してください」というプレースホルダーが出る仕様なので、`data/*.ts` が空でもビルド・表示は壊れない。

## スタイリング

- Tailwind CSS v4(`app/globals.css` の `@theme inline` でカスタムトークン定義)。
- カラーは `bg-background` `text-foreground` `text-muted` を使う(ライト/ダーク自動切り替え、`prefers-color-scheme` 依存)。生の hex 値をコンポーネントに直接書かない。
- フォントは日本語(Noto Sans JP)と英語(Inter)を CSS 変数で切り替え。

## コマンド

- `npm run dev` — 開発サーバー
- `npm run build` — 本番ビルド
- `npm run lint` — ESLint

## 利用可能な Claude Code スキル

- `add-content` — `data/*.ts` への経歴・作品・趣味の追加を定型化。
- `next-docs-check` — このリポジトリの Next.js が学習データと異なる可能性がある前提で、コードを書く前に `node_modules/next/dist/docs/` を確認させる。
<!-- END:nextjs-agent-rules -->
