export const secondsToHm = (runtime) => {
  const d = Number(runtime);
  const h = Math.floor(d / 60);
  const m = Math.floor(d - h * 60);
  const hDisplay = h > 0 ? h + 'h' : '';
  const mDisplay = m > 0 ? m + 'm' : '';
  return `${hDisplay} ${mDisplay}`;
};

export const formatNum = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
});

export const filterSeven = (itemsArray) => {
  return itemsArray.filter((item, index) => index < 7);
};

export const urlTitle = (id, title) => {
  const formatTitle = title
    ?.replaceAll(/[^\w\s]/gi, '')
    .toLowerCase()
    .replaceAll(' ', '-');
  return `${id}-${formatTitle}`;
};
