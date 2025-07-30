import { Metadata } from 'next';
import '../styles/globals.css';
import '../styles/theme.module.css';
import ClientLayout from './ClientLayout';

export const metadata: Metadata = {
  metadataBase: new URL('https://your-deployment-url.vercel.app'),
  title: 'Reward System Upgrade',
  description: 'Upgrade your account and earn reward points',
  openGraph: {
    title: 'Reward System Upgrade',
    description: 'Gamified reward system demo',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
