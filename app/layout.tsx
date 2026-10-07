import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Акжан Максатовна — контент-стратег", description: "Портфолио Акжан Максатовны: Reels, стратегии роста и личные бренды." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body>{children}</body></html>; }
