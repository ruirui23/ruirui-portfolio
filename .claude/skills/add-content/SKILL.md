---
name: add-content
description: Add a new entry to this portfolio's content data (経歴/timeline, 作品/works, or 趣味/hobbies) in data/*.ts. Use when the user asks to add a new work, hobby, timeline/career entry, or otherwise wants new portfolio content added.
---

# add-content

このリポジトリのコンテンツは `data/*.ts` の配列に一元管理されている。UI(`app/**/page.tsx`, `components/`)は編集しない — データを追加するだけで反映される。

## 手順

1. 追加対象のファイルを特定する。
   - 経歴・活動 → `data/about.ts` の `timeline` 配列(型: `TimelineEntry`)
   - 作品・制作物 → `data/works.ts` の `works` 配列(型: `WorkItem`)
   - 趣味 → `data/hobbies.ts` の `hobbies` 配列(型: `HobbyItem`)
2. 対象ファイル冒頭の型定義を読み、必須フィールドを確認する。
3. ユーザーから受け取った情報を型に沿ったオブジェクトに整形して配列に追加する。
   - 情報が不足している場合(必須フィールドが埋まらない)はユーザーに確認する。推測で埋めない。
   - `about.ts` の `tags` は必ず `TIMELINE_TAGS` に定義済みの値から選ぶ。新しいタグが必要なら `TIMELINE_TAGS` への追加要否をユーザーに確認する。
   - `about.ts` の `date` は `"YYYY-MM"` または `"YYYY-MM-DD"`。配列内の並び順は気にしなくてよい(表示側で日付順に自動ソートされる)。
   - 既存エントリの文体・粒度(である調/ですます調、説明の長さ)に合わせる。
   - `id` を持つ型(`WorkItem`, `HobbyItem`)は既存 `id` と衝突しない kebab-case を割り当てる。
4. 追加後、`npm run lint` を実行して型・構文エラーがないことを確認する。
