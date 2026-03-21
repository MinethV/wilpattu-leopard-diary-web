import "./globals.css"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"

export const metadata = {
  title: "Wilpattu Leopard Diary - Leopard Identification System",
  description: "AI-powered leopard identification system designed for tourists, wildlife photographers and researchers to identify individual Sri Lankan leopards using image recognition.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased text-gray-900 bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}