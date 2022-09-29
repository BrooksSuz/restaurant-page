import { pageLoadHome } from './tab-home'; 
import { pageLoadMenu } from './tab-menu';
import { pageLoadContact } from './tab-contact';
import './style.css'; 
import './menu.css'; 
import './contact.css'; 

const content = document.getElementById('content'); 
const tabContainer = document.createElement('div'); 

for (let i = 0; i < 3; i++) {
  const tab = document.createElement('a'); 
  tab.href = '#'; 
  tab.addEventListener('click', function() {
    while (content.children.length > 1) {
      content.children[1].remove(); 
    }
  });

  if (i === 0) {
    tab.textContent = 'Home';
    tab.addEventListener('click', pageLoadHome); 
  } else if (i === 1) {
    tab.textContent = 'Menu'; 
    tab.addEventListener('click', pageLoadMenu); 
  } else if (i === 2) {
    tab.textContent = 'Contact Us'; 
    tab.addEventListener('click', pageLoadContact); 
  }

  tabContainer.appendChild(tab); 
}

tabContainer.classList.add('tab-container'); 

content.appendChild(tabContainer); 

pageLoadHome(); 