import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import GoogleProvider
    from "@/components/providers/GoogleProvider";
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
    title: "Lapify - Laptop Store",
    description: "Chuyên cung cấp Laptop chính hãng",
    icons: {
        icon: "https://reseller1.hn.ss.bfcplatform.vn/logo-lapify.png",
        apple: "https://reseller1.hn.ss.bfcplatform.vn/logo-lapify.png",
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" suppressHydrationWarning >
            <body className="antialiased bg-gray-100 text-gray-900 flex flex-col min-h-screen" suppressHydrationWarning>
                <GoogleProvider>
                    <AuthProvider>
                        <Header />
                        <div className="flex-1">
                            {children}
                        </div>
                        <Footer />
                    </AuthProvider>
                </GoogleProvider>
            </body>
        </html>
    );
}