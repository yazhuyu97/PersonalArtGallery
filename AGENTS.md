# AGENTS.md — Personal Art Gallery

本文件是 Personal Art Gallery 專案的主要 AI 開發規範。所有 AI Coding Agent 在修改程式碼前，必須先閱讀並遵守本文件。

---

## 1. 專案目標

建立一個以個人繪畫作品為核心的作品展示網站，讓訪客能瀏覽手繪與電繪作品、依年份及作品類型篩選，並進入單件作品的詳細介紹頁。

### 核心功能

- 首頁與 Featured Works 精選作品區。
- Traditional Art（手繪）與 Digital Art（電繪）分類入口。
- Gallery 完整作品集與篩選、排序功能。
- 共用的 Artwork Detail 作品詳細介紹頁。
- Lightbox 圖片檢視功能。
- About Me 個人介紹頁。
- 桌面、平板及手機響應式版面。
- 支援 GitHub Pages 靜態網站部署。

### 專案設計原則

1. 作品圖片與作品本身是頁面視覺主角。
2. 保持日系、溫暖、文藝、簡潔的作品集風格。
3. 作品資料與 HTML、CSS、JavaScript 分離，以 JSON 管理。
4. 新增作品時，原則上只需新增圖片及 JSON 資料，不應重寫展示程式。
5. 優先延續現有架構，採取最小幅度修改。

---

## 2. 技術規範

### 使用技術

- HTML5
- CSS3
- 原生 JavaScript（Vanilla JavaScript）
- JSON
- Git / GitHub
- GitHub Pages

### 限制

- 不使用 React、Vue、Angular 等前端框架。
- 不以 Node.js 作為網站執行環境。
- 不任意加入大型套件、建置工具或外部 API。
- 優先使用瀏覽器原生 API。
- 如確實需要新增第三方依賴，先說明原因、用途及替代方案。

---

## 3. 視覺與 UI 規範

### 設計方向

**Japanese Pastel Art Gallery**：日系、柔和粉彩、溫暖文藝、簡約留白。

### 色彩方向

全站優先沿用既有 CSS Variables，不要在各頁面重複硬編碼顏色。整體以奶油白、淺粉、淺綠、米色及深灰棕為主。

參考色票（若專案已有不同設定，以現有設定為準）：

```css
:root {
  --color-background: #F8F5EF;
  --color-surface: #FFFDF9;
  --color-pink: #F6DDE3;
  --color-pink-light: #FBECEF;
  --color-green: #DCE9D9;
  --color-green-dark: #A8B99F;
  --color-beige: #EBDCCB;
  --color-text: #514944;
  --color-text-muted: #8B8178;
  --color-border: #E8E1D8;
  --color-white: #FFFFFF;
}
```

### UI 原則

- 保持足夠留白、清楚的資訊層級及一致的間距。
- 作品展示優先使用 Grid/Flexbox。
- 圓角、陰影及 Hover 效果保持輕柔，不使用過度動畫。
- 不使用高飽和色或過多漸層。
- 不得為新增功能擅自重新設計整站。
- 新增 UI 必須沿用既有字體、色彩、按鈕、卡片及導覽列風格。

---

## 4. 頁面與導覽行為

### 4.1 Home（index.html）

首頁包含導覽列、Hero、Traditional Art / Digital Art 分類入口、Featured Works、About 預覽及 Footer。

Featured Works 中每件作品均應可連結至該作品的詳細介紹頁，連結格式應與全站共用的作品詳細頁一致：

```text
artwork.html?id=<作品唯一 ID>
```

### 4.2 Gallery（gallery.html）

Gallery 顯示完整作品清單，作品卡片點擊後必須進入對應作品的詳細介紹頁，不應只開啟圖片 Lightbox。

篩選器依頁面情境顯示：

- Gallery 全部作品：作品類型、創作年份、排序。
- 手繪分類頁／手繪篩選狀態：作品類型固定為手繪，只顯示年份及排序。
- 電繪分類頁／電繪篩選狀態：作品類型固定為電繪，只顯示年份及排序。

### 4.3 Artwork Detail（artwork.html）

