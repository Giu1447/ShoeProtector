import Image from 'next/image';
import Header from "@/app/components/Header";

async function getProducts() {
  const res = await fetch('http://product-service:8080/products', { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 p-8">
        <Header />
        <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">Unsere Produkte</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                <Image
                    src={product.imageurl || '/images/placeholder1.jpg'}
                    alt={product.name}
                    width={400}
                    height={250}
                    className="rounded-md object-cover"
                    priority
                />
                <h2 className="text-2xl font-semibold mt-4 text-green-700">{product.name}</h2>
                <p className="text-gray-700 mt-2">{product.description}</p>
                <span className="text-xl font-bold text-orange-600 mt-4">CHF {product.price.toFixed(2)}</span>
              </div>
          ))}
        </div>
      </div>
  );
}
