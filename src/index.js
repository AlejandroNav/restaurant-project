import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';

const tabLoaders = {
  home: loadHome,
  menu: loadMenu,
  contact: loadContact,
};

function switchTab(tabName) {
  // Update active button
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });

  // Clear and reload content
  tabLoaders[tabName]();
}

// Attach click listeners to all nav buttons
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

// Load home page on startup
loadHome();
