import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
    id: string;
    image: string;
};

type CartState = {
    cart: Product[];
};

const initialState: CartState = {
    cart: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<Product>) {
            state.cart.push(action.payload);
        },
        removeFromCart(state, action: PayloadAction<string>) {
            state.cart = state.cart.filter((product) => product.id !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
