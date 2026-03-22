import "./globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Script from "next/script";

export const metadata = {
  title: "Wilpattu Leopard Diary - Leopard Identification System",
  description:
    "AI-powered leopard identification system designed for tourists, wildlife photographers and researchers to identify individual Sri Lankan leopards using image recognition.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8DPC2M42Y2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8DPC2M42Y2');
          `}
        </Script>
      </head>

      <body className="antialiased text-gray-900 bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}