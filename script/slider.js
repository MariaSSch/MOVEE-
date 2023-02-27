const slides = document.querySelectorAll(".hiw__step-item");
const markers = document.querySelectorAll(".hiw__slider-markers div");

const leftTrigger = document.querySelector(".hit__left-trigger");
const rightTrigger = document.querySelector(".hiw__right-trigger");

let slideIndex = 1;


function onWindowResize() {
    if(document.documentElement.clientWidth <= 992) {
        slideShow(slideIndex);
        
    } else {
        slides.forEach((slide) => slide.style.display = "flex");
    }

}
onWindowResize();

window.addEventListener("resize", () => {
    onWindowResize();
})

function slideShow(n) {
    if (n > slides.length) {
        slideIndex = 1; //after reach the end go to beggining
    }
    if (n < 1) {
        slideIndex = slides.length; //other end
    }

    slides.forEach((slide) => {
        slide.style.display = "none";
    });
    slides[slideIndex - 1].style.display = "flex";

    markers.forEach((marker) => {
        marker.style.backgroundColor = "#333";
    });
    markers[slideIndex - 1].style.backgroundColor = "#FED100";
}


leftTrigger.addEventListener("click", () => {
    slideShow(slideIndex -= 1)
})

rightTrigger.addEventListener("click", () => {
    slideShow(slideIndex += 1)
})