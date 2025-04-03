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