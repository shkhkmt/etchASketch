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

const btnPopup = document.createElement('button')
btnPopup.id = 'btnPopup'; 
btnPopup.textContent = 'change size'; 
btnPopup.style.display = 'flex'; 
contentDiv.appendChild(btnPopup); 

btnPopup.addEventListener('click', getNumSides) 
let number; 

function getNumSides() {
  number = prompt("Choose number of squares per side: ");
  createSketchDiv(number) 
  return number; 
}

function createSketchDiv(getNumSides) {
  
  if (document.getElementById('sketchDiv') !== null) {
    const currentDiv = document.getElementById('sketchDiv'); 
    contentDiv.removeChild(currentDiv)  
  }

  const sketchDiv = document.createElement('div'); 
  sketchDiv.id = 'sketchDiv'; 
  sketchDiv.style.display = 'flex'; 
  sketchDiv.style.flexWrap = 'wrap';
  sketchDiv.style.aspectRatio = '1 / 1';
  sketchDiv.style.width = `${20 *number}px`; 
  contentDiv.appendChild(sketchDiv); 


  for (let i = 1; i <= number * number; i++) {
    const btnDiv = document.createElement('div'); 
    btnDiv.id = `bDiv${i}`;
    btnDiv.style.flex = '1 1 auto'; 
    btnDiv.style.aspectRatio = '1 / 1'; 
    btnDiv.style.width = '20px';  
    btnDiv.style.height = '20px';
    sketchDiv.appendChild(btnDiv);

  } 
  sketchDiv.addEventListener('mouseover', bgChange); 
}

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

