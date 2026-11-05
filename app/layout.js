import { Anton, Archivo, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './theme.css';

const display = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-display',
  display: 'swap',
});

const body = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.joachimcoaching.be'),
  title: 'Joachim Berrewaerts - Coach course à pied & vélo à Bruxelles',
  description:
    "Coach course à pied et vélo à Bruxelles : plans d'entraînement personnalisés, tests de vitesse et puissance critiques, suivi chaque semaine. Master en sciences de la motricité (ULB).",
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Joachim Berrewaerts - Coach course à pied & vélo à Bruxelles',
    description: "Plans d'entraînement personnalisés en course à pied et à vélo. Appel découverte gratuit.",
    url: '/',
    siteName: 'Joachim Berrewaerts Coaching',
    locale: 'fr_BE',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f3efe6',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
