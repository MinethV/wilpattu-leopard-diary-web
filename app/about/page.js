export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900 pb-24">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-sm font-medium mb-6 border border-gray-100">
                    Our Mission
                </div>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    About LeopardID
                </h1>
                <p className="text-lg md:text-2xl text-gray-500 leading-relaxed max-w-3xl mx-auto font-light mb-8">
                    LeopardID is an AI-powered system designed to identify individual Sri Lankan leopards and record sightings within Wilpattu National Park.
                </p>
                <p className="text-base md:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
                    The system helps tourists, wildlife photographers, safari guides, and researchers identify leopards using facial pattern recognition technology and contribute valuable data for wildlife research and conservation.
                </p>
            </section>

            {/* Alternating Sections */}
            <div className="flex flex-col">

                {/* 1. Why This System Was Created (Text Left, Visual Right) */}
                <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 lg:order-1">
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 mb-8">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
                                Why This System Was Created
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                    Wilpattu National Park is home to a large population of Sri Lankan leopards. However, identifying individual leopards manually can be difficult and time-consuming.
                                </p>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                    LeopardID was created to simplify leopard identification using artificial intelligence and provide a structured way to record sightings and track leopard activity within the park.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center lg:order-2 w-full">
                            <div className="relative group w-full max-w-md">
                                <div className="absolute inset-0 bg-gray-50 rounded-[2.5rem] transform rotate-2 lg:rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-4 group-hover:scale-110"></div>
                                <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 transform transition-all duration-500 hover:-translate-y-2">
                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-50 pb-4">Manual vs Automated Pipeline</h3>

                                    <div className="space-y-4 relative">
                                        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gray-100"></div>

                                        <div className="flex items-center gap-4 relative z-10 opacity-50">
                                            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0 border-4 border-white">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /></svg>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-500">Capture Image</div>
                                                <div className="text-xs text-gray-400">Field observation</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 relative z-10 opacity-40">
                                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center shrink-0 border-4 border-white">
                                                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-600 line-through">Manual Feature Matching</div>
                                                <div className="text-xs text-red-400 font-medium">Bottleneck ~ hours/days</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 relative z-10 transition-transform duration-300 transform group-hover:scale-105 group-hover:-translate-x-2 bg-white/80 p-2 rounded-xl border border-gray-100 shadow-sm ml-[-8px]">
                                            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shrink-0 border-4 border-white shadow-[0_0_15px_3px_rgba(59,130,246,0.3)]">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-900">AI Pattern Recognition</div>
                                                <div className="text-xs text-blue-500 font-bold">Processed in seconds</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-4 relative z-10">
                                            <div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center shrink-0 border-4 border-white">
                                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-gray-900">Database Matching Complete</div>
                                                <div className="text-xs text-gray-500">Individual ID confirmed</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 2. AI Leopard Identification Technology (Visual Left, Text Right) */}
                <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 lg:order-2">
                            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-900 mb-8 shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
                                AI Leopard Identification Technology
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                    The system uses artificial intelligence and image recognition techniques to analyze facial patterns of Sri Lankan leopards.
                                </p>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                    By comparing uploaded leopard images with a database of known individuals, the system analyzes facial patterns and determines the most likely match using artificial intelligence.
                                </p>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                    The AI model extracts unique visual features from the leopard's face and compares them with stored embeddings to find the closest match.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center lg:order-1 w-full">
                            <div className="relative group w-full max-w-md">
                                <div className="absolute inset-0 bg-white rounded-[2.5rem] transform -rotate-2 lg:-rotate-3 scale-105 opacity-50 transition-transform duration-500 group-hover:-rotate-4 group-hover:scale-110"></div>
                                <div className="relative bg-white rounded-[2.5rem] p-6 shadow-2xl shadow-gray-200/50 border border-gray-100">

                                    {/* Artificial Intelligence Pattern Scanner Mockup */}
                                    <div className="w-full aspect-[4/3] bg-gray-900 rounded-2xl relative overflow-hidden flex items-center justify-center border border-gray-800">

                                        {/* Grid Background */}
                                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                                        {/* Scanner Line */}
                                        <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500 shadow-[0_0_20px_5px_rgba(59,130,246,0.5)] animate-[scanner_3s_ease-in-out_infinite]"></div>

                                        {/* Visual Nodes representing embeddings */}
                                        <div className="relative w-48 h-48 opacity-80">
                                            {/* Center focus */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-blue-500/30 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border border-blue-400/50 rounded-full flex items-center justify-center">
                                                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_10px_2px_rgba(96,165,250,0.8)]"></div>
                                            </div>

                                            {/* Connection Nodes representing facial landmarks */}
                                            <svg className="absolute inset-0 w-full h-full text-blue-500/40" fill="none" stroke="currentColor" strokeWidth="1">
                                                <path d="M 20 40 L 96 96 L 160 30" strokeDasharray="4 4" className="animate-[pulse_2s_infinite]" />
                                                <path d="M 96 96 L 30 150 M 96 96 L 170 160" strokeDasharray="4 4" className="animate-[pulse_3s_infinite]" />
                                            </svg>

                                            {/* Feature Points */}
                                            <div className="absolute top-[40px] left-[20px] w-1.5 h-1.5 bg-white rounded-full"></div>
                                            <div className="absolute top-[30px] left-[160px] w-1.5 h-1.5 bg-white rounded-full"></div>
                                            <div className="absolute top-[150px] left-[30px] w-1.5 h-1.5 bg-white rounded-full"></div>
                                            <div className="absolute top-[160px] left-[170px] w-1.5 h-1.5 bg-white rounded-full"></div>
                                        </div>

                                        {/* Targeting overlay */}
                                        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-blue-500/50"></div>
                                        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-blue-500/50"></div>
                                        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-blue-500/50"></div>
                                        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-blue-500/50"></div>

                                        <div className="absolute bottom-4 left-0 right-0 text-center font-mono text-[10px] text-blue-400 uppercase tracking-widest px-8">
                                            Generating Facial Embeddings...
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Wilpattu Leopard Dataset (Text Left, Visual Right) */}
                <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 lg:order-1">
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-900 mb-8">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
                                Wilpattu Leopard Dataset
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                    The identification system is built using a dataset of known leopards observed within Wilpattu National Park.
                                </p>
                                <p className="text-base text-gray-500 max-w-xl">Each leopard profile includes:</p>
                                <ul className="space-y-3 mt-4 text-gray-900 font-medium max-w-xl">
                                    {[
                                        "Leopard name",
                                        "Identification images",
                                        "Territory information",
                                        "Recorded sightings"
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mt-6">
                                    The dataset helps the AI system learn and recognize individual leopards more accurately.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center lg:order-2 w-full">
                            <div className="relative group w-full max-w-md">
                                <div className="absolute inset-0 bg-gray-50 rounded-[2.5rem] transform rotate-2 lg:rotate-3 scale-105 transition-transform duration-500 group-hover:rotate-4 group-hover:scale-110"></div>
                                <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-gray-200/50 border border-gray-100 h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-50">
                                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Database Explorer</h3>
                                        <div className="flex gap-1.5">
                                            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                                            <div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
                                        </div>
                                    </div>

                                    {/* Data Rows */}
                                    <div className="space-y-3">
                                        {[
                                            { tag: "LC-104", name: "Cleopatra", sightings: "42", zone: "Sector 2" },
                                            { tag: "LC-082", name: "Neluma", sightings: "89", zone: "Sector 1" },
                                            { tag: "LC-119", name: "Kuweni", sightings: "15", zone: "Sector 4" },
                                            { tag: "LC-034", name: "Kesara", sightings: "63", zone: "Sector 2" },
                                            { tag: "LC-205", name: "Some", sightings: "8", zone: "Sector 5" }
                                        ].map((leopard, idx) => (
                                            <div key={idx} className={`p-3 rounded-xl border flex items-center justify-between transition-colors duration-300 ${idx === 1 ? 'border-blue-200 bg-blue-50/50 shadow-sm' : 'border-gray-50 bg-gray-50 hover:border-gray-200'}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded bg-white shadow-sm flex items-center justify-center font-mono text-[10px] font-bold ${idx === 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                                                        {leopard.tag.split('-')[1]}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-gray-900 leading-tight">{leopard.name}</div>
                                                        <div className="text-[10px] text-gray-500 font-mono">{leopard.tag} | {leopard.zone}</div>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <div className="text-xs font-bold text-gray-900">{leopard.sightings}</div>
                                                    <div className="text-[9px] text-gray-400 uppercase font-bold">Records</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Supporting Leopard Conservation (Visual Left, Text Right) */}
                <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="flex-1 lg:order-2">
                            <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-gray-900 mb-8 shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
                                Supporting Leopard Conservation
                            </h2>
                            <div className="space-y-6">
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                    By recording sightings and identifying individual leopards, LeopardID helps researchers understand leopard movement patterns, territorial behavior, and population dynamics.
                                </p>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                    The collected data can support wildlife conservation efforts and help protect Sri Lankan leopards in Wilpattu National Park.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-center lg:order-1 w-full">
                            <div className="relative group w-full max-w-md">
                                <div className="absolute inset-0 bg-white rounded-[2.5rem] transform -rotate-2 lg:-rotate-3 scale-105 opacity-50 transition-transform duration-500 group-hover:-rotate-4 group-hover:scale-110"></div>
                                <div className="relative bg-white rounded-[2.5rem] p-8 shadow-2xl shadow-gray-200/50 border border-gray-100">

                                    <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Conservation Impact</h3>

                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <div className="p-5 rounded-2xl bg-green-50/50 border border-green-100 flex flex-col justify-center">
                                            <div className="text-3xl font-bold text-green-700 mb-1 leading-none tracking-tighter">74%</div>
                                            <div className="text-[11px] font-bold text-green-600 uppercase tracking-wider">Territory Mapped</div>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100">
                                            <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Population Drift</div>
                                            <div className="flex items-end gap-1 h-10 w-full opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                                                {[30, 45, 35, 60, 50, 80, 75].map((height, i) => (
                                                    <div key={i} className="flex-1 bg-green-500 rounded-sm" style={{ height: `${height}%` }}></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full bg-gray-50 rounded-2xl p-4 border border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            </div>
                                            <div className="flex-1">
                                                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                                                    <div className="bg-green-500 h-1.5 rounded-full w-[88%]"></div>
                                                </div>
                                                <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                                    <span>Core Tracking Range</span>
                                                    <span>88% Coverage</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 lg:px-12 text-center mt-20 mb-12">
                <div className="bg-gray-50 rounded-[3rem] p-12 md:p-16 border border-gray-100 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        Explore the LeopardID System
                    </h2>
                    <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
                        Learn more about the features of the platform and discover how AI technology can help identify leopards and support wildlife conservation.
                    </p>
                    <button className="px-8 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-xl shadow-black/10 flex items-center justify-center gap-2 mx-auto">
                        View System Features
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </button>
                </div>
            </section>

        </main>
    )
}