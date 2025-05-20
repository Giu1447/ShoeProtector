'use client';

import { useEffect, useState } from 'react';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState({ productName: '', quantity: 1 });
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchOrders() {
            try {
                const res = await fetch('http://order-service:8080/orders');
                if (!res.ok) throw new Error('Fehler beim Laden der Bestellungen');
                const data = await res.json();
                setOrders(data);
            } catch (err) {
                setError(err.message);
            }
        }
        fetchOrders();
    }, []);

    async function handleCreateOrder() {
        try {
            if (!newOrder.productName) {
                setError('Produktname darf nicht leer sein');
                return;
            }
            const res = await fetch('http://order-service:8080/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newOrder),
            });
            if (!res.ok) throw new Error('Bestellung konnte nicht gespeichert werden');
            const savedOrder = await res.json();
            setOrders([...orders, savedOrder]);
            setNewOrder({ productName: '', quantity: 1 });
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    }

    async function handleDeleteOrder(id) {
        try {
            const res = await fetch(`http://order-service:8080/orders/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) throw new Error('Bestellung konnte nicht gelöscht werden');
            setOrders(orders.filter(order => order.id !== id));
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-100 min-h-screen">
            <h2 className="text-2xl font-bold mb-4 text-center">📦 Bestellungen</h2>

            {error && (
                <p className="text-red-600 mb-4 text-center">{error}</p>
            )}

            <ul className="space-y-4 mb-6">
                {orders.map(order => (
                    <li
                        key={order.id}
                        className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
                    >
                        <div>
                            <p className="font-medium">{order.productName}</p>
                            <p className="text-sm text-gray-600">Menge: {order.quantity}</p>
                        </div>
                        <button
                            onClick={() => handleDeleteOrder(order.id)}
                            className="text-red-600 hover:text-red-800 font-semibold"
                        >
                            🗑️ Löschen
                        </button>
                    </li>
                ))}
            </ul>

            <h3 className="text-xl font-semibold mb-2">➕ Neue Bestellung</h3>
            <input
                type="text"
                placeholder="Produktname"
                value={newOrder.productName}
                onChange={e => setNewOrder({ ...newOrder, productName: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
            />
            <input
                type="number"
                min="1"
                value={newOrder.quantity}
                onChange={e => setNewOrder({ ...newOrder, quantity: Number(e.target.value) })}
                className="w-full mb-4 p-2 border rounded"
            />
            <button
                onClick={handleCreateOrder}
                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                ✅ Bestellung anlegen
            </button>
        </div>
    );
}

export default Orders;
