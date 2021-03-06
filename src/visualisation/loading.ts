export const addLoading = (element: HTMLElement): void => {
  element.classList.add('chart-container--loading');
};

export const removeLoading = (element: HTMLElement): void => {
  element.classList.remove('chart-container--loading');
  const loadingIndicator = element.querySelector('.chart-loading');
  if (loadingIndicator) {
    loadingIndicator.classList.add('hide');
  }
};
