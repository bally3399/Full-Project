import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/Store";
import Image from "next/image";
import { removeFromCart } from "@/redux/CartSlice";

const CartPage = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const dispatch = useDispatch();
    const [note, setNote] = useState("");

    const handleRemove = (id: string) => {
        dispatch(removeFromCart(id));
    };

    const forwardCart = (link: string) => {
        const cartDetails = cart.map((item) => `Product ID: ${item.id}`).join(", ");
        const message = `Cart Details: ${cartDetails}\nNote: ${note}`;
        const encodedMessage = encodeURIComponent(message);
        const fullLink = `${link}${encodedMessage}`;
        window.open(fullLink, "_blank");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Your Cart</h1>
            {cart.length > 0 ? (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
                            <Image
                                src={item.image}
                                alt={`Product ${item.id}`}
                                width={100}
                                height={100}
                                style={{ marginRight: "10px" }}
                            />
                            <div>
                                <p>Product ID: {item.id}</p>
                                <button
                                    onClick={() => handleRemove(item.id)}
                                    style={{
                                        padding: "5px 10px",
                                        backgroundColor: "red",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <textarea
                        placeholder="Add a note (optional)"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows={3}
                        style={{
                            width: "50%",
                            marginBottom: "10px",
                            padding: "10px",
                            borderRadius: "5px",
                        }}
                    />
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <button
                    onClick={() => forwardCart("https://wa.me/<08117977661>")}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#daa520",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Place order on WhatsApp
                </button>
                <button
                    onClick={() => forwardCart("https://www.instagram.com/direct/new/?message=")}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#daa520",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Place order on Instagram
                </button>
                <button
                    onClick={() => forwardCart("https://m.me/<PAGE_USERNAME>?message=")}
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#daa520",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                >
                    Place order on Facebook
                </button>
            </div>
        </div>
    );
};

export default CartPage;
