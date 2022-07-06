
// Declarada a array da lista de filtros
let listaFiltragem = [];

// Testes
const sit = {filtroAtrasadas: 'atrasada', filtroPendentes: 'pendente', filtroConcluidas: 'concluida'};
const idchave = {atrasada: 'atr', pendente: 'pdn', concluida: 'cnc'};
const icinv = {atr: 'atrasada', pdn: 'pendente', cnc: 'concluida'};

// Identificação dos botões de filtrar e limpar e definição de suas funções
let btnFiltar = document.getElementsByClassName('button filtrar')[0];
let btnLimpar = document.getElementsByClassName('button limpar')[0];

btnFiltar.addEventListener('click', filtrar)
btnLimpar.addEventListener('click', limpar);

function filtrar() {
    alert('Ainda não é possível filtrar.')
}

function limpar() {
    $('#listaFiltros').empty();
    listaFiltragem.splice(0, listaFiltragem.length);
    console.log(listaFiltragem);
}

// Identificação dos botões de adicionar situações
let adcAtrasada = document.getElementById('filtroAtrasadas');
let adcPendente = document.getElementById('filtroPendentes');
let adcConcluida = document.getElementById('filtroConcluidas');

adcAtrasada.addEventListener('click', incluirChavesSituacao);
adcPendente.addEventListener('click', incluirChavesSituacao);
adcConcluida.addEventListener('click', incluirChavesSituacao);


function incluirChavesSituacao() {
    var etid = event.target.id;
    var idsit = sit[etid];
    var idc = idchave[idsit];
    if (!listaFiltragem.includes(idsit)) {
        listaFiltragem.push(idsit);
        $('#listaFiltros').append(`<span id="${idc}" class="chaveFiltro">${idsit}&nbsp;<button id="${idc}X" class="btnChaveFiltro"><i id="${idc}I" class="fa-solid fa-xmark"></i></button></span>`);     
    }
}

$(document).on('click', '.btnChaveFiltro', function() {
    var etid = event.target.id;
    var idrm = etid.substring(0, 3)
    var idsit = icinv[idrm];
    if (listaFiltragem.includes(idsit)) {
        listaFiltragem.splice(0, listaFiltragem.indexOf(idsit)+1);
        $(`#${idrm}`).remove();
    }

})