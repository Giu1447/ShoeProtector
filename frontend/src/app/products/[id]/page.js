import Image from 'next/image';
import CartButton from "@/app/components/CartButton";

async function getProduct(id) {
    const res = await fetch(`http://product-service:8080/products/${id}`, {
        cache: 'no-store',
    });
    if (!res.ok) throw new Error('Produkt nicht gefunden');
    return res.json();
}

export default async function ProductPage({ params }) {
    const product = await getProduct(params.id);

    return (
        <div className="max-w-4xl mx-auto mt-10 p-4">
            <div className="grid md:grid-cols-2 gap-8">
                <Image
                    src={product.imageurl}
                    alt={product.name}
                    width={500}
                    height={500}
                    className="rounded-2xl shadow-lg"
                />
                <div>
                    <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                    <p className="text-xl text-green-600 mb-2 font-semibold">
                        {product.price.toFixed(2)} CHF
                    </p>
                    <p className="text-gray-700 mb-6">{product.description}</p>

                    <CartButton productId={product.id} />
                </div>
            </div>
        </div>
    );
}
