"use client";

import emailjs from "emailjs-com";
import { useRef } from "react";

export default function ContactPage() {

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_9i5nxnp",       // ✅ your service ID
            "template_9cw1t7o",      // 🔁 replace
            formRef.current,
            "cpmMOSC5iKwoiFJGP"        // 🔁 replace
        ).then(
            () => {
                alert("✅ Message sent successfully!");
                formRef.current.reset();
            },
            (error) => {
                console.error(error);
                alert("❌ Failed to send message");
            }
        );
    };

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

            {/* Cards */}
            <section className="max-w-6xl mx-auto px-6 lg:px-12 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                        <h3 className="text-xl font-bold mb-3">Research Collaboration</h3>
                        <p className="text-gray-500">
                            Universities and conservation researchers interested in leopard identification and wildlife monitoring can collaborate with the project.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                        <h3 className="text-xl font-bold mb-3">Safari Operators</h3>
                        <p className="text-gray-500">
                            Tour guides and safari operators visiting Wilpattu National Park can contribute sightings and help improve the leopard database.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
                        <h3 className="text-xl font-bold mb-3">General Enquiries</h3>
                        <p className="text-gray-500">
                            For questions about the Wilpattu Leopard Diary system or the AI leopard identification technology.
                        </p>
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="max-w-3xl mx-auto px-6 lg:px-12 mb-16">
                <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 shadow-sm">

                    {/* 🔥 ONLY CHANGE: added ref + onSubmit */}
                    <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-6">

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">Name</label>
                            <input
                                type="text"
                                name="name"   // ✅ important
                                required
                                placeholder="Your Name"
                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                            <input
                                type="email"
                                name="email"   // ✅ important
                                required
                                placeholder="you@example.com"
                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">Profession</label>
                            <select
                                name="profession"   // ✅ important
                                required
                                defaultValue=""
                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl"
                            >
                                <option value="" disabled>Select your profession</option>
                                <option>Tourist</option>
                                <option>Photographer</option>
                                <option>Researcher</option>
                                <option>Safari Guide</option>
                            </select>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
                            <textarea
                                name="message"   // ✅ important

                                rows="5"
                                placeholder="How can we help you?"
                                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-2xl"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-10 py-4 bg-black text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all shadow-lg mt-4"
                        >
                            Send Message
                        </button>

                    </form>
                </div>
            </section>

            {/* Email */}
            <div className="text-center pt-8 max-w-4xl mx-auto px-6">
                <p className="text-gray-400 font-medium">
                    Email: <a href="mailto:wilpattuleoparddidary@gmail.com" className="hover:text-black">
                        wilpattuleoparddidary@gmail.com
                    </a>
                </p>
            </div>

        </main>
    );
}