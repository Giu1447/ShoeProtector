"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const userId = 1; // Platzhalter – ggf. dynamisch einbauen

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const res = await fetch(`http://localhost:8080/api/cart/${userId}`);
                const data = await res.json();
                setCartItems(data);
            } catch (error) {
                console.error("Fehler beim Laden des Warenkorbs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    const handleDelete = async (itemId) => {
        try {
            await fetch(`http://localhost:8080/api/cart/${itemId}`, {
                method: "DELETE",
            });
            setCartItems(cartItems.filter((item) => item.id !== itemId));
        } catch (error) {
            console.error("Fehler beim Entfernen des Artikels:", error);
        }
    };

    const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 flex flex-col">
            <header className="bg-green-700 p-4 shadow-md">
                <div className="container mx-auto text-white flex justify-between items-center">
                    <h1 className="text-xl font-bold">Dein Warenkorb</h1>
                    <Link href="/" className="hover:underline">Zurück zum Shop</Link>
                </div>
            </header>

            <main className="flex-grow container mx-auto p-6">
                {loading ? (
                    <p className="text-gray-600">Lade Warenkorb...</p>
                ) : cartItems.length === 0 ? (
                    <p className="text-gray-700 text-lg">Dein Warenkorb ist leer.</p>
                ) : (
                    <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b pb-4"
                            >
                                <div>
                                    <h2 className="font-semibold text-green-800">{item.productName}</h2>
                                    <p className="text-sm text-gray-500">CHF {item.price.toFixed(2)}</p>
                                </div>
                                <button
                                    onClick={() => handleDelete(item.id)}
                                    className="text-red-600 hover:underline"
                                >
                                    Entfernen
                                </button>
                            </div>
                        ))}

                        <div className="flex justify-between font-bold text-lg mt-4">
                            <span>Gesamt:</span>
                            <span>CHF {totalPrice}</span>
                        </div>
                    </div>
                )}
            </main>

            <footer className="bg-green-800 text-white py-4">
                <div className="container mx-auto text-center text-sm">
                    © 2025 ShoeProtector. Alle Rechte vorbehalten.
                </div>
            </footer>
        </div>
    );
}
