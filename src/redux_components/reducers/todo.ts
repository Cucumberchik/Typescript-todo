import { createSlice } from "@reduxjs/toolkit";
import { TypeProduct } from "../../types/types";
interface IState {
    products:TypeProduct[]
}
let initialState:IState = {
    products: JSON.parse(localStorage.getItem("products")) || []
}

const Todo = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addProduct(state, action){
            
            state.products = [...state.products,action.payload];
        }
    }
})
export const {addProduct} = Todo.actions;

export default Todo.reducer