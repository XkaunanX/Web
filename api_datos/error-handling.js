// --- error-handling.js - Manejo de errores HTTP ---
function handleHttpError() {
    fetch('https://jsonplaceholder.typicode.com/invalid-url')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error HTTP: ' + response.status);
            }
            return response.json();
        })
        .catch(error => {
            document.getElementById('errorContent').innerHTML = `
                <p>Error al cargar: ${error.message}</p>
            `;
        });
}

document.getElementById('loadErrorBtn').addEventListener('click', handleHttpError);
