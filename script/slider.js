const slides = document.querySelectorAll(".stepItem");
const markers = document.querySelectorAll(".sliderMarkers div");

const leftTrigger = document.querySelector(".leftTrigger");
const rightTrigger = document.querySelector(".rightTrigger");

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