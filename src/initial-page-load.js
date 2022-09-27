export default function pageLoad() {
  const header = document.createElement('h1'); 
  const restaurantImg = document.createElement('img'); 
  const para = document.createElement('p'); 

  header.textContent = 'lorem ipsum'; 
  restaurantImg.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80'; 
  para.textContent = 'lorem ipsum'; 

  document.getElementById('content').appendChild(header); 
  document.getElementById('content').appendChild(restaurantImg); 
  document.getElementById('content').appendChild(para); 
}