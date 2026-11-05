window.ArtworkFilter = {
  init(artworks, onChange) {
    const type = document.getElementById('type-filter');
    const category = document.getElementById('category-filter');
    const year = document.getElementById('year-filter');
    const sort = document.getElementById('sort-filter');
    if (!type || !category || !year || !sort) return;
    const categories = [...new Set(artworks.map(a => a.category).filter(Boolean))].sort();
    const years = [...new Set(artworks.map(a => a.year).filter(Number.isFinite))].sort((a,b) => b-a);
    categories.forEach(value => category.add(new Option(window.ArtworkUtils.categoryLabel(value), value)));
    years.forEach(value => year.add(new Option(String(value), String(value))));
    const update = () => {
      let result = artworks.filter(a =>
        (type.value === 'all' || a.type === type.value) &&
        (category.value === 'all' || a.category === category.value) &&
        (year.value === 'all' || String(a.year) === year.value)
      );
      if (sort.value === 'newest') result.sort((a,b) => (b.year || 0) - (a.year || 0));
      if (sort.value === 'oldest') result.sort((a,b) => (a.year || 0) - (b.year || 0));
      onChange(result);
    };
    [type, category, year, sort].forEach(el => el.addEventListener('change', update));
    const params = new URLSearchParams(location.search);
    if (['traditional','digital'].includes(params.get('type'))) type.value = params.get('type');
    update();
  }
};
