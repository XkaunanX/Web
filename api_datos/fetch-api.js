// Función para cargar datos de manera continua
async function loadDataContinuously() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // URL de la API
    const outputContainer = document.getElementById('fetchContentOutput'); // Contenedor de salida
    let dataIndex = 0; // Indice para acceder a los elementos de la API

    // Hacemos la solicitud a la API
    const response = await fetch(apiUrl);

    // Verificamos si la respuesta es correcta
    if (!response.ok) {
        console.error('Error al cargar los datos');
        return;
    }

    // Convertimos la respuesta a formato JSON
    const data = await response.json();

    // Función para agregar una fila a la tabla
    function addRowToTable(user) {
        const table = document.createElement('table');
        table.classList.add('data-table');

        // Creamos las cabeceras si no existen
        if (outputContainer.children.length === 0) {
            const thead = document.createElement('thead');
            const headerRow = document.createElement('tr');
            const headers = ['ID', 'Nombre', 'Email', 'Ciudad'];

            headers.forEach(headerText => {
                const th = document.createElement('th');
                th.innerText = headerText;
                headerRow.appendChild(th);
            });

            thead.appendChild(headerRow);
            table.appendChild(thead);
        }

        // Cuerpo de la tabla
        const tbody = document.createElement('tbody');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.address.city}</td>
        `;
        tbody.appendChild(row);
        table.appendChild(tbody);

        outputContainer.appendChild(table); // Añadimos la tabla al contenedor
    }

    // Cargar los datos continuamente cada 2 segundos
    const intervalId = setInterval(() => {
        if (dataIndex < data.length) {
            addRowToTable(data[dataIndex]);
            dataIndex++;
        } else {
            clearInterval(intervalId); // Detenemos la carga continua cuando no haya más datos
        }
    }, 2000);
}

// Llamada al cargar la página
document.getElementById('loadFetchContentBtn').addEventListener('click', loadDataContinuously);
