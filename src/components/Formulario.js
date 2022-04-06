import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";

const Formulario = ({ crearProducto }) => {
  // Crear State de Citas
  const [nuevoProducto, actualizarProducto] = useState({
    nombre: "",
    precio: "",
    cantidad: "1",
    tachar: false,
    id: "",
  });

  const [error, actualizarError] = useState(false);

  // Función que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = (e) => {
    actualizarProducto({
      ...nuevoProducto,
      [e.target.name]: e.target.value,
    });
  };

  //Extraer los valores
  const { nombre, cantidad } = nuevoProducto;

  // Cuando el usuario presiona agregar producto
  const submitProducto = (e) => {
    e.preventDefault();

    // Validad
    if (nombre.trim() === "") {
      actualizarError(true);
      return;
    }

    //Asignar un ID
    nuevoProducto.id = uuidv4();

    //Eliminar mensaje de error
    actualizarError(false);

    //Crear el producto
    crearProducto(nuevoProducto);

    //Reiniciar el form
    actualizarProducto({
      nombre: "",
      precio: "",
      cantidad: "1",
      id: "",
    });
  };

  return (
    <>
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
        Agregar producto
      </h2>

      <div >
        <Form onSubmit={submitProducto} >
          <Form.Group className="mb-3 ">
            <Form.Label style={{ color: "#F5F5F5" }}>Producto</Form.Label>

            <Form.Control
              type="text"
              name="nombre"
              className="u-full-width"
              placeholder="Ingrese el nombre del producto"
              onChange={actualizarState}
              value={nombre}
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group as={Col} className="mb-3" style={{ color: "#F5F5F5" }}>
            <Form.Label>Cantidad</Form.Label>
            <Row>
              <Col sm={5} xs={4}>
                <Form.Control
                  type="number"
                  name="cantidad"
                  placeholder="0"
                  onChange={actualizarState}
                  value={cantidad}
                  
                />
              </Col>
              <Col style={{marginLeft:'100px'}} >
                <Button variant="outline-info" type="submit" className="mb-3">
                  Agregar
                </Button>
              </Col>
            </Row>
          </Form.Group>
          {error ? (
            <p className="alerta-error" style={{ color: "#FF6B6B" }}>
              El nombre es obligatorio
            </p>
          ) : null}
        </Form>
      </div>
    </>
  );
};

export default Formulario;
