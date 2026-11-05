
window.ArtworkFilter = {
  init(artworks, onChange) {
    const type = document.getElementById('type-filter');
    const year = document.getElementById('year-filter');
    const sort = document.getElementById('sort-filter');

    if (!type || !year || !sort) return;

    // 取得網址參數
    const params = new URLSearchParams(location.search);
    const selectedType = params.get('type');

    // 判斷是否從手繪或電繪分類進入
    const isSpecificType = ['traditional', 'digital'].includes(selectedType);

    // 分類頁：固定作品類型並隱藏類型選項
    if (isSpecificType) {
      type.value = selectedType;
      type.hidden = true;
      const typeLabel = document.querySelector('label[for="type-filter"]');
      if (typeLabel) typeLabel.hidden = true;
    }

    // 建立年份選項
    const years = [
      ...new Set(
        artworks
          .map(a => a.year)
          .filter(Number.isFinite)
      )
    ].sort((a, b) => b - a);

    years.forEach(value => {
      year.add(new Option(String(value), String(value)));
    });

    // 篩選及排序
    const update = () => {
      let result = artworks.filter(a =>
        (type.value === 'all' || a.type === type.value) &&
        (year.value === 'all' || String(a.year) === year.value)
      );

      if (sort.value === 'newest') {
        result.sort((a, b) => (b.year || 0) - (a.year || 0));
      }

      if (sort.value === 'oldest') {
        result.sort((a, b) => (a.year || 0) - (b.year || 0));
      }

      onChange(result);
    };

    // 監聽篩選條件
    [type, year, sort].forEach(el => {
      el.addEventListener('change', update);
    });

    update();
  }
};
