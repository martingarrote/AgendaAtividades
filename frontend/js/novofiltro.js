// Declarada a array da lista de filtros
let listaFiltragem = [];

// Testes
const sit = {filtroAtrasadas: 'atrasada', filtroPendentes: 'pendente', filtroConcluidas: 'concluida'};
const idchave = {atrasada: 'atr', pendente: 'pdn', concluida: 'cnc'};
const icinv = {atr: 'atrasada', pdn: 'pendente', cnc: 'concluida'};
const idinc = {atr: 'filtroAtrasadas', pdn: 'filtroPendentes', cnc: 'filtroConcluidas'};

// json dos filtros 
var data = {
    'Atrasadas': 'N',
    'Pendentes': 'N',
    'Concluidas': 'N',
    'OrdenarData': 'N',
    'FiltarMateria': null
};

// Identificação dos botões de filtrar e limpar e definição de suas funções
let btnLimpar = document.getElementsByClassName('button limpar')[0];

btnLimpar.addEventListener('click', limpar);

function limpar() {
    $('#listaFiltros').empty();
    listaFiltragem.splice(0, listaFiltragem.length);
    $(`#filtroAtrasadas`).css('visibility', 'visible');
    $(`#filtroPendentes`).css('visibility', 'visible');
    $(`#filtroConcluidas`).css('visibility', 'visible');
}

// Identificação dos botões de adicionar situações
let adcAtrasada = document.getElementById('filtroAtrasadas');
let adcPendente = document.getElementById('filtroPendentes');
let adcConcluida = document.getElementById('filtroConcluidas');

adcAtrasada.addEventListener('click', incluirChavesSituacao);
adcPendente.addEventListener('click', incluirChavesSituacao);
adcConcluida.addEventListener('click', incluirChavesSituacao);


function incluirChavesSituacao() {
    var etid = event.target.id; // FiltroAtrasadas
    var idsit = sit[etid]; // atrasada
    var idc = idchave[idsit]; // atr
    if (!listaFiltragem.includes(idsit)) {
        listaFiltragem.push(idsit);
        $('#listaFiltros').append(`<span id="${idc}" class="chaveFiltro">${idsit}&nbsp;<button id="${idc}X" class="btnChaveFiltro"><i id="${idc}I" class="fa-solid fa-xmark"></i></button></span>`);     
        $(`#${etid}`).css('visibility', 'hidden');
    }
}

$(document).on('click', '.btnChaveFiltro', function() {
    var etid = event.target.id; // atrX
    var idrm = etid.substring(0,3); // atr
    var idsit = icinv[idrm]; // atrasada
    idic = idinc[idrm]; // filtroAtrasadas

    if (listaFiltragem.includes(idsit)) {
        for (i in listaFiltragem) {
            if (listaFiltragem[i] == idsit) {
                listaFiltragem.splice(i, 1)
                $(`#${idrm}`).remove();
                $(`#${idic}`).css('visibility', 'visible');
            }
        }
    }
})

// var dados = JSON.stringify({nome: nome, data: data, situacao: situacao, observacao: observacao, materia_id: materia_id});
//         $.ajax({
//             url: 'http://localhost:5000/adicionar/Atividade',
//             type: 'POST',
//             dataType: 'json',
//             contentType: 'application/json',
//             data: dados,
//             success: atividadeAdicionada,
//             error: erroAoAdicionar
//         });

$(document).on('click', '#FilterBtn', function() {
    var dados = JSON.stringify(listaFiltragem);
    console.log(dados)
        $.ajax({
            url: 'http://localhost:5000/filtrar',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: dados,
            success: Sucesso,
            error: function(){console.log('erro no post')}
        });

        function Sucesso() {
            console.log('Deu certo')
            $.ajax({
                url: 'http://localhost:5000/filtrar',
                type: 'GET',
                dataType: 'json',
                contentType: 'application/json',
                success: Sucesso2,
                error: function(){console.log('erro no get')}
            })
            function Sucesso2(resposta) {
                console.log(resposta)
            }
        }
})

/*

Fazer json que tenha os filtros possiveis e dependendo do que estiver na lista de filtragem, eles "receberem" Y ou N no caso de ser situação e ordenação e no caso de materia
"receber" o id da materia.

"Atrasadas": Y
"Pendentes": Y
"Concluidas": N
"OrdenarData": N
"FiltarMateria": 10

Tendo isso, no backend será verificado o valor e caso seja Y será realizada a requisição das atividades que se encaixem no filtro

*/