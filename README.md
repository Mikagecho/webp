# WebP Converter

シンプルで美しい、ブラウザベースのJPG to WebP変換ツール

![WebP Converter](https://placehold.co/800x400/6366f1/ffffff?text=WebP+Converter)

## 特徴

- 🖼️ **ドラッグ&ドロップ対応** - 簡単にJPG画像をWebPに変換
- 🔒 **完全クライアントサイド処理** - 画像はサーバーにアップロードされません
- 🎨 **プレミアムデザイン** - ダークテーマとグラスモーフィズム効果
- ⚙️ **品質調整** - 1-100%の範囲で変換品質を調整可能
- 📦 **軽量化** - 平均60%以上のファイルサイズ削減

## デモ

[Live Demo](https://mikagecho.github.io/canvas/webp.html)

## 使い方

### オンラインで使用

1. [デモページ](https://mikagecho.github.io/canvas/webp.html)にアクセス
2. JPG画像をドラッグ&ドロップ、または「ブラウズ」をクリックして選択
3. 品質スライダーで変換品質を調整（デフォルト: 80%）
4. 変換が完了したら「ダウンロード」ボタンをクリック

### ローカルで実行

#### 必要な環境

- [Node.js](https://nodejs.org/) (v14以上推奨)

#### インストール

```bash
# リポジトリをクローン
git clone https://github.com/your-username/webp-converter.git

# ディレクトリに移動
cd webp-converter

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:5173/` を開きます。

#### Windowsユーザー向け簡単起動

`起動.bat` をダブルクリックするだけで開発サーバーが起動します。

## ビルド

```bash
# 本番用ビルド
npm run build

# ビルドをプレビュー
npm run preview
```

ビルドされたファイルは `dist/` フォルダに出力されます。

## 技術スタック

- [Vite](https://vitejs.dev/) - 高速ビルドツール
- Vanilla JavaScript - フレームワーク不要
- HTML5 Canvas API - 画像変換処理
- CSS3 - グラスモーフィズムとアニメーション

## プライバシー

このツールは**完全にクライアントサイド**で動作します。画像はブラウザのメモリ内でのみ処理され、サーバーへのアップロードは一切行われません。変換処理はすべてあなたのデバイス上で完結します。

## ライセンス

MIT License - 自由に使用・改変・配布できます。

## 貢献

バグ報告や機能リクエストは [Issues](https://github.com/your-username/webp-converter/issues) へお願いします。

プルリクエストも歓迎します！

---

Made with ❤️ by [Your Name]
