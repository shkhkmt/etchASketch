const linkElement = document.createElement('link'); 
linkElement.rel = 'stylesheet'; 
linkElement.type = 'text/css'; 
linkElement.href = 'styles.css'; 

document.head.appendChild(linkElement); 

const contentDiv = document.createElement('div'); 
contentDiv.id = 'content'; 
document.body.appendChild(contentDiv); 

const header = document.createElement('header'); 
header.id = 'header'; 
header.textContent = 'Etch a Sketch'; 
contentDiv.appendChild(header); 

const sketchDiv = document.createElement('div'); 
sketchDiv.id = 'sketchDiv'; 
contentDiv.appendChild(sketchDiv); 

for (let i = 1; i <= 256; i++) {
  const buttons = document.createElement('button');
  buttons.id = `colBox${i}`; 

  sketchDiv.appendChild(buttons); 
}
/*
function handleHover(event) {
  let target = event.target;
  boxId = target.id; 
  console.log(boxId); 
  return boxId;  
}
*/ 

function rndCol() {
  let r = (Math.random() * 255); 
  let g = (Math.random() * 255); 
  let b = (Math.random() * 255);
  
  const color = `rgb(${r},${g}, ${b})`;
  return color
}

function bgChange(event) {
  let target = event.target; 
  let btn = document.getElementById(target.id); 
  btn.style.backgroundColor = rndCol();  
}


sketchDiv.addEventListener('mouseover', bgChange); 
