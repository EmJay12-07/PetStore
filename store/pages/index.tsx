import Script from 'next/script';
import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import Head from "next/head";
import { IProduct } from "../components/Product";
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

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await fetch('https://api-indol-psi.vercel.app/api/products');
    const products: IProduct[] = await res.json();
    console.log(products);

    return {
        props: {
            products
        }
    }
}