import '../styles/globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Anek_Bangla } from 'next/font/google';
import PlausibleProvider from 'next-plausible';

const anek = Anek_Bangla({
  subsets: ['latin'],
  display: 'swap',
});

const title = 'PDF-Talk';
const description = 'Chat with your PDFs in seconds.';
const ogimage = '/og-image.png'; // Ensure this path is correct
const url = 'https://www.pdftalk.com';
const sitename = 'pdftalk.com';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: [ogimage],
    title,
    description,
    url,
    siteName: sitename,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: [ogimage],
    title,
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en" className={anek.className}>
        <head>
          <PlausibleProvider domain="pdftalk.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /> {/* Updated here */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#ffffff" />
        </head>
        <body className="bg-white text-gray-900 flex flex-col min-h-screen">
          <div className="flex-grow">{children}</div>
          <footer className="bg-gray-800 text-white py-4 text-center">
            © {new Date().getFullYear()} PDF-Talk. All rights reserved.
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
