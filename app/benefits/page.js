export default function BenefitsPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900 pb-24">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-sm font-medium mb-6 border border-gray-100">
                    Benefits
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Why LeopardID Matters
                </h1>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                    LeopardID helps tourists, wildlife photographers, safari guides, and researchers identify individual Sri Lankan leopards and record sightings inside Wilpattu National Park.
                </p>
            </section>

            {/* Alternating Benefit Sections */}
            <div className="flex flex-col">

                {/* 1. Instant Leopard Identification (Text Left, Visual Right) */}
                <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 lg:order-1">
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 mb-8">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
                                Instant Leopard Identification
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                Users can quickly identify individual leopards by uploading a clear image of the leopard's face. The AI model compares facial patterns with the Wilpattu leopard database to find a match.
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center lg:order-2 w-full">
                            <div className="relative group w-full max-w-md">
                                <div className="absolute inset-0 bg-gray-50 rounded-[2.5rem] transform rotate-2 lg:rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-4 group-hover:scale-110"></div>
                                <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 transform transition-all duration-500 hover:-translate-y-2">
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-50 pb-4">Processing Time Comparison</h3>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm font-medium">
                                                <span>Manual Identification</span>
                                                <span className="text-gray-400">15-45 mins</span>
                                            </div>
                                            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="w-[85%] h-full bg-gray-300"></div>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm font-medium">
                                                <span className="text-green-600 font-bold flex items-center gap-1">
                                                    Wilpattu Leopard Diary
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                                                </span>
                                                <span className="font-bold">2.4 secs</span>
                                            </div>
                                            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="w-[5%] h-full bg-green-400 shadow-[0_0_10px_2px_rgba(74,222,128,0.5)]"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 pt-6 border-t border-gray-50 flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <p className="text-sm text-gray-500 font-medium leading-tight">Match confidence score consistently exceeds 98% in field tests.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. Improves Wildlife Research (Visual Left, Text Right) */}
                <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 lg:order-2">
                            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-900 mb-8 shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
                                Improves Wildlife Research
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                Leopard sightings recorded through the system help researchers study leopard movement, territory behavior, and population patterns within Wilpattu National Park.
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center lg:order-1 w-full">
                            <div className="relative group w-full max-w-md">
                                <div className="absolute inset-0 bg-white rounded-[2.5rem] transform -rotate-2 lg:-rotate-3 scale-105 opacity-50 transition-transform duration-500 group-hover:-rotate-4 group-hover:scale-110"></div>
                                <div className="relative bg-white rounded-[2.5rem] p-6 shadow-2xl shadow-gray-200/50 border border-gray-100">
                                    {/* Dashboard Mockup */}
                                    <div className="flex items-center justify-between mb-8 px-2">
                                        <div>
                                            <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Territory Mapping</div>
                                            <div className="text-xl font-bold">Wilpattu Sector 2</div>
                                        </div>
                                        <div className="px-3 py-1 bg-gray-50 rounded-full text-xs font-semibold text-gray-600 border border-gray-100">
                                            Live
                                        </div>
                                    </div>

                                    {/* Simulated Map / Heat Network */}
                                    <div className="w-full aspect-[4/3] bg-blue-50/50 rounded-2xl relative overflow-hidden border border-blue-100">
                                        <svg className="absolute inset-0 w-full h-full opacity-40" fill="none">
                                            <path d="M 50 100 Q 150 50, 250 150 T 400 100" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" />
                                            <path d="M 10 200 Q 100 250, 200 180 T 500 200" stroke="#ef4444" strokeWidth="2" strokeDasharray="4 4" />
                                        </svg>

                                        {/* Activity Heat bubbles */}
                                        <div className="absolute top-[30%] left-[40%] text-center">
                                            <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center animate-pulse">
                                                <div className="w-8 h-8 bg-blue-500/40 rounded-full"></div>
                                            </div>
                                            <div className="text-[10px] font-bold text-blue-800 mt-1 bg-white/80 backdrop-blur rounded px-1">Male 04</div>
                                        </div>

                                        <div className="absolute top-[60%] left-[60%] text-center">
                                            <div className="w-24 h-24 bg-red-400/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '1s' }}>
                                                <div className="w-12 h-12 bg-red-500/40 rounded-full"></div>
                                            </div>
                                            <div className="text-[10px] font-bold text-red-800 mt-1 bg-white/80 backdrop-blur rounded px-1">Female 12</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Supports Conservation Efforts (Text Left, Visual Right) */}
                <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 lg:order-1">
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 mb-8">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
                                Supports Conservation Efforts
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                Tracking individual leopards allows conservationists to monitor leopard populations and improve wildlife protection strategies inside Wilpattu.
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center lg:order-2 w-full">
                            <div className="relative group w-full max-w-md">
                                <div className="absolute inset-0 bg-gray-50 rounded-[2.5rem] transform rotate-2 lg:rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-4 group-hover:scale-110"></div>
                                <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-gray-200/50 border border-gray-100">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-gray-900">Population Health Index</h3>
                                            <p className="text-xs text-gray-500">Aggregated tracking data</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                            <div className="text-3xl font-bold text-gray-900 mb-1">94%</div>
                                            <div className="text-xs font-medium text-gray-500">Survival Rate YOY</div>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                            <div className="text-3xl font-bold text-gray-900 mb-1">11</div>
                                            <div className="text-xs font-medium text-gray-500">New Cubs Logged</div>
                                        </div>
                                    </div>

                                    {/* Line graph simulation */}
                                    <div className="mt-6 pt-6 border-t border-gray-50">
                                        <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Conservation Metric</div>
                                        <div className="flex items-end gap-1 h-16 w-full opacity-60">
                                            {[20, 25, 35, 30, 45, 60, 50, 75, 80, 70, 90, 100].map((height, i) => (
                                                <div key={i} className="flex-1 bg-green-400 rounded-t-sm transition-all duration-300 hover:bg-green-500" style={{ height: `${height}%` }}></div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Designed for Wilpattu Visitors (Visual Left, Text Right) */}
                <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 lg:order-2">
                            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-900 mb-8 shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
                                Designed for Wilpattu Visitors
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                The platform is designed for tourists, safari guides, wildlife photographers, and researchers visiting Wilpattu National Park, making leopard identification simple and accessible.
                            </p>
                        </div>
                        <div className="flex-1 flex justify-center lg:order-1 w-full">
                            <div className="relative group w-full max-w-md">
                                <div className="absolute inset-0 bg-white rounded-[2.5rem] transform -rotate-2 lg:-rotate-3 scale-105 opacity-50 transition-transform duration-500 group-hover:-rotate-4 group-hover:scale-110"></div>
                                <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 flex flex-col gap-4">

                                    {/* User Role Cards */}
                                    {[
                                        { role: "Tourists", desc: "Interactive safari experience", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" },
                                        { role: "Photographers", desc: "Catalog sighting portfolios", icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" },
                                        { role: "Researchers", desc: "Access comprehensive datasets", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" }
                                    ].map((user, i) => (
                                        <div key={i} className={`p-4 rounded-2xl border transition-all duration-300 hover:shadow-md ${i === 1 ? 'border-gray-900 shadow-sm' : 'border-gray-100 hover:border-gray-200'}`}>
                                            <div className="flex items-center gap-4">
                                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${i === 1 ? 'bg-black text-white' : 'bg-gray-50 text-gray-500'}`}>
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={user.icon} /></svg>
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-gray-900 text-sm">{user.role}</h4>
                                                    <p className="text-xs text-gray-500">{user.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Impact Section */}
            <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white border-t border-gray-100">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8 text-gray-900">
                        Protecting Sri Lankan Leopards
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-light">
                        The Sri Lankan leopard is one of the most iconic species found in Wilpattu National Park. LeopardID combines artificial intelligence and field observations to help protect and monitor these animals.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 lg:px-12 text-center mt-12 mb-12">
                <div className="bg-gray-50 rounded-[3rem] p-12 md:p-16 border border-gray-100 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        Start Identifying Leopards
                    </h2>
                    <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
                        Upload a leopard photo and let the AI identify the individual using facial recognition technology.
                    </p>
                    <button className="px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-xl shadow-black/10 flex items-center justify-center gap-2 mx-auto">
                        Explore the System
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </section>

        </main>
    )
}