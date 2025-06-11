import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Providers from "@/app/providers";
import Footer from "@/components/Footer";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";



export const metadata: Metadata = {
    title: "StuyEnviro",
    description: "The Stuyvesant Environmental Website",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link
                    rel="icon"
                    href="/icon.svg"
                    type="image/svg"
                    sizes="<generated>"
                />
            </head>
            <body
                className={`antialiased` + "lexend"} 
            >
                <Providers>
                    <Nav />
                    {children}
                    <br />
                    <Footer />
                </Providers>
                <Analytics />
                <SpeedInsights />
            </body>

        </html>
    );
}
