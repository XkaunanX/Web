// Función de validación de formulario
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("formMessage");
    
    // Validar nombre
    if (name === "") {
        formMessage.textContent = "El nombre es obligatorio.";
        return false;
    }

    // Validar email
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = "Por favor, ingresa un correo electrónico válido.";
        return false;
    }

    // Validar mensaje
    if (message === "") {
        formMessage.textContent = "El mensaje no puede estar vacío.";
        return false;
    }

    // Si todo está bien, enviamos el formulario
    formMessage.textContent = "";
    return true;
}

// Función para cambiar el color de fondo
function changeBackgroundColor() {
    document.body.style.backgroundColor = "lightblue";
}

// Función para mostrar una alerta
function showAlert() {
    alert("¡Este es un mensaje de alerta!");
}

// Función para cambiar el texto del título principal
function changeTextContent() {
    document.querySelector("h1").textContent = "¡El texto ha sido cambiado!";
}

// Ejemplo de uso de canvas para dibujar un rectángulo
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
ctx.fillRect(10, 10, 150, 100);
