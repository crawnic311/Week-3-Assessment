console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


function imageHoverCompliment(event) {
	alert('Nice straight teeth buddy ol\' pal!')

}

let catImg = document.querySelector('#catpic')
catImg.addEventListener('mouseover', imageHoverCompliment)