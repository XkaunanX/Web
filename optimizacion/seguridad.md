# Seguridad en web

La seguridad en una aplicación web es esencial para proteger los datos de los usuarios y la integridad de la aplicación. Aquí algunas prácticas clave.

### 1. Validación de entrada

Nunca confíes en los datos proporcionados por los usuarios. Siempre valida los datos del lado del servidor y del cliente.

```javascript
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const email = document.getElementById('email').value;
if (!emailPattern.test(email)) {
    alert("Correo electrónico inválido");
}
```

### 2. Uso de HTTPS
Asegúrate de que tu sitio web utilice HTTPS en lugar de HTTP. Esto cifra la comunicación entre el servidor y el cliente, protegiendo la información confidencial.


##### Ejemplo de redirección en Nginx
server {
    listen 80;
    server_name example.com;
    return 301 https://$server_name$request_uri;
}

### 3. Protección contra XSS (Cross-Site Scripting)
El XSS es un ataque donde un atacante inyecta scripts maliciosos en una página web. Puedes evitarlo utilizando técnicas como la codificación de caracteres.

```html
<script>
    const userInput = "<script>alert('XSS');</script>";
    document.getElementById('output').textContent = userInput; // Esto evita la ejecución del script
</script>
```

### 4. Protección contra CSRF (Cross-Site Request Forgery)
El CSRF es un ataque en el que un atacante engaña al navegador de un usuario para que ejecute una acción no deseada. Usa tokens CSRF para proteger tus formularios.

```html
<form action="/submit" method="POST">
    <input type="hidden" name="csrf_token" value="{{ csrf_token() }}">
    <input type="submit" value="Enviar">
</form>
```

### 5. Autenticación segura
Utiliza contraseñas fuertes y la autenticación de dos factores (2FA) para aumentar la seguridad.

```html
<!-- Ejemplo de autenticación de dos factores -->
<label for="code">Código de 2FA:</label>
<input type="text" id="code" name="code" required>
```