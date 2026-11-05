# AGENTS.md

# Personal Art Gallery --- AI Development Guidelines

## 1. Project Overview

### 1.1 Project Name

Personal Art Gallery

### 1.2 Project Purpose

建立一個個人繪畫作品展示網站，用於展示、分類及管理個人繪畫創作。

網站以作品展示為核心，提供清楚的瀏覽體驗，讓訪客可以依照作品類型、創作技法及年份瀏覽作品，並查看個別作品的詳細資訊。

### 1.3 Core Features

網站應具備以下功能：

1.  個人藝術作品首頁。
2.  手繪（Traditional Art）與電繪（Digital Art）分類。
3.  作品展示 Gallery。
4.  作品分類與篩選功能。
5.  作品詳細介紹頁面。
6.  圖片放大與全螢幕瀏覽。
7.  支援桌面、平板及手機裝置。
8.  個人介紹 About Me。
9.  GitHub Pages 靜態網站部署。

### 1.4 Project Principles

-   以作品本身作為網站的主要視覺焦點。
-   保持簡潔、清新、具有日系藝術感的設計。
-   使用模組化程式架構，方便未來維護。
-   作品資料與前端程式分離。
-   新增作品時，不應需要修改 Gallery 的主要程式碼。
-   優先使用原生 HTML、CSS 與 JavaScript。

------------------------------------------------------------------------

## 2. Technology Stack

### 2.1 Required Technologies

  Technology                Purpose
  ------------------------- ----------------------
  HTML5                     網頁結構
  CSS3                      網頁樣式與響應式排版
  JavaScript (Vanilla JS)   網站互動與功能
  JSON                      作品資料管理
  GitHub                    原始碼版本管理
  GitHub Pages              靜態網站部署

### 2.2 Development Restrictions

-   使用 HTML、CSS、原生 JavaScript。
-   不使用 React、Vue、Angular 等前端框架。
-   不使用 Node.js 作為網站執行環境。
-   不引入不必要的大型第三方套件。
-   優先使用原生 JavaScript API。
-   若需要第三方函式庫，必須先確認其必要性。
-   保持程式碼簡單、清楚且容易維護。

### 2.3 Browser Compatibility

網站應支援：

-   Google Chrome
-   Microsoft Edge
-   Safari
-   Firefox

------------------------------------------------------------------------

## 3. Design Guidelines

### 3.1 Design Direction

網站採用：

**Japanese Pastel Art Gallery**

設計定位：

-   Japanese Style（日系風格）
-   Soft Pastel Colors（柔和粉彩）
-   Minimalist Layout（簡約排版）
-   Artistic Portfolio（個人藝術作品集）
-   Warm and Cozy Atmosphere（溫暖、清新的視覺氛圍）

整體視覺應具有日系插畫作品集的感覺，而不是傳統美術館或商業電商網站。

### 3.2 Color Palette

全站應統一使用 CSS Variables 管理顏色。

``` css
:root {
  /* Background */
  --color-background: #F8F5EF;
  --color-surface: #FFFDF9;

  /* Pastel Pink */
  --color-pink: #F6DDE3;
  --color-pink-light: #FBECEF;

  /* Pastel Green */
  --color-green: #DCE9D9;
  --color-green-dark: #A8B99F;

  /* Neutral Colors */
  --color-beige: #EBDCCB;
  --color-text: #514944;
  --color-text-muted: #8B8178;
  --color-border: #E8E1D8;

  /* UI */
  --color-white: #FFFFFF;
  --color-shadow: rgba(81, 73, 68, 0.08);
}
```

### 3.3 Color Usage

  Color      Usage
  ---------- --------------------------
  奶油白     網站主要背景
  淺粉色     手繪分類、裝飾、按鈕
  淺綠色     電繪分類、裝飾、互動元素
  米色       卡片背景及輔助區塊
  深灰棕色   標題與主要文字
  淺灰色     分隔線與次要資訊

設計原則：

-   不使用高飽和度顏色。
-   不使用過多漸層。
-   保持足夠留白。
-   避免過度裝飾。
-   粉色與綠色應保持柔和。
-   作品圖片應比 UI 裝飾更醒目。

### 3.4 Typography

字體設計應符合日系清新風格。

建議：

