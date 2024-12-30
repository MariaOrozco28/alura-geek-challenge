import { conectaAPI } from "./conectaAPI.js";

// Función para manejar la eliminación de un producto
function eliminarProducto(evento) {
    const botonEliminar = evento.target;

    if (botonEliminar.classList.contains("card-container--borrar")) {
        const idProducto = parseInt(botonEliminar.closest(".card").getAttribute("data-id"), 10);
        console.log("ID del producto:", idProducto);

        conectaAPI.eliminarProducto(idProducto)
            .then(() => {
                const producto = botonEliminar.closest(".productos__item");
                producto.remove();
                alert('Producto eliminado correctamente');
            })
            .catch((error) => {
                console.error("Error al eliminar el producto:", error);
                alert('No se pudo eliminar el producto');
            });
    }
}

document.querySelector("[data-lista]").addEventListener("click", eliminarProducto);