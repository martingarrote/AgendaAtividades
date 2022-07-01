// Identificar botão de filtrar e de fechar
let btnFiltrar = document.getElementsByClassName('button filtrar')[0];
let btnLimpar = document.getElementsByClassName('button limpar')[0];

// Adicionar eventos ao clicar nos botões
//btnFiltrar.addEventListener('click', novofiltrarSituacao);
//btnFiltrar.addEventListener('click', filtrarMateria);

btnFiltrar.addEventListener('click', novofiltrarSituacao)

btnLimpar.addEventListener('click', desfiltrar);

function filtrarSituacao() {
    const aparecer = []
    var checkBoxes = document.querySelectorAll('.cbFiltro');
    console.log(checkBoxes.length)
    for (i = 0; i < checkBoxes.length; i++) {
        let idcb = checkBoxes[i].id
        let checkbox = document.getElementById(idcb)

        if (checkbox.checked) {
            aparecer.push('.sit.' + checkbox.id)
        }
    }

    if (aparecer.length > 0) {
        var concluidas = document.querySelectorAll('.sit.concluida');
        for (i = 0; i < concluidas.length; i++) {
            concluidas[i].style.display = 'none';
        }

        var pendentes = document.querySelectorAll('.sit.pendente');
        for (i = 0; i < pendentes.length; i++) {
            pendentes[i].style.display = 'none';
        }

        var atrasadas = document.querySelectorAll('.sit.atrasada');
        for (i = 0; i < atrasadas.length; i++) {
            atrasadas[i].style.display = 'none';
        }
    }
    
    if (aparecer.length == 0) {
        var concluidas = document.querySelectorAll('.sit.concluida');
        for (i = 0; i < concluidas.length; i++) {
            concluidas[i].style.display = "table-row"
        }

        var pendentes = document.querySelectorAll('.sit.pendente');
        for (i = 0; i < pendentes.length; i++) {
            pendentes[i].style.display = 'table-row';
        }

        var atrasadas = document.querySelectorAll('.sit.atrasada');
        for (i = 0; i < atrasadas.length; i++) {
            atrasadas[i].style.display = 'table-row';
        }
    }

    for (i in aparecer) {
        let exibir = document.querySelectorAll(aparecer[i])
        for (i = 0; i < exibir.length; i++) {
            exibir[i].style.display = 'table-row';
        }
    }
}

function novofiltrarSituacao() {
    const aparecer = []
    var checkBoxes = document.querySelectorAll('.cbFiltro');
    for (i = 0; i < checkBoxes.length; i++) {
        let idcb = checkBoxes[i].id
        let checkbox = document.getElementById(idcb)

        if (checkbox.checked) {
            aparecer.push('.sit.' + checkbox.id)
        }
    }

    if (aparecer.length == 0) {
        $('.sit.atrasada').show();
        $('.sit.pendente').show();
        $('.sit.concluida').show();
    }

    if (aparecer.length > 0) {
        $('.sit.atrasada').hide();
        $('.sit.pendente').hide();
        $('.sit.concluida').hide();
    }

    for (i in aparecer) {
        $(aparecer[i]).show();
    }
}

function filtrarMateria() {
        const materias = ['Biologia', 'Desenvolvimento de Projeto II', 
        'Educação Física', 'Empreendedorismo', 'Física', 'Geografia', 
        'História', 'Língua Portuguesa', 'Matemática', 'Programação II', 
        'Química', 'Sociologia', 'Vôlei'];

        for (i in materias) {
            $(`tr:has(td:contains(${i}))`).hide();
        }

        let select = document.getElementById('filtroMateria');
        let materia = select.options[select.selectedIndex];

        if (materia.text == "Nenhuma") {
            for (i in materias) {
                $(`tr:has(td:contains(${i}))`).show();
            }
        }
        else {
            $(`tr:has(td:contains(${materia.text}))`).show();
        }
}

function novofiltrarMateria() {
    /*document.addEventListener("DOMContentLoaded", function(){
        // seleciona todas as td's da tabela
        var tab = document.querySelectorAll("table td");
        for(var x=0; x<tab.length; x++){
           var td = tab[x];
           if(td.textContent.trim() == "Biologia"){
              // remove a linha
              td.parentNode.style.display = 'none';
           }
        }
     });
    */
    var select = document.getElementById('filtroMateria');
    var materia = select.options[select.selectedIndex];
    var tab = document.querySelectorAll("table td");
    for (i = 0; i < tab.length; i++) {
        var td = tab[i];
        console.log(td.textContent)
        if (td.textContent.trim() == materia) {
            td.parentNode.style.display = 'none';
        }
    }
}

function desfiltrar() {
    // Faz todas as atividades ocultadas pelo filtro de situação aparecerem
    $('.sit.atrasada').show();
    $('.sit.pendente').show();
    $('.sit.concluida').show();

    // 
}

function Filtro() {
    filtrarMateria();
    filtrarSituacao();
}