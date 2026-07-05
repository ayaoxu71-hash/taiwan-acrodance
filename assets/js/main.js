// ===== NEWS DATA =====
const newsData = [
  {
    title_zh: '傳承特技藝術！第二屆「特技大鼎 BIG TOP 頒獎典禮」得獎名單出爐',
    title_en: '2nd BIG TOP Acrobatic Awards Ceremony — Winners Announced',
    date: '2025.12.07', cat_zh: '活動', cat_en: 'Event', icon: '🏆',
    img: 'assets/images/news-bigtop-2.jpg',
    page: 'bigtop-2.html'
  },
  {
    title_zh: '【2025衛武營馬戲平台】國際講座',
    title_en: '【2025 Weiwuying Circus Platform】International Symposium',
    date: '2025.12.06', cat_zh: '活動', cat_en: 'Event', icon: '🎪',
    img: 'assets/images/news-weiwuying-2025.jpg',
    page: 'weiwuying-2025.html'
  },
  {
    title_zh: '【中國雜技團專業訓練計畫】徵選簡章',
    title_en: 'China Acrobatic Troupe Professional Training Program — Recruitment',
    date: '2025.06.29', cat_zh: '公告', cat_en: 'Notice', icon: '📋',
    img: 'assets/images/news-china-troupe.jpg',
    page: 'news-china-troupe.html'
  },
  {
    title_zh: '111年8月28日第一屆會員大會',
    title_en: '1st General Member Assembly (August 28, 2022)',
    date: '2022.08.28', cat_zh: '紀事', cat_en: 'Record', icon: '📝',
    img: 'assets/images/news-2022-0828-assembly.jpg',
    page: 'news-2022-assembly.html'
  },
  {
    title_zh: '111年9月4日第一屆第一次理監事聯席會議',
    title_en: '1st Board of Directors & Supervisors Joint Meeting (Sep 4, 2022)',
    date: '2022.09.04', cat_zh: '紀事', cat_en: 'Record', icon: '📝',
    img: 'assets/images/news-2022-0904-board.jpg',
    page: 'news-2022-board.html'
  }
];

