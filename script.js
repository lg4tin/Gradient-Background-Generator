var CSS = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');
var button = document.getElementById('button');

CSS.textContent = `linear-gradient(to right, red, yellow)`;

function setGradient() {
	body.style.background = 'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
	CSS.textContent = body.style.background + ';';
}

var randomNumber = function() {
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)

	var random1 = 'rgb' + '(' + r + ', ' + g + ', ' + b + ')' 
	return random1;
}

function randomColor() {
  var ran1 = randomNumber()
	var ran2 = randomNumber()

	body.style.background = 'linear-gradient(to right, ' + ran1 + ', ' + ran2 + ')';
	CSS.textContent = body.style.background + ';';
}

color1.addEventListener('input', setGradient)
color2.addEventListener('input', setGradient)
button.addEventListener('click', randomColor)