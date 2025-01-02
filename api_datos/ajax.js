// --- ajax.js - Uso de AJAX para carga dinámica de contenido ---
function loadContentWithAjax() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true); // API de ejemplo

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                document.getElementById('content').innerHTML = `
                    <h2>${data.title}</h2>
                    <p>${data.body}</p>
                `;
            } else {
                document.getElementById('content').innerHTML = `
                    <p>Error al cargar el contenido. Código de error: ${xhr.status}</p>
                `;
            }
        }
    };

    xhr.send();
}

document.getElementById('loadContentBtn').addEventListener('click', loadContentWithAjax);
