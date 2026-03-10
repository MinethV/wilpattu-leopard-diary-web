"use client";

export default function Hero() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center">

            <img
                src="/leopard-hero.jpg"
                className="absolute w-full h-full object-cover"
                alt="Leopard"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative text-center text-white px-10">

                <h1 className="text-5xl font-bold">
                    Wilpattu Leopard Diary
                </h1>

                <p className="mt-6 text-lg max-w-xl mx-auto">
                    AI-powered leopard identification and sighting recording
                    system designed for Wilpattu National Park.
                </p>

                <button className="mt-8 px-6 py-3 bg-white text-black rounded-lg">
                    Explore System
                </button>

            </div>

        </section>
    )
}