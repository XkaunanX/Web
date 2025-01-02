// events.js - Manejo de eventos avanzado
document.getElementById('colorToggleBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = document.body.style.backgroundColor === 'lightblue' ? 'lightgreen' : 'lightblue';
});

document.getElementById('resizeTextBtn').addEventListener('click', function() {
    let bodyText = document.body;
    let currentSize = parseInt(window.getComputedStyle(bodyText).fontSize);
    bodyText.style.fontSize = (currentSize + 2) + 'px';  // Incrementa el tamaño de fuente
});

document.getElementById('showAlertBtn').addEventListener('click', function() {
    alert("¡Este es un mensaje de alerta personalizada!");
});
