(() => {
  const toggle = document.querySelector('[data-theme-toggle]');
  if (!toggle) return;

  const update = (theme) => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
    toggle.setAttribute('aria-pressed', String(theme === 'dark'));
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`);
  };

  const initial = document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  toggle.setAttribute('aria-pressed', String(initial === 'dark'));
  toggle.setAttribute('aria-label', `Switch to ${initial === 'dark' ? 'light' : 'dark'} theme`);
  toggle.addEventListener('click', () => update((document.documentElement.dataset.theme || initial) === 'dark' ? 'light' : 'dark'));
})();
