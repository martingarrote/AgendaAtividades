// Para identificar botões de abrir e fechar
let expFiltro = document.getElementById('exp-filtro');
let reclFiltro = document.getElementById('recolherFiltro');

// Para ocultar/mostrar a classe
let bsDefault = document.getElementsByClassName('bs-default')[0];
let bsExpandido = document.getElementsByClassName('bs-expandido')[0];


// Definir eventos para quando clicar nos botões 
expFiltro.addEventListener('click', expandir);
reclFiltro.addEventListener('click', recolher);

function expandir() {
    bsDefault.style.display = 'none'
    bsExpandido.style.display = 'block'
}

function recolher() {
    bsDefault.style.display = 'block'
    bsExpandido.style.display = 'none'
}