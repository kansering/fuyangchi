# 富揚琦醫療器材網站 — GitHub Pages 部署指南

## 🎯 這是什麼？
這是你的完整網站，包含首頁、15篇長照SEO文章、3張資訊圖、sitemap等。
上傳到 GitHub 後會自動變成一個免費的網站。

---

## 📋 部署步驟（第一次，約15分鐘）

### 步驟1：註冊 GitHub 帳號
1. 打開 https://github.com
2. 點 "Sign up" 註冊（免費）
3. 用你的 Email 完成驗證

### 步驟2：建立新的 Repository
1. 登入後，點右上角 "+" → "New repository"
2. Repository name 填：`fuyangchi-website`
3. 選擇 **Public**（免費版必須公開）
4. 勾選 "Add a README file"
5. 點 "Create repository"

### 步驟3：上傳網站檔案
1. 進入剛建立的 repository 頁面
2. 點 "Add file" → "Upload files"
3. 把這個資料夾裡的**所有檔案和資料夾**拖進去
   - index.html（首頁）
   - style.css（樣式）
   - main.js（互動）
   - sitemap.xml（SEO）
   - robots.txt（搜尋引擎）
   - CNAME（自訂網域）
   - articles/ 資料夾（15篇文章）
   - images/ 資料夾（資訊圖）
   - ltc.html, products.html 等頁面
4. 點 "Commit changes"

### 步驟4：啟用 GitHub Pages
1. 在 repository 頁面，點 "Settings"（齒輪圖示）
2. 左側選單找到 "Pages"
3. Source 選 "Deploy from a branch"
4. Branch 選 "main"，資料夾選 "/ (root)"
5. 點 "Save"
6. 等待 1-2 分鐘，網站就上線了！

### 步驟5：確認網站
- 你的網站預設網址：`https://你的帳號.github.io/fuyangchi-website/`
- 在 Settings > Pages 可以看到網站連結

---

## 🌐 綁定自訂網域（fuyangchi.com.tw）

### 步驟1：在 GitHub 設定
1. Settings > Pages > Custom domain
2. 輸入 `www.fuyangchi.com.tw`
3. 點 Save
4. 勾選 "Enforce HTTPS"

### 步驟2：在網域商設定 DNS
到你購買 fuyangchi.com.tw 的地方（如中華電信、PChome等），設定以下 DNS 記錄：

**A 記錄（指向 GitHub）：**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME 記錄（www 子域名）：**
```
www → 你的帳號.github.io
```

DNS 設定後需等待 5 分鐘到 24 小時生效。

---

## 🔄 未來更新文章（使用 Claude Code）

安裝 Claude Code 後，在終端機執行：

```bash
# 1. 下載你的網站
git clone https://github.com/你的帳號/fuyangchi-website.git
cd fuyangchi-website

# 2. 啟動 Claude Code
claude

# 3. 告訴 Claude 你要新增文章
# 例如："幫我寫一篇關於電動代步車選購的文章，加到網站上"
# Claude 會自動使用 fuyangchi-content skill 來撰寫和格式化

# 4. 推送更新
git add .
git commit -m "新增文章：電動代步車選購指南"
git push
```

網站會在 1-2 分鐘內自動更新！

---

## 📁 檔案結構說明

```
fuyangchi-website/
├── index.html          ← 首頁（完整版含所有區塊）
├── style.css           ← 共用樣式
├── main.js             ← 互動功能
├── sitemap.xml         ← SEO 網站地圖
├── robots.txt          ← 搜尋引擎設定
├── CNAME               ← 自訂網域設定
├── ltc.html            ← 長照補助專區
├── products.html       ← 輔具產品
├── ambulance.html      ← 救護車打造
├── faq.html            ← 常見問題
├── contact.html        ← 聯絡我們
├── articles/           ← 長照知識文章
│   ├── index.html      ← 文章列表頁
│   ├── ltc-30-guide.html
│   ├── assistive-device-subsidy.html
│   ├── wheelchair-guide.html
│   └── ... (共15篇)
└── images/             ← 資訊圖
    ├── infographic-申請流程五步驟.svg
    ├── infographic-補助金額一覽.svg
    └── infographic-失能等級補助圖.svg
```

---
