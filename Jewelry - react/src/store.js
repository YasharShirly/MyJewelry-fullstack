import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import userSlice from "./features/user/userslice";

export const storeee=configureStore({
    reducer:{
        c:cartSlice,
        u:userSlice
    }
})