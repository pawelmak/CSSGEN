const preview = document.querySelector('.preview');
const body = document.querySelector('body');

//element values

const values = {
  bgColor: '#eeeeee',
  borderColor: '#3a3a3a',
  borderStyle: 'solid',
  width: 100,
  height: 100,
  borderTop: 0,
  borderRight: 0,
  borderBottom: 0,
  borderLeft: 0,
  topLeftRadius: 0,
  topRightRadius: 0,
  bottomRightRadius: 0,
  bottomLeftRadius: 0,
  rotate: 0
};

function rangeInput(e, el) {
  el.addEventListener(e, () => window.requestAnimationFrame(() => {
    if(el.classList.contains('top-left')) {
      preview.style.borderTopLeftRadius = `${el.value}%`;
      values.topLeftRadius = el.value;
      el.nextSibling.nextSibling.value = el.value;
    } else if(el.classList.contains('top-right')) {
      preview.style.borderTopRightRadius = `${el.value}%`;
      values.topRightRadius = el.value;
      el.nextSibling.nextSibling.value = el.value;
    } else if(el.classList.contains('bottom-right')) {
      preview.style.borderBottomRightRadius = `${el.value}%`;
      values.bottomRightRadius = el.value;
      el.nextSibling.nextSibling.value = el.value;
    } else if(el.classList.contains('bottom-left')) {
      preview.style.borderBottomLeftRadius = `${el.value}%`;
      values.bottomLeftRadius = el.value;
      el.nextSibling.nextSibling.value = el.value;
    } else if(el.classList.contains('rotate')) {
      preview.style.transform = `rotate(${el.value}deg)`;
      el.nextSibling.nextSibling.value = el.value;
      values.rotate = el.value;
    }  
  }));
}

function changeInput(el) {
  el.addEventListener('input', () => {
    if(el.id == 'border-color') {
      preview.style.borderColor = el.value;
      el.nextSibling.nextSibling.value = el.value;
      values.borderColor = el.value;
    } else if(el.id == 'hex-border' && el.value.length == 7) {
      checkColor(el);
      preview.style.borderColor = el.value;
      el.previousSibling.previousSibling.value = el.value;
      values.borderColor = el.value;   
    } else if(el.id == 'bg-color') {
      preview.style.backgroundColor = el.value;
      el.nextSibling.nextSibling.value = el.value;
      values.bgColor = el.value;
    } else if(el.id == 'hex-bg' && el.value.length == 7) {
      checkColor(el);
      preview.style.backgroundColor = el.value;
      el.previousSibling.previousSibling.value = el.value;
      values.bgColor = el.value;
    } else if(el.id == 'width-input') {
      preview.style.width = `${el.value}px`;
      values.width = el.value;
    } else if(el.id == 'height-input') {
      preview.style.height = `${el.value}px`;
      values.height = el.value;
    } else if(el.id == 'top-left-num') { 
      el.previousSibling.previousSibling.value = el.value;
      preview.style.borderTopLeftRadius = `${el.previousSibling.previousSibling.value}%`;
      values.topLeftRadius = el.value;
    } else if(el.id == 'top-right-num') {
      el.previousSibling.previousSibling.value = el.value;
      preview.style.borderTopRightRadius = `${el.previousSibling.previousSibling.value}%`;
      values.topRightRadius = el.value;      
    } else if(el.id == 'bottom-right-num') {
      el.previousSibling.previousSibling.value = el.value;
      preview.style.borderBottomRightRadius = `${el.previousSibling.previousSibling.value}%`;
      values.bottomRightRadius = el.value;     
    } else if(el.id == 'bottom-left-num') {
      el.previousSibling.previousSibling.value = el.value;
      preview.style.borderBottomLeftRadius = `${el.previousSibling.previousSibling.value}%`;
      values.bottomLeftRadius = el.value;         
    } else if(el.id == 'border-style') {
      preview.style.borderWidth = `${values.borderTop}px ${values.borderRight}px ${values.borderBottom}px ${values.borderLeft}px`;
      preview.style.borderStyle = el.value;
      values.borderStyle = el.value     
    } else if(el.id == 'border-top') { 
      values.borderTop = el.value;    
      preview.style.borderTop = `${values.borderTop}px ${values.borderStyle} ${values.borderColor}`;
    } else if(el.id == 'border-right') {
      values.borderRight = el.value;    
      preview.style.borderRight = `${values.borderRight}px ${values.borderStyle} ${values.borderColor}`;       
    } else if(el.id == 'border-bottom') {
      values.borderBottom = el.value;    
      preview.style.borderBottom = `${values.borderBottom}px ${values.borderStyle} ${values.borderColor}`;      
    } else if(el.id == 'border-left') {
      values.borderLeft = el.value;    
      preview.style.borderLeft = `${values.borderLeft}px ${values.borderStyle} ${values.borderColor}`;          
    } else if(el.id == 'rotate-num') {
      preview.style.transform = `rotate(${el.value}deg)`;        
      el.previousSibling.previousSibling.value = el.value;
      values.rotate = el.value;
    }
  })
}

