let libros = JSON.parse(localStorage.getItem('libros')) || [];

const esIndex = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
const esBiblioteca = window.location.pathname.includes('biblioteca.html');