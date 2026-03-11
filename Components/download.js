"use client"
export default function Download() {
    return (
        <section className="py-24 lg:py-32 bg-gray-50 border-t border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Side (Content) */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            Download the Wilpattu Leopard Diary App
                        </h2>

                        <p className="text-lg text-gray-500 max-w-2xl mx-auto lg:mx-0 mb-12">
                            Identify Sri Lankan leopards and record sightings directly from your mobile device while exploring Wilpattu National Park.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">

                            {/* App Store */}
                            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-2xl text-lg font-medium hover:bg-gray-800 transition-all shadow-lg">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.365 1.43c0 1.14-.46 2.22-1.21 3.04-.79.85-2.08 1.5-3.16 1.41-.14-1.09.42-2.26 1.18-3.05.78-.82 2.14-1.42 3.19-1.4zM21.24 17.64c-.54 1.2-.8 1.73-1.49 2.76-.97 1.47-2.34 3.3-4.03 3.31-1.49.01-1.87-.97-3.89-.96-2.02.01-2.44.97-3.92.97-1.7 0-3-1.64-3.97-3.11C.62 17.4-.66 12.74 1.45 9.08c1.05-1.83 2.93-2.99 4.99-3.02 1.55-.03 3 .99 3.95.99.93 0 2.66-1.22 4.49-1.04.76.03 2.89.31 4.26 2.32-.11.07-2.54 1.48-2.51 4.41.03 3.51 3.09 4.68 3.11 4.7z" />
                                </svg>
                                App Store
                            </button>

                            {/* Google Play */}
                            <button className="flex items-center justify-center gap-3 px-8 py-4 bg-green-600 text-white rounded-2xl text-lg font-medium hover:bg-green-700 transition-all shadow-lg">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M3 2l13 10L3 22V2zm14 10l4-3v6l-4-3z" />
                                </svg>
                                Google Play
                            </button>

                        </div>

                        <p className="text-sm text-gray-400 mt-8">
                            Available soon for Android and iOS devices.
                        </p>
                    </div>

                    {/* Right Side (Image) */}
                    <div className="flex-1 flex justify-center lg:justify-end w-full">
                        <div className="relative w-full max-w-md lg:max-w-lg aspect-[4/3] lg:aspect-square flex items-center justify-center">
                            {/* Decorative background blur to make the image pop */}
                            <div className="absolute inset-0 bg-gray-200/50 rounded-[3rem] transform rotate-3 scale-95 blur-2xl"></div>

                            <img
                                src="/download-screen.png"
                                alt="Wilpattu Leopard Diary App Preview"
                                className="relative z-10 w-full h-auto object-contain drop-shadow-2xl"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML += `<div class="absolute inset-0 flex items-center justify-center text-center text-gray-400 text-sm font-medium bg-gray-100 rounded-[2.5rem] border border-gray-200 shadow-inner">Drop promotional image here<br/><br/>(/app-preview.png)</div>`;
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}