手繪與電繪共用同一個作品詳細頁模板。透過 URL query string 的 `id` 取得作品資料：

```text
artwork.html?id=traditional-001
artwork.html?id=digital-001
```

詳細頁可顯示：

- 完整作品圖片
- 作品名稱
- 作品類型（手繪／電繪）
- 創作年份
- 使用媒材（有資料時）
- 作品尺寸（有資料時）
- 作品介紹（有資料時）
- 上一件／下一件作品（若現有功能有提供）
- 返回 Gallery 的連結

**重要：作品詳細資料畫面不得顯示「創作技法」、「技法分類」或 `category` 欄位。** 即使 JSON 保留 `category` 資料供其他內部用途，也不得在詳細頁顯示該欄位或標籤。

若選用欄位沒有資料，應隱藏整個欄位，不得顯示 `undefined`、`null`、空白標籤或多餘分隔符號。

若 URL 缺少 `id`、ID 不存在或資料載入失敗，應顯示清楚且友善的錯誤／空狀態，不得造成整頁 JavaScript 中斷。

### 4.4 About（about.html）

呈現使用者實際提供的個人簡介、創作理念及相關資訊。不得自行捏造姓名、經歷、學歷、作品故事或社群帳號。

---

## 5. 作品資料規範

### 資料來源

作品資料集中管理於：

```text
data/artworks.json
```

圖片路徑依專案現有資料夾及 JSON 實際內容為準，不得假設或擅自搬動圖片。

### 資料格式參考

```json
{
  "artworks": [
    {
      "id": "traditional-001",
      "title": "作品名稱",
      "type": "traditional",
      "year": 2025,
      "medium": "Watercolor",
      "size": "A4",
      "image": "assets/images/artworks/example.jpg",
      "thumbnail": "assets/images/thumbnails/example.webp",
      "description": "作品介紹。",
      "featured": true,
      "alt": "作品圖片替代文字"
    }
  ]
}
```

以上僅為欄位示意。實際修改前必須先檢查目前 `artworks.json` 的欄位名稱及資料格式，不能直接假設與範例完全相同。

### 欄位原則

- `id`：每件作品唯一識別碼。
- `title`：作品名稱。
- `type`：主要作品類型，只使用 `traditional` 或 `digital`。
- `year`：創作年份。
- `image`：原始作品圖片路徑。
- `thumbnail`：縮圖路徑（若有使用）。
- `medium`、`size`、`description`、`featured`、`alt`：依實際需求選用。
- `category` 若存在，僅能依既有資料用途保留；不得將其顯示為作品詳細頁的「創作技法」欄位，也不得自行新增技法篩選 UI。

### 資料保護

- 不得自行修改作品名稱、描述、年份、媒材或尺寸。
- 不得自行推測缺漏資料。
- 不得任意更改既有 ID 或 JSON 欄位名稱。
- 不得刪除作品或覆蓋原始圖片，除非使用者明確要求。
- 修改 JSON 後必須驗證 JSON 語法及所有受影響的圖片路徑。

---

## 6. Gallery、篩選與排序

### 作品卡片

- 作品卡片由 JSON 動態產生，不得將每件作品硬編碼在 HTML。
- 每張作品卡片應能辨識作品 ID，並連到共用詳細頁。
- 首頁 Featured Works 與 Gallery 的卡片連結必須遵循相同的詳細頁 URL 規則。
- 不得因為卡片位於不同頁面，就產生不同的作品詳細頁解析方式。

### 篩選

- 全站不顯示「創作技法」篩選器。
- Gallery 可篩選全部／手繪／電繪及年份。
- 若有排序選項，必須實際改變作品排列。
- 篩選條件可組合使用，切換條件後應同步更新作品清單及數量。
- 沒有符合條件的作品時，顯示友善空狀態。
- 不得只修改篩選器外觀而未實作資料篩選。

### 排序

若網站提供排序功能，至少確保各選項有實際效果，例如年份新到舊、年份舊到新及原始順序。排序時不得修改原始作品資料陣列；應使用副本處理。

---

## 7. 詳細頁導向與 Lightbox 規範（重要）

