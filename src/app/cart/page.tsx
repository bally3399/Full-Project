'use client'

import CartPage from "@/pages/homepage/cart/Cart";
import store from "@/redux/Store";
import {Provider} from "react-redux";
import React from "react";

export default function cart() {
    return (
        <div>
            <Provider store={store}>
                <CartPage/>
            </Provider>
        </div>
    );
}