-   中文：Noto Sans TC。
-   英文：使用簡潔的 Sans-serif 字體。
-   標題可以搭配較有特色的襯線字體。
-   Logo 可使用手寫感字體，但必須維持可讀性。

字體應統一管理，避免不同頁面出現不一致的字體風格。

### 3.5 Layout Guidelines

-   使用簡潔的區塊式排版。
-   保持適當的區塊間距。
-   作品展示優先使用 Grid Layout。
-   圖片比例應保持一致或依作品特性設定。
-   卡片圓角採用柔和設計。
-   Hover 效果應自然、輕微。
-   不使用過度複雜的動畫。

------------------------------------------------------------------------

## 4. Website Structure

### 4.1 Main Pages

網站主要包含以下頁面：

  Page             Description
  ---------------- ------------------------
  Home             首頁與精選作品
  Gallery          完整作品展示與分類篩選
  Artwork Detail   個別作品詳細介紹
  About Me         個人介紹
  Contact          聯絡資訊與社群連結

### 4.2 Home Page

首頁應包含：

1.  Header
    -   Logo
    -   Home
    -   Gallery
    -   About Me
    -   Contact
2.  Hero Section
    -   個人作品集主標題。
    -   簡短介紹。
    -   日系藝術風格主視覺。
    -   前往 Gallery 的按鈕。
3.  Art Categories
    -   Traditional Art（手繪）
    -   Digital Art（電繪）
4.  Featured Works
    -   精選作品。
    -   顯示作品縮圖。
    -   顯示作品名稱與分類。
    -   可連結至作品詳細頁面。
5.  About Preview
    -   簡短個人介紹。
    -   前往 About Me 的連結。
6.  Footer
    -   社群連結。
    -   Copyright。
    -   其他聯絡資訊。

### 4.3 Gallery Page

Gallery 是網站的核心頁面。

必須提供：

-   全部作品。
-   手繪作品。
-   電繪作品。
-   依照技法分類。
-   依照創作年份篩選。
-   作品數量顯示。
-   作品卡片展示。

篩選功能必須實際運作，不可以只有視覺按鈕而沒有對應邏輯。

### 4.4 Artwork Detail Page

個別作品頁面應顯示：

-   完整作品圖片。
-   作品名稱。
-   作品類型。
-   創作技法。
-   創作年份。
-   使用媒材。
-   作品尺寸（如適用）。
-   作品介紹。
-   上一件作品。
-   下一件作品。
-   返回 Gallery。

若資料欄位不存在，應妥善隱藏對應資訊，不應顯示 undefined、null
或空白標籤。

### 4.5 About Me Page

個人介紹頁面可包含：

-   個人簡介。
-   繪畫創作經歷。
-   創作理念。
-   喜歡的繪畫風格。
-   社群平台連結。

尚未提供的個人資訊不得自行編造。

------------------------------------------------------------------------

## 5. Artwork Data Management

### 5.1 Data Management Principle

作品資料應與 HTML、CSS、JavaScript 分離。

第一版使用 JSON 管理作品資訊。

資料檔案：

`data/artworks.json`

作品圖片存放於：

`assets/images/artworks/`

作品縮圖存放於：

`assets/images/thumbnails/`

新增作品時，只需要：

1.  將作品圖片放入指定資料夾。
2.  將縮圖放入指定資料夾。
3.  在 artworks.json 新增作品資料。
4.  網站應自動讀取並顯示新作品。

不應因為新增作品而需要修改 Gallery 的主要程式碼。

### 5.2 Artwork Data Structure

作品資料統一使用以下格式：

``` json
{
  "artworks": [
    {
      "id": "art-001",
      "title": "Spring Memory",
      "type": "traditional",
      "category": "watercolor",
      "year": 2025,
      "medium": "Watercolor",
      "size": "A4",
      "image": "assets/images/artworks/art-001.jpg",
      "thumbnail": "assets/images/thumbnails/art-001.webp",
      "description": "作品介紹。",
      "featured": true,
      "alt": "日系風格水彩繪畫作品"
    }
  ]
}
```

### 5.3 Required Fields

  Field       Description
  ----------- --------------------
  id          作品唯一識別碼
  title       作品名稱
  type        手繪或電繪
  category    繪畫技法或作品類型
  year        創作年份
  image       原始作品圖片路徑
  thumbnail   作品縮圖路徑
  alt         圖片替代文字