本專案同時具有「作品詳細介紹頁」及「圖片 Lightbox」，兩者用途不同，必須明確區分。

### 7.1 一般作品卡片

一般作品卡片點擊時，預設行為必須是導向作品詳細介紹頁：

```html
<a href="artwork.html?id=traditional-001">...</a>
```

不可由 Lightbox 的事件監聽器攔截一般作品卡片連結，也不可對一般作品卡片呼叫 `event.preventDefault()`。

### 7.2 Lightbox

只有明確標記為 Lightbox 觸發器的元素，才可以開啟 Lightbox，例如：

```html
<a href="..." data-lightbox>...</a>
```

Lightbox 事件監聽器必須先檢查觸發元素是否具有 `data-lightbox`。未標記的作品卡片連結應保留瀏覽器預設導向行為。

參考邏輯：

```javascript
document.addEventListener('click', event => {
  const trigger = event.target.closest('[data-lightbox]');
  if (!trigger) return;

  // 僅在確認為 Lightbox 觸發器後，才執行 Lightbox 開啟流程。
});
```

如果目前 Lightbox 使用其他明確的觸發選擇器，應沿用並確保不會攔截一般作品卡片連結。

### 7.3 Lightbox 功能

依現有功能支援圖片放大、縮小、全螢幕、上一張／下一張、關閉按鈕、點擊背景關閉及 ESC 關閉。修改 Lightbox 時不得破壞作品詳細頁導向。

---

## 8. JavaScript 與程式品質

- 各 JS 模組維持單一、清楚的責任。
- 沿用現有全域物件、函式及載入順序；修改前先檢查實際定義。
- 不得假設某個 utility function、DOM ID 或 CSS class 存在，必須先查證。
- DOM 元素可能不存在時，應先檢查再操作。
- Fetch JSON 必須處理 HTTP 錯誤、JSON 解析錯誤及空資料。
- 動態插入 HTML 時，對作品名稱、描述等文字進行適當 HTML escaping，避免直接插入未處理的外部文字。
- 事件監聽器不可重複綁定，亦不可攔截不屬於自身功能的操作。
- 不得留下無作用按鈕、未完成事件或只做外觀的假功能。
- 不要為了小型修改而重寫整個 JS 模組。

---

## 9. 檔案與目錄管理

以目前 Repository 的實際目錄為準。可能包含以下檔案：

```text
PersonalArtGallery/
├── AGENTS.md
├── README.md
├── index.html
├── gallery.html
├── artwork.html
├── about.html
├── assets/
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── layout.css
│   ├── components.css
│   ├── gallery.css
│   ├── artwork.css
│   └── responsive.css
├── data/
│   └── artworks.json
└── js/
    ├── main.js
    ├── data.js
    ├── gallery.js
    ├── filter.js
    ├── artwork.js
    ├── lightbox.js
    └── utils.js
```

此為參考結構，不代表每個檔案必然存在。**若目前專案結構與範例不同，必須沿用現有結構，不得為了符合範例而任意搬檔或重建專案。**

檔名使用清楚、一致的英文命名。未經使用者同意，不得任意重新命名、移動或刪除檔案。

---

## 10. GitHub Pages 與路徑

- 網站為靜態網站，部署於 GitHub Pages。
- 優先使用相對路徑，避免使用會指向網域根目錄的 `/css/...`、`/assets/...` 等路徑。
- 所有頁面連結、CSS、JS、JSON 及圖片路徑，都必須考慮 Repository 子路徑。
- 使用 Fetch API 讀取 JSON 時，開發階段必須透過 HTTP Server 執行，不應直接以 `file://` 開啟。
- 可使用 VS Code Live Server 或其他本機 HTTP Server。

---

## 11. 響應式設計、效能與無障礙

### 響應式

- 支援桌面、平板及手機。
- 使用 Grid、Flexbox 及合理斷點。
- 不依賴固定寬度造成手機版溢出。
- 圖片應維持適當比例，不可拉伸變形。
- 導覽列、按鈕及 Lightbox 必須適合觸控操作。
- 不應出現非預期水平捲動。

### 效能

