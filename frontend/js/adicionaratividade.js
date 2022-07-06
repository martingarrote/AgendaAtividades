$(function() {
    $(document).on('click','#btnAdicionarAtividade', function() {
        nome = $("#campoNome").val();
        data = $("#campoData").val();
        situacao = $("#campoSituacao").val();
        observacao = $("#campoObservacao").val();
        materia_id = $("#campoMateria").val();

        // ano = data.slice(0,4);
        // mes = data.slice(5,7);
        // dia = data.slice(8,10);
        // if (data[5] == 0) {
        //     mes = data[6]
        // };
        // if (data[8] === 0) {
        //     dia = data[9]
        // }
        // data = `date(${ano}, ${mes}, ${dia})`
        // console.log(data)

        var dados = JSON.stringify({nome: nome, data: data, situacao: situacao, observacao: observacao, materia_id: materia_id});
        $.ajax({
            url: 'http://localhost:5000/adicionar/Atividade',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json',
            data: dados,
            success: atividadeAdicionada,
            error: erroAoAdicionar
        });
        function atividadeAdicionada(retorno) {
            if (retorno.resultado == 'ok') {
                console.log("A atividade foi adicionada com sucesso.");
                $("#campoNome").val("");
                $("#campoData").val("");
                $("#campoSituacao").val("");
                $("#campoObservacao").val("");
                $("#campoMateria").val("");
            }
            else {
               alert(`Erro na inclusão: ${retorno.resultado} ${retorno.detalhes}`)
            }
        }
        function erroAoAdicionar(retorno) {
            alert(`Erro na inclusão: ${retorno.resultado} ${retorno.detalhes}`);
        }
    })
})