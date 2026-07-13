// Append to end of main.js - render news grid dynamically

// ===== RENDER NEWS =====
function renderNews(lang) {
  const grid = document.getElementById('newsGrid');
  if (!grid) return;
  const t = i18n[lang];
  const delays = ['reveal-delay-1','reveal-delay-2','reveal-delay-3'];
  grid.innerHTML = newsData.slice(0, 3).map((n, i) => {
    const title = lang === 'zh' ? n.title_zh : n.title_en;
    return `
    <article class="news-card reveal ${delays[i]}">
      <a href="${n.page}" class="news-img">
        <img src="${n.img}" alt="${title}" loading="lazy">
      </a>
      <div class="news-body">
        <span class="news-cat">${lang === 'zh' ? n.cat_zh : n.cat_en}</span>
        <h3 class="news-title">
          <a href="${n.page}" style="color:inherit">${title}</a>
        </h3>
        <p class="news-date">${n.date}</p>
      </div>
    </article>
  `;
  }).join('');
  // re-observe newly created elements
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

// Override setLang so switching language also re-renders the news grid.
// main.js 的語言按鈕與 DOMContentLoaded 都是以全域 setLang 呼叫，
// 覆寫後會自動套用，不需重複綁定事件或重複初始化。
const origSetLang = setLang;
window.setLang = function(lang) {
  origSetLang(lang);
  renderNews(lang);
};

// ===== EXTRA i18n KEYS =====
i18n.zh = Object.assign(i18n.zh, {
  about_tag: '協會簡介', about_title: '關於臺灣特技舞蹈協會',
  about_desc: '臺灣特技舞蹈協會成立於臺灣臺北，111年由陳碧涵、林佳鋒、李曉蕾等34人發起後組織籌備委員會。同年7月公開招募會員，8月28日辦理第一屆會員大會，9月4日召開第一屆第一次理監事聯席會議，最終由林佳鋒當選第一屆理事長。',
  about_more: '閱讀更多',
  purpose1: '本會為依法設立、非以營利為目的社會團體。',
  purpose2: '推展特技舞蹈教育，培育表演藝術跨域人才。',
  purpose3: '建構專業證照檢定，鏈結產業需求。',
  purpose4: '促進產業生態發展，擴大特技舞蹈國際能量。',
  org_title: '第一屆理監事', org_more: '查看完整組織',
  role_chair: '理事長', role_honor: '榮譽顧問', role_exec: '執行長',
  role_vchair: '副理事長', role_director: '常務理事', role_directors: '理事',
  role_super: '常務監事', role_supers: '監事'
});
i18n.en = Object.assign(i18n.en, {
  about_tag: 'ABOUT US', about_title: 'About Taiwan Acrobatic Dance Association',
  about_desc: 'Taiwan Acrobatic Dance Association was established in Taipei, founded in 2022 by 34 founding members including Chen Bi-Han, Lin Jia-Feng, and Li Xiao-Lei. The first general member assembly was held on August 28, 2022, and Lin Jia-Feng was elected as the first President.',
  about_more: 'Read More',
  purpose1: 'A legally established non-profit social organization.',
  purpose2: 'Promoting acrobatic dance education and cultivating cross-domain performing arts talents.',
  purpose3: 'Building professional certification systems linked to industry needs.',
  purpose4: 'Advancing industry ecosystem development and expanding international reach.',
  org_title: '1st Board of Directors', org_more: 'View Full Organization',
  role_chair: 'President', role_honor: 'Honorary Advisor', role_exec: 'Executive Director',
  role_vchair: 'Vice President', role_director: 'Standing Director', role_directors: 'Directors',
  role_super: 'Standing Supervisor', role_supers: 'Supervisors'
});

// 初始化由 main.js 的 DOMContentLoaded → setLang('zh') 觸發（已被上方覆寫，會一併渲染新聞）。
