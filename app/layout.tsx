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
  title: {
    default: "NK Financial | Expert Loan & Insurance Solutions",
    template: "%s | NK Financial",
  },
  description:
    "NK Financial Consultancy by Niranjan Khandekar. Get expert advice and instant approvals on Personal Loans, Business Loans, Home Loans, Insurance, and Mutual Funds.",
  keywords: [
    "NK Financial",
    "Niranjan Khandekar",
    "best personal loan consultant",
    "business loan advisor India",
    "home loan lowest interest rate",
    "financial consultancy near me",
    "term insurance plans",
    "mutual fund advisor",
    "fast business loan approval",
    "financial planner",
    "credit score consultation"
  ],
  authors: [{ name: "Niranjan Khandekar" }],
  creator: "Niranjan Khandekar",
  publisher: "NK Financial",
  openGraph: {
    title: "NK Financial | Expert Loan & Insurance Solutions",
    description:
      "Trusted financial solutions tailored to your goals. Fast approvals for Personal and Business Loans. Talk to Niranjan Khandekar today.",
    siteName: "NK Financial",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NK Financial | Expert Loan & Insurance Solutions",
    description: "Expert advice on Loans, Insurance, and Investments by Niranjan Khandekar.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "name": "NK Financial",
  "description": "Expert financial consultancy providing personal loans, business loans, and insurance solutions.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "IN"
  },
  "founder": {
    "@type": "Person",
    "name": "Niranjan Khandekar"
  },
  "telephone": "+919373061520"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body 
        className={`bg-[#FDFBF7] text-neutral-900 antialiased overflow-x-hidden ${roboto.variable} ${poppins.variable}`}
        style={{ fontFamily: '"Roboto", "Poppins", sans-serif' }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {process.env.NODE_ENV !== "development" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('contextmenu', event => event.preventDefault());
                document.addEventListener('keydown', (e) => {
                  if (e.keyCode === 123) { // F12
                    e.preventDefault();
                  }
                  if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) { // Ctrl+Shift+I or J
                    e.preventDefault();
                  }
                  if (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) { // Ctrl+U or S
                    e.preventDefault();
                  }
                  // Mac equivalents
                  if (e.metaKey && e.altKey && (e.keyCode === 73 || e.keyCode === 74)) { // Cmd+Option+I or J
                    e.preventDefault();
                  }
                  if (e.metaKey && (e.keyCode === 85 || e.keyCode === 83)) { // Cmd+U or S
                    e.preventDefault();
                  }
                });
              `,
            }}
          />
        )}
        {children}
      </body>
    </html>
  );
}