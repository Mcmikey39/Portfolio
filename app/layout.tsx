import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";
import { Poppins, Iceberg } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-poppins",
});

const iceberg = Iceberg({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-iceberg",
});

export const metadata: Metadata = {
  title: {
    default: "MCB",
    template: "%s - MCB",
  },
  description:
    "MCB is a full-stack web developer portfolio showcasing projects and skills.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${poppins.variable} ${iceberg.variable}`}
    >
      <head />
      <body
        className={clsx(
          "min-h-screen font-sans antialiased",
          `${poppins.className} ${iceberg})`,
        )}
      >
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
