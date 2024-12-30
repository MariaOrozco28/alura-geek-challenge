async function listaProducto() {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });
    const conexionConvertida = await conexion.json();
    return conexionConvertida;
}

async function crearProducto(nombre, precio, imagen, id) {
    try {
        const conexion = await fetch("http://localhost:3001/productos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ id, nombre, precio, imagen })
        });

        if (!conexion.ok) {
            throw new Error(`Error: ${conexion.statusText}`);
        }

        return await conexion.json();
    } catch (error) {
        console.error("Error en crearProducto:", error);
        throw error;
    }
}



export async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    });

    if (!conexion.ok) {
        throw new Error("No fue posible eliminar el producto");
    }

    // JSON Server devuelve 204 (sin contenido), así que no intentamos parsear el cuerpo
    return { mensaje: "Producto eliminado con éxito" };
}




export const conectaAPI={
    listaProducto,crearProducto, eliminarProducto
}