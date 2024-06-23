import { getToys } from "@/utils/actions/toys";
import { useEffect, useState } from "react";

export default function Example() {
    const [products, setProducts] = useState<Toy[]>([]);
    const [data, setData] = useState<Toy[] | null>(null);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getToys();
            // @ts-ignore
            setProducts(data);
        };
        fetchData();
    }, []);

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div>
                    <h2 className="text-lg font-medium text-gray-900">Foods</h2>
                    <p className="mt-1 text-sm text-gray-500">Pets Foods</p>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.toy_id} className="group relative">
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                />
                            </div>
                            <div className="mt-4 flex justify-between">
                                <div>
                                    <h3 className="text-sm text-gray-700">
                                        <a href="#">
                                            <span aria-hidden="true" className="absolute inset-0" />
                                            {product.name}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

interface Toy {
    toy_id: number;
    name: string;
    image: string;
    category: string;
    price: string;
}