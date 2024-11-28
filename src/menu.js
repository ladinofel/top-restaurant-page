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

  const menuInfo = document.createElement('div');
  menuInfo.classList.add('menu-info');

  const menuItems = [
    {name: 'Americano', price: '$4.50'},
    {name: 'Expresso', price: '$3.30'},
    {name: 'Capuccino', price: '$4.50'},
    {name: 'Latte', price: '$4.60'},
    {name: 'Macchiato', price: '$4.80'},
    {name: 'Black Coffee', price: '$3.65'},
  ];
  
  menuItems.forEach(item => {
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-item');
    productContainer.textContent = `${item.name} ${item.price}`;
    menuInfo.append(productContainer);
  })
  
  menuContainer.append(menuHeader, menuInfo);
  midContainer.append(menuContainer);

};

export {menuGenerator};