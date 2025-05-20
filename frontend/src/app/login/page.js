'use client';

import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();
        setError(null);
        const res = await fetch('http://localhost:8082/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        if (res.ok) {
            const user = await res.json();
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = '/'; // Nach Login zurück zur Startseite
        } else {
            setError('Login fehlgeschlagen');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-10 p-6 border rounded">
            <h1 className="text-2xl mb-4">Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="mb-3 p-2 w-full border rounded"
            />
            <input
                type="password"
                placeholder="Passwort"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="mb-3 p-2 w-full border rounded"
            />
            <button type="submit" className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
                Login
            </button>
            {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
    );
}
