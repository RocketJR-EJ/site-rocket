// Inicialização do componente Accordion
new Accordion('.accordion-container', {
  // Opções de animação
  duration: 400, // duração da animação em ms
  easing: 'ease-in-out', // tipo de animação

  // Comportamento
  showMultiple: false, // permite apenas um item aberto de cada vez
  openOnInit: [], // índices dos itens que devem estar abertos na inicialização

  // Classes CSS personalizadas
  elementClass: 'ac', // classe para o elemento acordeão
  triggerClass: 'ac-trigger', // classe para o botão/trigger
  panelClass: 'ac-panel', // classe para o painel de conteúdo
  activeClass: 'ac-active', // classe aplicada ao item ativo

  // Callbacks
  beforeOpen: () => { }, // função a ser executada antes de abrir
  afterOpen: () => { }, // função a ser executada após abrir
  beforeClose: () => { }, // função a ser executada antes de fechar
  afterClose: () => { } // função a ser executada após fechar
});

// Efeito de máquina de escrever para o hero da página
document.addEventListener('DOMContentLoaded', function () {
  const options = {
    strings: [
      'da inovação!',
      'da tecnologia!',
      'da transformação digital!',
      'da excelência!',
      'das soluções tecnológicas!',
      'da criatividade!',
      'da qualidade!',
    ],
    typeSpeed: 60,           // velocidade de digitação
    backSpeed: 40,           // velocidade de apagamento
    backDelay: 1500,         // tempo antes de começar a apagar (ms)
    startDelay: 500,         // tempo antes de começar a digitar (ms)
    loop: true,              // repetição infinita
    smartBackspace: true    // apenas apaga o que é diferente entre strings
  };

  // Inicializa o Typed.js no elemento com ID "typed-text"
  if (document.getElementById('typed-text')) {
    new Typed('#typed-text', options);
  }
});