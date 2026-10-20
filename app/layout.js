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
  title: 'Joachim Berrewaerts — Coaching course à pied & vélo',
  description:
    "Coaching course à pied et vélo par Joachim Berrewaerts : plans d'entraînement personnalisés, tests de vitesse et puissance critiques, master en sciences de la motricité (ULB).",
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
