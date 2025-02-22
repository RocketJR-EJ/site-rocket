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
      strings: ["Chegou A Hora <br> Da Inovação"],
      typeSpeed: 50,
      backSpeed: 30,
      startDelay: 500,
      showCursor: true,
      cursorChar: "|",
      smartBackspace: true,
      loop: false
  });
});

document.querySelectorAll('.box-ask').forEach(box => {
  box.replaceWith(box.cloneNode(true));
});

// Adiciona os novos event listeners
document.querySelectorAll('.box-ask').forEach(box => {
  box.addEventListener('click', function(event) {
      event.stopPropagation();
      console.log("Click detectado");

      const isActive = this.classList.contains('active');

      // Primeiro remove 'active' de todas as boxes
      document.querySelectorAll('.box-ask').forEach(otherBox => {
          otherBox.classList.remove('active');
      });

      // Se não estava ativo, adiciona a classe
      if (!isActive) {
          this.classList.add('active');
          console.log("Classe 'active' adicionada");
      }
  });
});