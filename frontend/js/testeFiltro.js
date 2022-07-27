/*

no frontend o usuário irá selecionar o que ele deseja que seja filtrado
os itens selecionados serão adicionados na lista de filtragem
a lista será percorrida e será verificado se determinados itens estão nela, caso estejam
o json abaixo será definido conforme o conteudo da lista, Y para sim, N para não
sendo assim, filtrar ou não filtrar por determinada opção

no caso de materia, será o número da materia, que só será possível adicionar uma por vez
por questões de facilidade

"Atrasadas": Y
"Pendentes": Y
"Concluidas": N
"OrdenarData": N
"FiltarMateria": 10

após esse arquivo ser enviado ao backend, será realizada a verificação do valor de cada chave
baseado no valor das chaves de filtrar por situação, será realizada a requisição das atividades
que se encaixam no que é desejado

no caso do valor de OrdenarData ser Y, ele irá inserir as atividades a uma lista, que passará
pela verificação da materia

a lista das atividades será percorrida e verificado se o id da materia é compativel com o valor
da chave FiltrarMateria, caso não seja, a atividade será removida da lista.

após isso, o id dessas atividades será enviado ao front-end
todas as atividades serão ocultadas e em seguida, as atividades com os ids enviados pelo
backend serão exibidas, de forma que apenas as que se adequem ao filtro apareçam.

Lembrar: é necessário fazer com que TODAS as atividades apareçam ao apertar o botão Limpar.

*/

var filtros = {
    Atrasadas: 'N',
    Pendentes: 'N',
    Concluidas: 'N',
    OrdenarData: 'N',
    FiltarMateria: 0
};

// Identificação e definição de função do botão de limpar

let btnLimpar = document.getElementsByClassName('button limpar')[0];
btnLimpar.addEventListener('click', limpar);

function limpar() {
    filtros['Atrasadas'] = 'N';
    filtros['Pendentes'] = 'N';
    filtros['Concluidas'] = 'N';
    filtros['OrdenarData'] = 'N';
    filtros['FiltarMateria'] = 0;
    $('#listaFiltros').empty();
    $('#filtroAtrasadas1').css('visibility', 'visible');
    $('#filtroPendentes1').css('visibility', 'visible');
    $('#filtroConcluidas1').css('visibility', 'visible');
    $('#filtroAtrasadas2').css('visibility', 'visible');
    $('#filtroPendentes2').css('visibility', 'visible');
    $('#filtroConcluidas2').css('visibility', 'visible');
}

let adcAtrasada = document.getElementById('filtroAtrasadas1');
let adcPendente = document.getElementById('filtroPendentes1');
let adcConcluida = document.getElementById('filtroConcluidas1');

adcAtrasada.addEventListener('click', incluirChavesSituacao);
adcPendente.addEventListener('click', incluirChavesSituacao);
adcConcluida.addEventListener('click', incluirChavesSituacao);

function incluirChavesSituacao() {
    var etid = event.target.id;
    var etidDif = etid.substring(0, etid.length-1);
    var valSit = etid.substring(6, etid.length-1);
    var vsSing = valSit.substring(0, valSit.length-1).toLowerCase();
    var sitCut = valSit.substring(0, 3).toLowerCase();
    if (filtros[valSit] == 'N') {
        filtros[valSit] = 'Y'
        $('#listaFiltros').append(`<span id="${sitCut}" class="chaveFiltro">${vsSing}&nbsp;<button id="${sitCut}X" class="btnChaveFiltro"><i id="${sitCut}I" class="fa-solid fa-xmark"></i></button></span>`);
        $(`#${etidDif}1`).css('visibility', 'hidden');
        $(`#${etidDif}2`).css('visibility', 'hidden');
    }
}

$(document).on('click', '.btnChaveFiltro', function() {
    var sitExt = {'atr': 'atrasada', 'pen': 'pendente', 'con': 'concluida'};
    var etid = event.target.id;
    var sitCut = etid.substring(0, etid.length-1);
    var valSit = sitExt[sitCut];
    var vsPlur = `${valSit[0].toUpperCase()}${valSit.substring(1, valSit.length)}s`;
    var idFil = `filtro${vsPlur}`;
    
    if (filtros[vsPlur] == 'Y') {
        filtros[vsPlur] = 'N';
        $(`#${sitCut}`).remove();
        $(`#${idFil}1`).css('visibility', 'visible');
        $(`#${idFil}2`).css('visibility', 'visible');
    }
})

$(document).on('click', '#FilterBtn', function() {
    var info = JSON.stringify({
        Atrasadas: filtros["Atrasadas"],
        Pendentes: filtros["Pendentes"],
        Concluidas: filtros["Concluidas"],
        OrdenarData: filtros["OrdenarData"],
        FiltrarMateria: filtros["OrdenarData"]
    });

    console.log(filtros)
    console.log(info)
    $.ajax({
        url: 'http://localhost:5000/filtrar',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        data: info,
        success: Sucesso,
        error: function(){console.log('Erro no POST.')}
    })

    function Sucesso(resposta) {
        console.log(resposta)
    }
})