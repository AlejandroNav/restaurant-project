export function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = '';

  const menuData = [
    {
      section: "Sushi",
      items: [
        { name: "Sushi de Surimi", desc: "Alga Nori, Aguacate, Queso Philadelphia, Mango, Pepino y Surimi.", price: "$85" },
        { name: "Sushi de Camarón", desc: "Alga Nori, Aguacate, Queso Philadelphia, Mango, Pepino y Camarón.", price: "$90" },
        { name: "Sushi Empanizado", desc: "Rollo empanizado y frito, relleno de camarón y queso philadelphia, bañado en mayonesa de chipotle.", price: "$100" },
      ]
    },
    {
      section: "Antojitos",
      items: [
        { name: "Empanada", desc: "De Camarón, Pulpo o Combinada.", price: "$60" },
        { name: "Pescadito", desc: "Pescado rebosado y frito.", price: "$35" },
        { name: "Pescadilla", desc: null, price: "$15 o 3x$40" },
        { name: "Tostada Yemaya", desc: "Ceviche de Camarón, Pulpo y Surimi.", price: "$70" },
        { name: "Tostada Sencilla", desc: "Camarón, Pulpo o Surimi.", price: "$60" },
      ]
    },
    {
      section: "Platos Fuertes",
      items: [
        { name: "Filete", desc: "Filete de pescado con ensalada y arroz.", price: "$80" },
        { name: "Mojarra", desc: "Al mojo de ajo o a la diabla.", price: "$200–250" },
        { name: "Hamburguesa de Camarón", desc: "Con papas.", price: "$90" },
        { name: "Camarones al Mojo de Ajo o a la Diabla", desc: null, price: "$140" },
        { name: "Taco Gobernador", desc: "Tortilla de harina, camarón, queso, col y mayonesa de chipotle.", price: "$60" },
      ]
    },
    {
      section: "Caldos",
      items: [
        { name: "Caldo Chico de Camarón", desc: null, price: "$80" },
        { name: "Caldo Grande de Camarón", desc: null, price: "$130" },
        { name: "Marucamarón", desc: "Fideos.", price: "$100" },
      ]
    },
    {
      section: "Cocteles",
      items: [
        { name: "Coctel de Camarón Chico", desc: null, price: "$85" },
        { name: "Coctel de Camarón Grande", desc: null, price: "$115" },
        { name: "Vuelve a la Vida", desc: "Camarón, surimi, pulpo y ostión.", price: "$125" },
        { name: "Coctel de Pulpo", desc: null, price: "$95" },
      ]
    },
    {
      section: "Postres",
      items: [
        { name: "Helado", desc: null, price: "$30" },
        { name: "Rebanada de Pastel", desc: null, price: "$55" },
      ]
    },
    {
      section: "Bebidas",
      items: [
        { name: "Café", desc: null, price: "$20" },
        { name: "Jarra de Agua Fresca", desc: null, price: "$60" },
        { name: "Refresco", desc: null, price: "$35" },
        { name: "Boing", desc: null, price: "$35" },
      ]
    },
  ];

  const menuHeader = document.createElement('div');
  menuHeader.classList.add('menu-header');
  menuHeader.innerHTML = `<h1 class="menu-title">Menú</h1><p class="menu-subtitle">Mariscos La Rumbera, Melchor Ocampo</p>`;
  content.appendChild(menuHeader);

  const grid = document.createElement('div');
  grid.classList.add('menu-grid');

  menuData.forEach(({ section, items }) => {
    const block = document.createElement('div');
    block.classList.add('menu-section');

    const heading = document.createElement('h2');
    heading.classList.add('menu-section-title');
    heading.textContent = section;
    block.appendChild(heading);

    items.forEach(({ name, desc, price }) => {
      const row = document.createElement('div');
      row.classList.add('menu-item');

      const info = document.createElement('div');
      info.classList.add('menu-item-info');

      const itemName = document.createElement('span');
      itemName.classList.add('menu-item-name');
      itemName.textContent = name;
      info.appendChild(itemName);

      if (desc) {
        const itemDesc = document.createElement('span');
        itemDesc.classList.add('menu-item-desc');
        itemDesc.textContent = desc;
        info.appendChild(itemDesc);
      }

      const itemPrice = document.createElement('span');
      itemPrice.classList.add('menu-item-price');
      itemPrice.textContent = price;

      row.appendChild(info);
      row.appendChild(itemPrice);
      block.appendChild(row);
    });

    grid.appendChild(block);
  });

  content.appendChild(grid);
}