# My Laravel App

## 簡介
**My Laravel App** 是一個基於 Laravel 10 和 Vue 3 的現代化 Web 應用程式，結合了 Vuetify 作為 UI 組件庫。此專案旨在提供一個完整的全端開發範例，展示如何整合 Laravel 的後端功能與 Vue.js 的前端靈活性，以及使用 Vuetify 快速構建美觀的使用者介面。

📖 相關文章：[使用 Laravel 10 與 Vue 3 + Vuetify 建立現代化 Web 應用](https://ithelp.ithome.com.tw/articles/10359764)

## 功能特性
- **前後端分離**：使用 Laravel 作為後端 API，Vue 3 作為前端框架，實現清晰的前後端分離架構。
- **UI 組件庫**：整合 Vuetify，提供豐富且美觀的 UI 元件，提升開發效率。
- **現代化開發流程**：使用 Vite 進行資源編譯與熱更新，加速開發流程。
- **認證系統**：內建使用者註冊、登入功能，並使用 Laravel Sanctum 進行 API 認證。

## 環境需求
- **PHP**：8.1 或以上版本
- **Node.js**：16 或以上版本
- **資料庫**：MySQL 8.0 或以上版本（或其他相容的資料庫）
- **Composer**：PHP 的套件管理工具
- **NPM**：Node.js 的套件管理工具

## 安裝與設定

### 1. 克隆專案
```bash
git clone https://github.com/answer212224/my-laravel-app.git
cd my-laravel-app
```

### 2. 安裝後端相依套件
```bash
composer install
```

### 3. 安裝前端相依套件
```bash
npm install
```

### 4. 設定環境變數
```bash
cp .env.example .env
php artisan key:generate
```
根據需要修改 `.env` 文件中的資料庫連線資訊和其他設定。

### 5. 執行資料庫遷移
```bash
php artisan migrate
```

### 6. 編譯前端資源
```bash
npm run dev
```

### 7. 啟動開發伺服器
```bash
php artisan serve
```
伺服器將在 `http://127.0.0.1:8000` 運行。

## 部署

### 1. 環境準備
確保伺服器上已安裝所需的 PHP、Node.js、資料庫等環境，並已配置好網域與 SSL 憑證。

### 2. 部署流程
- 將專案代碼上傳至伺服器。
- 執行 `composer install` 安裝後端相依套件。
- 執行 `npm install` 安裝前端相依套件。
- 設定環境變數，確保 `.env` 文件中的設定正確。
- 執行資料庫遷移：`php artisan migrate --force`
- 編譯前端資源：`npm run build`
- 設定伺服器的 Web 根目錄指向專案的 `public` 目錄。
- 確保正確設定檔案權限，讓伺服器能夠讀寫必要的目錄。

## 測試
使用 Laravel 提供的測試工具進行測試：
```bash
php artisan test
```

## 貢獻
歡迎對本專案提出建議、回報問題或提交 Pull Request。在提交前，請確保您的代碼符合專案的編碼風格，並通過所有測試。

## 授權
此專案採用 MIT 授權。
