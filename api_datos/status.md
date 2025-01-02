# Códigos de Estado HTTP

## 1xx - Información
- **100 Continue**: El servidor ha recibido la solicitud inicial y el cliente debe continuar con la solicitud.
  
## 2xx - Éxito
- **200 OK**: La solicitud ha tenido éxito.
- **201 Created**: La solicitud ha sido exitosa y ha resultado en la creación de un nuevo recurso.

## 3xx - Redirección
- **301 Moved Permanently**: El recurso solicitado ha sido movido permanentemente a otra URL.
- **302 Found**: El recurso solicitado ha sido temporalmente movido a otra URL.

## 4xx - Error del Cliente
- **400 Bad Request**: La solicitud tiene sintaxis incorrecta.
- **404 Not Found**: El recurso solicitado no se ha encontrado en el servidor.

## 5xx - Error del Servidor
- **500 Internal Server Error**: Error general en el servidor.
- **502 Bad Gateway**: El servidor actuando como puerta de enlace o proxy recibió una respuesta inválida.
