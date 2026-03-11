import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">

                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                        <img
                            src="/leopard-icon.png"
                            alt="Wilpattu Leopard Diary"
                            className="w-5 h-5 object-contain"
                        />
                    </div>
                    <span className="text-xl font-semibold tracking-tight text-gray-900">
                        Wilpattu <span className="text-gray-400 font-medium">Leopard Diary</span>
                    </span>
                </div>

                <p className="text-gray-500 text-center max-w-md mx-auto mb-10 leading-relaxed">
                    Advanced AI-powered leopard identification system designed for tourists, wildlife photographers, and researchers in Sri Lanka.
                </p>

                <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm font-medium text-gray-500 mb-12">
                    <Link href="/" className="hover:text-black transition-colors">Home</Link>
                    <Link href="/features" className="hover:text-black transition-colors">Features</Link>
                    <Link href="/benefits" className="hover:text-black transition-colors">Benefits</Link>
                    <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
                    <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
                    <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
                </div>

                <div className="w-full h-px bg-gray-100 mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 text-sm text-gray-400">
                    <p>© 2026 Wilpattu Leopard Diary. All rights reserved.</p>
                    <div className="flex gap-4">
                        <button className="hover:text-black transition-colors">Twitter</button>
                        <button className="hover:text-black transition-colors">Instagram</button>
                        <button className="hover:text-black transition-colors">LinkedIn</button>
                    </div>
                </div>

            </div>
        </footer>
    )
}