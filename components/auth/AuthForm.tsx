'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { login } from '@/services/auth';
import GoogleLoginButton from './GoogleLoginButton';

export default function LoginForm() {

    const router = useRouter();

    const [username, setUsername] =
        useState('');

    const [password, setPassword] =
        useState('');

    const [loading, setLoading] =
        useState(false);

    const [error, setError] =
        useState('');

    const handleLogin = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            setLoading(true);

            setError('');

            const data = await login({
                username,
                password,
            });

            localStorage.setItem(
                'access_token',
                data.access_token
            );

            localStorage.setItem(
                'user',
                JSON.stringify(data.user)
            );

            router.push('/');

        } catch (error: any) {

            console.error(error);

            setError(
                error.response?.data?.detail ||
                'Đăng nhập thất bại'
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <form
            onSubmit={handleLogin}
            className="bg-white rounded-2xl border shadow-sm p-8 w-full max-w-md"
        >

            <h1 className="text-3xl font-bold text-center mb-8">
                Đăng nhập
            </h1>

            {/* USERNAME */}
            <div className="mb-5">

                <label className="block mb-2 text-sm font-medium">
                    Username
                </label>

                <input
                    type="text"
                    value={username}
                    onChange={(e) =>
                        setUsername(e.target.value)
                    }
                    placeholder="Nhập username"
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

            </div>

            {/* PASSWORD */}
            <div className="mb-6">

                <label className="block mb-2 text-sm font-medium">
                    Mật khẩu
                </label>

                <input
                    type="password"
                    value={password}
                    onChange={(e) =>
                        setPassword(e.target.value)
                    }
                    placeholder="Nhập mật khẩu"
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />

            </div>

            {/* ERROR */}
            {error && (

                <div className="mb-4 text-red-500 text-sm">
                    {error}
                </div>

            )}

            {/* BUTTON */}
            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-bold py-3 rounded-xl"
            >

                {loading
                    ? 'Đang đăng nhập...'
                    : 'Đăng nhập'}

            </button>
            {/* BUTTON GG */}
            <div className="my-5 flex items-center gap-3">

                <div className="flex-1 h-px bg-gray-200" />

                <span className="text-sm text-gray-400">
                    HOẶC
                </span>

                <div className="flex-1 h-px bg-gray-200" />

            </div>

            <GoogleLoginButton />

        </form>
    );
}