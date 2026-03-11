"use client";

export default function HowItWorks() {

    const steps = [
        {
            number: "01",
            title: "Upload Image",
            description: "Take a photo of a leopard during your safari or upload an existing image from your gallery."
        },
        {
            number: "02",
            title: "AI Analysis",
            description: "Our advanced algorithm maps the unique spot patterns on the leopard's face and flanks."
        },
        {
            number: "03",
            title: "Match & Identify",
            description: "The system compares the pattern against our database to find matching individuals instantly."
        },
        {
            number: "04",
            title: "Record Data",
            description: "Save the sighting with GPS coordinates and time to help track the leopard's territory."
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-gray-50 border-y border-gray-100" id="how-it-works">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left side text */}
                    <div>
                        <h2 className="text-sm font-semibold text-gray-500 tracking-wider uppercase mb-3">Simple Process</h2>
                        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                            How the system works
                        </h3>
                        <p className="text-lg text-gray-500 leading-relaxed mb-10">
                            Our AI uses computer vision to analyze the unique rosette patterns of Sri Lankan leopards, acting like a fingerprint system for wildlife contour mapping.
                        </p>

                        <div className="space-y-8">
                            {steps.map((step, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center font-bold text-gray-900 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                                        {step.number}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h4>
                                        <p className="text-gray-500">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side illustration / app mockup */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-50 rounded-[3rem] transform rotate-3 scale-105"></div>
                        <div className="relative bg-white rounded-3xl shadow-xl shadow-black/5 border border-gray-100 p-8 pt-12 text-center overflow-hidden">
                            <div className="absolute top-4 left-0 right-0 flex justify-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                                <div className="w-4 h-1.5 rounded-full bg-gray-300"></div>
                            </div>

                            <div className="bg-gray-100 rounded-2xl aspect-[4/5] w-full max-w-sm mx-auto overflow-hidden relative group">
                                <img src="/kuweni.jpg" alt="Analysis" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />

                                {/* Overlay scanning animation simulation */}
                                <div className="absolute inset-0 bg-black/20"></div>
                                <div className="absolute top-1/4 left-1/4 right-1/4 bottom-1/4 border-2 border-white/50 rounded-xl flex items-center justify-center">
                                    <div className="w-full h-0.5 bg-green-400 absolute top-1/2 -translate-y-1/2 shadow-[0_0_10px_2px_rgba(74,222,128,0.5)]"></div>
                                    <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-white"></div>
                                    <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-white"></div>
                                    <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-white"></div>
                                    <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-white"></div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="h-4 bg-gray-100 rounded-full w-3/4 mx-auto mb-3"></div>
                                <div className="h-4 bg-gray-100 rounded-full w-1/2 mx-auto"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
