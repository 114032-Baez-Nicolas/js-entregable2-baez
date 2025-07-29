let libros = JSON.parse(localStorage.getItem('libros')) || [];

const esIndex = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
const esBiblioteca = window.location.pathname.includes('biblioteca.html');

// ================= index.html (agregar libros) =================
if (esIndex) {
    const inputTitulo = document.querySelector('#titulo');
    const inputAutor = document.querySelector('#autor');
    const btnAgregar = document.querySelector('button[type="submit"]');
    const form = document.querySelector('#formulario');
    const errorMsg = document.querySelector('#error');

    // Validación de inputs
    function validarInputs() {
        const valido = inputTitulo.value.trim() !== '' && inputAutor.value.trim() !== '';
        btnAgregar.disabled = !valido;
    }

    inputTitulo.addEventListener('input', validarInputs);
    inputAutor.addEventListener('input', validarInputs);

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const titulo = inputTitulo.value.trim();
        const autor = inputAutor.value.trim();

        if (!titulo || !autor) {
            errorMsg.textContent = 'Por favor, completá ambos campos.';
            return;
        }

        const nuevoLibro = { titulo, autor };
        libros.push(nuevoLibro);
        localStorage.setItem('libros', JSON.stringify(libros));

        // Limpiar inputs
        inputTitulo.value = '';
        inputAutor.value = '';
        errorMsg.textContent = '';
        validarInputs();
    });

    // Deshabilitar botón al inicio
    btnAgregar.disabled = true;
}

// ================= biblioteca.html (mostrar libros) =================
if (esBiblioteca) {
    const contenedor = document.querySelector('#libros');

    if (libros.length === 0) {
        contenedor.innerHTML = '<p class="text-center">No hay libros en la biblioteca.</p>';
    } else {
        libros.forEach((libro, index) => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('col-md-4');

            tarjeta.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title">${libro.titulo}</h5>
            <p class="card-text">Autor: ${libro.autor}</p>
            <button class="btn btn-danger eliminar" data-index="${index}">Eliminar</button>
          </div>
        </div>
      `;
            contenedor.appendChild(tarjeta);
        });

        // Eliminar libro
        document.querySelectorAll('.eliminar').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = e.target.dataset.index;
                libros.splice(index, 1);
                localStorage.setItem('libros', JSON.stringify(libros));
                location.reload();
            });
        });
    }
}