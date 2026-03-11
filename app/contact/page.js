"use client";
export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white text-gray-900 pb-24">

            {/* Hero Section */}
            <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 px-6 lg:px-12 text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                    Contact the Research Team
                </h1>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                    If you are interested in wildlife conservation, research collaboration, or learning more about the AI Leopard Identification System used in Wilpattu National Park, feel free to contact us.
                </p>
            </section>

            {/* Contact Information Cards */}
            <section className="max-w-6xl mx-auto px-6 lg:px-12 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm transition-shadow hover:shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Research Collaboration</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Universities and conservation researchers interested in leopard identification and wildlife monitoring can collaborate with the project.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm transition-shadow hover:shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Safari Operators</h3>
                        <p className="text-gray-500 leading-relaxed">
                            Tour guides and safari operators visiting Wilpattu National Park can contribute sightings and help improve the leopard database.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm transition-shadow hover:shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">General Enquiries</h3>
                        <p className="text-gray-500 leading-relaxed">
                            For questions about the Wilpattu Leopard Diary system or the AI leopard identification technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="max-w-3xl mx-auto px-6 lg:px-12 mb-16">
                <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
                    <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700 ml-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your Name"
                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700 ml-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="profession" className="text-sm font-medium text-gray-700 ml-1">Profession</label>
                            <div className="relative">
                                <select
                                    id="profession"
                                    className="appearance-none w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all text-gray-900"
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select your profession</option>
                                    <option value="Tourist">Tourist</option>
                                    <option value="Photographer">Photographer</option>
                                    <option value="Researcher">Researcher</option>
                                    <option value="Safari Guide">Safari Guide</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-6 text-gray-500">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700 ml-1">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="How can we help you?"
                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-10 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1 mt-4"
                        >
                            Send Message
                        </button>

                    </form>
                </div>
            </section>

            {/* Direct Email Section */}
            <div className="text-center pt-8 max-w-4xl mx-auto px-6">
                <p className="text-gray-400 font-medium">
                    Email: <a href="mailto:leopardresearch@example.com" className="hover:text-black transition-colors">leopardresearch@example.com</a>
                </p>
            </div>

        </main>
    )
}