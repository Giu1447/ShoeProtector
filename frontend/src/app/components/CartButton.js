'use client';

import { useState } from 'react';

export default function CartButton({ productId }) {
    async function addToCart() {
        const userStr = localStorage.getItem('user');
        if (!userStr) {
            alert('Bitte zuerst einloggen');
            window.location.href = '/login';
            return;
        }
        const user = JSON.parse(userStr);

        await fetch('http://localhost:8083/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: user.id,
                productId,
                quantity: 1,
            }),
        });
        alert('Produkt wurde zum Warenkorb hinzugefügt!');
    }

    return (
        <button
            onClick={addToCart}
            className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
        >
            In den Warenkorb 🛒
        </button>
    );
}
