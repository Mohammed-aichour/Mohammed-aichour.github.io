import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import CustomCursor from '@/components/portfolio/CustomCursor';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Mohammed AICHOUR — Élève Ingénieur en Génie Informatique | Computer Science & Full Stack',
  description: 'Portfolio officiel de Mohammed AICHOUR, étudiant en 2ᵉ année du Cycle d’Ingénieur en Génie Informatique à Universiapolis (UIA) – École Polytechnique d’Agadir. Développement logiciel, conception d’applications, bases de données, systèmes et réseaux.',
  keywords: ['Mohammed AICHOUR', 'Génie Informatique', 'Computer Science', 'Universiapolis', 'UIA', 'École Polytechnique d’Agadir', 'Génie Logiciel', 'Développement Web', 'Full Stack', 'Bases de Données', 'Réseaux', 'Intelligence Artificielle', 'React 19', 'Node.js', 'Portfolio'],
  openGraph: {
    title: 'Mohammed AICHOUR — Élève Ingénieur en Génie Informatique',
    description: 'Portfolio officiel de Mohammed AICHOUR : Projets en Génie Informatique, développement logiciel, architectures web, systèmes et réalisations au Fab Lab Universiapolis.',
    type: 'website',
    locale: 'fr_FR',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