- Gallery 優先載入縮圖，詳細頁再載入原始圖片。
- 可使用 `loading="lazy"` 延遲載入非首屏圖片。
- 避免重複載入資源及不必要 DOM 操作。
- 圖片載入失敗時提供合理替代顯示。

### 無障礙

- 作品圖片提供有意義的 `alt`。
- 使用語意化 HTML。
- 按鈕及連結具有清楚名稱。
- 主要功能可使用鍵盤操作。
- 不只依賴顏色傳達資訊。

---

## 12. AI Agent 工作流程

### 12.1 修改前

1. 閱讀本文件。
2. 檢查目前專案目錄與 Git 狀態。
3. 閱讀本次需求涉及的 HTML、CSS、JS 及 JSON。
4. 確認實際 DOM ID、CSS class、函式名稱、資料欄位及 script 載入順序。
5. 找出問題根因後再提出修改方案。

不得只根據檔名或舊對話猜測程式內容。不得假設先前提供的程式碼已經套用。

### 12.2 修改中

- 採取最小必要修改（minimal changes）。
- 優先保留現有版面、資料、功能及命名。
- 不得任意重寫整站或更換技術架構。
- 不得自行增加使用者未要求的功能。
- 若需求與現有架構衝突，先說明影響及選項，不可默默大幅改造。
- 不得刪除使用者作品或替換原始圖片。

### 12.3 修改後

應檢查：

1. 修改檔案及差異是否符合需求。
2. JavaScript 語法及 Console 錯誤。
3. JSON 是否可正常解析。
4. DOM selector 是否存在。
5. 圖片與資源路徑是否有效。
6. 首頁 Featured Works 是否能進入正確詳細頁。
7. Gallery 全部作品、手繪、電繪是否能進入正確詳細頁。
8. 詳細頁是否正確顯示作品資料，且沒有「創作技法」欄位。
9. Lightbox 是否只由明確觸發器開啟，不攔截一般作品卡片導向。
10. 桌面與手機版是否正常。
11. GitHub Pages 子路徑是否正常。

若無法實際執行瀏覽器測試，必須明確說明「已檢查程式碼但尚未完成瀏覽器實測」，不得宣稱已完全驗證。

### 12.4 回覆格式

完成修改後，簡要回報：

- 修改原因／問題根因。
- 修改了哪些檔案。
- 每個檔案的修改內容。
- 已完成的測試項目。
- 尚未測試或需要使用者確認的項目。

若只需修改少數檔案，不要要求使用者整份重建或覆蓋整個專案。

---

## 13. 回歸測試清單

### 頁面與導覽

- [ ] 首頁正常顯示。
- [ ] Featured Works 每件作品可進入正確詳細頁。
- [ ] Gallery 全部作品正常顯示。
- [ ] Gallery 手繪及電繪分類正常。
- [ ] Gallery 作品卡片點擊後進入詳細頁，而非意外開啟 Lightbox。
- [ ] 手繪及電繪共用詳細頁模板。
- [ ] About 頁面正常。

### 篩選與詳細資料

- [ ] 作品類型篩選正常。
- [ ] 年份篩選正常。
- [ ] 排序功能正常。
- [ ] 詳細頁作品名稱正確。
- [ ] 詳細頁作品類型正確。
- [ ] 詳細頁年份、媒材、尺寸及介紹依資料顯示。
- [ ] 詳細頁不顯示「創作技法」或 `category` 欄位。
- [ ] 不存在的作品 ID 有友善錯誤狀態。

### Lightbox

- [ ] 明確標記的 Lightbox 觸發器可開啟。
- [ ] 一般作品卡片不會被 Lightbox 攔截。
- [ ] 放大／縮小正常（若現有功能提供）。
- [ ] 全螢幕進出正常（若現有功能提供）。
- [ ] ESC 及關閉按鈕正常。
- [ ] 上一張／下一張正常（若現有功能提供）。

### 部署與裝置

- [ ] CSS、JS、JSON 及圖片路徑正常。
- [ ] GitHub Pages 子路徑正常。
- [ ] 桌面版、平板版及手機版正常。
- [ ] 無非預期水平捲動或圖片變形。
