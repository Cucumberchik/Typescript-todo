import { createSlice } from "@reduxjs/toolkit";
import { TypeProduct } from "../../types/types";
interface IState {
    products:TypeProduct[]
}
let initialState:IState = {
    products: JSON.parse(localStorage.getItem("products")|| "[]") 
}

const Todo = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addProduct(state, action):void{
            let Products = [...state.products,action.payload];
            localStorage.setItem("products", JSON.stringify(Products));
            state.products= Products;
        },
        removeProduct(state, action):void{
            let Products = state.products.filter((el:TypeProduct)=> el.id !== action.payload )
            localStorage.setItem("products", JSON.stringify(Products));
            state.products= Products;
        }
    }
})
export const {addProduct, removeProduct} = Todo.actions;

export default Todo.reducer