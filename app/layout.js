import { Sora, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const ibmSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata = {
  title: "Devarshi Jani | Full Stack Developer",
  description: "Portfolio of Devarshi Jani — full-stack developer building production platforms with Next.js, Node.js, MongoDB and real-time systems. Creator of Solmarkt and Sarthi.",
  openGraph: {
    title: "Devarshi Jani | Full Stack Developer",
    description: "Full-stack developer shipping production platforms — B2B marketplaces, real-time ride-sharing, and more.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${ibmSans.variable} ${ibmMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
