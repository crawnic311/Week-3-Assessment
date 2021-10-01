

function favColor(event) {
    alert('Dillon\'s favorite color is blue')
}


function favPlace(event) {
    alert('Dillon\'s favorite place is Nepal')
}


function favRitual(event) {
    alert('Dillon\'s favorite ritual is hiking timp each summer')
}

function whatsThis(event) {
    open('https://www.youtube.com/watch?v=xvFZjo5PgG0')
}

let colorBtn = document.querySelector('#color')
let placeBtn = document.querySelector('#place')
let ritualBtn = document.querySelector('#ritual')
let whatsThisBtn = document.querySelector('#whats-this')

colorBtn.addEventListener('click', favColor)
placeBtn.addEventListener('click', favPlace)
ritualBtn.addEventListener('click', favRitual)
whatsThisBtn.addEventListener('mouseover', whatsThis)