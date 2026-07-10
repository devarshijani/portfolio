import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/next";

// Configure Poppins font to match target design typography
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Devarshi Jani | Full Stack Developer",
  description:
    "Portfolio of Devarshi Jani — a passionate full stack developer showcasing projects, skills, and experience with modern web technologies, real-time systems, and databases.",
  keywords: [
    "Devarshi Jani",
    "Full Stack Developer",
    "Next.js Portfolio",
    "JavaScript Developer",
    "React Developer",
    "Node.js Developer",
    "Solmarkt",
    "Sarthi"
  ],
  authors: [{ name: "Devarshi Jani", url: "https://github.com/devarshijani" }],
  creator: "Devarshi Jani",
  metadataBase: new URL("https://devarshijani.github.io/portfolio/"), // Fallback to GitHub Pages live domain
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Devarshi Jani | Full Stack Developer",
    description:
      "Explore the portfolio of Devarshi Jani — full stack web developer skilled in React, Next.js, Node.js, Socket.io, and Firestore.",
    url: "https://devarshijani.github.io/portfolio/",
    siteName: "Devarshi Jani Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Devarshi Jani Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>
        {children}
        <Analytics />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
