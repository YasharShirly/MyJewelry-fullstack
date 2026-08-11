import { createSlice } from "@reduxjs/toolkit";
const init = {
    arr: [],
    sumProduct: 0,
    sumPrice: 0,
    isShow: false
}
const cartSlice = createSlice({
    initialState: init,
    name: "cartttt",
    reducers: {
        closeOpen: (state, action) => {
            state.isShow = false;
        },
        openWindow: (state, action) => {
            state.isShow = true;
        },
        addItem: (state, action) => {
            console.log(state.arr)
            let product = state.arr.find(item => item.idproducts == action.payload.idproducts);
            if (!product) {
                let i = { ...action.payload, qty: 1 };
                state.arr.push(i);
                state.sumProduct++,
                    state.sumPrice += i.price;
            }
            else {
                product.qty++;
                state.sumProduct++,
                    state.sumPrice += product.price;
            }
            localStorage.setItem("cart", JSON.stringify(state.arr));
            localStorage.setItem("sumPrice", JSON.stringify(state.sumPrice));
            localStorage.setItem("sumProduct", JSON.stringify(state.sumProduct));
        },
        removeItem: (state, action) => {
            let product = state.arr.find(item => item.idproducts == action.payload.idproducts);
            if (product.qty == 1) {
                let index = state.arr.findIndex(item => item.idproducts == action.payload);
                state.arr.splice(index, 1);
                state.sumProduct--,
                    state.sumPrice -= product.price;
            }
            else {
                product.qty--;
                state.sumProduct--,
                    state.sumPrice -= product.price;
            }
            localStorage.setItem("cart", JSON.stringify(state.arr));
            localStorage.setItem("sumPrice", JSON.stringify(state.sumPrice));
            localStorage.setItem("sumProduct", JSON.stringify(state.sumProduct));
        },
        deleteAllprod: (state, action) => {
            let index = state.arr.findIndex(item => item.idproducts == action.payload.idproducts);
            state.arr.splice(index, 1);
            state.sumProduct -= action.payload.qty,
            state.sumPrice -= action.payload.price * action.payload.qty;
            localStorage.setItem("cart", JSON.stringify(state.arr));
            localStorage.setItem("sumPrice", JSON.stringify(state.sumPrice));            
            localStorage.setItem("sumProduct", JSON.stringify(state.sumProduct));
        },
        startCart: (state, action) => {
            state.arr = JSON.parse(localStorage.getItem("cart"));
            console.log(JSON.parse(localStorage.getItem("sumPrice")));
            console.log("sumProduct " , JSON.parse(localStorage.getItem("sumProduct")));
            state.sumPrice = JSON.parse(localStorage.getItem("sumPrice"));
            state.sumProduct = JSON.parse(localStorage.getItem("sumProduct"));
        },
        resetCart:(state,action)=>{
            state.arr = [];
            state.sumPrice = 0;
            state.sumProduct = 0;
            localStorage.setItem("cart", JSON.stringify(state.arr));
            localStorage.setItem("sumPrice", JSON.stringify(state.sumPrice));            
            localStorage.setItem("sumProduct", JSON.stringify(state.sumProduct));
            
        }
    }
})
export default cartSlice.reducer;
export const { addItem, removeItem, closeOpen, deleteAllprod, startCart, openWindow ,resetCart} = cartSlice.actions;