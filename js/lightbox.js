window.ArtworkLightbox = {
  init(artworks) {
    const box = document.getElementById('lightbox');
    if (!box) return;
    const image = document.getElementById('lightbox-image'), caption = document.getElementById('lightbox-caption');
    let current = 0, zoom = 1, previousFocus = null;
    const available = artworks.filter(a => a.image);
    const show = index => {
      if (!available.length) return;
      current = (index + available.length) % available.length;
      const item = available[current]; image.src = item.image; image.alt = item.alt || item.title || 'Artwork';
      caption.textContent = item.title || ''; zoom = 1; image.style.transform = 'scale(1)';
    };
    const close = () => { box.hidden = true; document.body.style.overflow = ''; previousFocus?.focus(); };
    const open = item => { const i = available.findIndex(a => a.id === item.id); if (i < 0) return; previousFocus = document.activeElement; show(i); box.hidden = false; document.body.style.overflow = 'hidden'; box.querySelector('[data-lightbox-close]').focus(); };
    document.addEventListener('click', event => {
      const link = event.target.closest('.artwork-card a');
      if (link) { const id = new URL(link.href).searchParams.get('id'); const item = artworks.find(a => a.id === id); if (item?.image) { event.preventDefault(); open(item); } }
    });
    box.querySelector('[data-lightbox-close]').addEventListener('click', close);
    box.querySelector('[data-lightbox-prev]').addEventListener('click', () => show(current-1));
    box.querySelector('[data-lightbox-next]').addEventListener('click', () => show(current+1));
    box.querySelector('[data-zoom-in]').addEventListener('click', () => { zoom = Math.min(zoom+.2, 3); image.style.transform = `scale(${zoom})`; });
    box.querySelector('[data-zoom-out]').addEventListener('click', () => { zoom = Math.max(zoom-.2, .5); image.style.transform = `scale(${zoom})`; });
    box.querySelector('[data-fullscreen]').addEventListener('click', async () => { try { if (!document.fullscreenElement) await box.requestFullscreen(); else await document.exitFullscreen(); } catch (e) { console.warn('Fullscreen unavailable', e); } });
    box.addEventListener('click', e => { if (e.target === box) close(); });
    document.addEventListener('keydown', e => {
      if (box.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(current-1);
      if (e.key === 'ArrowRight') show(current+1);
      if (e.key === '+') { zoom = Math.min(zoom+.2,3); image.style.transform = `scale(${zoom})`; }
      if (e.key === '-') { zoom = Math.max(zoom-.2,.5); image.style.transform = `scale(${zoom})`; }
      if (e.key === 'Tab') { const focusable = [...box.querySelectorAll('button')]; const first=focusable[0], last=focusable[focusable.length-1]; if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();} else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();} }
    });
  }
};
