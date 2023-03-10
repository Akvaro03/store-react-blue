import { createSlice } from "@reduxjs/toolkit";
import imgBackpack from '../../img/productExample.png'
import imgDoll from '../../img/productDoll.png'

const initialState = [
    {
        imgProduct: imgBackpack,
        name: "Mochila Kuromi",
        Description: "This is a Kuromi backspack",
        Price: 250,
    },
    {
        imgProduct: imgDoll,
        name: "Muñeco Kuromi",
        Price: 150,
        Description: "This is a doll"
    },
    {
        imgProduct: imgBackpack,
        name: "Mochila Kuromi",
        Description: "This is a Kuromi backspack",
        Price: 250,
    },
    {
        imgProduct: imgDoll,
        name: "Muñeco Kuromi",
        Price: 150,
        Description: "This is a doll"
    },
    {
        imgProduct: imgBackpack,
        name: "Mochila Kuromi",
        Description: "This is a Kuromi backspack",
        Price: 250,
    },
    {
        imgProduct: imgDoll,
        name: "Muñeco Kuromi",
        Price: 150,
        Description: "This is a doll"
    },
    {
        imgProduct: imgBackpack,
        name: "Mochila Kuromi",
        Description: "This is a Kuromi backspack",
        Price: 250,
    },
    {
        imgProduct: imgDoll,
        name: "Muñeco Kuromi",
        Price: 150,
        Description: "This is a doll"
    },

]

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers:{
        addProduct: (state, action) => {
        },
        editProduct: (state, action) => {

        },
        deleteProduct: (state, action) => {

        }
    }
});

export const { addProduct, editProduct, deleteProduct } = productsSlice.actions;
export default productsSlice.reducer;