### 5.4 Optional Fields

  Field         Description
  ------------- ----------------
  medium        使用媒材
  size          作品尺寸
  description   作品介紹
  featured      是否為精選作品

如果未來有新增需求，可以擴充資料欄位，但必須保持既有資料相容性。

### 5.5 Artwork Type Classification

作品必須分為兩種主要類型：

  Value         Display Name             Description
  ------------- ------------------------ --------------------------
  traditional   Traditional Art / 手繪   紙本、畫布等實體媒材創作
  digital       Digital Art / 電繪       使用數位繪圖工具創作

注意：

`type` 代表作品的主要創作方式，不代表繪畫技法。

### 5.6 Artwork Category Classification

`category` 代表作品的技法或內容類型。

初期可以使用：

  Value              Display Name
  ------------------ ------------------
  sketch             Sketch
  watercolor         Watercolor
  colored-pencil     Colored Pencil
  acrylic            Acrylic
  illustration       Illustration
  character-design   Character Design
  digital-painting   Digital Painting
  concept-art        Concept Art

分類應依實際作品內容彈性擴充。

不得強迫顯示尚未使用的分類。

### 5.7 Important Data Rules

-   每件作品必須有唯一 id。
-   `type` 只能使用 `traditional` 或 `digital`。
-   `category` 不得與 `type` 混用。
-   年份必須使用數字。
-   圖片路徑必須正確。
-   不得覆蓋原始作品圖片。
-   不得自行更改作品名稱或描述。
-   不得自行編造作品媒材及創作年份。
-   JSON 格式必須符合標準語法。
-   新增作品不得影響既有作品資料。

------------------------------------------------------------------------

## 6. File Management

### 6.1 Project Directory

建議使用以下專案架構：

``` text
art-portfolio/
│
├── AGENTS.md
├── README.md
├── index.html
├── gallery.html
├── artwork.html
├── about.html
│
├── assets/
│   ├── images/
│   │   ├── artworks/
│   │   ├── thumbnails/
│   │   └── profile/
│   │
│   ├── icons/
│   └── fonts/
│
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── gallery.css
│   ├── artwork.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── data.js
│   ├── gallery.js
│   ├── filter.js
│   ├── artwork.js
│   ├── lightbox.js
│   └── utils.js
│
└── data/
    └── artworks.json
```

### 6.2 File Responsibilities

  File             Responsibility
  ---------------- --------------------
  index.html       首頁
  gallery.html     作品展示頁
  artwork.html     作品詳細介紹
  about.html       個人介紹
  variables.css    全站色彩及設計變數
  base.css         全站基本樣式
  layout.css       頁面排版
  components.css   共用 UI 元件
  gallery.css      作品展示樣式
  artwork.css      作品詳細頁樣式
  responsive.css   響應式設計
  main.js          全站共用初始化
  data.js          載入作品資料
  gallery.js       作品展示邏輯
  filter.js        分類與篩選邏輯
  artwork.js       作品詳細頁邏輯
  lightbox.js      圖片放大功能
  utils.js         共用工具函式
  artworks.json    作品資料

若專案已有不同但合理的架構，應優先沿用既有架構，不得為了符合上述範例而任意重建整個專案。

### 6.3 File Naming Rules

-   檔案名稱使用英文。
-   使用小寫字母。
-   多個單字使用連字號 `-`。
-   作品圖片使用一致的命名規則。
-   避免使用空格及特殊符號。

例如：

``` text
art-001.jpg
art-002.jpg
art-003.webp
```

------------------------------------------------------------------------

## 7. Code Architecture

### 7.1 Modular Development

JavaScript 必須依照功能拆分。

避免將所有程式碼集中在單一 JavaScript 檔案。

每個模組應具有明確責任。

### 7.2 Data Loading

作品資料透過 Fetch API 載入 JSON。

``` javascript
async function loadArtworks() {
  try {
    const response = await fetch('data/artworks.json');

    if (!response.ok) {
      throw new Error('Failed to load artwork data');
    }

    const data = await response.json();

    return data.artworks || [];
  } catch (error) {
    console.error('Artwork loading error:', error);
    return [];
  }
}
```

