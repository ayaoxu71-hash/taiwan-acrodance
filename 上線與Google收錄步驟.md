# 臺灣特技舞蹈協會 — 上線與 Google 收錄完整步驟

---

# 第一部分：部署到 GitHub Pages（網頁版，不用指令）

## 前置：先確認你的檔案是最新的
下載最新的 taiwan-acrodance-website.zip 並解壓，確認裡面有 index.html、assets 資料夾等。
上傳的就是解壓後「資料夾裡的所有東西」，不是那個 zip 檔本身。

---

## 步驟 1：註冊 / 登入 GitHub
1. 前往 https://github.com
2. 沒帳號就點 Sign up 註冊（用 email，免費）
3. 有帳號就 Sign in 登入

## 步驟 2：建立一個新的 Repository（存放網站的地方）
1. 登入後，點右上角「+」→ New repository
2. Repository name 填一個名字，例如：taiwan-acrodance
   （只能用英文、數字、-，不要中文）
3. 設為 Public（公開，Pages 免費版需要公開）
4. 不要勾選 Add a README（因為你已經有檔案了）
5. 點 Create repository

## 步驟 3：上傳網站檔案
1. 建好後會看到一個空的 repository 頁面
2. 點頁面中間的「uploading an existing file」連結
   （或點 Add file → Upload files）
3. 打開你電腦上解壓好的網站資料夾
4. 全選資料夾「裡面」的所有檔案和子資料夾
   （index.html、assets 資料夾、其他 html 等，全選）
5. 直接拖曳到 GitHub 網頁的上傳區
   ⚠️ 注意：要連同 assets 這個資料夾一起拖，裡面的圖片/CSS/JS 才會上去
6. 等所有檔案上傳完（下方會顯示檔案清單）
7. 頁面最下方「Commit changes」→ 點綠色 Commit changes 按鈕

## 步驟 4：開啟 GitHub Pages
1. 在 repository 頁面，點上方的 Settings（設定）
2. 左側選單找到並點 Pages
3. Source 選「Deploy from a branch」
4. Branch 選「main」，資料夾選「/ (root)」
5. 點 Save
6. 等 1～3 分鐘，重新整理這個 Pages 頁面
7. 上方會出現綠色框：「Your site is live at https://你的帳號.github.io/taiwan-acrodance/」
8. 點那個網址，就能看到你的網站上線了！

## 步驟 5：記下你的正式網址
你的網站網址會是：
    https://你的帳號.github.io/taiwan-acrodance/
把這個網址記下來，第二部分（Google）和改網址時都會用到。

---

## ⚠️ 上線後必做：更新網站裡的網址
你的網站有幾個地方寫的還是舊網址（taiwanacrodance.zeabur.app），
要改成你的 GitHub Pages 網址，Google 才能正確收錄。

需要改的檔案與位置：
1. robots.txt → Sitemap 那行的網址
2. sitemap.xml → 裡面全部的 <loc> 網址（15 個）
3. index.html → og:url 和 og:image 兩處

改法（網頁版）：在 GitHub repository 點該檔案 → 點鉛筆圖示 Edit →
改好 → 下方 Commit changes。

（如果覺得手動改很麻煩，可以把新網址告訴我，我幫你全部改好再給你一包，
你直接覆蓋上傳即可。）

---

# 第二部分：讓 Google 搜尋得到（Google Search Console）

## 為什麼要做這個
Google 不會自動發現你的新網站。你要主動用 Google Search Console
（免費工具）告訴 Google：「我有一個網站，請來收錄。」

## 步驟 1：進入 Google Search Console
1. 前往 https://search.google.com/search-console
2. 用你的 Google 帳號登入（就是你的 Gmail）

## 步驟 2：新增你的網站（資源）
1. 點左上角「新增資源」（Add property）
2. 選右邊那個「網址前置字元」（URL prefix）
3. 貼上你的完整網址：
    https://你的帳號.github.io/taiwan-acrodance/
4. 點「繼續」

## 步驟 3：驗證你是網站擁有者
GitHub Pages 無法用「上傳 HTML 檔」的方式驗證，改用「HTML 標記」：
1. 驗證方式選「HTML 標記」（HTML tag）
2. 它會給你一段 <meta name="google-site-verification" content="xxxxx" />
3. ⚠️ 你的 index.html 已經有一個舊的 verification 標籤了
   （content="1In2v6..."）。
   如果這是你之前建立的同一個 Google 帳號，可能已經驗證過，直接點驗證看看。
   如果不是，就把新的那段 meta 換掉 index.html 裡舊的那行，
   重新上傳到 GitHub，再回來點「驗證」。
4. 看到「已驗證擁有權」就成功了。

## 步驟 4：提交 Sitemap（最關鍵的一步）
1. 驗證成功後，進入你的資源
2. 左側選單點「Sitemap」
3. 在「新增 Sitemap」欄位輸入：sitemap.xml
   （只要打 sitemap.xml，前面的網址它會自動補）
4. 點「提交」
5. 狀態顯示「成功」就對了

## 步驟 5：請 Google 優先檢索首頁（加速收錄）
1. 左側點最上方的搜尋框（檢查任何網址）
2. 貼上你的首頁網址
3. 點「要求建立索引」（Request indexing）
4. 等它處理

## 之後會發生什麼
- Google 通常需要幾天到幾週才會把你的頁面收錄進搜尋結果
- 收錄後，搜尋「臺灣特技舞蹈協會」就有機會找到你
- 可以在 Search Console 的「頁面」看到哪些頁面被收錄了

---

# 第三部分：日後怎麼讓排名更好（SEO 維護）

這些不急，上線收錄後再慢慢做：

1. 讓 FB、IG 個人檔案都放上你的官網連結
   （其他網站連到你，Google 會認為你更重要）
2. 消息保持更新（Google 喜歡活躍的網站）
3. 每個頁面的 <title> 和 description 都要準確描述該頁內容
4. 過一陣子回 Search Console 看「成效」報告，
   知道別人都搜什麼關鍵字找到你

---

# 常見問題

Q：上傳後網站打不開 / 圖片跑掉？
A：多半是 assets 資料夾沒一起上傳。確認 GitHub repository 裡有 assets 資料夾，
   裡面有 css、js、images 三個子資料夾。

Q：改了檔案，網站沒更新？
A：GitHub Pages 更新要等 1～3 分鐘，且瀏覽器可能有快取，按 Cmd+Shift+R 強制重整。

Q：之後買了自己的網域（例如 tada.org.tw）怎麼接？
A：1. 在網域商後台設定 DNS，指向 GitHub Pages
   2. GitHub repository → Settings → Pages → Custom domain 填入你的網域
   3. 再把 robots.txt、sitemap.xml、og:url 的網址改成新網域
   4. Google Search Console 要重新新增這個新網址的資源
   需要時再問我，我幫你處理。

Q：聯絡表單的訊息會寄到哪？
A：使用者填完按送出，會開啟他自己的郵件軟體，寄到 taiwanacrodance.ep@gmail.com。
