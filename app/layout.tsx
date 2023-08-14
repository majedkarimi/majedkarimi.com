import Providers from "@/store/Provider";
import "../style/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ProvideSw from "@/config/ProvideSw";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "farsdev",
  description: "for all developers",
  manifest: "manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ProvideSw>
        <Providers>
          <body className={inter.className}>{children}</body>
        </Providers>
      </ProvideSw>
    </html>
  );
}