注意：

-   不可假設 JSON 一定成功載入。
-   必須處理資料載入失敗。
-   必須處理空作品清單。
-   不得直接操作不存在的 DOM 元素。
-   動態產生的 HTML 必須注意資料安全，避免直接插入未經處理的使用者文字。

### 7.3 Gallery Rendering

Gallery 必須根據 JSON 資料動態產生作品卡片。

不得將每件作品硬編碼在 HTML 中。

新增作品時，應自動出現在 Gallery。

### 7.4 Filtering System

篩選功能至少支援：

1.  All：全部作品。
2.  Traditional：手繪作品。
3.  Digital：電繪作品。
4.  Category：依技法篩選。
5.  Year：依年份篩選。

篩選條件應可以組合使用。

例如：

`手繪 + 水彩 + 2025`

切換分類時，必須同步更新作品數量及展示結果。

如果沒有符合條件的作品，應顯示友善的空狀態訊息。

### 7.5 Sorting

若提供排序功能，應確保：

-   年份由新到舊。
-   年份由舊到新。
-   依資料原始順序顯示。

排序必須實際改變作品排列，不得只有按鈕樣式變化。

------------------------------------------------------------------------

## 8. Image Viewer / Lightbox

### 8.1 Core Requirements

作品圖片必須支援放大瀏覽。

Lightbox 應具備：

-   點擊作品圖片開啟。
-   顯示完整作品圖片。
-   放大與縮小。
-   全螢幕瀏覽。
-   上一張作品。
-   下一張作品。
-   關閉按鈕。
-   點擊背景關閉。
-   ESC 關閉。

### 8.2 Keyboard Controls

  Key   Action
  ----- ---------------
  ESC   關閉 Lightbox
  ←     上一張作品
  →     下一張作品
  \+    放大
  \-    縮小

### 8.3 Interaction Rules

-   開啟 Lightbox 時，應避免背景頁面不必要的捲動。
-   關閉後應恢復原本的捲動狀態。
-   必須提供清楚的關閉按鈕。
-   手機裝置應支援觸控操作。
-   圖片不得超出螢幕可視範圍。
-   全螢幕模式應能正常進入與退出。
-   Lightbox 開啟時應正確管理鍵盤焦點。
-   不可讓圖片放大後無法關閉。

------------------------------------------------------------------------

## 9. Responsive Design

### 9.1 Device Support

網站必須支援：

-   Desktop
-   Laptop
-   Tablet
-   Mobile

### 9.2 Responsive Principles

-   使用 CSS Grid 與 Flexbox。
-   使用相對單位及適當的斷點。
-   不依賴固定寬度設計。
-   圖片必須自動縮放。
-   手機版導覽列應能正常使用。
-   按鈕與互動區域必須方便觸控。
-   文字不得超出容器。
-   不可出現非預期的水平捲動。

### 9.3 Suggested Breakpoints

``` css
/* Mobile */
@media (max-width: 576px) {}

/* Tablet */
@media (min-width: 577px) and (max-width: 992px) {}

/* Desktop */
@media (min-width: 993px) {}
```

實際斷點可依版面需求調整。

### 9.4 Gallery Grid

建議：

  Device    Columns
  --------- ---------
  Mobile    1--2
  Tablet    2--3
  Desktop   3--4

應依作品圖片比例及實際畫面空間調整。

------------------------------------------------------------------------

## 10. Performance & Accessibility

### 10.1 Image Optimization

-   優先使用 WebP 格式作為縮圖。
-   原始作品圖片應保留高解析度。
-   Gallery 使用縮圖，避免一次載入大量原始圖片。
-   使用 Lazy Loading。
-   圖片應設定適當的 width、height 或 aspect-ratio。
-   圖片載入失敗時應有替代顯示方式。
-   不得因壓縮而嚴重損害作品畫質。

### 10.2 Accessibility

-   所有作品圖片應有 alt。
-   按鈕應具有明確功能名稱。
-   使用語意化 HTML。
-   確保文字與背景具有足夠對比。
-   鍵盤可以操作主要功能。
-   不可只依靠顏色傳達分類資訊。

### 10.3 Performance

