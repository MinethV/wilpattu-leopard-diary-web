export default function Contact() {
    return (
        <section className="py-24 lg:py-32 bg-gray-50 border-t border-gray-100 shrink-0" id="contact">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">

                <div className="bg-white rounded-[2.5rem] p-8 md:p-14 shadow-2xl shadow-gray-200/50 border border-gray-100">

                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                            Get in touch
                        </h2>
                        <p className="text-lg text-gray-500">
                            Have questions about the system or want to request API access for research?
                        </p>
                    </div>

                    <form className="max-w-2xl mx-auto space-y-6">

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 ml-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all font-medium"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all font-medium"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">Profession</label>
                            <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all font-medium text-gray-900 appearance-none">
                                <option value="" disabled selected>Select your profession...</option>
                                <option value="tourist">Tourist / Enthusiast</option>
                                <option value="photographer">Wildlife Photographer</option>
                                <option value="researcher">Researcher / Conservationist</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
                            <textarea
                                rows={4}
                                className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-400 transition-all font-medium resize-none"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <button
                            type="button"
                            className="w-full py-4 bg-black text-white rounded-2xl font-medium text-lg hover:bg-gray-800 transition-all hover:shadow-lg hover:shadow-black/20"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>
        </section>
    )
}
