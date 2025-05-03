document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    let index = 0;
    const totalImages = images.length;

    function updateCarousel() {
        carousel.style.transform = `translateX(${-index * 800}px)`;
    }

    nextButton.addEventListener("click", () => {
        index = (index + 1) % totalImages;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    });

    setInterval(() => {
        index = (index + 1) % totalImages;
        updateCarousel();
    }, 4000); // Troca automática a cada 4 segundos
});
