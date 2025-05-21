'use client';

import { useEffect, useState } from 'react';

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [userId, setUserId] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Warenkorb laden
    useEffect(() => {
        const userStr = localStorage.getItem('user');
        if (!userStr) {
            window.location.href = '/login';
            return;
        }

        const user = JSON.parse(userStr);
        setUserId(user.id);

        fetchCart(user.id);
    }, []);

    // Fetch Funktion
    function fetchCart(id) {
        fetch(`http://localhost:8083/api/cart/${id}`)
            .then(res => {
                if (!res.ok) throw new Error('Fetch fehlgeschlagen');
                return res.json();
            })
            .then(data => setCartItems(data))
            .catch(err => console.error(err));
    }

    // Item löschen
    function handleDelete(itemId) {
        fetch(`http://localhost:8083/api/cart/${userId}/item/${itemId}`, {
            method: 'DELETE',
        })
            .then(res => {
                if (!res.ok) throw new Error('Löschen fehlgeschlagen');
                // Warenkorb aktualisieren
                fetchCart(userId);
            })
            .catch(err => console.error(err));
    }

    // Menge ändern
    function handleQuantityChange(itemId, newQuantity) {
        if (newQuantity < 1) return; // keine negativen Mengen

        fetch(`http://localhost:8083/api/cart/${userId}/item/${itemId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ quantity: newQuantity }),
        })
            .then(res => {
                if (!res.ok) throw new Error('Aktualisierung fehlgeschlagen');
                // Warenkorb aktualisieren
                fetchCart(userId);
            })
            .catch(err => console.error(err));
    }

    return (
        <>
            <button
                onClick={() => setSidebarOpen(true)}
                className="relative cursor-pointer bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition duration-300"
            >
                Warenkorb
                {cartItems.length > 0 && (
                    <span
                        className="absolute -top-2 -right-2 bg-red-600 rounded-full text-xs w-5 h-5 flex items-center justify-center text-white">
            {cartItems.length}
          </span>
                )}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
                    sidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="p-4 flex justify-between items-center border-b">
                    <h2 className="text-xl font-bold">Warenkorb</h2>
                    <button
                        onClick={() => setSidebarOpen(false)}
                        className="text-gray-600 hover:text-gray-900"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-4 overflow-y-auto" style={{maxHeight: 'calc(100% - 64px)'}}>
                    {cartItems.length === 0 ? (
                        <p>Dein Warenkorb ist leer.</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="flex justify-between items-center mb-4 border-b pb-2">
                                <div>
                                    <p className="text-base font-medium text-gray-800 leading-relaxed">{item.productName}</p>
                                    <p className="text-sm text-gray-600">{item.price} CHF</p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <input
                                        type="number"
                                        min="1"
                                        value={item.quantity}
                                        onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
                                        className="w-12 border rounded px-1"
                                    />
                                    <button
                                        onClick={() => handleDelete(item.id)}
                                        className="text-red-600 hover:text-red-800"
                                        title="Entfernen"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* Hintergrund Overlay wenn Sidebar offen */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-40"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </>
    );
}
