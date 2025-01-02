// --- local-storage.js - Uso del almacenamiento local ---

// Función para guardar el nombre en localStorage
function saveToLocalStorage() {
    const name = document.getElementById('name').value;
    if (name) {
        localStorage.setItem('userName', name); // Guardar el nombre en localStorage
        displayGreeting(); // Mostrar saludo
    }
}

// Función para mostrar el saludo
function displayGreeting() {
    const storedName = localStorage.getItem('userName');
    const greetingElement = document.getElementById('greeting');
    
    if (storedName) {
        greetingElement.innerHTML = `¡Hola, ${storedName}!`; // Mostrar saludo si hay un nombre guardado
    } else {
        greetingElement.innerHTML = '¡Hola! No has guardado tu nombre todavía.'; // Mensaje si no hay nombre guardado
    }
}

// Mostrar saludo al cargar la página
document.addEventListener('DOMContentLoaded', displayGreeting);

// Event listener para guardar el nombre
document.getElementById('saveBtn').addEventListener('click', saveToLocalStorage);
