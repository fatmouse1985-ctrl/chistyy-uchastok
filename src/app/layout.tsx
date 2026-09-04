import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["cyrillic", "latin"], display: "swap" });
export const metadata: Metadata = {
  metadataBase: new URL("https://chistyy-uchastok.ru"),
  title: { default: "Чистый Участок — услуги по уходу за участком", template: "%s | Чистый Участок" },
  description: "Покос травы, спил деревьев, расчистка участков и вывоз мусора в Москве и Подмосковье. Выезд в день обращения.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ru"><body className={inter.className}><Header /><main className="min-h-screen">{children}</main><Footer /></body></html>; }
