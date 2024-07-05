import { NextResponse } from "next/server"


export interface ISnipcartProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: string
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get('productId')

    // Fetch the products from the API
    const response = await fetch('/api/products');
    const products = await response.json();
// @ts-ignore
    const product = products.find(p => p.id === productId);
    if (!product) {
        return NextResponse.json({
            error: "Product not found"
        }, {
            status: 404
        });
    }
    const snipcartProduct: ISnipcartProduct = { ...product, image: product?.image ?? "" }

    return NextResponse.json(snipcartProduct);
}