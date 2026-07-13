// ===== 語言狀態（跨頁記憶，子頁共用）=====
// 子頁採「雙語內容 + CSS 切換」：頁面同時含 .i18n-zh / .i18n-en 內容，
// 由 <html data-lang> 決定顯示哪一種（規則在 style.css）。
function getSavedLang() {
  try { return localStorage.getItem('tada_lang') === 'en' ? 'en' : 'zh'; } catch (e) { return 'zh'; }
}

function setPageLang(lang) {
  try { localStorage.setItem('tada_lang', lang); } catch (e) { /* 私密模式等情況忽略 */ }
  const html = document.documentElement;
  html.setAttribute('data-lang', lang);
  html.lang = lang === 'zh' ? 'zh-TW' : 'en';
  // 頁面標題切換（<title data-en="..."> 提供英文標題）
  const titleEl = document.querySelector('title');
  if (titleEl) {
    if (!titleEl.dataset.zh) titleEl.dataset.zh = titleEl.textContent;
    document.title = (lang === 'en' && titleEl.dataset.en) ? titleEl.dataset.en : titleEl.dataset.zh;
  }
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}

// 產生「中/英」雙語標籤 HTML
function biLabel(zh, en) {
  return `<span class="i18n-zh">${zh}</span><span class="i18n-en">${en}</span>`;
}

// ===== ANNOUNCEMENT BAR (shared) =====
function initAnnouncementBar() {
  if (document.getElementById('announcementBar')) return;

  const bar = document.createElement('div');
  bar.id = 'announcementBar';
  bar.innerHTML = `
    <span>🎪</span>
    <span>${biLabel('第二屆「特技大鼎 BIG TOP」得獎名單出爐！', '2nd BIG TOP Awards — winners announced!')}</span>
    <a href="bigtop-2.html">${biLabel('查看詳情 →', 'Details →')}</a>
    <button id="announcementClose" aria-label="關閉公告">✕</button>
  `;
  document.body.prepend(bar);
  document.body.classList.add('bar-visible');

  document.getElementById('announcementClose').addEventListener('click', () => {
    bar.style.display = 'none';
    document.body.classList.remove('bar-visible');
  });
}

// 點擊行為：若有「站內的上一頁」就回到上一頁，否則退回首頁
function goBackOrHome(e) {
  if (document.referrer) {
    try {
      // 只在「上一頁是本站頁面」時才用瀏覽器返回，避免回到外部網站
      if (new URL(document.referrer).origin === location.origin) {
        e.preventDefault();
        history.back();
        return false;
      }
    } catch (err) { /* referrer 解析失敗就忽略，照 href 走 */ }
  }
  // 沒有合適的上一頁（直接開啟此頁、或從外站進入）→ 照 href 回首頁
  return true;
}

// ===== BACK BUTTON (shared, injected above footer-bottom) =====
function initBackToHome() {
  const footer = document.getElementById('footer');
  if (!footer || document.querySelector('.back-home-wrap')) return;
  const container = footer.querySelector('.container');
  if (!container) return;

  const wrap = document.createElement('div');
  wrap.className = 'back-home-wrap';
  // href 保留 index.html 當作後備（無上一頁或關閉 JS 時仍可用）
  wrap.innerHTML = `<a href="index.html" class="back-to-home" onclick="return goBackOrHome(event)">↩ ${biLabel('回到上一頁', 'Back')}</a>`;
  container.insertBefore(wrap, container.firstChild);
}

// ===== SHARED NAV GENERATOR for sub-pages =====
// Usage: include this script, then call initNav(currentPage)
function initNav(activePage) {
  const navLinks = [
    { id: 'news',     zh: '最新消息', en: 'News',          href: 'news.html' },
    { id: 'about',    zh: '關於協會', en: 'About',         href: '#',  hasDropdown: true,
      children: [
        { zh: '協會簡介', en: 'Introduction', href: 'about.html' },
        { zh: '協會章程', en: 'Charter',      href: 'charter.html' },
        { zh: '協會組織', en: 'Organization', href: 'organization.html' },
      ]
    },
    { id: 'dev',      zh: '協會發展', en: 'Development',   href: 'development.html' },
    { id: 'bigtop',   zh: '特技大鼎', en: 'BIG TOP',       href: 'bigtop.html' },
    { id: 'announce', zh: '公告事項', en: 'Announcements', href: 'announcements.html' },
    { id: 'contact',  zh: '聯絡我們', en: 'Contact',       href: 'index.html#contact' },
    { id: 'download', zh: '表單下載', en: 'Downloads',     href: 'downloads.html' },
  ];

  const nav = document.getElementById('navbar');
  if (!nav) return;
  nav.classList.add('scrolled');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

  nav.innerHTML = `
    <a href="index.html" class="nav-logo">
      <div class="logo-placeholder">🎪</div>
      <div class="logo-text">
        <span class="zh">臺灣特技舞蹈協會</span>
        <span class="en">TAIWAN ACROBATIC DANCE ASSOC.</span>
      </div>
    </a>
    <div class="nav-menu" id="navMenu">
      ${navLinks.map(l => l.hasDropdown ? `
        <div class="nav-item dropdown">
          <a class="nav-link${l.children.some(c=>c.href.replace('.html','')===activePage)?' active':''}" href="#">${biLabel(l.zh, l.en)} ▾</a>
          <div class="dropdown-menu">
            ${l.children.map(c=>`<a href="${c.href}"${c.href.replace('.html','')===activePage?' style="color:var(--gold)"':''}>${biLabel(c.zh, c.en)}</a>`).join('')}
          </div>
        </div>` : `
        <div class="nav-item">
          <a class="nav-link${l.id===activePage?' active':''}" href="${l.href}">${biLabel(l.zh, l.en)}</a>
        </div>`
      ).join('')}
      <div class="lang-toggle">
        <button class="lang-btn" data-lang="zh">中</button>
        <button class="lang-btn" data-lang="en">EN</button>
      </div>
    </div>
    <button class="nav-toggle" id="navToggle" aria-label="開啟選單"><span></span><span></span><span></span></button>
  `;

  // 語言切換按鈕
  nav.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => setPageLang(b.dataset.lang));
  });

  document.getElementById('navToggle').addEventListener('click', () => {
    document.getElementById('navMenu').classList.toggle('open');
  });

  // Reveal on scroll
  document.querySelectorAll('.reveal').forEach(el => {
    new IntersectionObserver(([e]) => { if(e.isIntersecting) e.target.classList.add('visible'); }, {threshold:0.1}).observe(el);
  });

  // Inject announcement bar + back-to-home button on every sub-page
  initAnnouncementBar();
  initBackToHome();

  // 套用已記憶的語言（含跨頁延續）
  setPageLang(getSavedLang());
}
