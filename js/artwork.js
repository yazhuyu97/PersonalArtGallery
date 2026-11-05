document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('artwork-detail');
  const pagination = document.getElementById('artwork-pagination');
  const artworks = await window.ArtworkData.load();
  const id = new URLSearchParams(location.search).get('id');
  const index = artworks.findIndex(a => a.id === id);
  if (index < 0) {
    container.innerHTML = '<div class="empty-state">找不到這件作品。<br><a class="text-link" href="gallery.html">返回 Gallery</a></div>';
    pagination.remove();
    return;
  }
  const a = artworks[index], e = window.ArtworkUtils.escapeHTML;
  const fields = [['作品類型', window.ArtworkUtils.typeLabel(a.type)], ['創作技法', window.ArtworkUtils.categoryLabel(a.category)], ['創作年份', a.year], ['使用媒材', a.medium], ['作品尺寸', a.size]].filter(([,v]) => v !== undefined && v !== null && v !== '');
  container.innerHTML = `<div class="detail-layout"><div class="detail-image">${a.image ? `<img src="${e(a.image)}" alt="${e(a.alt || a.title)}">` : '<div class="artwork-placeholder">Artwork image unavailable</div>'}</div><div class="detail-copy"><p class="eyebrow">ARTWORK DETAILS</p><h1>${e(a.title || '未命名作品')}</h1><p class="description">${e(a.description || '尚未提供作品介紹。')}</p><div class="detail-facts">${fields.map(([k,v]) => `<div class="detail-fact"><span>${e(k)}</span><span>${e(v)}</span></div>`).join('')}</div></div></div>`;
  const prev = artworks[index-1], next = artworks[index+1];
  pagination.innerHTML = `${prev ? `<a class="text-link" href="artwork.html?id=${encodeURIComponent(prev.id)}">← ${e(prev.title)}</a>` : '<span></span>'}${next ? `<a class="text-link" href="artwork.html?id=${encodeURIComponent(next.id)}">${e(next.title)} →</a>` : '<span></span>'}`;
  document.title = `${a.title || 'Artwork'}｜Personal Art Gallery`;
});
