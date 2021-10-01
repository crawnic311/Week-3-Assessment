function ranodomRestaurant(event) {
    var restaruantArray = ['Milagros', 'Sushi Up', 'Taco Bell', 'Winco Deli']
    alert(`You should eat at ${restaruantArray[Math.floor(Math.random() * 4)]}`)

}

let randomR = document.querySelector('#buttonR')
randomR.addEventListener('click', ranodomRestaurant)