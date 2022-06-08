var modal = document.getElementById('atvModal');
var modalBtn = document.getElementById('modalBtn');
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var closeBtn2 = document.getElementById('closeBtn2')
var adcBtn = document.getElementById('btnAdicionarAtividade')

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal);
adcBtn.addEventListener('click', atvAdd);
window.addEventListener('click', clickOutside);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function atvAdd() {
    modal.style.display = 'none';
    setTimeout(function() {location.reload();}, 100);
}

function clickOutside(e) {
    if(e.target == modal) {
        modal.style.display = "none";  
    }
}
