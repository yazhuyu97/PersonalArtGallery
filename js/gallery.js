document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('gallery-grid');
  if (!grid || !window.ArtworkData) return;
  const artworks = await window.ArtworkData.load();
  const count = document.getElementById('artwork-count');
  const render = items => {
    count.textContent = `共 ${items.length} 件作品`;
    grid.innerHTML = items.length ? items.map(a => window.ArtworkUtils.card(a)).join('') : '<p class="empty-state">目前沒有符合條件的作品。<br>可以調整篩選條件，或稍後再來看看。</p>';
  };
  if (!artworks.length) {
    grid.innerHTML = '<p class="empty-state">目前還沒有作品資料。<br>請將作品圖片放入 assets/images，並依照 README.md 的格式新增 data/artworks.json。</p>';
    count.textContent = '共 0 件作品';
    return;
  }
  window.ArtworkFilter.init(artworks, render);
  window.ArtworkLightbox?.init(artworks);
});
