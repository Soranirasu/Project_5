const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let position = 0;
let slidesNumb = slides.length;


let arrowR = document.querySelector('.arrow_right');
let arrowL = document.querySelector('.arrow_left');
console.log(arrowR)
let image = document.querySelector('.banner-img')

let txt = document.querySelector('.banner-txt')
let dotNumber = document.querySelector('.dots')

arrowL.addEventListener('click', function () {
	if (position == 0) {
		position = slidesNumb - 1;
	}
	else {
		position--;
	}
	let newSrc = "./assets/images/slideshow/" + slides[position].image;
	image.setAttribute("src", newSrc);

	let newTxt = slides[position];
	txt.innerHTML = newTxt.tagLine;

	console.log(slides[position].tagLine);
})

arrowR.addEventListener('click', function () {
	if (position == slidesNumb - 1) {
		position = 0;
	}
	else {
		position++;
	}
	let newSrc = "./assets/images/slideshow/" + slides[position].image;
	image.setAttribute("src", newSrc);

	let newTxt = slides[position];
	txt.innerHTML = newTxt.tagLine;
	
	console.log(slides[position].tagLine);
})
