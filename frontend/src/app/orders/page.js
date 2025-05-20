'use client'

import { useEffect, useState } from 'react';

function Orders() {
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState({ productName: '', quantity: 1 });
    const [error, setError] = useState(null);

    // Alle Orders laden
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

    // Neue Order anlegen
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

    // Order löschen
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
        <div style={{ maxWidth: 400, margin: 'auto' }}>
            <h2>Bestellungen</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <ul>
                {orders.map(order => (
                    <li key={order.id} style={{ marginBottom: 10 }}>
                        {order.productName} — Menge: {order.quantity}
                        <button
                            onClick={() => handleDeleteOrder(order.id)}
                            style={{ marginLeft: 10, color: 'red' }}
                        >
                            Löschen
                        </button>
                    </li>
                ))}
            </ul>

            <h3>Neue Bestellung</h3>
            <input
                type="text"
                placeholder="Produktname"
                value={newOrder.productName}
                onChange={e => setNewOrder({ ...newOrder, productName: e.target.value })}
                style={{ width: '100%', marginBottom: 10 }}
            />
            <input
                type="number"
                min="1"
                value={newOrder.quantity}
                onChange={e => setNewOrder({ ...newOrder, quantity: Number(e.target.value) })}
                style={{ width: '100%', marginBottom: 10 }}
            />
            <button onClick={handleCreateOrder} style={{ width: '100%' }}>
                Bestellung anlegen
            </button>
        </div>
    );
}

export default Orders;
