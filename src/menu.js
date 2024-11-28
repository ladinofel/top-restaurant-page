import './menu.css';

const menuGenerator = () => {
  const midContainer = document.querySelector('.mid-container');
  midContainer.textContent = "";

  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  
  const menuHeader = document.createElement('div');
  menuHeader.classList.add('menu-header');
  const menuTitle = document.createElement('p');
  menuTitle.classList.add('menu-title');
  menuTitle.textContent = 'COFFEE MENU';
  menuHeader.append(menuTitle);

  const columnContainer = document.createElement('div');
  columnContainer.classList.add('column-container');

  const menuColumnA = document.createElement('div');
  menuColumnA.classList.add('menu-column');

  const menuColumnB = document.createElement('div');
  menuColumnB.classList.add('menu-column');

  const menuItemsA = [
    {name: 'Americano', price: '$4.50'},
    {name: 'Expresso', price: '$3.30'},
    {name: 'Capuccino', price: '$4.50'},
    {name: 'Latte', price: '$4.60'},
    {name: 'Macchiato', price: '$4.80'},
    {name: 'Black Coffee', price: '$3.65'},
  ];

  const menuItemsB = [
    {name: 'Chocolate Croissant', price: '$4.80'},
    {name: 'Almond & Oatmeal Cookie', price: '$3.70'},
    {name: 'Egg Bagel', price: '$5.20'},
    {name: 'Lemon Cheescake', price: '$4.10'},
    {name: 'Caramel Pretzel', price: "$ 2.80"},
    {name: 'Chocolate Cake', price: '$4.50'},
  ];
  
  menuItemsA.forEach(item => {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-item');
    productContainer.textContent = `${item.name} ${item.price}`;
    menuColumnA.append(productContainer);
  })

  menuItemsB.forEach(item => {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-item');
    productContainer.textContent = `${item.name} ${item.price}`;
    menuColumnB.append(productContainer);
  })
  
  columnContainer.append(menuColumnA, menuColumnB);
  menuContainer.append(menuHeader, columnContainer);
  midContainer.append(menuContainer);
};

export {menuGenerator};