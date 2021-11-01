const colorDisplay = document.getElementById('color');
const button = document.getElementById('button');

const body = document.querySelector('body');
const colorList = ['Red', 'Black', '#63b832', '#d93611', 'cyan', 'purple', 'brown']


function colorSwitch(){
    const i = Math.floor(Math.random() * colorList.length);
    colorDisplay.innerHTML = colorList[i];
    body.style.backgroundColor = colorList[i];
}

button.onclick = colorSwitch;