window.ArtworkData = {
  async load() {
    try {
      const response = await fetch('data/artworks.json');
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();
      return Array.isArray(data.artworks) ? data.artworks : [];
    } catch (error) {
      console.error('Artwork loading error:', error);
      return [];
    }
  }
};
