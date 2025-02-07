function typeWrite(elemento){
     const textoArray = elemento.innerHTML.split('');
     elemento.innerHTML = ' ';
     textoArray.forEach(function(letra, i){   
       
     setTimeout(function(){
         elemento.innerHTML += letra;
     }, 75 * i)
 
   });
 }
 const titulo = document.querySelector('.maquina-escrever');
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
        slidesPerView: 3,
      }
    }
  });
});


