document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Restaurer le theme choisi
  const savedTheme = localStorage.getItem('theme');
  
  if (savedTheme === 'dark') {
    root.classList.add('dark-mode');
    if (themeBtn) themeBtn.textContent = '☀️';
  } else {
    root.classList.remove('dark-mode');
    if (themeBtn) themeBtn.textContent = '🌙';
  }

  // Activer le bouton du theme
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      // Basculer le theme
      root.classList.toggle('dark-mode');
      
      if (root.classList.contains('dark-mode')) {
        themeBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
      } else {
        themeBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light');
      }
    });
  }
});
