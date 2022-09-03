import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const Producto = ({
  producto,
  eliminar,
  sumarCantidad,
  restarCantidad,
  tachar,
}) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={2} md={2}>
            <Button
              style={{
                marginRight: "4px",
                marginTop: "14px",
                marginBottom: "14x",
                padding: "6px",
                width: "25px",
              }}
              onClick={() => tachar(producto.id)}
              variant="outline-info"
            ></Button>
            {/* <Form.Check type="checkbox" className="checkbox-xl" onClick={tachar(id)}/> */}
          </Col>
          <Col xs={5} md={4}>
            {producto.tachar ? (
              <span
                style={{
                  color: "#F5F5F5",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                {producto.nombre}
              </span>
            ) : (
              <span 
                style={{
                  textDecoration:'line-through',
                  color: "#FF4949",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                {producto.nombre}
              </span>
            )}
          </Col>
          <Col xs={3} md={2}>
            <span
              style={{
                color: "#F5F5F5",
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              {producto.cantidad}
            </span>
          </Col>
          <Col
            xs={2}
            md={4}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                marginRight: "4px",
                marginTop: "8px",
                marginBottom: "16x",
                padding: "6px",
              }}
              onClick={() => sumarCantidad(producto.id)}
              variant="outline-success"
              size="md"
            >
              +
            </Button>
            <Button
              style={{
                marginRight: "4px",
                marginTop: "8px",
                marginBottom: "8px",
                padding: "7px",
              }}
              onClick={() => restarCantidad(producto.id)}
              variant="outline-warning"
              size="md"
            >
              -
            </Button>
            <Button
              style={{
                marginRight: "4px",
                marginTop: "8px",
                marginBottom: "12px",
                padding: "7px",
              }}
              onClick={() => eliminar(producto.id)}
              variant="outline-danger"
              size="sx"
            >
              x
            </Button>
          </Col>
          {/* </Col> */}
          {/* <span>{producto.precio}</span> */}
          {/* <Col> */}
        </Row>
      </Container>
    </>
  );
};

export default Producto;
