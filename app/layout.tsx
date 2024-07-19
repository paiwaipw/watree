import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WaTree",
  description: "Web application for monitoring trees life",
  keywords: "watree, watree id, watreeid",
  openGraph: {
    title: "WaTree",
    description: "Web application for monitoring trees life",
    url: "https://watree.id/",
    images: "https://watree.id/watree.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
        <Toaster position="top-left" expand={true} richColors />
      </body>
    </html>
  );
}
