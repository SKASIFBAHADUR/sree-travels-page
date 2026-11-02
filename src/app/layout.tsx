import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sree Travel Deals – We Frame Your Memories | Dubai, Thailand, Singapore & Malaysia',
  description:
    'Sree Travel Deals plans memorable group and family holidays to Dubai, Thailand, Singapore and Malaysia. Call +91 85199 69749.',
  openGraph: {
    title: 'Sree Travel Deals – We Frame Your Memories',
    description: 'Dubai, Thailand, Singapore & Malaysia holidays, planned end to end.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&family=Playfair+Display:ital,wght@0,600;0,800;1,600&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body>{children}</body>
    </html>
  );
}
