# Personal Art Gallery

依照 `AGENTS.md` 建立的原生 HTML、CSS、JavaScript 個人繪畫作品集起始專案。

## 使用 VS Code 開啟

1. 解壓縮專案 ZIP。
2. 在 VS Code 選擇「檔案 → 開啟資料夾」，選取 `personal-art-gallery`。
3. 安裝並使用 **Live Server** 擴充功能，對 `index.html` 按右鍵選擇 **Open with Live Server**。
4. 請勿直接以 `file://` 開啟，因為作品資料使用 Fetch API 讀取 JSON。

## 新增作品

1. 原始圖片放入 `assets/images/artworks/`。
2. 縮圖放入 `assets/images/thumbnails/`（建議 WebP）。
3. 編輯 `data/artworks.json`，在 `artworks` 陣列新增一筆資料：

```json
{
  "id": "art-001",
  "title": "作品名稱",
  "type": "traditional",
  "category": "watercolor",
  "year": 2025,
  "medium": "Watercolor",
  "size": "A4",
  "image": "assets/images/artworks/art-001.jpg",
  "thumbnail": "assets/images/thumbnails/art-001.webp",
  "description": "作品介紹。",
  "featured": true,
  "alt": "作品圖片替代文字"
}
```

`type` 僅能是 `traditional` 或 `digital`。`category` 是技法分類，兩者不可混用。未提供的媒材、尺寸、年份與描述請勿自行編造。

## 目前功能

- 首頁、作品 Gallery、作品詳細頁、About Me。
- 從 JSON 動態載入作品，不需將作品寫死在 HTML。
- 手繪／電繪、技法、年份組合篩選。
- 原始順序、新到舊、舊到新排序。
- Lightbox：放大縮小、全螢幕、上一張下一張、ESC、方向鍵、背景關閉。
- 桌面、平板、手機響應式版面。
- 使用相對路徑，支援 GitHub Pages 專案子路徑。

## 部署 GitHub Pages

將專案內容推送至 GitHub repository，並在 Settings → Pages 設定部署來源。所有網站資源採相對路徑。部署後請確認 JSON、圖片與各頁面路徑正常。

## 專案目錄

```text
personal-art-gallery/
├── AGENTS.md
├── README.md
├── index.html
├── gallery.html
├── artwork.html
├── about.html
├── assets/
│   ├── images/artworks/
│   ├── images/thumbnails/
│   ├── images/profile/
│   ├── icons/
│   └── fonts/
├── css/
├── js/
└── data/artworks.json
```
