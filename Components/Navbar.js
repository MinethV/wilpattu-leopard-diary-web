"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <>
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                            <img src="/leopard-icon.png" className="w-5 h-5" />
                        </div>
                        <span className="text-xl font-semibold">
                            Wilpattu <span className="text-gray-400">Leopard Diary</span>
                        </span>
                    </Link>

                    {/* Desktop */}
                    <div className="hidden md:flex gap-8 items-center text-sm text-gray-500">
                        <Link href="/">Home</Link>
                        <Link href="/features">Features</Link>
                        <Link href="/benefits">Benefits</Link>
                        <Link href="/about">About</Link>

                        <Link href="/contact" className="ml-4 px-5 py-2.5 bg-black text-white rounded-full">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setOpen(true)}
                    >
                        ☰
                    </button>

                </div>
            </nav>

            {/* 🔥 FULL SCREEN MENU */}
            {open && (
                <div className="fixed inset-0 z-50 bg-white flex flex-col">

                    {/* Top bar */}
                    <div className="flex justify-between items-center px-6 h-20 border-b">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                                <img src="/leopard-icon.png" className="w-5 h-5" />
                            </div>
                            <span className="font-semibold">
                                Wilpattu <span className="text-gray-400">Leopard Diary</span>
                            </span>
                        </div>

                        <button onClick={() => setOpen(false)} className="text-2xl">
                            ✕
                        </button>
                    </div>

                    {/* 🔥 CENTERED MENU */}
                    <div className="flex-1 flex flex-col justify-center items-center gap-8 text-xl">

                        <Link href="/" onClick={() => setOpen(false)}>Home</Link>
                        <Link href="/features" onClick={() => setOpen(false)}>Features</Link>
                        <Link href="/benefits" onClick={() => setOpen(false)}>Benefits</Link>
                        <Link href="/about" onClick={() => setOpen(false)}>About</Link>

                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="mt-6 px-8 py-4 bg-black text-white rounded-full"
                        >
                            Get Started
                        </Link>

                    </div>

                </div>
            )}
        </>
    );
}