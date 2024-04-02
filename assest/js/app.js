

const slides = document.querySelectorAll(".slide");
const controls = document.querySelectorAll(".control");
let activeSlide = 0;
let prevActive = 0;

changeSlides();
let int = setInterval(changeSlides, 12000);

function changeSlides() {
	slides[prevActive].classList.remove("active");
	controls[prevActive].classList.remove("active");

	slides[activeSlide].classList.add("active");
	controls[activeSlide].classList.add("active");

	prevActive = activeSlide++;

	if (activeSlide >= slides.length) {
		activeSlide = 0;
	}

	console.log(prevActive, activeSlide);
}

controls.forEach((control) => {
	control.addEventListener("click", () => {
		let idx = [...controls].findIndex((c) => c === control);
		activeSlide = idx;

		changeSlides();

		clearInterval(int);
		int = setInterval(changeSlides, 12000);
	});
});

const heading = document.querySelector('.slider-container h1');

function updateSeconds() {
    const d = new Date();
    let seconds = d.getSeconds();
    if (seconds % 3 === 0) {
        heading.style.color = "#dfa917";
    } else {
        heading.style.color = "#fff";
    }
}

setInterval(updateSeconds, 1000);

var pause = document.querySelector(".pause");
var audio = document.querySelector(".audio");

function togglePlay() {
	if (audio.paused) {
		audio.play();
		pause.innerHTML = '<i class="fa-solid fa-circle-pause"></i>';
	} else {
		pause.innerHTML = '<i class="fa-solid fa-circle-play"></i>';
		audio.pause();
		pause.style.color = '<i class="fa-solid fa-circle-play"></i>';
	}
}