-   避免不必要的 JavaScript。
-   避免重複載入 CSS。
-   避免大量 DOM 操作。
-   使用適當的圖片尺寸。
-   不得讓圖片載入阻塞主要頁面內容。
-   維持良好的手機瀏覽效能。

------------------------------------------------------------------------

## 11. GitHub Pages Deployment

### 11.1 Deployment Target

網站使用 GitHub Pages 部署。

必須確保網站在 GitHub Pages 的子路徑環境下正常運作。

### 11.2 Relative Path Rules

所有資源路徑應優先使用相對路徑。

正確範例：

``` html
<link rel="stylesheet" href="css/base.css">
<script src="js/main.js" defer></script>
```

錯誤範例：

``` html
<link rel="stylesheet" href="/css/base.css">
```

原因：

GitHub Pages 專案網站通常會部署於：

`https://username.github.io/repository-name/`

使用根目錄絕對路徑可能造成 CSS、JavaScript 及圖片無法載入。

### 11.3 Local Development

由於作品資料使用 Fetch API 載入 JSON，不應直接使用 `file://` 開啟 HTML。

開發時應透過本機 HTTP Server 執行，例如：

-   VS Code Live Server。
-   Python HTTP Server。
-   其他本機開發伺服器。

### 11.4 Deployment Checklist

部署前必須確認：

-   所有 HTML 頁面正常。
-   CSS 路徑正確。
-   JavaScript 路徑正確。
-   JSON 可以成功載入。
-   圖片可以正常顯示。
-   Gallery 篩選正常。
-   Lightbox 正常。
-   手機版排版正常。
-   GitHub Pages 子路徑正常。

------------------------------------------------------------------------

## 12. AI Development Instructions

本章是所有 AI Coding Agent 必須遵守的開發規範。

### 12.1 Before Development

開始任何修改之前，必須：

1.  閱讀本 AGENTS.md。
2.  檢查目前專案目錄。
3.  確認目前有哪些 HTML、CSS、JavaScript 檔案。
4.  確認現有作品資料結構。
5.  確認目前網站已經完成的功能。
6.  找出與本次需求相關的程式碼。

不得在尚未理解現有架構的情況下直接修改。

### 12.2 Preserve Existing Code

修改網站時：

-   優先修改必要的程式碼。
-   保留現有功能。
-   保留既有 CSS Variables。
-   保留現有作品資料。
-   不得任意刪除檔案。
-   不得任意重新命名檔案。
-   不得直接重寫整個網站。
-   不得為了增加新功能而破壞既有功能。

如果發現目前架構不適合新增功能，應先說明問題及建議方案。

### 12.3 Design Consistency

所有新增功能必須遵守：

-   Japanese Pastel Art Gallery 設計方向。
-   淺粉色與淺綠色的配色系統。
-   奶油白背景。
-   簡潔、清新、日系的視覺風格。
-   現有字體、間距、圓角及陰影規範。

不得未經確認就改變整體網站風格。

### 12.4 Functional Integrity

新增功能時：

-   必須確保功能可以實際運作。
-   不得只製作靜態 UI。
-   不得使用沒有作用的按鈕。
-   不得留下無法執行的事件監聽器。
-   不得使用虛構資料冒充真實作品。
-   必須處理錯誤及空資料狀態。

### 12.5 Data Protection

作品圖片及作品資料屬於重要內容。

AI 不得：

-   未經確認刪除作品。
-   覆蓋原始作品圖片。
-   自行修改作品資訊。
-   任意更改 JSON 欄位名稱。
-   將手繪與電繪分類混為一談。

若必須變更資料結構，應保留舊資料的相容性，並說明遷移方式。

### 12.6 Dependency Management

-   優先使用原生 HTML、CSS、JavaScript。
-   不得隨意增加框架。
-   不得隨意增加 npm 套件。
-   不得使用不必要的外部 API。
-   若新增第三方函式庫，必須說明用途及必要性。

### 12.7 Change Management

若涉及以下重大修改，必須先向使用者說明：

-   整體 UI 重新設計。
-   專案資料夾結構變更。
-   技術架構變更。
-   JSON 資料結構變更。
-   大量修改既有程式碼。
-   刪除或替換既有功能。
-   引入大型第三方套件。

### 12.8 After Development

完成修改後必須：