// ===== LANGUAGE DATA =====
const i18n = {
  zh: {
    nav_news: '最新消息', nav_about: '關於協會', nav_intro: '協會簡介',
    nav_charter: '協會章程', nav_org: '協會組織',
    nav_announce: '公告事項', nav_contact: '聯絡我們', nav_download: '表單下載',
    hero_badge: '台灣 · 馬戲特技 · 國際交流',
    hero_title: '臺灣特技舞蹈協會',
    hero_en: 'TAIWAN ACROBATIC DANCE ASSOCIATION',
    hero_slogan: '推展特技舞蹈教育，培育表演藝術跨域人才<br>建構專業證照，促進產業生態與國際交流',
    hero_btn1: '瞭解協會', hero_btn2: '最新消息',
    hero_scroll: 'SCROLL',
    mission_tag: '核心任務', mission_title: '協會使命',
    mission_sub: '臺灣特技舞蹈協會111年由34人發起，致力推展特技舞蹈教育，培育跨域人才，建構專業證照，擴大國際能量',
    m1_title: '人才培育', m1_desc: '培訓專業特技舞蹈人才，建立完善的教育體系與認證制度',
    m2_title: '國際交流', m2_desc: '積極推動台灣特技藝術走向國際舞台，促進跨文化交流',
    m3_title: '產業發展', m3_desc: '扶植特技舞蹈相關產業，建立健全的生態體系',
    m4_title: '職場安全', m4_desc: '維護特技舞蹈從業者的職業安全與身心健康',
    dev_tag: '六大方向', dev_title: '協會發展',
    d1: '協會發展', d1d: '持續壯大協會規模，擴大影響力與服務範疇',
    d2: '專業課程人才培育', d2d: '規劃系統性課程，培育下一代特技舞蹈專才',
    d3: '專業證照檢定', d3d: '建立國家級專業證照制度，提升產業標準',
    d4: '產業生態發展及需求', d4d: '研析產業需求，促進特技舞蹈生態系統健全發展',
    d5: '國際交流活動', d5d: '舉辦及參與國際賽事、展演與文化交流活動',
    d6: '職場安全與健康', d6d: '推動職業安全教育，保障從業人員身心健康',
    news_tag: '動態消息', news_title: '最新消息',
    news_sub: '掌握協會最新活動與公告資訊',
    news_more: '查看全部消息',
    intl_tag: '國際舞台', intl_title: '國際交流',
    intl_sub: '連結世界，讓台灣特技藝術閃耀國際',
    intl_desc: '臺灣特技舞蹈協會積極推動台灣特技藝術走向世界舞台，與多個國際組織及藝術團體建立合作關係，推動文化交流，提升台灣馬戲特技在國際上的能見度與影響力。',
    stat1_num: '20+', stat1_label: '合作國家',
    stat2_num: '50+', stat2_label: '國際活動',
    stat3_num: '10+', stat3_label: '合作機構',
    gallery_tag: '影像紀錄', gallery_title: '精彩時刻',
    gallery_sub: '精彩演出與活動照片（即將上傳）',
    photo_coming: '照片即將上傳',
    contact_tag: '聯絡資訊', contact_title: '聯絡我們',
    contact_sub: '歡迎來信詢問合作事宜',
    c_email_label: '電子郵件', c_addr_label: '協會地址',
    c_addr_val: '11664 台北市文山區木新路二段156之1號',
    c_tax_label: '統一編號', c_tax_val: '88389907',
    form_name: '您的姓名', form_email: '電子郵件', form_subject: '主旨',
    form_msg: '訊息內容', form_send: '用 Email 傳送',
    footer_desc: '臺灣特技舞蹈協會於111年成立，致力推展特技舞蹈教育，培育表演藝術跨域人才，促進產業生態發展，擴大特技舞蹈國際能量。',
    footer_about: '關於協會', footer_service: '服務項目', footer_connect: '聯絡資訊',
    copyright: '版權所有 © 2026 臺灣特技舞蹈協會'
  },
  en: {
    nav_news: 'News', nav_about: 'About', nav_intro: 'Introduction',
    nav_charter: 'Charter', nav_org: 'Organization',
    nav_announce: 'Announcements', nav_contact: 'Contact', nav_download: 'Downloads',
    hero_badge: 'TAIWAN · CIRCUS · INTERNATIONAL EXCHANGE',
    hero_title: '臺灣特技舞蹈協會',
    hero_en: 'TAIWAN ACROBATIC DANCE ASSOCIATION',
    hero_slogan: 'Promoting Acrobatic Dance Education & Cross-domain Talent<br>Building Professional Certification & International Exchange',
    hero_btn1: 'About Us', hero_btn2: 'Latest News',
    hero_scroll: 'SCROLL',
    mission_tag: 'CORE MISSION', mission_title: 'Our Mission',
    mission_sub: 'Founded in 2022 by 34 founding members, dedicated to promoting acrobatic dance education, cross-domain talent, professional certification and international reach',
    m1_title: 'Talent Development', m1_desc: 'Training professional acrobatic dance talents with comprehensive education and certification systems',
    m2_title: 'International Exchange', m2_desc: 'Promoting Taiwan\'s acrobatic arts on the global stage, fostering cross-cultural collaboration',
    m3_title: 'Industry Growth', m3_desc: 'Supporting acrobatic dance industries and building a healthy ecosystem',
    m4_title: 'Workplace Safety', m4_desc: 'Protecting the occupational safety and health of acrobatic dance practitioners',
    dev_tag: 'SIX PILLARS', dev_title: 'Development Areas',
    d1: 'Association Growth', d1d: 'Expanding influence and service scope of the association',
    d2: 'Professional Training', d2d: 'Systematic curriculum to cultivate the next generation of acrobatic talents',
    d3: 'Certification System', d3d: 'Establishing national professional certification to raise industry standards',
    d4: 'Industry Ecosystem', d4d: 'Analyzing industry needs and promoting healthy ecosystem development',
    d5: 'International Activities', d5d: 'Hosting and participating in international competitions, performances and exchanges',
    d6: 'Safety & Health', d6d: 'Promoting occupational safety education for practitioners\' wellbeing',
    news_tag: 'UPDATES', news_title: 'Latest News',
    news_sub: 'Stay updated with our latest events and announcements',
    news_more: 'View All News',
    intl_tag: 'GLOBAL STAGE', intl_title: 'International Exchange',
    intl_sub: 'Connecting the world, shining Taiwan\'s acrobatic arts globally',
    intl_desc: 'Taiwan Acrobatic Dance Association actively promotes Taiwan\'s circus arts on the world stage, establishing partnerships with international organizations to enhance visibility and influence.',
    stat1_num: '20+', stat1_label: 'Partner Countries',
    stat2_num: '50+', stat2_label: 'Int\'l Events',
    stat3_num: '10+', stat3_label: 'Partner Orgs',
    gallery_tag: 'GALLERY', gallery_title: 'Highlights',
    gallery_sub: 'Performance and event photos (coming soon)',
    photo_coming: 'Photos Coming Soon',
    contact_tag: 'GET IN TOUCH', contact_title: 'Contact Us',
    contact_sub: 'We welcome inquiries about collaboration',
    c_email_label: 'Email', c_addr_label: 'Address',
    c_addr_val: '156-1, Sec. 2, Muxin Rd., Wenshan Dist., Taipei City 11664',
    c_tax_label: 'Tax ID', c_tax_val: '88389907',
    form_name: 'Your Name', form_email: 'Email Address', form_subject: 'Subject',
    form_msg: 'Message', form_send: 'Send via Email',
    footer_desc: 'Founded in 2022, TADA promotes acrobatic dance education, cross-domain talent, professional certification and international cultural exchange.',
    footer_about: 'About', footer_service: 'Services', footer_connect: 'Contact',
    copyright: 'Copyright © 2026 Taiwan Acrobatic Dance Association'
  }
};

