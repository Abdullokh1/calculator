const elBtn = document.getElementById('leftBtn');
let output = document.getElementById('output');
const elContent = document.getElementById('hideContent');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const ac = document.getElementById('ac');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const equal = document.getElementById('equal');
const xbtn = document.getElementById('xBtn');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const divide = document.getElementById('divide');
const multiplication = document.getElementById('multiplication');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const sin = document.getElementById('sin');
const cos = document.getElementById('cos');
const tan = document.getElementById('tan');
const log = document.getElementById('log');
const percentage = document.getElementById('percentage');
const leftBracket = document.getElementById('leftBracket');
const rightBracket = document.getElementById('rightBracket');
const check  = document.getElementById('check');
const p  = document.getElementById('p');


elBtn.addEventListener('click', () =>{
  elContent.classList.toggle('left');
  elContent.style.transition = 'transform 0.4s ease';
  elBtn.classList.toggle('left');
})


zero.addEventListener('click', addElement);
one.addEventListener('click', addElement);
two.addEventListener('click', addElement);
three.addEventListener('click', addElement);
four.addEventListener('click', addElement);
five.addEventListener('click', addElement);
six.addEventListener('click', addElement);
seven.addEventListener('click', addElement);
eight.addEventListener('click', addElement);
nine.addEventListener('click', addElement);




function addElement(e){
  output.append(e.target.innerText);
}
ac.addEventListener('click', () =>{
  output.textContent = '';
})

plus.addEventListener('click', (e) =>{

    output.append(e.target.innerText);
})

equal.addEventListener('click', () =>{
  output.textContent = eval(output.innerText);
})

minus.addEventListener('click', (e) =>{
  output.append(e.target.innerText);
})

divide.addEventListener('click', (e) =>{
  output.append(e.target.innerHtml = '/')
})

dot.addEventListener('click', (e) =>{
  output.append(e.target.innerText);
})

multiplication.addEventListener('click', (e) =>{
  output.append(e.target.innerHtml = '*');
})

percentage.addEventListener('click', (e) =>{
  output.append(e.target.innerHtml = '%');
})


xbtn.addEventListener('click', () =>{
  let arr = Array.from(output.textContent);

  for (let i = arr.length; i >= 0; i--){
    output.innerText = arr[i];
  }
})


cos.addEventListener('click', () =>{
  output.innerText = Math.cos(output.innerText);
})


sin.addEventListener('click', () =>{
  output.innerText = Math.sin(output.innerText);
})


tan.addEventListener('click', () =>{
  output.innerText = Math.tan(output.innerText);
})


log.addEventListener('click', () =>{
  output.innerText = Math.log(output.innerText);
})

leftBracket.addEventListener('click', (e) =>{
  output.append(e.target.innerText);
})

rightBracket.addEventListener('click', (e) =>{
  output.append(e.target.innerText);
})


check.addEventListener('click', (e) =>{
  output.innerText = Math.sqrt(output.innerText);
})
p.addEventListener('click', () =>{
  output.innerText = Math.PI(output.innerText);
})