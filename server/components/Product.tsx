import Image from 'next/image';
import { CSSProperties } from 'react';

export interface IProduct {
    id: string;
    name: string;
    price: number;
    url: string;
    description: string;
    image: string;
    category: string;
}

interface IProductProps {
    product: IProduct;
}

const Product = (props: IProductProps) => {
    console.log(props.product, "Props");
    const productStyle: CSSProperties = {
        display: 'inline-block',
        width: '300px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Adding box shadow
        margin: '10px',
        padding: '10px',
        textAlign: 'left',
        borderRadius: '8px', // Adding border radius for rounded corners
    };

    const imageStyle: CSSProperties = {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '8px', // Applying border radius to image
    };

    const buttonStyle: CSSProperties = {
        backgroundColor: '#0070f3',
        color: 'white',
        border: 'none',
        padding: '8px 12px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        borderRadius: '4px', // Adding border radius to button
    };


    return (
        <div style={productStyle}>
            <div style={{ marginBottom: '10px' }}>
                <div style={imageStyle}>
                    <Image
                        src={props.product.image}
                        alt={props.product.name}
                        width={300}
                        height={200}
                    />
                </div>
            </div>
            <div>
                <h2 style={{ fontSize: '18px', marginBottom: '5px' }}>{props.product.name}</h2>
                <p style={{ color: '#666', marginBottom: '10px' }}>{props.product.description}</p>
                <p style={{ color: '#000', marginBottom: '10px', fontWeight: 600 }}>Category: {props.product.category}</p>
                <div style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
                    ${props.product.price.toFixed(2)}
                </div>
                <button
                    className='snipcart-add-item'
                    style={buttonStyle}
                    data-item-id={props.product.id}
                    data-item-name={props.product.name}
                    data-item-category={props.product.category}
                    data-item-price={props.product.price.toString()}
                    data-item-url={props.product.url.replace(/([^:]\/)\/+/g, "$1")}
                    data-item-image={props.product.image.toString()}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default Product;
