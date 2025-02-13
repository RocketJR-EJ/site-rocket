function typeWrite(elemento) {
  const texto = elemento.innerHTML.trim(); // Remove espaços extras
  elemento.innerHTML = ''; // Limpa o conteúdo antes de começar

  let i = 0;

  function escrever() {
      if (i < texto.length) {
          if (texto[i] === '\n' || texto[i] === ' ') {
              elemento.innerHTML += texto[i]; // Mantém espaços e quebras naturais
          } else if (texto[i] === '<' && texto.substring(i, i + 4) === '<br>') {
              elemento.innerHTML += '<br>'; // Adiciona <br> corretamente
              i += 3; // Pula os caracteres de <br>
          } else {
              elemento.innerHTML += texto[i]; // Adiciona a letra
          }

          i++;
          setTimeout(escrever, 75);
      }
  }

  escrever();
}

const titulo = document.querySelector('.maquina-escrever');

// Substitui quebras de linha manuais do HTML por <br> para evitar pulos excessivos
titulo.innerHTML = titulo.innerHTML.replace(/\n\s*/g, '<br>'); 

typeWrite(titulo);



 document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    loop: true,
    slidesPerView: 1, // Exibe um slide por vez (ajuste conforme necessário)
    spaceBetween: 20, // Espaço entre os slides

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      }
    }
  });
});


