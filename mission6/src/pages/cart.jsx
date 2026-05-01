import React from 'react';
import { useContext } from "react";
import { CartContext } from "../contex";


function Cart() {
    const { cart } = useContext(CartContext);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <div className="p-8 bg-gray-100 min-h-screen ">
            <div className='flex gap-20 ml-20'>
                <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
                <h1 className="text-3xl font-bold mb-6 text-center">Total Price: ₹{totalPrice}</h1>
            </div>

            <div className=" w-150 grid md:grid-cols-1 gap-6">
                {cart.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-4 rounded-xl shadow flex gap-4 items-center"
                    >
                        <img
                            src={item.images[0]}
                            className="w-20 h-20 object-cover rounded"
                        />

                        <div>
                            <h2 className="font-semibold">{item.title}</h2>
                            <p className="text-gray-500">₹{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;