import React, { useState, useEffect } from 'react';

// Checkout component
const Checkout = () => {
  // Fetching cart from local storage
  const storedCart = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
  const [cart, setCart] = useState(storedCart ? JSON.parse(storedCart) : []);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const newTotal = cart.reduce((acc: any, item: any) => acc + item.product.price * item.quantity, 0);
      setTotal(newTotal);
    };
    calculateTotal();
  }, [cart]);



  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        {cart.map((item: any, index: number) => (
          <div key={index} className="flex items-center mb-4">
            <img src={item.product.image} alt={item.product.name} className="w-20 h-20 object-cover rounded-lg shadow-md mr-4" />
            <div className="flex-1">
              <h2 className="text-lg font-bold">{item.product.name}</h2>
              <p className="text-gray-600">{item.product.description}</p>
              <p className="text-gray-800 font-semibold">
                ${item.product.price.toFixed(2)} x {item.quantity}
              </p>
            </div>
            <div className="text-lg font-bold text-gray-800">
              ${(item.product.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center mt-6 border-t pt-4">
          <span className="text-xl font-bold">Total</span>
          <span className="text-xl font-bold">${total.toFixed(2)}</span>
        </div>
        <button className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Checkout;