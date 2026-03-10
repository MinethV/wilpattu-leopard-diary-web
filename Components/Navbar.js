import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center font-bold text-sm shadow-md group-hover:scale-105 transition-transform">
                        L
                    </div>
                    <span className="text-xl font-semibold tracking-tight text-gray-900">
                        Wilpattu <span className="text-gray-400 font-medium">Leopard Diary</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-500">
                    <Link href="/" className="hover:text-black transition-colors">Home</Link>
                    <Link href="/features" className="hover:text-black transition-colors">Features</Link>
                    <Link href="/benefits" className="hover:text-black transition-colors">Benefits</Link>
                    <Link href="/about" className="hover:text-black transition-colors">About</Link>

                    <Link
                        href="/contact"
                        className="ml-4 px-5 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-all hover:shadow-lg hover:shadow-black/20"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button - simplified */}
                <button className="md:hidden p-2 text-gray-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

            </div>
        </nav>
    )
}