'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getToyById } from '@/utils/actions/toys'

interface Product {
    toy_id: number;
    name: string;
    description: string;
    category: string;
    price: string;
    image: string;
}

interface CartItem {
    product: Product;
    quantity: number;
}

export default function FoodDetail() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const [product, setProduct] = useState<Product | null>(null)
    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        const id = Number(searchParams.get('id'))
        if (id) {
            const fetchData = async () => {
                const data = await getToyById(id)
                // @ts-ignore
                setProduct(data[0])
            }
            fetchData()
        }
    }, [pathname, searchParams])

    useEffect(() => {
        // Load cart from localStorage
        const storedCart = localStorage.getItem('cart')
        if (storedCart) {
            setCart(JSON.parse(storedCart))
        }
    }, [])

    const addToCart = () => {
        if (product) {
            console.log('Add to cart:', product)
            const existingItem = cart.find((item) => item.product.toy_id === product.toy_id)
            if (existingItem) {
                const updatedCart = cart.map((item) =>
                    item.product.toy_id === product.toy_id
                        ? { product: item.product, quantity: item.quantity + 1 }
                        : item
                )
                setCart(updatedCart)
            } else {
                setCart([...cart, { product, quantity: 1 }])
            }
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }

    if (!product) {
        return <div className="flex items-center justify-center h-screen text-2xl">Loading...</div>
    }

    return (
        <div className="bg-gray-200 dark:bg-gray-900 py-8 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div className="h-[460px] rounded-lg  mb-4 overflow-hidden shadow-lg">
                            <img className="w-full h-full object-fit transform transition-transform duration-300 hover:scale-105" src={product.image} alt={product.name} />
                        </div>
                        <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <button
                                    className="w-full bg-gray-800 dark:bg-gray-600 text-white py-3 px-4 rounded-full font-bold hover:bg-gray-700 dark:hover:bg-gray-500 transition-colors duration-300 shadow-md"
                                    aria-label="Add to Cart"
                                    onClick={addToCart}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-6 py-10 mt-10 ">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">{product.name}</h2>

                        <div className="mb-6">
                            <div className="flex items-center mb-2">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
                                <span className="text-gray-600 dark:text-gray-300 ml-2">{product.price}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="font-bold text-gray-700 dark:text-gray-300">Category:</span>
                                <span className="text-gray-600 dark:text-gray-300 ml-2">{product.category}</span>
                            </div>
                        </div>

                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                            <p className="text-gray-600 dark:text-gray-300 text-lg mt-3 leading-relaxed">
                                {product.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}