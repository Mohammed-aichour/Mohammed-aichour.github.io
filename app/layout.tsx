import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zinedine Tlemsani Benhattal — Futur ingénieur en IA',
  description: 'Portfolio de Zinedine Tlemsani Benhattal, étudiant en Génie Informatique à Agadir, passionné par l’intelligence artificielle, la recherche et l’innovation.',
  keywords: ['Zinedine Tlemsani Benhattal', 'Génie Informatique', 'Intelligence artificielle', 'Portfolio', 'Agadir'],
  openGraph: { title: 'Zinedine — Futur ingénieur en Génie Informatique', description: 'Un parcours en construction entre ingénierie, intelligence artificielle et recherche.', type: 'website', locale: 'fr_FR' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className="dark"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