function checkColor(el) {
  const reg = /[0-9a-f]/i;
  const arr = [];
  for(i in el.value) {
    arr.push(reg.exec(el.value[i]));
  } 
  el.value = '#' + arr.join('');
}

function output() {
  const output = document.querySelector('.output');
  output.classList.add('active');
  output.innerText = `.element-class {
  width: ${values.width}px;
  height: ${values.height}px;
  background-color: ${values.bgColor};`

  if(values.topLeftRadius > 0) output.innerText += `\n  border-top-left-radius: ${values.topLeftRadius}%;`;
  if(values.topRightRadius > 0) output.innerText += `\n  border-top-right-radius: ${values.topRightRadius}%;`;
  if(values.bottomRightRadius > 0) output.innerText += `\n  border-bottom-right-radius: ${values.bottomRightRadius}%;`;
  if(values.bottomLeftRadius > 0) output.innerText += `\n  border-bottom-left-radius: ${values.bottomLeftRadius}%;`;

  if(values.borderTop > 0 || values.borderRight > 0 || values.borderBottom > 0 || values.borderLeft > 0) {
    output.innerText += `\n  border-width: ${values.borderTop}px ${values.borderRight}px ${values.borderBottom}px ${values.borderLeft}px;
  border-color: ${values.borderColor};
  border-style: ${values.borderStyle};`;
  }

  if(values.rotate > 0) {
    output.innerHTML += `\n  transform: rotate(${values.rotate}deg);`
  }

  output.innerText += `
}`;
}

const btn = document.querySelector('.generate-btn');
btn.addEventListener('click', output);

const inputContainer = document.querySelector('.input-container');

inputContainer.addEventListener('keydown', (e) => {
  if(e.target.classList.contains('range')) {
    rangeInput("keydown", e.target);
  } else {
    changeInput(e.target);
  }
})

inputContainer.addEventListener('mouseover', (e) => {
  if(e.target.classList.contains('range')) {
    rangeInput("mousedown", e.target);
    rangeInput("mousemove", e.target);
  } else {
    changeInput(e.target);
  }
})

inputContainer.addEventListener('touchstart', (e) => {
  if(e.target.classList.contains('range')) {
    rangeInput("touchstart", e.target);
    rangeInput("touchmove", e.target);
    rangeInput("touchend", e.target);
  } else {
    changeInput(e.target);
  }
})

//dragging the element

const previewContainer = document.querySelector('.preview-container');
let offset = [0,0];
let isDown = false;

preview.addEventListener('mousedown', (e) => {
  isDown = true;
  offset = [preview.offsetLeft - e.clientX, preview.offsetTop - e.clientY];
});

previewContainer.addEventListener('mouseup', () => {
  isDown = false;
});

previewContainer.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(isDown) {
    preview.style.left = (e.clientX + offset[0]) + 'px';
    preview.style.top  = (e.clientY + offset[1]) + 'px';
  }
});

//touch dragging

function touchHandler(e) {
  const touch = e.changedTouches[0];

  const simulatedEvent = document.createEvent("MouseEvent");
      simulatedEvent.initMouseEvent({
      touchstart: "mousedown",
      touchmove: "mousemove",
      touchend: "mouseup"
  }[e.type], true, true, window, 1,
      touch.screenX, touch.screenY,
      touch.clientX, touch.clientY, false,
      false, false, false, 0, null);

  touch.target.dispatchEvent(simulatedEvent);
  e.preventDefault();
}

preview.addEventListener("touchstart", touchHandler);
preview.addEventListener("touchmove", touchHandler);
preview.addEventListener("touchend", touchHandler);
