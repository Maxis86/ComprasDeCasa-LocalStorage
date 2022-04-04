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
  }, [productos]);

  // Funcion que tome los productos actuales y agregue el nuevo
  const crearProducto = (producto) => {
    guardarProductos([...productos, producto]);
  };

  //Funcion que elimina un producto con su id
  const eliminar = (id) => {
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    guardarProductos(nuevosProductos);
  };

  // Mensaje Condicional
  const titulo = productos.length === 0 ? "No hay Productos" : "Próxima Compra";

  return (
    <Container fluid="md" style={{ backgroundColor: "red", marginBottom: 10 }}>
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
            {productos.map((producto) => (
              <div>
                <Producto
                  key={producto.id}
                  producto={producto}
                  eliminar={eliminar}
                />
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

{
  /* <h1>Mis Compras</h1>

<div>
  <div>
    <div>
      <Formulario crearProducto={crearProducto} />
    </div>
    <div>
      <h2>{titulo}</h2>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          eliminar={eliminar}
        />
      ))}
    </div>
  </div>
</div> */
}
export default App;
