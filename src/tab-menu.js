export function pageLoadMenu() {
  const content = document.getElementById('content');
  const menuHeader = document.createElement('h1');
  const menuContainer = document.createElement('div');
  const appHeader = document.createElement('h2');
  const appNachos = document.createElement('p'); 
  const mainDishHeader = document.createElement('h2');
  const mainDishSteak = document.createElement('p'); 
  const sideDishHeader = document.createElement('h2');
  const sideDishPotato = document.createElement('p'); 
  const bevHeader = document.createElement('h2');
  const bevWater = document.createElement('p'); 

  menuHeader.textContent = 'Menu';
  appHeader.textContent = 'Appetizers';
  appNachos.textContent = 'Nachos';
  mainDishHeader.textContent = 'Main Dishes';
  mainDishSteak.textContent = 'Steak'; 
  sideDishHeader.textContent = 'Side Dishes'; 
  sideDishPotato.textContent = 'Potato'; 
  bevHeader.textContent = 'Beverages';
  bevWater.textContent = 'Water'; 

  menuContainer.classList.add('menu-container');
  
  menuContainer.appendChild(appHeader);
  menuContainer.appendChild(appNachos);
  menuContainer.appendChild(mainDishHeader);
  menuContainer.appendChild(mainDishSteak); 
  menuContainer.appendChild(sideDishHeader);
  menuContainer.appendChild(sideDishPotato); 
  menuContainer.appendChild(bevHeader); 
  menuContainer.appendChild(bevWater); 
  content.appendChild(menuHeader);
  content.appendChild(menuContainer);
}