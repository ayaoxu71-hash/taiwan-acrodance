// ===== BIG TOP 頁面下架導回機制 =====
// 此頁面設有「下架日期」，到期後自動導回原官網特技大鼎頁面。
// 如需調整日期，修改下方 SUNSET_DATE 即可。
(function () {
  const SUNSET_DATE = new Date('2026-12-31T00:00:00+08:00');
  const REDIRECT_URL = 'https://taiwanacrodance.com/特技大鼎/';
  const WARNING_DAYS = 30; // 到期前幾天開始顯示警告

  function isExpired() {
    return new Date() >= SUNSET_DATE;
  }

  function redirectNow() {
    window.location.replace(REDIRECT_URL);
  }

  function showWarningBanner(daysLeft) {
    if (document.getElementById('bigtopSunsetWarning')) return;
    const warn = document.createElement('div');
    warn.id = 'bigtopSunsetWarning';
    warn.innerHTML = `⚠️ <span class="i18n-zh">本頁面將於 ${daysLeft} 天後移至官網，請更新書籤 →</span><span class="i18n-en">This page moves to our main website in ${daysLeft} days — please update your bookmarks →</span> <a href="${REDIRECT_URL}" target="_blank" rel="noopener">taiwanacrodance.com</a>`;
    const bar = document.getElementById('announcementBar');
    if (bar && bar.parentNode) {
      bar.parentNode.insertBefore(warn, bar.nextSibling);
    } else {
      document.body.prepend(warn);
    }
    document.body.classList.add('sunset-visible'); // 讓 CSS 把 navbar 往下推，避免被警示列遮住
  }

  function checkSunset() {
    if (isExpired()) {
      redirectNow();
      return;
    }
    const daysLeft = Math.ceil((SUNSET_DATE - new Date()) / (1000 * 60 * 60 * 24));
    if (daysLeft <= WARNING_DAYS) {
      showWarningBanner(daysLeft);
    }
  }

  document.addEventListener('DOMContentLoaded', checkSunset);

  // 使用者切回此分頁時也重新檢查一次
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'visible' && isExpired()) {
      redirectNow();
    }
  });
})();
