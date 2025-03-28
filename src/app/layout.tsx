import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
    title: "StuyEnviro",
    description: "SIGMA SIGMA SIGMA",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    href="/icon.svg"
                    type="image/svg"
                    sizes="<generated>"
                />
            </head>
            <body
                className={`antialiased`}
            >
                <Nav />
                {children}
            </body>
        </html>
    );
}
