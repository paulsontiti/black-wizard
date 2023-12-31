import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FoodOrderAppProvider from "./components/FoodOrderAppProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food Terra",
  description: `Best Pizza in New YorkHealing, through homemade meals `,
};

export default function FoodOrderingAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FoodOrderAppProvider>
          <Navbar />
          {children}
          <Footer />
        </FoodOrderAppProvider>
      </body>
    </html>
  );
}
