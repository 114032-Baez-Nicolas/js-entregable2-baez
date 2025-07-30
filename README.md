# 📚 Entregable 2 - Biblioteca Duarte Quirós

**Autor:** Nicolás Báez
**Curso:** JavaScript Flex - Coderhouse
**Entrega:** Segunda Entrega (DOM + Eventos + Storage)

---

## 📝 Descripción del proyecto

Este proyecto es una **biblioteca digital simple** que permite al usuario **agregar y visualizar libros** a través de un formulario. Toda la información se almacena en `localStorage` y se muestra dinámicamente en otra vista.
Está desarrollado con **JavaScript moderno**, usando **manipulación del DOM**, **eventos**, y **Bootstrap 5** para el diseño responsive.

---

## 🚀 Despliegue en Vercel
👉 El sitio completo está desplegado en Vercel:  
🔗 [URL del Proyecto](https://biblioteca-duarte.vercel.app/)

---

## 🎯 Funcionalidades principales

1. **Agregar libros**
   - El usuario puede cargar un libro ingresando su título y autor.
   - Se valida que ambos campos estén completos antes de habilitar el botón.
   - El formulario muestra un mensaje de error si se intenta enviar vacío.
   - Los datos se guardan en `localStorage`.

2. **Visualizar libros**
   - Los libros cargados se muestran en una tarjeta (`.card`) con su información.
   - Cada tarjeta tiene un botón para **eliminar** ese libro del sistema.
   - Si no hay libros, se muestra un mensaje informativo.

3. **Persistencia con localStorage**
   - La lista de libros se mantiene aunque se recargue la página.
   - Se actualiza automáticamente al agregar o eliminar libros.

4. **Responsive y diseño moderno**
   - Uso de Bootstrap + SCSS para lograr una interfaz clara y sencilla.

---

## 🧠 Herramientas y conceptos utilizados

- Manipulación del DOM (`document.querySelector`, `createElement`, `innerHTML`)
- Eventos (`addEventListener`, `submit`, `input`, `click`)
- Validación de formularios
- Condicionales (`if`, `else`)
- Almacenamiento en `localStorage`
- Métodos de arrays (`push`, `splice`, `forEach`)
- Funciones y control de flujo
- Diseño con **Bootstrap** y estilos con **SCSS**
- Código organizado y separado en archivos (`.html`, `.js`, `.css`)

---

## 💬 Nota

Este proyecto **elimina por completo el uso de consola, prompt y alert**, cumpliendo con los requisitos de la Entrega
Toda la interacción se realiza desde la interfaz web mediante formularios y botones.
