document.querySelector(".left-arrow").onclick = function() {
    var currentSlide = document.querySelector("#photo .slide.active");
    var previousSlide = currentSlide.previousElementSibiling;
    if (previousSlide === null) {
        previousSlide = currentSlide.parentElement.firstElementChild;
    }
    currentSlide.animate({
        opacity: [1, 0]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both",
    })
    currentSlide.classList.remove("active");
    previousSlide.animate({
        opacity: [0, 1]
    }, {
        duration: 500,
        easing: "ease",
        iterations: 1,
        fill: "both",
    })
    previousSlide.classList.add("active");
}
