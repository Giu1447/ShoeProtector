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

    const handleLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        window.location.href = '/login';
    };

    return (
        <header className="bg-green-700 shadow-lg p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-extrabold text-white tracking-wide">ShoeProtector</h1>
                <nav className="flex items-center space-x-6">
                    <Link href="/" className="text-white hover:text-yellow-300 transition duration-300 font-medium">Home</Link>
                    {user ? (
                        <>
                            <span className="text-yellow-300 font-semibold">Hallo, {user.name}</span>
                            <button onClick={handleLogout} className="ml-4 text-white hover:text-red-300 transition duration-300 font-medium">Logout</button>
                        </>
                    ) : (
                        <Link href="/login" className="text-white hover:text-yellow-300 transition duration-300 font-medium">Login</Link>
                    )}
                </nav>
            </div>
        </header>
    );
}
