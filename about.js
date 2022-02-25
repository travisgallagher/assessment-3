console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert("Form submitted successfully!")
	
	// console.log('form submit');
}

function sendCompliment(event) {
	window.alert("You found the duck! You are a superior being!")

}

let form = document.querySelector('form#contact');
form.addEventListener('submit', handleSubmit);


let pic = document.querySelector(`#duckPic`);
pic.addEventListener('mouseover', sendCompliment); 


function adviceThanker (event) {
	event.preventDefault(); 

	window.alert ("Thank you for your advice, please let me know if you think of anything else!"); 
}

let adviceForm = document.querySelector(`#advice`);
adviceForm.addEventListener(`submit`, adviceThanker); 
