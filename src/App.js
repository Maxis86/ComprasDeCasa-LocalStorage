import React, { useState, useEffect } from "react";

import Formulario from "./components/Formulario";
import Producto from "./components/Producto";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  //Citas en local storage
  let productosIniciales = JSON.parse(localStorage.getItem("productos"));
  if (!productosIniciales) {
    productosIniciales = [];
  }

  //Arreglo de productos
  const [productos, guardarProductos] = useState(productosIniciales);

  useEffect(() => {
    if (productosIniciales) {
      localStorage.setItem("productos", JSON.stringify(productos));
    } else {
      localStorage.setItem("productos", JSON.stringify([]));
    }
  }, [productos, productosIniciales]);

  // Funcion que tome los productos actuales y agregue el nuevo
  const crearProducto = (producto) => {
    guardarProductos([...productos, producto]);
  };

  //Funcion que elimina un producto con su id
  const eliminar = (id) => {
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    guardarProductos(nuevosProductos);
  };

  const tachar = (id) => {
    productos.map(
      (producto) => producto.id === id && (producto.tachar = !producto.tachar)
    );

    const pepe = Array.from(productos);
    guardarProductos(pepe);
  };

  const sumarCantidad = (id) => {
    productos.map(
      (producto) =>
        producto.id === id &&
        (producto.cantidad = parseInt(producto.cantidad) + 1)
    );

    const pepe = Array.from(productos);
    guardarProductos(pepe);
  };

  const restarCantidad = (id) => {
    productos.map(
      (producto) =>
        producto.id === id &&
        (producto.cantidad = parseInt(producto.cantidad) - 1)
    );
    const pepe = Array.from(productos);
    guardarProductos(pepe);
  };

  // Mensaje Condicional
  const titulo = productos.length === 0 ? "No hay Productos" : "Próxima Compra";

  return (
    <>
      <Container fluid="md">
        <Row>
          <Col xs={12} md={6}>
            <div>
              <Formulario crearProducto={crearProducto} />
            </div>
          </Col>

          <Col xs={12} md={6}>
            <div>
              <h2
                style={{
                  color: "#E2D784",
                  fontFamily: "Grape Nuts",
                  fontSize: "40px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                {titulo}
              </h2>
              {productos.map((producto,id) => (
                <div>
                  <Producto
                    key={id}
                    producto={producto}
                    eliminar={eliminar}
                    sumarCantidad={sumarCantidad}
                    restarCantidad={restarCantidad}
                    tachar={tachar}
                  />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <footer className="footer bg-light">
        <div
          className=" text-center py-3"
          style={{ backgroundColor: "#EEEEEE", marginTop: "100px" }}
        >
          © 2022 Copyright: maximilianochamarro@gmail.com V01
        </div>
      </footer>
    </>
  );
}

export default App;
