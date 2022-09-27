export function pageLoadHome() {
  const content = document.getElementById('content'); 
  const header = document.createElement('h1'); 
  const restaurantImg = document.createElement('img'); 
  const para = document.createElement('p'); 

  content.classList.add('content'); 
  header.textContent = 'lorem ipsum'; 
  header.classList.add('h1'); 
  restaurantImg.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'; 
  restaurantImg.classList.add('img'); 
  para.textContent = 'lorem ipsum'; 

  content.appendChild(header); 
  content.appendChild(restaurantImg); 
  content.appendChild(para); 
}