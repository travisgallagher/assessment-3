let restaurant = [`Freddy's`, `Bigeye Grill`,`Cubby's`]; 

function retRestaurant(event) {
    event.preventDefault(); 
    restaurant[Math.floor(Math.random()*restaurant.length)]; 
    return window.alert(`${restaurant} was selected!`)
}

let randomRest = document.querySelector(`#restGen`);
randomRest.addEventListener(`click`, retRestaurant);
``