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
header.style.fontSize = '32px'; 
header.style.fontWeight = '900'; 
contentDiv.appendChild(header); 

const btnPopup = document.createElement('button')
btnPopup.id = 'btnPopup'; 
btnPopup.textContent = 'change size'; 
btnPopup.style.display = 'flex';
btnPopup.style.marginTop = '1em'; 
btnPopup.style.fontSize = '16px'; 
contentDiv.appendChild(btnPopup); 

btnPopup.addEventListener('click', getNumSides) 
let number; 

function getNumSides() {
  let input = prompt("Choose number of squares per side (max: 100): ");
  
  let number = parseInt(input);

  if(isNaN(number) || number < 1 || number > 100) {
    alert('Please choose a number between 1 and 100'); 
  }
    createSketchDiv(number);
}

const sketchDiv = document.createElement('div'); 
sketchDiv.id = 'sketchDiv'; 
sketchDiv.style.display = 'flex'; 
sketchDiv.style.flexWrap = 'wrap';
sketchDiv.style.flexDirection = 'column'; 
sketchDiv.style.aspectRatio = '1 / 1';
sketchDiv.style.width = `600px`; 
contentDiv.appendChild(sketchDiv);

function createSketchDiv(number) {
  let crntDiv = document.getElementById('sketchDiv'); 
  
  if (crntDiv) {
    contentDiv.removeChild(crntDiv); 
  }
  const sketchDiv = document.createElement('div'); 
  sketchDiv.id = 'sketchDiv'; 
  sketchDiv.style.display = 'flex'; 
  sketchDiv.style.flexWrap = 'wrap';
  sketchDiv.style.flexDirection = 'column'; 
  sketchDiv.style.aspectRatio = '1 / 1';
  sketchDiv.style.width = `600px`; 
  contentDiv.appendChild(sketchDiv);

  for (let i = 1; i <= number * number; i++) {
    let btnDiv = document.createElement('div'); 
    btnDiv.id = `btnDiv${i}`;
    btnDiv.className = 'blocks'; 
    btnDiv.style.flex = '1 1 auto'; 
    btnDiv.style.aspectRatio = '1 / 1';
    btnDiv.style.width = `${600/number}px`;  
    btnDiv.style.height = `${600/number}px`; 
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

