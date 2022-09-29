export function pageLoadContact() {
  const content = document.getElementById('content'); 
  const socialHeader = document.createElement('h1'); 
  const socialContainer = document.createElement('ul'); 
  
  for (let i = 0; i < 3; i++) {
    let social = document.createElement('li'); 
    
    if (i === 0) {
      social.textContent = 'Twitter: @poopyscoopy';
    } else if (i === 1) {
      social.textContent = 'Instagram: @p00pysc00py'; 
    } else if (i === 2) {
      social.textContent = 'Facebook: facebook.com/poopyscoopy'; 
    } 

    socialContainer.appendChild(social); 
  }

  socialHeader.textContent = 'Contact Us'; 

  content.appendChild(socialHeader);
  content.appendChild(socialContainer); 
}