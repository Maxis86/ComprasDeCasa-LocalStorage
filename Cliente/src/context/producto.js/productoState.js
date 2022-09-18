import React, { useReducer } from "react";

import productoReducer from "./productoReducer";
import productoContext from "./productoContext";

import {
  CREAR_PRODUCTO,
  OBTENER_PRODUCTOS,
  ELIMINAR_PRODUCTO,
  EDITAR_PRODUCTO,
  TACHAR_PRODUCTO,
} from "../../types";

import clienteAxios from "../../config/axios";

const ProductoState = (props) => {
  const initialState = {
    alerta: {
      msg: "",
    },
    productos: [],
  };

  const fecha = new Date();

  const [state, dispatch] = useReducer(productoReducer, initialState);

  //Funciones
  const crearProducto = async (producto) => {
    if (producto.categoria == "Cocina") {
      producto.categoria = "631396d9a984f046ea5c7c11";
    } else if (producto.categoria == "Baño") {
      producto.categoria = "6313aeacd756d343fbd8216d";
    } else if (producto.categoria == "Verduleria") {
      producto.categoria = "6313aec7d756d343fbd82170";
    } else if (producto.categoria == "Frio") {
      producto.categoria = "6313aed5d756d343fbd82173";
    }

    try {
      const respuesta = await clienteAxios.post("/api/productos", {
        nombre: producto.nombre,
        cantidad: producto.cantidad,
        categoria: producto.categoria,
        precio: producto.precio,
        tachado: producto.tachado,
        dia: fecha.getDate(),
      });

      obtenerProductos();
    } catch (error) {
      console.error("Error al agregar el documento: ", error);
    }
  };

  const obtenerProductos = async () => {
    try {
      const respuesta = await clienteAxios.get("/api/productos");
      console.log(respuesta.data.productos);

      const productos = [];
      for (let i = 0; i < respuesta.data.productos.length; i++) {
        const element = respuesta.data.productos[i];
        productos.push(element);
      }

      dispatch({
        type: OBTENER_PRODUCTOS,
        payload: productos,
      });
    } catch (error) {
      console.error("Error al agregar el documento: ", error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      const respuesta = await clienteAxios.delete(`/api/productos/${id}`);

      dispatch({
        type: ELIMINAR_PRODUCTO,
        payload: id,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const editarProducto = async (id, nombre, precio, cantidad) => {
    try {
      await clienteAxios.put(`/api/productos/${id}`, {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
      });

      obtenerProductos();

      // dispatch({
      //   type: AGREGAR_ALERTA,
      //   payload: { msg: "Gasto Editado" },
      // });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const tacharProducto = async (id, estado) => {

    
    try {
      await clienteAxios.put(`/api/productos/${id}`, {
        tachar: estado,
      });

      obtenerProductos();

      // dispatch({
      //   type: AGREGAR_ALERTA,
      //   payload: { msg: "Gasto Editado" },
      // });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <productoContext.Provider
      value={{
        productos: state.productos,
        crearProducto,
        obtenerProductos,
        eliminarProducto,
        editarProducto,
        tacharProducto
      }}
    >
      {props.children}
    </productoContext.Provider>
  );
};

export default ProductoState;
