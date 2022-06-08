$(function () { // quando o documento estiver pronto/carregado

    // chamada ao backend
    $.ajax({
        url: 'http://localhost:5000/listar/Atividade',
        method: 'GET',
        dataType: 'json', // os dados são recebidos no formato json
        success: listar, // chama a função listar para processar o resultado
        error: function () {
            alert("Erro ao ler os dados, verifique o backend!");
        }
    });

    // função executada quando tudo dá certo
    function listar(atividades) {
        // percorrer a lista de pessoas retornadas; 
        for (var i in atividades) { //i vale a posição no vetor
            lin = '<tr id = "linha_' + atividades[i].id + '">' + // elabora linha com os dados da pessoa
                '<td>' + atividades[i].nome + '</td>' +
                '<td>' + atividades[i].data + '</td>' +
                '<td><p class="situacao ' + atividades[i].situacao + '">'+ atividades[i].situacao + '</p></td>' +
                '<td>' + atividades[i].observacao + '</td>' +
                '<td>' + atividades[i].materia.nome + '</td>' +
                '<td><input type="checkbox" class="checkbox" id ="cb_' + atividades[i].id + '"></input>' +
                '</tr>';
            // adiciona a linha no corpo da tabela
            $('#corpoTabelaAtividades').append(lin);
        }
    }
    
});
