export default function Benefits() {

    const users = [
        {
            role: "For Tourists",
            title: "Enhance your safari experience",
            description: "Turn your safari into an interactive experience. Identify the exact leopard you just photographed, learn its history, and know that your photo helps conservation.",
            features: ["Instant identification", "Sighting history", "Personal sighting diary"]
        },
        {
            role: "For Photographers",
            title: "Organize your collection",
            description: "Stop relying on memory to tag your wildlife photos. Our system automatically identifies the leopards in your catalog, making organization effortless.",
            features: ["Batch processing", "Metadata export", "Portfolio integration"]
        },
        {
            role: "For Researchers",
            title: "Streamline population tracking",
            description: "Replace hours of manual pattern matching with instant AI analysis. Access a centralized database of sightings to monitor health and territories.",
            features: ["Population analytics", "Territory mapping", "Data export via API"]
        }
    ];

    return (
        <section className="py-24 lg:py-32 bg-white" id="benefits">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                        Built for everyone
                    </h2>
                    <p className="mt-6 text-lg text-gray-500 leading-relaxed">
                        Whether you are holding a camera on your first safari or writing a research paper, LeopardID has tools designed for you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {users.map((user, i) => (
                        <div key={i} className="flex flex-col p-10 bg-white rounded-3xl shadow-lg shadow-gray-200/50 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">

                            <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                {user.role}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {user.title}
                            </h3>

                            <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                                {user.description}
                            </p>

                            <ul className="space-y-3 border-t border-gray-100 pt-8">
                                {user.features.map((feature, j) => (
                                    <li key={j} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <svg className="w-5 h-5 text-black flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
