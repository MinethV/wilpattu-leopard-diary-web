export default function FeaturesPage() {
    const features = [
        {
            title: "AI Leopard Identification",
            description: "Identify individual Sri Lankan leopards using our AI-powered leopard identification system. Upload a clear image of the leopard’s face and the system compares it with the Wilpattu leopard database to find the closest match.",
            image: "/identifying-leopard-image.png",
            alt: "Identify Leopard Upload Screen"
        },
        {
            title: "Instant Identification Results",
            description: "The AI leopard identification system analyzes the uploaded image and returns the most likely leopard match with a confidence score, territory information, and profile details from the Wilpattu leopard database.",
            image: "/identification-result.png",
            alt: "Identification Result Screen"
        },
        {
            title: "Record Leopard Sightings",
            description: "Users can record leopard sightings inside Wilpattu National Park including location, date, time, photos, and notes. Sightings are stored locally and synchronized when internet access is available.",
            image: "/add-sighting.png",
            alt: "Add Sighting Screen"
        },
        {
            title: "GPS Leopard Sightings Map",
            description: "View all recorded leopard sightings across Wilpattu National Park using an interactive GPS tracking map. Easily explore where different Sri Lankan leopards have been observed.",
            image: "/map-screen.png",
            alt: "Map Screen"
        },
        {
            title: "Wilpattu Leopard Database",
            description: "Browse the full database of known Sri Lankan leopards including Neluma, Cleopatra, Kuweni, Chithra, Kuruttupandi, Kesara, and Some. Each leopard profile includes territory information, gender, and identification data from Wilpattu National Park.",
            image: "/database-screen.png",
            alt: "Leopard Database Screen"
        },
        {
            title: "Recent Sightings Feed",
            description: "Stay updated with the latest leopard sightings inside Wilpattu National Park. The feed displays recent leopard observations including time, location, and identified individual leopard profiles..",
            image: "/sightings-feed.png",
            alt: "Recent Sightings Screen"
        }
    ];

    return (
        <main className="min-h-screen bg-white text-gray-900 pb-24">

            {/* Hero Section */}
            <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    System Features
                </h1>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                    The AI-powered leopard identification system helps tourists, wildlife photographers, and researchers identify individual Sri Lankan leopards and track leopard sightings across Wilpattu National Park using advanced image recognition technology.
                </p>
            </section>

            {/* Alternating Feature Sections */}
            <div className="flex flex-col">
                {features.map((feature, index) => {
                    const isEven = index % 2 !== 0; // Section 1 is index 0 (even layout: Image Right), Section 2 is index 1 (odd layout: Image Left)
                    return (
                        <section
                            key={index}
                            className={`py-24 lg:py-32 px-6 lg:px-12 ${isEven ? 'bg-gray-50' : 'bg-white'}`}
                        >
                            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                                {/* Info Block (Left on Even, Right on Odd) */}
                                <div className={`flex-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-gray-900">
                                        {feature.title}
                                    </h2>
                                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                                        {feature.description}
                                    </p>
                                </div>

                                {/* Visual Mockup (Right on Even, Left on Odd) */}
                                <div className={`flex-1 flex justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                                    <div className="relative group w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px]">

                                        {/* Subtle background glow effect */}
                                        <div className="absolute inset-0 bg-gray-200 rounded-[2.5rem] transform rotate-1 lg:rotate-2 scale-105 opacity-50 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110"></div>

                                        {/* Phone Container */}
                                        <div className="relative bg-white rounded-[2.5rem] p-4 shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl">

                                            {/* Dynamic Image */}
                                            <div className="bg-gray-100 rounded-[1.75rem] overflow-hidden aspect-[9/19.5] relative">
                                                <img
                                                    src={feature.image}
                                                    alt={feature.alt}
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    );
                })}
            </div>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 lg:px-12 text-center mt-32">
                <div className="bg-gray-50 rounded-[3rem] p-12 md:p-16 border border-gray-100 shadow-sm">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-4">
                        Ready to start identifying?
                    </h2>
                    <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto">
                        Explore the application or upload your first image to test our facial recognition algorithm against the database.
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