import { Anton, Archivo, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import './bcf.css';

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
  title: 'La Grimpe — Coaching vélo & course à pied pour la BCF',
  description:
    "Plans d'entraînement pour les classiques de la Bonneville Cycling Federation, par Joachim Berrewaerts : coureur Pro Tour, master en sciences de la motricité (ULB), spécialisé en physiologie de l'effort.",
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
