import { CREAR_PRODUCTO,
         OBTENER_PRODUCTOS,
         ELIMINAR_PRODUCTO,
         EDITAR_PRODUCTO,
         TACHAR_PRODUCTO
} from "../../types";


export default (state, action ) => {
    switch (action.type) {
        case CREAR_PRODUCTO:
            return{
                ...state.productos,
                productos: action.payload,
                alerta: { msg: "Gasto Agregado" },
            }
        case OBTENER_PRODUCTOS:
            return{
                ...state,
                productos: action.payload,
                alerta: { msg: "Gasto Cargados" },
            }
        case ELIMINAR_PRODUCTO:
            return {
                ...state,
                productos: state.productos.filter(
                (producto) => producto._id !== action.payload
                ),
                alerta: { msg: "Gastos Eliminados" },
            };
       
        default:
            return state;
    }
}