// --- json.js - Manipulación y Parseo de JSON ---

// Función para cargar y mostrar los datos en una tabla
function loadJsonContent() {
    const jsonData = [
        { "id": 1, "name": "Juan", "age": 28, "email": "juan@example.com" },
        { "id": 2, "name": "Maria", "age": 34, "email": "maria@example.com" },
        { "id": 3, "name": "Pedro", "age": 22, "email": "pedro@example.com" },
    ];
    
    const tableContainer = document.getElementById("jsonContentOutput");
    
    // Crear la tabla
    let table = document.createElement("table");
    table.setAttribute("border", "1");

    // Crear la cabecera de la tabla
    let thead = table.createTHead();
    let headerRow = thead.insertRow();
    headerRow.innerHTML = "<th>ID</th><th>Nombre</th><th>Edad</th><th>Correo</th>";

    // Crear el cuerpo de la tabla
    let tbody = table.createTBody();
    
    jsonData.forEach(item => {
        let row = tbody.insertRow();
        row.innerHTML = `<td>${item.id}</td><td>${item.name}</td><td>${item.age}</td><td>${item.email}</td>`;
    });

    // Añadir la tabla al contenedor
    tableContainer.appendChild(table);
}

// Asignar el evento al botón
document.getElementById("loadJsonContentBtn").addEventListener("click", loadJsonContent);
