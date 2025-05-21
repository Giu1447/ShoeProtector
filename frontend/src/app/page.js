// app/page.js

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from "@/app/components/Header";
import Link from "next/link";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [visibleCount, setVisibleCount] = useState(3);

    useEffect(() => {
        async function fetchProducts() {
            const res = await fetch('http://localhost:8081/products', {
                cache: 'no-store',
            });
            if (!res.ok) throw new Error('Failed to fetch products');
            const data = await res.json();
            setProducts(data);
        }
        fetchProducts();
    }, []);


    const handleShowMore = () => {
        setVisibleCount(products.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-8">
            <Header />
            <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">Unsere Produkte</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.slice(0, visibleCount).map((product) => (
                    <Link
                        key={product.id}
                        href={`/products/${product.id}`}
                        className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:scale-[1.02] transition"
                    >
                        <Image
                            src={product.imageurl}
                            alt={product.name}
                            width={400}
                            height={250}
                            className="rounded-md object-cover"
                            priority
                        />
                        <h2 className="text-2xl font-semibold mt-4 text-green-700">{product.name}</h2>
                        <span className="text-xl font-bold text-orange-600 mt-4">CHF {product.price}</span>
                    </Link>
                ))}
            </div>

            {visibleCount < products.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleShowMore}
                        className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
                    >
                        Mehr anzeigen
                    </button>
                </div>
            )}
        </div>
    );
}
