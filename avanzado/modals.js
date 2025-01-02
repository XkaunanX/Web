// modals.js - Modal con transiciones
function showModal() {
    let modal = document.getElementById('myModal');
    modal.style.display = 'block';
    setTimeout(() => {
        modal.style.opacity = 1;  // Transición de opacidad
    }, 10);
}

function closeModal() {
    let modal = document.getElementById('myModal');
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = 'none';  // Cierra el modal después de la transición
    }, 300);
}

document.getElementById('openModalBtn').addEventListener('click', showModal);
document.getElementById('closeModalBtn').addEventListener('click', closeModal);
document.getElementById('confirmModalBtn').addEventListener('click', function() {
    alert("Confirmación recibida");
    closeModal();
});
