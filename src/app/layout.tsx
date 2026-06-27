import type { Metadata } from "next";
import { Outfit, Fira_Code } from "next/font/google";
import "./globals.css";
import ParticlesBackground from "../components/ParticlesBackground";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-mono",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Tanuj Gupta | Graphic Designer & Video Editor Portfolio",
  description: "Portfolio of Tanuj Gupta — an experienced Graphic Designer and Video Editor specializing in branding, social media creatives, motion graphics, and video production for premium brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${firaCode.variable}`}>
      <body>
        <ParticlesBackground />
        <div className="glow-mesh">
          <div className="glow-spot-1"></div>
          <div className="glow-spot-2"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
