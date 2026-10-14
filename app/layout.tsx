import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import CustomCursor from '@/components/portfolio/CustomCursor';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'], display: 'swap' });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Mohammed AICHOUR — Élève Ingénieur en Génie Informatique | Cybersécurité & Full Stack',
  description: 'Portfolio officiel de Mohammed AICHOUR, étudiant en 2ᵉᵐᵉ année du Cycle d’Ingénieur en Génie Informatique à l’École Polytechnique d’Agadir – Universiapolis (Option Cybersécurité & Réseaux). Développeur Full Stack, passionné par la cybersécurité, les réseaux et l’IA.',
  keywords: ['Mohammed AICHOUR', 'Génie Informatique', 'Universiapolis', 'École Polytechnique d’Agadir', 'Cybersécurité', 'Réseaux', 'Full Stack', 'React 19', 'Node.js', 'Portfolio'],
  openGraph: {
    title: 'Mohammed AICHOUR — Élève Ingénieur en Génie Informatique',
    description: 'Portfolio officiel de Mohammed AICHOUR : Projets Full Stack, Cybersécurité & Réseaux, et réalisations au Fab Lab Universiapolis.',
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
