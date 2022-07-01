let removeBtn = document.getElementById('removeBtn');
removeBtn.addEventListener('click', RemoverAtividade)


function RemoverAtividade() {
    var cb = document.getElementsByClassName('checkbox')[0]
    if (cb.style.visibility != 'visible') {
        Exibir()
    }
    else {
        Remover()
    }
}

function Exibir() {
    const opts = document.querySelectorAll('.checkbox');

    if (opts.length > 0) {
        for (i = 0; i < opts.length; i++) {
            let att = opts[i]
            att.style.visibility = 'visible';
        }
    }
    else {
        alert("Não é possível remover uma atividade não tendo nenhuma.")
    }
        
}

function Remover() {
    const selecionados = []
    const linhasRemover = []

    var checkBoxes = document.querySelectorAll('.checkbox');
    for (i = 0; i < checkBoxes.length; i++) {
        let idcb = checkBoxes[i].id;
        let checkbox = document.getElementById(idcb)

        if (checkbox.checked) {
            let idArrumado = idcb.substring(3)
            selecionados.push(idArrumado)
        }
    }
    if (selecionados.length > 0) {
        for (n in selecionados) {
            let idLinha = `linha_${selecionados[n]}`
            linhasRemover.push(idLinha)
        }

        for (l in linhasRemover) {
            let idLinha = linhasRemover[l]
            let idNum = idLinha.substring(6)

            $.ajax({
                url: `http://localhost:5000/excluir/Atividade/${idNum}`,
                type: 'DELETE',
                dataType: 'json',
                sucess: atividadeExcluida,
                error: erroAoExcluir
            });
            function atividadeExcluida(retorno) {
                if (retorno.resultado == "ok") {
                    console.log(`Atividade ${idLinha} removida.`)
                }
                else {alert(`${retorno.resultado}:${retorno.detalhes}`)};
            }
        }
        function erroAoExcluir(retorno) {
            alert("Erro ao realizar a exclusão. Verifique o backend!");
        }

        // A cada linha removida vai demorar 0.05 segundos a mais para reiniciar a página, para que tudo seja removido corretamente.
        let tempo = linhasRemover.length*50
        setTimeout(function() {location.reload();}, tempo);
    }
    else {
        Ocultar();
    }
}

function Ocultar() {
    const opts = document.querySelectorAll('.checkbox');

    if (opts.length > 0) {
        for (i = 0; i < opts.length; i++) {
            let att = opts[i]
            att.style.visibility = 'hidden';
        }
    }
}