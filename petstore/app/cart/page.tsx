"use client"
// Checkout.tsx
import React, { useState, useEffect, useCallback } from 'react';


// types.ts
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

export interface CartItem {
    product: Product;
    quantity: number;
}

export interface CheckoutState {
    cart: CartItem[];
}

const Checkout: React.FC = () => {
    const [state, setState] = useState<CheckoutState>({
        cart: JSON.parse(localStorage.getItem('cart') || '[]'),
    });

    // Memoize the updateCart function to avoid unnecessary re-renders
    const updateCart = useCallback(
        (newCart: CartItem[]) => {
            setState({ cart: newCart });
            localStorage.setItem('cart', JSON.stringify(newCart));
        },
        [setState]
    );

    const increaseQuantity = (index: number) => {
        const newCart = [...state.cart];
        newCart[index].quantity += 1;
        updateCart(newCart);
    };

    const decreaseQuantity = (index: number) => {
        const newCart = [...state.cart];
        if (newCart[index].quantity > 1) {
            newCart[index].quantity -= 1;
            updateCart(newCart);
        }
    };

    const removeItem = (index: number) => {
        const newCart = state.cart.filter((_, i) => i !== index);
        updateCart(newCart);
    };

    const total = state.cart.reduce(
        (acc, item) => acc + item.product.price * item.quantity,
        0
    );

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Checkout</h1>
                {state.cart.map((item, index) => (
                    <div
                        key={`${item.product.id}-${index}`}
                        className="flex items-center mb-4"
                    >
                        <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-20 h-20 object-cover rounded-lg shadow-md mr-4"
                        />
                        <div className="flex-1">
                            <h2 className="text-lg font-bold">{item.product.name}</h2>
                            <p className="text-gray-600">{item.product.description}</p>
                            <p className="text-gray-800 font-semibold">
                                ksh{item.product.price.toFixed(2)} x {item.quantity}
                            </p>
                            <div className="flex items-center">
                                <button
                                    onClick={() => decreaseQuantity(index)}
                                    className="bg-red-500 text-white px-2 py-1 rounded-l"
                                >
                                    -
                                </button>
                                <button
                                    onClick={() => increaseQuantity(index)}
                                    className="bg-green-500 text-white px-2 py-1 rounded-r ml-1"
                                >
                                    +
                                </button>
                                <button
                                    onClick={() => removeItem(index)}
                                    className="bg-gray-500 text-white px-2 py-1 rounded ml-4"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                        <div className="text-lg font-bold text-gray-800">
                            ksh{(item.product.price * item.quantity).toFixed(2)}
                        </div>
                    </div>
                ))}
                <div className="flex justify-between items-center mt-6 border-t pt-4">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-xl font-bold">ksh{total.toFixed(2)}</span>
                </div>
                <button className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
                    Proceed to Payment
                </button>
            </div>
        </div>
    );
};

export default Checkout;