## HTML

HTML (HyperText Markup Language) es el lenguaje de marcado utilizado para estructurar contenido en la web. Permite definir los elementos que conforman una página, como encabezados, párrafos, enlaces, imágenes, formularios, entre otros. Es la base de cualquier documento web.

## CSS

CSS (Cascading Style Sheets) es el lenguaje utilizado para describir la apariencia y el diseño de una página web. Permite estilizar los elementos HTML, definiendo propiedades como el color, tamaño, disposición y otros aspectos visuales de la interfaz. CSS permite separar la estructura del contenido de su presentación.

## JavaScript

JavaScript es un lenguaje de programación que permite crear interactividad en una página web. Con él, se pueden modificar dinámicamente los contenidos HTML y aplicar efectos visuales, manejar eventos de usuario, realizar validaciones y más. JavaScript es esencial para el desarrollo de aplicaciones web interactivas.

## Relacion entre HTML, CSS y JavaScript

HTML, CSS y JavaScript trabajan conjuntamente para crear páginas web. HTML proporciona la estructura básica, CSS define el estilo visual y JavaScript añade interactividad. Juntos permiten crear sitios web completos, funcionales y visualmente atractivos.

## El DOM

El DOM (Document Object Model) es una representación estructurada de los elementos de una página web. Permite que los lenguajes de programación como JavaScript interactúen con el contenido HTML, modificando o actualizando dinámicamente la estructura y el estilo de una página. El DOM se basa en una estructura de árbol donde cada nodo representa una parte del documento.

# Protocolo HTTP y HTTPS

Este repositorio explica los conceptos fundamentales de los protocolos HTTP y HTTPS, utilizados para la transferencia de documentos HTML y otros recursos en la web. También incluye ejemplos básicos de servidores que utilizan estos protocolos.

## HTTP (Hypertext Transfer Protocol)

HTTP es un protocolo de comunicación utilizado para la transferencia de información entre servidores y clientes (navegadores web) a través de la red. HTTP sigue el modelo cliente-servidor, donde el cliente realiza solicitudes y el servidor responde a esas solicitudes. 

Cada vez que un usuario accede a una página web, el navegador realiza una solicitud HTTP al servidor, que a su vez responde con los datos solicitados, como archivos HTML, imágenes o archivos CSS y JavaScript. Este protocolo se caracteriza por ser sin estado, lo que significa que no mantiene información sobre interacciones previas entre el cliente y el servidor.

### Características de HTTP
- **No seguro**: La transferencia de datos no está cifrada.
- **Basado en texto**: Los mensajes se envían en formato de texto, lo que facilita la comprensión y depuración.
- **Protocolo sin estado**: Cada solicitud es independiente y no guarda información sobre interacciones pasadas.

## HTTPS (Hypertext Transfer Protocol Secure)

HTTPS es una versión segura de HTTP, que utiliza cifrado SSL/TLS para proteger la comunicación entre el cliente y el servidor. Este protocolo cifra los datos que se envían y reciben, lo que garantiza que la información no pueda ser interceptada o manipulada por terceros.

La principal diferencia entre HTTP y HTTPS es que HTTPS utiliza un certificado SSL/TLS para asegurar la transferencia de datos, mientras que HTTP no tiene ninguna medida de seguridad incorporada.

### Características de HTTPS
- **Seguro**: Cifra los datos enviados entre el cliente y el servidor, protegiendo la información sensible.
- **Verificación de identidad**: Utiliza certificados digitales para verificar que el servidor es legítimo.
- **Requiere un certificado SSL/TLS**: Este certificado asegura la conexión encriptada.

## Servidores HTTP y HTTPS

Los servidores HTTP responden a las solicitudes de los navegadores utilizando el protocolo HTTP. Para habilitar HTTPS, el servidor debe estar configurado con un certificado SSL/TLS.

# Códigos de Estado HTTP

Este repositorio explica detalladamente los códigos de estado HTTP utilizados en la comunicación entre un cliente (como un navegador web) y un servidor. Los códigos de estado HTTP son respuestas numéricas que indican el resultado de una solicitud realizada por el cliente. Estos códigos se dividen en cinco categorías generales, según su primer dígito.

## Categorías de los Códigos de Estado HTTP

1. **1xx - Respuestas informativas**
2. **2xx - Respuestas satisfactorias**
3. **3xx - Redirecciones**
4. **4xx - Errores del cliente**
5. **5xx - Errores del servidor**

A continuación, se detallan algunos de los códigos más utilizados.

## 1xx - Respuestas Informativas

### 100 Continue
Indica que el servidor ha recibido la cabecera de la solicitud y el cliente puede continuar enviando el cuerpo de la solicitud. Se utiliza en solicitudes de tipo POST o PUT.

### 101 Switching Protocols
Este código indica que el servidor acepta la solicitud de cambiar a un protocolo diferente, como cuando se realiza un cambio a WebSocket.

## 2xx - Respuestas Satisfactorias

### 200 OK
Este es el código de estado más común. Indica que la solicitud ha sido procesada correctamente y que la respuesta contiene el recurso solicitado. Es la respuesta estándar para una solicitud exitosa.

