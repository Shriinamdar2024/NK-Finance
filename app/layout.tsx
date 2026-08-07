import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "NK Financial | Consultancy & Solutions",
  description:
    "NK Financial Consultancy and Solutions — trusted personal loans, business loans, insurance, and investment advisory by Niranjan Khandekar. Serving PAN India.",
  keywords:
    "personal loan, business loan, insurance, mutual funds, financial planning, NK Financial, Niranjan Khandekar",
  openGraph: {
    title: "NK Financial | Consultancy & Solutions",
    description:
      "Trusted financial solutions tailored to your personal and business goals. Talk to Niranjan Khandekar today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`bg-[#FDFBF7] text-neutral-900 antialiased ${roboto.variable} ${poppins.variable}`}
        style={{ fontFamily: '"Roboto", "Poppins", sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}