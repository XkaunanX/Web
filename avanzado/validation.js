// validation.js - Validación avanzada del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formError = document.getElementById('formError');

    // Validación simple
    if (!email || !message) {
        formError.textContent = 'Por favor, completa todos los campos.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        formError.textContent = 'Por favor, ingresa un correo electrónico válido.';
    } else {
        formError.textContent = '';
        alert('Formulario enviado correctamente!');
    }
});
