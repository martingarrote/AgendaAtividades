let modifyBtn = document.getElementById('modifyBtn');

modifyBtn.addEventListener('click', modificar)

var exibir = true

function modificar() {
    if (exibir == true) {
        $('.fa-solid.fa-pen-to-square').css('visibility', 'visible');
        exibir = false
    }

    else if (exibir == false) {
        $('.fa-solid.fa-pen-to-square').css('visibility', 'hidden');
        exibir = true
    }
}



