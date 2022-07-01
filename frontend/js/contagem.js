$(function() {

    let spantt = document.getElementsByClassName('sit-color total');
    let spanatr = document.getElementsByClassName('sit-color atrasada');
    let spanpdt = document.getElementsByClassName('sit-color pendente');
    let spancnc = document.getElementsByClassName('sit-color concluida');

    $.ajax({
        url: 'http://localhost:5000/contagem_atividades',
        method: 'GET',
        dataType: 'json',
        success: Contar,
        error: function() {
            alert("Algo deu errado, verifique o backend!");
        }
    });

    function Contar(resposta) {
            $(spantt).append(resposta.total);
            $(spancnc).append(resposta.concluida);
            $(spanpdt).append(resposta.pendente);
            $(spanatr).append(resposta.atrasada);
        }
    }
)