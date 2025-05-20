'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            setUser(JSON.parse(userStr));
        }
    }, []);

    return (
        <header className="bg-green-700 shadow-lg p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-extrabold text-white tracking-wide">ShoeProtector</h1>
                <nav className="flex items-center space-x-6">
                    <Link href="/" className="text-white hover:text-yellow-300 transition duration-300 font-medium">Home</Link>
                    <Link href="/orders" className="text-white hover:text-yellow-300 transition duration-300 font-medium">Orders</Link>
                    <Link href="/cart" className="text-white hover:text-yellow-300 transition duration-300 font-medium">Cart</Link>
                    {user ? (
                        <span className="text-yellow-300 font-semibold">Hallo, {user.name}</span>
                    ) : (
                        <Link href="/login" className="text-white hover:text-yellow-300 transition duration-300 font-medium">Login</Link>
                    )}
                </nav>
            </div>
        </header>
    );
}
