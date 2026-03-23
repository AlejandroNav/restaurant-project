export function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const h1 = document.createElement('h1');
  h1.textContent = 'Welcome to My Restaurant';
  content.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'Best food in town.';
  content.appendChild(p);
}