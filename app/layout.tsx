import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Boxgestion — Gestion locative de box & garages",
  description:
    "Boxgestion automatise le suivi des loyers, la détection des impayés et les relances pour les propriétaires de box et garages. Essai 3 mois gratuit, sans carte bancaire.",
  openGraph: {
    title: "Boxgestion — Gestion locative de box & garages",
    description:
      "Gérez vos box et garages en 15 min/mois. Suivi des loyers, relances automatiques et génération de bail.",
    url: "https://boxgestion.fr",
    siteName: "Boxgestion",
    locale: "fr_FR",
    type: "website",
  },
};

const THEME_INIT_SCRIPT = `
try {
  var t = localStorage.getItem('bm-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', t);
} catch (e) {}
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-theme="dark" className={`${spaceGrotesk.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body suppressHydrationWarning>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
