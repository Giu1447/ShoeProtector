import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const navItems = ["Home", "Shop", "About", "Kontakt"];

  return (
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-blue-100">
        {/* Header */}
        <header className="bg-green-700 shadow-lg p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-extrabold text-white tracking-wide">ShoeProtector</h1>
            <nav>
              <ul className="flex space-x-6">
                {navItems.map((item) => (
                    <li key={item}>
                      <Link
                          href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                          className="text-white hover:text-yellow-300 transition duration-300 font-medium"
                      >
                        {item}
                      </Link>
                    </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <div className="container mx-auto p-6">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-8">
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <Image
                    src="/images/splash-protectors.jpeg"
                    alt="ShoeProtector"
                    width={500}
                    height={300}
                    priority
                    className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2">
                <h2 className="text-4xl font-bold text-green-700 mb-4">ShoeUmbrella Pro 2025</h2>
                <p className="text-gray-700 mb-4">
                  Der <strong>ShoeUmbrella Pro 2025</strong> schützt deine Lieblingsschuhe bei Regen, Schnee und Matsch!
                </p>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                  <li>Robuster, wasserabweisender Nano-Nylon</li>
                  <li>5 stylische Farben</li>
                  <li>Sicherer Halt dank elastischem Band</li>
                  <li>Windresistenz bis 25 km/h</li>
                </ul>
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-bold text-orange-600">CHF 39.99</span>
                  <button
                      className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 hover:scale-105 shadow-lg transition duration-300"
                  >
                    In den Warenkorb
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-green-800 text-white py-6">
          <div className="container mx-auto flex justify-between items-center flex-wrap">
            <p className="text-sm pl-5">© 2025 ShoeProtector. Alle Rechte vorbehalten.</p>
            <nav className="flex space-x-4 pr-5">
              <Link href="/datenschutz" className="text-gray-300 hover:text-white transition">Datenschutz</Link>
              <Link href="/agb" className="text-gray-300 hover:text-white transition">AGB</Link>
              <Link href="/support" className="text-gray-300 hover:text-white transition">Support</Link>
            </nav>
          </div>
        </footer>
      </div>
  );
}
