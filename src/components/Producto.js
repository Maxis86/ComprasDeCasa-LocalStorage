import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const Producto = ({ producto, eliminar }) => {
  return (
    <>
      <Container>
        <Row>
          <Col xs={2} md={2}>
            <Form.Group className="mb-3">
              <Form.Check type="checkbox" size="lg" />
            </Form.Group>
          </Col>
          <Col xs={4} md={4}>
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
          </Col>
          <Col xs={2} md={2}>
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
            xs={4}
            md={4}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => eliminar(producto.id)}
              variant="outline-warning"
              size="md"
            >
              Quitar
            </Button>{" "}
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
