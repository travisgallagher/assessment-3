// let form = document.querySelector('form#contact');
// form.addEventListener('submit', handleSubmit);
function favColor(event) {
    event.preventDefault();
    window.alert("My favorite color is green!")
}

let colorBtn = document.querySelector(`#color`)
colorBtn.addEventListener(`click`, favColor);

function favPlace(event) {
    event.preventDefault();
    window.alert("My favorite place is Lake Powell.")
}

let placeBtn = document.querySelector(`#place`)
placeBtn.addEventListener(`click`, favPlace);

function favRitual(event) {
    event.preventDefault();
    window.alert("I do not have a favorite ritual.")
}

let ritBtn = document.querySelector(`#ritual`)
ritBtn.addEventListener(`click`, favRitual);

function adviceThanker (event) {
	event.preventDefault(); 

	window.alert ("Thank you for your advice, please let me know if you think of anything else!"); 
}

let adviceForm = document.querySelector(`#advice`);
adviceForm.addEventListener(`submit`, adviceThanker); 