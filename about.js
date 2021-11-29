console.log("hello world");

const option1Input = document.getElementById('option1')
const goalsFieldContent = document.getElementById('goalsField')


function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Submitted Successfully!");
}

// Example of how not to do it on line 12
// document.getElementById("rubberDucky").addEventListener("mouseover", alert("You are exceptionally perceptive!"))

let mouseOver = document.getElementById('rubberDucky')
mouseOver.onmouseover = () => {
	alert("You are exceiptionally perceptive!")
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);




let option1 = document.getElementById('option1')
option1.onclick = () => {
	document.getElementById('goalsField').textContent = "I would like to master Java for back-end development"
}

// let btn1 = option1Input.addEventListener('change', () => {
// 	goalsFieldContent.textContent = "I would like to master Java for back-end development"
// }) 