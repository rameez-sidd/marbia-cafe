import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { AppProviders } from "./providers";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";


const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Marbia – Bar & Restaurant | New Friends Colony, New Delhi",
  description:
    "Marbia is a modern bar & restaurant in New Friends Colony, New Delhi, blending Mediterranean flavours, global cuisine, handcrafted cocktails, and live music nights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} antialiased bg-black text-white`}
      >
        <AppProviders>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1 pt-20">{children}</main>
            <SiteFooter />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
