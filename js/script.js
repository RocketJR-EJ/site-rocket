document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
});

document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-text", {
      strings: ["Chegou a hora <br> da inovação!"], 
      typeSpeed: 50, 
      backSpeed: 30, 
      startDelay: 500, 
      showCursor: true, 
      cursorChar: "|", 
      smartBackspace: true, 
      loop: false 
  });
});