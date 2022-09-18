import React, { useContext } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import ProductoContext from "../context/producto.js/productoContext";
import Swal from 'sweetalert2'

const Producto = ({ producto }) => {
  const productoContext = useContext(ProductoContext);
  const { eliminarProducto, editarProducto, tacharProducto } = productoContext;

  const editar = async(id, precio, cantidad, nombre) => {

    const { value: formValues } = await Swal.fire({
      title: 'Editar Producto',
      html:
        `Nombre: <input value=${nombre} id="swal-input1" class="swal2-input">` +
        `Precio:  <input value=${precio} id="swal-input2" class="swal2-input">`+
        `Cantidad:  <input value=${cantidad} id="swal-input3" class="swal2-input">`,

      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value
        ]
      }
    })
    
    if (formValues) {
      editarProducto(id, formValues[0], formValues[1], formValues[2])
    }
  };

  // const tachar = async(id, marcar) => {

  //   // productos.map(
  //   //   (producto) => producto.id === id && (producto.tachar = !producto.tachar)
  //   // );

    

  //   editarTachar(id, estado)

  //   const pepe = Array.from(productos);
  //   guardarProductos(pepe);
    
  //   if (formValues) {
  //     editarProducto(id, formValues[0], formValues[1], formValues[2])
  //   }
  // };

  return (
    <>
      <Container>
        <Row>
          <Col xs={2} md={2}>
            <Button
              style={{
                marginRight: "2px",
                marginTop: "14px",
                marginBottom: "14x",
                padding: "6px",
                width: "25px",
              }}
              onClick={() => tacharProducto(producto._id, !producto.tachar)}
              variant="outline-info"
            ></Button>
            {/* <Form.Check type="checkbox" className="checkbox-xl" onClick={tachar(id)}/> */}
          </Col>
          <Col xs={2} md={2}>
            <span
              style={{
                color: "#F5F5F5",
                display: "flex",
                alignContent: "center",
                justifyContent: 'flex-start',
              }}
            >
              {producto.cantidad}
            </span>
          </Col>
          <Col xs={6} md={6}>
            {producto.tachar ? (
              <span
                style={{
                  color: "#F5F5F5",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: 'flex-start',
                }}
              >
                {producto.nombre}
              </span>
            ) : (
              <span
                style={{
                  textDecoration: "line-through",
                  color: "#FF4949",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: 'flex-start',
                }}
              >
                {producto.nombre}
              </span>
            )}
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
              $ {producto.precio} c/u
            </span>
          </Col>
        </Row>
        <Row>
          <Col
            xs={12}
            md={12}
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "end",
            }}
          >
            <Button
              style={{
                marginRight: "4px",
                marginTop: "8px",
                marginBottom: "12px",
                padding: "7px",
              }}
              onClick={() => editar(producto._id, producto.precio, producto.cantidad, producto.nombre)}
              variant="outline-warning"
              size="md"
            >
              Edit
            </Button>
            <Button
              style={{
                marginRight: "4px",
                marginTop: "8px",
                marginBottom: "12px",
                padding: "7px",
              }}
              onClick={() => eliminarProducto(producto._id)}
              variant="outline-danger"
              size="sx"
            >
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Producto;
