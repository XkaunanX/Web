# Mejora de la accesibilidad

Asegurarse de que tu página sea accesible para todos, incluidos los usuarios con discapacidades, es esencial para cumplir con las pautas WCAG (Web Content Accessibility Guidelines).

### 1. Uso de etiquetas semánticas

Las etiquetas semánticas mejoran la accesibilidad, ya que describen claramente el propósito de cada elemento.

```html
<article>
    <h2>Noticias importantes</h2>
    <p>Este es un artículo accesible para todos.</p>
</article>
```

### 2. Asegurarse de que todo sea navegable mediante teclado
El uso del teclado es fundamental para personas con discapacidades motoras. Asegúrate de que los elementos interactivos (como botones y enlaces) sean accesibles a través de las teclas Tab, Enter y Espacio.

```html
<button tabindex="0">Botón de acceso rápido</button>
```

### 3. Descripciones y etiquetas de imágenes
Asegúrate de usar el atributo alt para describir las imágenes. Esto ayuda a los usuarios con discapacidades visuales que usan lectores de pantalla.

```html
<img src="logo.png" alt="Logo de la empresa">
```

4. Contraste adecuado
Asegúrate de que el contraste entre el texto y el fondo sea suficiente para ser legible por personas con dificultades visuales.

Ejemplo de CSS para garantizar buen contraste:

```html
body {
    background-color: #ffffff;
    color: #333333; /* Contraste adecuado */
}
```