---
name: next-docs-check
description: Verify Next.js API usage/conventions against the bundled docs before writing or editing Next.js code in this repo (routing, data fetching, caching, metadata, config, etc). Use before any non-trivial Next.js code change, since this project's Next.js version may differ from training data (see AGENTS.md).
---

# next-docs-check

このリポジトリの Next.js は学習データの前提と異なる可能性がある(`AGENTS.md` 参照)。App Router のファイル規約・データ取得・キャッシュ・metadata API などに触れるコードを書く前に、必ず `node_modules/next/dist/docs/` を確認する。

## 手順

1. まず `package.json` でインストール済みの Next.js のバージョンを確認する(`node_modules/next/package.json` の `version`)。
2. これから書く/変更するコードに関係するトピックを特定し、対応するドキュメントを読む。目安:
   - ルーティング・ファイル規約(`page.tsx`, `layout.tsx`, `route.ts` など) → `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/`
   - データ取得・キャッシュ・revalidate → `node_modules/next/dist/docs/01-app/01-getting-started/06-fetching-data.md`, `08-caching.md`, `09-revalidating.md`
   - メタデータ/OGP → `node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md`
   - Server/Client Components の使い分け → `05-server-and-client-components.md`
   - 設定ファイル(`next.config.ts`) → `node_modules/next/dist/docs/01-app/03-api-reference/05-config/`
   - 上記以外は `node_modules/next/dist/docs/01-app/03-api-reference/index.md` や `node_modules/next/dist/docs/01-app/02-guides/index.md` から該当ページを探す。
3. ドキュメントに記載の API・命名・非推奨情報を優先し、学習データにある古い知識(例: `getServerSideProps` 的な Pages Router の書き方、旧バージョンの `next/image` API など)で書かない。
4. ドキュメントと実装意図が食い違う、または該当ドキュメントが見つからない場合はユーザーに確認してから進める。
