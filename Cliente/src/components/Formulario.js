import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import { useEffect } from "react";
import ProductoContext from "../context/producto.js/productoContext";

const Formulario = () => {
  const productoContext = useContext(ProductoContext);
  const { crearProducto, obtenerProductos } = productoContext;

  // Crear State de Citas
  const [nuevoProducto, actualizarProducto] = useState({
    nombre: "",
    precio: "0",
    cantidad: "1",
    tachar: true,
    categoria: "Cocina",
    id: "",
  });

  const [radioValue, setRadioValue] = useState("Cocina");

  const radios = [
    { name: "Agus", value: "Cocina" },
    { name: "Mamá", value: "Baño" },
    { name: "Papá", value: "Frio" },
    { name: "Otro", value: "Verduleria" },
  ];

  const [error, actualizarError] = useState(false);

  useEffect(() => {
    actualizarProducto({ ...nuevoProducto, categoria: radioValue });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioValue]);

  // Función que se ejecuta cada vez que el usuario escribe en un input
  const actualizarState = (e) => {
    if (e.target.name === "nombre") {
      const nombreMayúscula =
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);

      actualizarProducto({
        ...nuevoProducto,
        [e.target.name]: nombreMayúscula,
      });
    } else {
      actualizarProducto({
        ...nuevoProducto,
        [e.target.name]: e.target.value,
      });
    }
  };

  //Extraer los valores
  const { nombre, cantidad, precio } = nuevoProducto;

  // Cuando el usuario presiona agregar producto
  const submitProducto = (e) => {
    actualizarProducto({ ...nuevoProducto, categoria: radioValue });

    e.preventDefault();

    // Validad
    if (nombre.trim() === "") {
      actualizarError(true);
      return;
    }

    //Eliminar mensaje de error
    actualizarError(false);

    //Crear el producto
    crearProducto(nuevoProducto);

    obtenerProductos();
    //Reiniciar el form
    actualizarProducto({
      nombre: "",
      precio: "",
      cantidad: "1",
      precio: "0",
      tachar: true,
      categoria: radioValue,
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
        Mi Lista, Agustín
      </h2>

      <div>
        <Form onSubmit={submitProducto}>
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
            <Row>
              {/* <Form.Label>Cantidad</Form.Label> */}
              <Col
                sm={6}
                xs={6}
                className="mr-3"
                style={{
                  color: "#E2D784",
                  fontSize: "20px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Form.Label style={{ color: "#F5F5F5", marginRight: "6px", fontSize: "16px" }}>
                  Cantidad
                </Form.Label>
                <Form.Control
                  type="number"
                  name="cantidad"
                  placeholder="0"
                  onChange={actualizarState}
                  value={cantidad}
                />
              </Col>

              {/* <Form.Label>Precio</Form.Label> */}
              <Col
                sm={6}
                xs={6}
                style={{
                  color: "#E2D784",
                  fontSize: "20px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Form.Label style={{ color: "#F5F5F5", marginRight: "6px", fontSize: "16px" }}>
                  Precio
                </Form.Label>
                <Form.Control
                  type="number"
                  name="precio"
                  placeholder="0"
                  onChange={actualizarState}
                  value={precio}
                />
              </Col>
            </Row>

            <Col
              sm={12}
              xs={12}
              style={{
                color: "#E2D784",
                fontSize: "20px",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <ButtonGroup
                style={{
                  marginTop: 0,
                }}
              >
                {radios.map((radio, idx) => (
                  <ToggleButton
                    style={{
                      marginTop: 0,
                    }}
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    // variant={idx % 2 ? "outline-success" : "outline-danger"}
                    variant={"outline-success"}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </Col>

            <Col
              sm={12}
              xs={12}
              style={{
                display: "flex",
                justifyContent: "end",
                marginRight: "10px",
              }}
            >
              <Button
                variant="outline-warning"
                type="submit"
                style={{
                  color: "#E2D784",
                  fontSize: "20px",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                Agregar
              </Button>
            </Col>
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
