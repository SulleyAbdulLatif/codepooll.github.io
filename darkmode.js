// darkmode.js

function toggleDarkMode() {
    const htmlElement = document.querySelector('html');
    htmlElement.classList.toggle('dark-mode');
  
    if (htmlElement.classList.contains('dark-mode')) {
      localStorage.setItem('preferredMode', 'dark');
    } else {
      localStorage.setItem('preferredMode', 'light');
    }
  }
  
  // Check preferred mode on page load
  const preferredMode = localStorage.getItem('preferredMode');
  if (preferredMode === 'dark') {
    document.addEventListener('DOMContentLoaded', () => {
      toggleDarkMode();
    });
  }
  

  