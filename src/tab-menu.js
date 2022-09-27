export function pageLoadMenu() {
  const content = document.getElementById('content'); 
  const divMenu = document.createElement('div');
  const menuHeader = document.createElement('h1'); 
  const divBev = document.createElement('div'); 
  const bevWater = document.createElement('div'); 
  const divSides = document.createElement('div'); 
  const sideApple = document.createElement('div'); 
  const divMainDish = document.createElement('div'); 
  const mainDishBLT = document.createElement('div'); 

  menuHeader.classList.add('menu-header'); 
  menuHeader.textContent = 'Menu'; 

  divMenu.classList.add('div-menu'); 
  divMenu.appendChild(menuHeader); 

  content.appendChild(divMenu); 
}