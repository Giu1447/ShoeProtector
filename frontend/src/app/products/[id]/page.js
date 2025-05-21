// app/products/[id]/page.js
import Image from 'next/image';

async function getProduct(id) {
    const res = await fetch(`http://product-service:8080/products/${id}`, {cache: 'no-store'});
    if (!res.ok) throw new Error('Produkt nicht gefunden');
    return res.json();
}

export default async function ProductPage({params}) {
    const product = await getProduct(params.id);

    return (
        <div className="min-h-screen bg-white p-10">
            <div className="max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg p-8">
                <Image
                    src={product.imageurl}
                    alt={product.name}
                    width={600}
                    height={400}
                    className="rounded-md object-cover mb-6"
                />
                <h1 className="text-3xl font-bold text-green-700">{product.name}</h1>
                <p className="mt-4 text-gray-800">{product.description}</p>
                <p className="mt-4 text-xl text-orange-600 font-semibold">CHF {product.price.toFixed(2)}</p>
            </div>
        </div>
    );
}