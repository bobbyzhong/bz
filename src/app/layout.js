import { Inter } from "next/font/google";
import { Tinos } from "next/font/google";
import "./globals.css";

const tinos = Tinos({
    subsets: ["latin"],
    weight: ["400", "700"],
});

export const metadata = {
    title: "Thoughts",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html className="pt-5" lang="en">
            <body className={tinos.className}>{children}</body>
        </html>
    );
}
