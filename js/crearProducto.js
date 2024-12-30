import { conectaAPI } from "./conectaAPI.js";

// Intentamos obtener el contador desde localStorage
let contadorID = localStorage.getItem('contadorID') ? parseInt(localStorage.getItem('contadorID')) : 11;

const formulario = document.querySelector("[data-formulario]");

// Validaciones
async function crearProducto(evento) {
    evento.preventDefault();  // Esto evita que el formulario se recargue

    // Obtener los valores del formulario
    const imagen = document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const id = contadorID; // Asigna el ID desde el contador

    // Verificar que los valores son correctos
    console.log('Creando producto con los siguientes valores:');
    console.log('Nombre:', nombre);
    console.log('Precio:', precio);
    console.log('Imagen:', imagen);
    console.log('ID:', id);

    // Incrementar el contadorID para el siguiente producto
    contadorID++;
    // Guardar el nuevo contador en localStorage
    localStorage.setItem('contadorID', contadorID);

    console.log('Nuevo ID para el siguiente producto:', contadorID);

    try {
        // Llamar a la API para crear el producto
        const productoCreado = await conectaAPI.crearProducto(nombre, precio, imagen, id);
        alert('Producto creado con éxito');
        console.log('Producto creado:', productoCreado);
        // Aquí puedes agregar el producto recién creado a la lista
    } catch (e) {
        console.error('Error al crear el producto:', e);
        alert('Error al crear el producto: ' + e);
    }
}

// Asegúrate de que el evento submit esté registrado correctamente
formulario.addEventListener("submit", evento => crearProducto(evento));




