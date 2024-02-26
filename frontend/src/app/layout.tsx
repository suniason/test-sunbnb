import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SunBnB",
    description: `An application that aims to replicate and enhance the user experience provided by Airbnb, 
    focusing on ease of use, reliability, and a wide range of offerings.`,
    icons: { icon: "/logo.svg" }
};

export default function RootLayout({
    children
}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
