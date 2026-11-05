window.ArtworkUtils = {
  escapeHTML(value = '') {
    return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  },
  typeLabel(type) { return type === 'traditional' ? '手繪 Traditional' : type === 'digital' ? '電繪 Digital' : '未分類'; },
  categoryLabel(category) {
    const labels = {'sketch':'Sketch','watercolor':'Watercolor','colored-pencil':'Colored Pencil','acrylic':'Acrylic','illustration':'Illustration','character-design':'Character Design','digital-painting':'Digital Painting','concept-art':'Concept Art'};
    return labels[category] || category || '未分類';
  },
  card(artwork) {
    const e = this.escapeHTML;
    const typeClass = artwork.type === 'digital' ? 'digital-tag' : '';
    const image = e(artwork.thumbnail || artwork.image || '');
    const alt = e(artwork.alt || artwork.title || '藝術作品');
    const title = e(artwork.title || '未命名作品');
    const id = encodeURIComponent(artwork.id);
    return `<article class="artwork-card"><a href="artwork.html?id=${id}" aria-label="查看作品：${title}"><div class="artwork-image-wrap">${image ? `<img src="${image}" alt="${alt}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'artwork-placeholder',textContent:'Image unavailable'}))">` : '<div class="artwork-placeholder">Artwork</div>'}</div><div class="artwork-meta"><h3>${title}</h3><p><span class="artwork-tag ${typeClass}">${e(this.typeLabel(artwork.type))}</span>${e(this.categoryLabel(artwork.category))}${artwork.year ? ` · ${e(artwork.year)}` : ''}</p></div></a></article>`;
  }
};