// ===== STATE =====
let currentLang = 'zh';

// ===== ANNOUNCEMENT BAR =====
function initAnnouncementBar() {
  if (document.getElementById('announcementBar')) return;
  const bar = document.createElement('div');
  bar.id = 'announcementBar';
  bar.innerHTML = `
    <span>🎪</span>
    <span>第二屆「特技大鼎 BIG TOP」得獎名單出爐！</span>
    <a href="bigtop-2.html">查看詳情 →</a>
    <button id="announcementClose" aria-label="關閉公告">✕</button>
  `;
  document.body.prepend(bar);
  document.body.classList.add('bar-visible');
  document.getElementById('announcementClose').addEventListener('click', () => {
    bar.style.display = 'none';
    document.body.classList.remove('bar-visible');
  });
}
initAnnouncementBar();

// ===== BACK TO HOME BUTTON (index.html doesn't need it, but kept for consistency) =====
function initBackToHome() {
  const footer = document.getElementById('footer');
  if (!footer || document.querySelector('.back-home-wrap')) return;
  const container = footer.querySelector('.container');
  if (!container) return;
  const wrap = document.createElement('div');
  wrap.className = 'back-home-wrap';
  wrap.innerHTML = `<a href="#hero" class="back-to-home">🏠 回到頂端</a>`;
  container.insertBefore(wrap, container.firstChild);
}
initBackToHome();

// ===== NAVBAR =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  const spans = navToggle.querySelectorAll('span');
  navMenu.classList.contains('open')
    ? (spans[0].style.transform='rotate(45deg) translate(5px,5px)', spans[1].style.opacity='0', spans[2].style.transform='rotate(-45deg) translate(5px,-5px)')
    : (spans[0].style.transform='', spans[1].style.opacity='', spans[2].style.transform='');
});
document.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => { navMenu.classList.remove('open'); });
});

// ===== LANGUAGE =====
function setLang(lang) {
  currentLang = lang;
  const t = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en';
}
document.querySelectorAll('.lang-btn').forEach(b => {
  b.addEventListener('click', () => setLang(b.dataset.lang));
});

// ===== SCROLL REVEAL =====
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// ===== PARTICLES =====
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = Array.from({length: 60}, () => ({
    x: Math.random() * canvas.width, y: Math.random() * canvas.height,
    r: Math.random() * 2 + 0.5, vx: (Math.random()-0.5)*0.4, vy: (Math.random()-0.5)*0.4,
    a: Math.random()
  }));
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(232,160,32,${p.a * 0.5})`; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });
}
initParticles();

// ===== COUNTER ANIMATION =====
function animateCounter(el, target, suffix='') {
  let count = 0; const step = Math.ceil(parseInt(target) / 40);
  const timer = setInterval(() => {
    count += step;
    if (count >= parseInt(target)) { count = parseInt(target); clearInterval(timer); }
    el.textContent = count + suffix;
  }, 40);
}
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num').forEach(el => {
        const val = el.getAttribute('data-val');
        const suffix = el.getAttribute('data-suffix') || '';
        animateCounter(el, val, suffix);
      });
      statsObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.intl-stats').forEach(el => statsObserver.observe(el));

// ===== FORM（改為開啟郵件軟體，寄到協會信箱）=====
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = (document.getElementById('fname').value || '').trim();
    const email = (document.getElementById('femail').value || '').trim();
    const subject = (document.getElementById('fsubject').value || '').trim();
    const message = (document.getElementById('fmsg').value || '').trim();

    // 組合信件主旨與內容
    const mailSubject = subject
      ? `[網站聯絡] ${subject}`
      : '[網站聯絡] 來自官網的訊息';
    const mailBody =
      `姓名：${name}\n` +
      `Email：${email}\n` +
      `------------------------------\n` +
      `${message}`;

    // 開啟使用者的郵件軟體，收件人為協會信箱
    const mailto = `mailto:taiwanacrodance.ep@gmail.com` +
      `?subject=${encodeURIComponent(mailSubject)}` +
      `&body=${encodeURIComponent(mailBody)}`;
    window.location.href = mailto;

    // 按鈕回饋
    const btn = form.querySelector('button[type=submit]');
    const original = btn.textContent;
    btn.textContent = currentLang === 'zh' ? '✓ 已開啟郵件軟體' : '✓ Email app opened';
    btn.style.background = 'linear-gradient(135deg,#27ae60,#2ecc71)';
    setTimeout(() => { btn.textContent = i18n[currentLang].form_send; btn.style.background=''; }, 4000);
  });
}

// ===== INIT =====
window.addEventListener('DOMContentLoaded', () => { setLang('zh'); });
