import React, { useState } from "react";

const CartPage = () => {
    const [cart, setCart] = useState([
        { id: 1, name: "Item 1", price: 100 },
        { id: 2, name: "Item 2", price: 200 },
    ]);
    const [note, setNote] = useState("");

    const handleRemove = (id: number) => {
        setCart(cart.filter((item) => item.id !== id));
    };

    const handlePlaceOrder = (platform: string) => {
        const cartSummary = cart
            .map((item) => `${item.name} - $${item.price}`)
            .join("\n");
        const message = encodeURIComponent(
            `Hello! I'd like to order the following:\n\n${cartSummary}\n\nNote: ${note}`
        );

        if (platform === "whatsapp") {
            window.open(`https://wa.me/2348117977661?text=${message}`, "_blank");
        } else if (platform === "instagram") {
            window.open("https://www.instagram.com/direct/inbox/", "_blank");
        } else if (platform === "facebook") {
            window.open("https://m.me/yourusername", "_blank");
        } else if (platform === "twitter") {
            window.open("https://twitter.com/messages/compose?recipient_id=your_user_id", "_blank");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Your Cart</h1>
            {cart.length > 0 ? (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} style={{ marginBottom: "10px" }}>
                            <p>{item.name} - ${item.price}</p>
                            <button
                                onClick={() => handleRemove(item.id)}
                                style={{
                                    padding: "5px 10px",
                                    backgroundColor: "red",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                }}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <textarea
                        placeholder="Add a note (optional)"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows={3}
                        style={{
                            width: "100%",
                            marginBottom: "10px",
                            padding: "10px",
                            borderRadius: "5px",
                        }}
                    />
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button
                            onClick={() => handlePlaceOrder("whatsapp")}

                        >
                            Place Order on WhatsApp
                        </button>
                        <button
                            onClick={() => handlePlaceOrder("instagram")}

                        >
                            Place Order on Instagram
                        </button>



                        <button
                            onClick={() => handlePlaceOrder("facebook")}
                        >
                            Place Order on Facebook
                        </button>
                        <button
                            onClick={() => handlePlaceOrder("twitter")}
                        >
                            Place Order on Twitter

                        </button>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};



export default CartPage;
//3tVQdUvClmAT7URs9V3rsp
//6HpMdN52TfJAwVbmkrFeBN