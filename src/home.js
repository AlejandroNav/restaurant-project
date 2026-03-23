export function loadHome() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  // ── Hero ──
  const hero = document.createElement('div');
  hero.classList.add('hero');

  const h1 = document.createElement('h1');
  h1.id = 'rumbe';
  h1.textContent = 'Bienvenido a Rumbera';
  hero.appendChild(h1);

  const tagline = document.createElement('p');
  tagline.classList.add('tagline');
  tagline.textContent = 'El único lugar en Melchor Ocampo donde encuentras mariscos ricos, bonitos y baratos. Sabor casero de verdad.';
  hero.appendChild(tagline);

  const btn = document.createElement('button');
  btn.classList.add('cta-btn');
  btn.textContent = 'Ver el Menú';
  btn.addEventListener('click', () => {
    document.querySelector('[data-tab="menu"]').click();
  });
  hero.appendChild(btn);

  content.appendChild(hero);

  // ── Cards ──
  const cards = document.createElement('div');
  cards.classList.add('cards');

  const cardData = [
    { icon: '🍣', title: 'Sushi Mexicano', text: 'Nuestro sushi es el gancho — rollitos con toque casero que no encuentras en otro lado.' },
    { icon: '🌮', title: 'Sabor Tradicional', text: 'Recetas caseras con los ingredientes de siempre. Como lo hacía la abuela, pero con mariscos.' },
    { icon: '💰', title: 'Precios Accesibles', text: 'Rico y abundante sin que se note en el bolsillo. Mariscos para todos en Melchor Ocampo.' },
  ];

  cardData.forEach(({ icon, title, text }) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardIcon = document.createElement('span');
    cardIcon.classList.add('card-icon');
    cardIcon.textContent = icon;

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;

    const cardText = document.createElement('p');
    cardText.textContent = text;

    card.appendChild(cardIcon);
    card.appendChild(cardTitle);
    card.appendChild(cardText);
    cards.appendChild(card);
  });

  content.appendChild(cards);
}