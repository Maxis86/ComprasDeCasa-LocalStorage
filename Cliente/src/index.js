import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductoState from "./context/producto.js/productoState";

ReactDOM.render(
  <React.StrictMode>
    <ProductoState>
      <App />
    </ProductoState>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
