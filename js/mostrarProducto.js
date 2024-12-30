import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

// Validaciones
function construyeCard(id, nombre, precio, imagen) {
    const producto = document.createElement("li");
    producto.className = "productos__item";

    producto.innerHTML = `
        <div class="card" data-id="${id}">
            <img src="${imagen}" alt="${nombre}" />
            <div class="card-container--info">
                <p>${nombre}</p>
                <div class="card-container--value">
                    <p>$ ${precio}</p>
                    <img src="./img/trashIcon.png" class='card-container--borrar' alt="Eliminar producto" />
                </div>
            </div>
        </div>
    `;
    return producto;
}



async function listaProducto() {
    try {
        const listaAPI = await conectaAPI.listaProducto();
        listaAPI.forEach(producto => 
            lista.appendChild(construyeCard(producto.id,producto.nombre, producto.precio, producto.imagen))
        );
    } catch {
        lista.innerHTML = `<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
    }
}


listaProducto();