### 201 Created
El recurso ha sido creado con éxito, como resultado de una solicitud POST. Este código se usa comúnmente al crear nuevos recursos.

### 204 No Content
El servidor ha procesado la solicitud correctamente, pero no tiene contenido que devolver en la respuesta. Este código es común en respuestas de solicitudes PUT o DELETE.

## 3xx - Redirecciones

### 301 Moved Permanently
Este código indica que el recurso solicitado ha sido movido permanentemente a una nueva URL. El cliente debe hacer futuras solicitudes a la nueva URL proporcionada en el encabezado `Location`.

### 302 Found
El recurso solicitado ha sido encontrado, pero se encuentra temporalmente en una ubicación diferente. El cliente debe continuar utilizando la URL original en futuras solicitudes.

### 304 Not Modified
El recurso solicitado no ha cambiado desde la última vez que fue solicitado. El servidor no necesita enviar el recurso, y el cliente puede usar su versión almacenada en caché.

## 4xx - Errores del Cliente

### 400 Bad Request
Este código indica que la solicitud del cliente es incorrecta o malformada. El servidor no puede procesar la solicitud debido a un error en la sintaxis o formato de los datos enviados.

### 401 Unauthorized
El cliente no ha proporcionado credenciales válidas o no está autorizado para acceder al recurso solicitado. Este código se usa comúnmente cuando el acceso requiere autenticación.

### 403 Forbidden
El servidor ha comprendido la solicitud, pero se niega a autorizarla. A diferencia del código 401, el cliente ya ha proporcionado credenciales, pero no tiene permisos para acceder al recurso.

### 404 Not Found
Este es uno de los códigos de estado más conocidos. Indica que el recurso solicitado no se ha encontrado en el servidor. Puede ocurrir cuando la URL solicitada es incorrecta o el recurso ha sido eliminado.

### 405 Method Not Allowed
El método de solicitud utilizado (como GET, POST, PUT, DELETE) no está permitido para el recurso solicitado. El servidor responde con este código cuando el método no es compatible con el recurso.

### 408 Request Timeout
Este código indica que la solicitud no se completó en el tiempo que el servidor esperaba. Esto puede ocurrir si el cliente no envía la solicitud en el tiempo adecuado.

## 5xx - Errores del Servidor

### 500 Internal Server Error
Este es un código de error general que indica que el servidor encontró una condición inesperada que impidió que procesara la solicitud. Este error no proporciona detalles específicos sobre lo que falló.

### 502 Bad Gateway
Este código indica que un servidor intermedio (como un proxy o un balanceador de carga) recibió una respuesta inválida de otro servidor al intentar completar la solicitud.

### 503 Service Unavailable
Este código indica que el servidor no está disponible temporalmente, generalmente debido a sobrecarga o mantenimiento. El servidor podría estar ocupado o no disponible en ese momento.

### 504 Gateway Timeout
Este código se utiliza cuando un servidor intermedio (como un proxy) no recibe una respuesta a tiempo de un servidor de origen mientras intentaba completar una solicitud.

# ¿Qué son los CDN?

Un **CDN (Content Delivery Network)**, o Red de Entrega de Contenidos, es una infraestructura de servidores distribuidos geográficamente que trabajan juntos para entregar contenido a los usuarios de manera más rápida y eficiente. El objetivo principal de un CDN es reducir el tiempo de carga de los sitios web y mejorar la experiencia del usuario al proporcionar contenido desde servidores cercanos a su ubicación.

## ¿Cómo funcionan los CDN?

Los CDN funcionan almacenando copias de contenido estático de un sitio web, como imágenes, archivos de JavaScript, CSS, videos, y otros recursos, en múltiples servidores ubicados en diferentes partes del mundo. Estos servidores, conocidos como **nodos** o **puntos de presencia (PoPs)**, distribuyen el contenido a los usuarios según su ubicación geográfica.

Cuando un usuario solicita un recurso, el CDN determina el servidor más cercano para entregar el contenido. Esto reduce la latencia y mejora la velocidad de carga, ya que el servidor más cercano puede entregar los archivos más rápidamente que si se tuvieran que obtener desde un servidor central ubicado lejos.

## Ventajas de los CDN

1. **Mejor rendimiento**: Al distribuir el contenido desde múltiples ubicaciones, los CDN pueden reducir significativamente los tiempos de carga de las páginas web.
   
2. **Escalabilidad**: Los CDN permiten manejar un gran volumen de tráfico al distribuir la carga entre muchos servidores, lo que es útil especialmente para sitios web con altos niveles de visitantes.

3. **Disponibilidad y fiabilidad**: Si un servidor de un CDN se cae, el tráfico puede ser redirigido a otros servidores cercanos, lo que garantiza la disponibilidad del contenido.

4. **Reducción del ancho de banda**: Al almacenar contenido en caché y servirlo desde los nodos cercanos, los CDN ayudan a reducir el uso de ancho de banda en los servidores de origen.

5. **Seguridad mejorada**: Los CDN ofrecen funcionalidades de seguridad como protección contra ataques DDoS (Distributed Denial of Service), mitigación de tráfico malicioso y cifrado HTTPS.
