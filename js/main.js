document.addEventListener('DOMContentLoaded', async () => {
  document.querySelectorAll('[data-current-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('is-open', !expanded);
    });
  }

  // 首頁精選作品：讀取 JSON，不將作品資料寫死在 HTML。
  const featuredGrid = document.getElementById('featured-grid');
  if (featuredGrid) {
    try {
      const response = await fetch('data/artworks.json');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      const items = (Array.isArray(data.artworks) ? data.artworks : []).filter(item => item.featured).slice(0, 3);
      if (!items.length) {
        featuredGrid.innerHTML = '<p class="empty-state">精選作品即將登場。<br>新增作品資料並設定 <code>"featured": true</code> 後，就會顯示在這裡。</p>';
      } else {
        const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
        featuredGrid.innerHTML = items.map(item => {
          const title = escapeHTML(item.title || '未命名作品');
          const type = item.type === 'traditional' ? '手繪 Traditional' : '電繪 Digital';
          const image = item.thumbnail || item.image;
          return `<article class="artwork-card"><a href="artwork.html?id=${encodeURIComponent(item.id)}"><div class="artwork-image-wrap">${image ? `<img src="${escapeHTML(image)}" alt="${escapeHTML(item.alt || title)}" loading="lazy">` : '<div class="artwork-placeholder">Artwork</div>'}</div><div class="artwork-meta"><h3>${title}</h3><p>${type}${item.year ? ` · ${escapeHTML(item.year)}` : ''}</p></div></a></article>`;
        }).join('');
      }
    } catch (error) {
      console.error('Featured artwork loading error:', error);
      featuredGrid.innerHTML = '<p class="empty-state">作品資料暫時無法載入，請稍後再試。</p>';
    }
  }
});