1.  說明修改了哪些檔案。
2.  說明新增了哪些功能。
3.  確認原有功能是否正常。
4.  檢查 JavaScript 是否有錯誤。
5.  檢查 JSON 格式。
6.  檢查圖片路徑。
7.  檢查桌面版及手機版。
8.  確認 GitHub Pages 部署路徑。

如果無法實際執行測試，必須明確告知，不得宣稱已完成測試。

------------------------------------------------------------------------

## 13. Testing Checklist

每次修改完成後，應依照以下項目進行檢查。

### 13.1 Basic Functions

-   [ ] 首頁正常顯示。
-   [ ] 導覽列正常運作。
-   [ ] Gallery 正常顯示。
-   [ ] JSON 正常載入。
-   [ ] 作品圖片正常顯示。
-   [ ] 手繪分類正常。
-   [ ] 電繪分類正常。
-   [ ] 技法篩選正常。
-   [ ] 年份篩選正常。
-   [ ] 多重篩選正常。
-   [ ] 作品詳細頁正常。
-   [ ] 上一件／下一件作品正常。

### 13.2 Lightbox

-   [ ] 點擊圖片可以開啟。
-   [ ] 圖片可以放大。
-   [ ] 圖片可以縮小。
-   [ ] 可以進入全螢幕。
-   [ ] 可以退出全螢幕。
-   [ ] ESC 可以關閉。
-   [ ] 左右方向鍵可以切換作品。
-   [ ] 點擊背景可以關閉。
-   [ ] 手機觸控操作正常。

### 13.3 Responsive

-   [ ] 桌面版排版正常。
-   [ ] 平板版排版正常。
-   [ ] 手機版排版正常。
-   [ ] 圖片沒有變形。
-   [ ] 文字沒有溢出。
-   [ ] 沒有非預期水平捲動。
-   [ ] 按鈕可以正常觸控。

### 13.4 Deployment

-   [ ] GitHub Pages 首頁正常。
-   [ ] CSS 正常載入。
-   [ ] JavaScript 正常載入。
-   [ ] JSON 正常載入。
-   [ ] 圖片路徑正確。
-   [ ] 頁面內部連結正常。

------------------------------------------------------------------------

## 14. Future Development

未來可以依需求逐步擴充：

### Phase 1 --- Basic Portfolio

-   個人首頁。
-   手繪與電繪分類。
-   Gallery。
-   作品詳細介紹。
-   Lightbox。
-   響應式設計。

### Phase 2 --- Enhanced Gallery

-   更多作品篩選條件。
-   作品排序。
-   精選作品。
-   收藏功能（如有需求）。
-   作品標籤。
-   更完整的作品介紹。

### Phase 3 --- Advanced Features

-   個人作品管理後台。
-   作品新增及編輯介面。
-   圖片上傳功能。
-   雲端資料儲存。
-   社群分享。
-   多語言支援。

以上功能皆屬於未來擴充項目，第一階段不應為了預留功能而增加不必要的複雜度。

------------------------------------------------------------------------

## 15. Core Development Principles

所有 AI 開發工具必須遵守以下原則：

1.  **Preserve First**：優先保留既有程式碼及功能。
2.  **Minimal Changes**：只修改本次需求必要的部分。
3.  **Consistent Design**：維持日系粉彩藝術畫廊的視覺風格。
4.  **Data Separation**：作品資料與前端程式分離。
5.  **Modular Architecture**：保持程式碼模組化。
6.  **Responsive First**：所有功能必須兼顧手機與桌面。
7.  **Functional UI**：所有互動元件都必須真正可用。
8.  **Protect Artwork**：不得擅自刪除、覆蓋或修改使用者的原始作品。
9.  **GitHub Pages Compatible**：所有資源路徑必須支援 GitHub Pages。
10. **Explain Changes**：每次修改都必須清楚說明變更內容。

### Final Instruction

本專案的核心目標是建立一個具有日系清新風格的個人繪畫作品展示網站。

在任何開發工作中，請優先考慮：

**作品展示品質 \> 使用者瀏覽體驗 \> 網站功能完整性 \> 程式架構擴充性**

不要為了增加技術複雜度而犧牲網站的簡潔性與作品本身的視覺呈現。

所有開發工作都應以本文件為主要依據。
