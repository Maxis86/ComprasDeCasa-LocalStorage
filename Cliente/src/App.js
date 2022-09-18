import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Formulario from "./components/Formulario";
import Producto from "./components/Producto";
import ProductoContext from "./context/producto.js/productoContext";

function App() {

  const productoContext = useContext(ProductoContext);
  const { productos, obtenerProductos } = productoContext;

  useEffect(() => {
    obtenerProductos();
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  // console.log(productosIniciales.sort());
  function SortArray(x, y) {
    if (x.nombre < y.nombre) {
      return -1;
    }
    if (x.nombre > y.nombre) {
      return 1;
    }
    return 0;
  }


  const tachar = (id) => {
    // productos.map(
    //   (producto) => producto.id === id && (producto.tachar = !producto.tachar)
    // );
    // const pepe = Array.from(productos);
    // guardarProductos(pepe);
  };



  // Mensaje Condicional
  // const titulo = productos.length === 0 ? "No hay Productos" : "Próxima Compra";

  return (
    <>
      <Container fluid="md">
        <Row>
          <Col xs={12} md={6}>
            <div>
              <Formulario />
            </div>
          </Col>
          <hr
            style={{
              color: "#E2D784",
              fontFamily: "Grape Nuts",
              fontSize: "40px",
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          />
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
                {/* {titulo} */}
              </h2>

              <p
                style={{
                  color: "#F1EEE9",
                  fontFamily: "Grape Nuts",
                  fontSize: "24px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                Bolso Agus
              </p>
              {productos && productos.map((producto, id) =>
                producto.categoria.nombre === "COCINA" ? (
                  <div>
                    <Producto
                      key={id}
                      producto={producto}
                    />
                  </div>
                ) : null
              )}

              <p
                style={{
                  color: "#F1EEE9",
                  fontFamily: "Grape Nuts",
                  fontSize: "24px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                Bolso mamá
              </p>
              {productos !== []
                ? productos.map((producto, id) =>
                    producto.categoria.nombre === "BANO" ? (
                      <div>
                        <Producto
                          key={id}
                          producto={producto}
                        />
                      </div>
                    ) : null
                  )
                : null}
              <p
                style={{
                  color: "#F1EEE9",
                  fontFamily: "Grape Nuts",
                  fontSize: "24px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                Bolso papá
              </p>

              {productos && productos.map((producto, id) =>
                producto.categoria.nombre === "FRIO" ? (
                  <div>
                    <Producto
                      key={id}
                      producto={producto}

                    />
                  </div>
                ) : null
              )}

              <p
                style={{
                  color: "#F1EEE9",
                  fontFamily: "Grape Nuts",
                  fontSize: "24px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                  marginTop: 15,
                }}
              >
                Otros
              </p>

              {productos && productos.map((producto, id) =>
                producto.categoria.nombre === "VERDULERIA" ? (
                  <div>
                    <Producto
                      key={id}
                      producto={producto}
                    />
                  </div>
                ) : null
              )}
            </div>
          </Col>
        </Row>
      </Container>

      <footer className="footer bg-light">
        <div
          className=" text-center py-3"
          style={{ backgroundColor: "#EEEEEE", marginTop: "100px" }}
        >
          © 2022 Copyright: maximilianochamarro@gmail.com V02.0
        </div>
      </footer>
    </>
  );
}

export default App;
