import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'CyberNow - Cybersecurity Education by Bloyi Innovations',
  description:
    'Learn cybersecurity skills aligned with real-world job opportunities. Get matched with your dream job after training.',
  keywords: 'cybersecurity, education, skill matching, jobs, training',
  authors: [{ name: 'Bloyi Innovations' }],
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body>
        {children}
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
