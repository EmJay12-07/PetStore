import Script from 'next/script';
import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import Head from "next/head";
import { IProduct } from "../components/Product";
import halfmoonBettaPicture from "../public/halfmoon.jpg";
import dragonScaleBettaPicture from "../public/dragonscale.jpg";
import crowntailBettaPicture from "../public/crowntail.jpeg";
import veiltailBettaPicture from "../public/veiltail.jpg";
import { GetStaticProps } from "next";
import Jumbotron from "../components/Jumbotron";

interface IProductListProps {
    products: IProduct[]
}

export default function Home({ products }: IProductListProps) {
    return (
        <>
            <Head>
                <title>My awesome store</title>
                <link rel="preconnect" href="https://app.snipcart.com" />
                <link rel="preconnect" href="https://cdn.snipcart.com" />
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
                <link rel="shortcut icon" href="../public/favicon.ico" />
            </Head>
            <main className="main">
                <Jumbotron />
                <ProductList products={products} />
                <Contact />
            </main>
            <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
            <div hidden id="snipcart" data-api-key="MzEwZDg0MDctYjY4YS00YzcyLTlmMzAtZDVlNGI2YjAzNGI2NjM4NDY5NjM5MTM2NzYzNjc1"></div>
        </>
    )
}

export const products: IProduct[] = [
    {
        id: "halfmoon",
        name: "Halfmoon Betta",
        price: 25.00,
        image: "https://snipcart-next-2021.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fhalfmoon.b3981cd387d9fca65f8bc1abc1f6f9c1.jpg&w=1920&q=75",
        description: "The Halfmoon betta is arguably one of the prettiest betta species. It is recognized by its large tail that can flare up to 180 degrees.",
        url: '/api/products/halfmoon',
        category: 'Pets'
    },
    {
        id: "dragonscale",
        name: "ROZDOG",
        price: 35,
        image: "https://i0.wp.com/petstore.co.ke/wp-content/uploads/2021/01/RF01-B-Blue-RFO.jpg?w=500&ssl=1",
        description: "Dog toy that is perfect for playing fetch with your furry friend.",
        url: '/api/products/dragonscale',
        category: 'Pet Toys'
    },
    {
        id: "crowntail",
        name: "Loop Pet Food",
        price: 7.50,
        image: "https://greenspoon.co.ke/wp-content/uploads/2023/01/Greenspoon-Kenya-Loop-Dog-Food.jpg",
        description: "Loop is a premium dog food brand that offers a variety of flavors and recipes for your furry friend.",
        url: '/api/products/crowntail',
        category: 'Pets Food'
    },
    {
        id: "veiltail",
        name: "Veiltail Betta",
        price: 5.00,
        image: "https://snipcart-next-2021.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fveiltail.fbaf097b0904500cb68d74f4ead33794.jpg&w=1920&q=75",
        description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards.",
        url: '/api/products/veiltail',
        category: 'Pet'
    }
]

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            products
        }
    }
}
