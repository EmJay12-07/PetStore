import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "../../../components/Product";

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

    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    // Then use it in your fetch call
    const response = await fetch(`${API_URL}/api/products`);
    const products: IProduct[] = await response.json();

    const product: IProduct | undefined = products.find(p => p.id === productId);
    if (!product) {
        res.status(404).json({});
        return;
    }
    const snipcartProduct: ISnipcartProduct = { ...product, image: product?.image ?? "" }

    res.status(200).json(snipcartProduct);
}