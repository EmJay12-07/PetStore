import { NextApiRequest, NextApiResponse } from "next";


export interface ISnipcartProduct {
    id: string
    name: string
    price: number
    url: string
    description: string
    image: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { productId } = req.query;

    // Fetch the products from the API
    const response = await fetch('/api/products');
    const products = await response.json();

    const product = products.find(p => p.id === productId);
    if (!product) {
        res.status(404).json({});
        return;
    }
    const snipcartProduct: ISnipcartProduct = { ...product, image: product?.image ?? "" }

    res.status(200).json(snipcartProduct);
}