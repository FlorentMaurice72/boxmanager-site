# Handoff: Boxgestion — Site marketing + Blog

## Overview
Boxgestion est un logiciel SaaS de gestion locative spécialisé pour les propriétaires de boxes de stockage et garages. Ce package contient le design complet du site marketing (landing page) et du blog, prêt à être implémenté dans un framework front-end moderne pour un déploiement Vercel.

## About the Design Files
Les fichiers HTML dans ce bundle sont des **références de design** — des prototypes haute-fidélité montrant l'apparence finale et les comportements attendus. Ils ne sont **pas du code de production** à copier directement.

La mission du développeur est de **recréer ces designs dans un environnement de production** adapté. Recommandation : **Next.js 14+ (App Router)** avec Tailwind CSS, déployé sur Vercel. C'est le stack le plus adapté pour ce projet (SSG pour le blog SEO, déploiement Vercel natif, performance optimale).

## Fidelité
**Haute-fidélité (hifi)** — Les maquettes sont pixel-perfect avec couleurs, typographie, espacements et interactions finaux. Le développeur doit recréer l'UI fidèlement en utilisant les tokens de design définis ci-dessous.

---

## Architecture recommandée (Next.js)

```
boxgestion/
├── app/
│   ├── page.tsx                    # Landing page (index.html)
│   ├── blog/
│   │   ├── page.tsx                # Liste des articles (blog.html)
│   │   └── [slug]/
│   │       └── page.tsx            # Article individuel (article-*.html)
│   └── layout.tsx                  # Nav + Footer partagés
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx                    # SVG logo inline
│   ├── landing/
│   │   ├── Hero.tsx
│   │   ├── Counters.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   ├── BlogPreview.tsx
│   │   └── CTA.tsx
│   ├── blog/
│   │   ├── ArticleCard.tsx
│   │   └── ArticleBody.tsx
│   └── ui/
│       ├── ParticlesCanvas.tsx
│       └── ScrollReveal.tsx
├── content/
│   └── blog/                       # Fichiers MDX pour les articles
│       ├── guide-gestion-box-2025.mdx
│       └── ...
└── public/
    └── logo.svg
```

---

## Pages & Vues

### 1. Landing Page (`app/page.tsx`)

#### Nav
- **Position** : fixed top, full width, z-index 1000
- **Height** : 64px
- **Background** : `rgba(6,13,24,0.88)` dark / `rgba(248,250,252,0.92)` light + `backdrop-filter: blur(16px) saturate(180%)`
- **Border-bottom** : `1px solid var(--border)`
- **Contenu** : Logo gauche · Liens centre (Fonctionnalités, Tarifs, Blog, FAQ, Clients) · Actions droite (toggle thème + bouton "Essai gratuit")
- **Logo** : SVG inline — fond vert `#16a34a`, icône portail blanc, texte "**Box**manager" avec "Box" en vert

#### Hero (section)
- **Layout** : CSS Grid 2 colonnes égales, gap 64px, centré verticalement, min-height 100vh, padding-top 90px
- **Fond** : particules animées sur canvas (voir section Animations)
- **Colonne gauche** :
  - Badge pill : fond `rgba(22,163,74,0.08)`, bordure `rgba(22,163,74,0.35)`, texte vert — *"Gestion locative · Boxes & garages · Hébergé en France"*
  - H1 : `clamp(2.6rem, 5vw, 4.2rem)`, weight 700, lettre-spacing -0.02em — *"Gérez vos box et garages en **15 min/mois.**"* (highlight en dégradé vert)
  - Sous-titre : 1.05rem, couleur muted, max-width 440px
  - 2 boutons : Primary (vert, "Essai 3 mois gratuit") + Ghost (bordure, "Voir les fonctionnalités")
  - Note : 12px subtle — *"Aucune carte bancaire requise · Annulation à tout moment"*
  - Stats row : 3 stats séparées par border-top — "15 min / de gestion par mois", "12 000+ / Box gérées", "98% / Taux de recouvrement"
- **Colonne droite** : Browser frame animé (float 6s ease-in-out) contenant mockup app interactif

#### Browser Frame (mockup app)
- **Border-radius** : 14px
- **Box-shadow** : `0 40px 100px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06)`
- **Animation** : `translateY(0px) → translateY(-10px)`, 6s ease-in-out infinite
- **Topbar** : fond `#1a1a2e`, dots rouge/jaune/vert, URL bar grisée
- **Contenu** : app mockup avec 4 onglets cliquables (Dashboard, Loyers, Biens, Finances)
- **Sidebar app** : fond `#0f1e35`, nav items avec état actif `background:#1e3a5f + border-right:2px solid #22c55e`

#### Counters
- **Layout** : 4 colonnes égales, border-top + border-bottom
- **Animation** : count-up au scroll (IntersectionObserver), durée 1800ms, easing cubique
- **Valeurs** : 350+ · 12 000+ · 98% · €4M+

#### Features
- **Background** : `var(--section-alt)`
- **Grid** : 3 colonnes × 2 rangées, gap 1px, background var(--border) (effet grille)
- **Chaque card** : padding 36px 32px, icône 44×44px fond `rgba(22,163,74,0.18)`, hover background change

#### How It Works
- **3 steps** en colonnes avec ligne horizontale connectrice
- **Numéros** : cercles 56px, couleur vert, background card, z-index 1

#### Pricing
- **3 cards** : Starter (19€) · Pro (29€, featured) · Business (79€)
- **Featured** : border `var(--green)`, box-shadow vert, badge "Recommandé" centré top
- **Essai** : badge *"3 mois offerts · sans CB"* sur Starter, bouton *"Essai 3 mois gratuit · sans CB"* sur Pro

#### Testimonials, FAQ, Blog Preview, CTA, Footer
Voir fichier `index.html` pour les détails exacts de chaque section.

---

### 2. Blog List (`app/blog/page.tsx`)

- Hero avec gradient radial vert en fond
- Filtres par catégorie (pill buttons) — filtre côté client
- Article featured (2 colonnes : image + contenu)
- Grille 3 colonnes d'article cards
- Newsletter block en bas

### 3. Article individuel (`app/blog/[slug]/page.tsx`)

- Layout 2 colonnes : article (flex 1) + sidebar 280px
- Sidebar : CTA Boxgestion + liste articles récents
- Corps : typographie article avec h2/h3, blockquotes, tip-boxes
- Breadcrumb : Accueil › Blog › Catégorie

---

## Interactions & Comportements

### Particules (Hero)
```
- Canvas plein hero, z-index 0
- 120 particules max (density: 1 par 10 000px²)
- Chaque particule : position aléatoire, vx/vy ±0.3, rayon 0.3–1.8px, alpha 0.1–0.6
- Couleur dark: rgba(34,197,94, alpha) | light: rgba(15,30,53, alpha*0.5)
- Lignes de connexion si distance < 100px, alpha proportionnel
- Bounce sur les bords
- requestAnimationFrame loop
```

### Scroll Reveal
```css
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1),
              transform 0.7s cubic-bezier(0.16,1,0.3,1);
}
.reveal.visible { opacity: 1; transform: translateY(0); }
/* Delays: .reveal-delay-1 = 0.1s, -2 = 0.2s, etc. */
```
Déclenché par IntersectionObserver, threshold 0.1, rootMargin `-40px`.

### Compteurs animés
```js
// Easing: 1 - (1 - progress)^3
// Durée: 1800ms
// Déclenchement: IntersectionObserver threshold 0.3
```

### Toggle Dark/Light
- Attribut `data-theme="dark"|"light"` sur `<html>`
- Persisté en localStorage (`bm-theme`)
- Transition `background 0.4s, color 0.4s` sur body

### FAQ Accordion
- État local (useState) — un seul item ouvert à la fois
- Icône + qui rotate 45° quand ouvert

### App Mockup Tabs
- État local activeTab (0–3)
- Re-render du contenu à chaque clic

---

## Design Tokens

### Couleurs
```css
/* Palette principale */
--navy:        #0f1e35   /* Bleu nuit profond */
--navy-mid:    #162840
--navy-light:  #1e3a5f
--green:       #16a34a   /* Vert accent principal */
--green-light: #22c55e
--green-glow:  rgba(22,163,74,0.12)

/* Dark theme */
--bg:          #060d18
--bg-card:     #0f1e35
--bg-alt:      #0a1525
--text:        #f8fafc
--text-muted:  rgba(248,250,252,0.6)
--text-subtle: rgba(248,250,252,0.28)
--border:      rgba(255,255,255,0.07)
--nav-bg:      rgba(6,13,24,0.88)

/* Light theme */
--bg:          #f8fafc
--bg-card:     #ffffff
--bg-alt:      #f1f5f9
--text:        #0f1e35
--text-muted:  rgba(15,30,53,0.6)
--text-subtle: rgba(15,30,53,0.3)
--border:      rgba(15,30,53,0.08)
--nav-bg:      rgba(248,250,252,0.92)

/* États sémantiques */
--color-success: #16a34a
--color-error:   #dc2626
--color-warning: #f59e0b
--color-info:    #1e3a5f
```

### Typographie
```css
/* Fonts Google */
@import 'Space Grotesk' weights 400,500,600,700
@import 'DM Sans' weights 300,400,500,600 + italic

--font-display: 'Space Grotesk', sans-serif  /* Titres, nav logo, prix */
--font-body:    'DM Sans', sans-serif         /* Corps, boutons, labels */

/* Scale */
h1: clamp(2.6rem, 5vw, 4.2rem), weight 700, letter-spacing -0.02em, line-height 1.08
h2: clamp(1.8rem, 3vw, 2.6rem), weight 700, letter-spacing -0.02em
h3: 1.1rem, weight 600
body: 1rem / 1.7
small: 0.875rem
```

### Spacing
```
Section padding:  100px 0
Container:        max-width 1120px, padding 0 28px
Card padding:     36px 32px (large) / 22px 22px (small)
Gap grille:       24px (cards) / 64px (hero colonnes)
Border-radius:    16px (cards large) / 12px (cards small) / 10px (boutons) / 20px (pills)
```

### Boutons
```css
/* Primary */
background: #16a34a; color: #fff;
padding: 13px 26px; border-radius: 10px;
font-weight: 600; font-size: 15px;
box-shadow: 0 4px 24px rgba(22,163,74,0.35);
hover: translateY(-2px), box-shadow étendu

/* Ghost */
background: transparent; border: 1px solid var(--border);
padding: 13px 26px; border-radius: 10px;
hover: border-color var(--green), background var(--green-glow)
```

### Ombres
```
Card hover:    0 8px 36px rgba(0,0,0,0.15)
Browser frame: 0 40px 100px rgba(0,0,0,0.55)
Btn primary:   0 4px 24px rgba(22,163,74,0.35)
Pricing featured: 0 24px 60px rgba(22,163,74,0.15)
```

---

## Logo SVG
```svg
<svg viewBox="0 0 200 200" fill="none">
  <rect width="200" height="200" rx="44" fill="#16a34a"/>
  <!-- Portique de garage : 2 piliers + traverse + 2 barres -->
  <rect x="38" y="46" width="22" height="108" fill="white"/>
  <rect x="140" y="46" width="22" height="108" fill="white"/>
  <rect x="38" y="46" width="124" height="22" fill="white"/>
  <rect x="60" y="104" width="80" height="14" fill="white"/>
  <rect x="60" y="128" width="80" height="14" fill="white"/>
</svg>
```

---

## Contenu Blog (10 articles)

| Fichier | Titre | Catégorie | Lecture |
|---------|-------|-----------|---------|
| article-1.html | Guide complet : gérer ses box en 2025 | Guide | 15 min |
| article-2.html | Bail de garage : ce que dit la loi en 2025 | Juridique | 8 min |
| article-3.html | Comment réduire les impayés | Encaissement | 10 min |
| article-4.html | Investir dans des box : guide débutant | Investissement | 12 min |
| article-5.html | Fiscalité des loyers de box 2025 | Fiscalité | 11 min |
| article-6.html | Trouver et sélectionner de bons locataires | Guide | 9 min |
| article-7.html | Trouver et acheter des box rentables | Investissement | 13 min |
| article-8.html | Import CSV : automatiser la comptabilité | Encaissement | 7 min |
| article-9.html | Boxgestion v2 : nouveautés mai 2025 | Boxgestion | 5 min |
| article-10.html | Optimiser le taux d'occupation | Guide | 10 min |

Contenu complet dans chaque fichier HTML — à migrer en MDX pour Next.js.

---

## Assets
- **Logo** : SVG inline (voir ci-dessus), pas de fichier externe
- **Icônes** : SVG inline, style `stroke`, stroke-width 1.5–2, viewBox 0 0 24 24
- **Fonts** : Google Fonts (Space Grotesk + DM Sans) — à auto-héberger en production avec `next/font/google`
- **Images** : aucune image externe — fonds CSS gradient uniquement

---

## Déploiement Vercel recommandé

```bash
# Init projet Next.js
npx create-next-app@latest boxgestion --typescript --tailwind --app

# Install dépendances suggérées
npm install framer-motion           # Animations scroll reveal + compteurs
npm install @radix-ui/react-*       # Primitives UI accessibles (FAQ accordion, etc.)
npm install next-mdx-remote         # Articles de blog en MDX
npm install sharp                   # Optimisation images

# Variables d'environnement Vercel
NEXT_PUBLIC_SITE_URL=https://boxgestion.fr
```

## SEO
Chaque page doit avoir :
```tsx
export const metadata = {
  title: 'Page Title — Boxgestion',
  description: '...',
  openGraph: { ... },
}
```

---

## Fichiers de référence inclus dans ce package
| Fichier | Description |
|---------|-------------|
| `index.html` | Landing page complète |
| `blog.html` | Page liste du blog |
| `article-1.html` à `article-10.html` | 10 articles individuels |
| `blog-shared.css` | Styles CSS partagés du blog |

> **Note** : Ces fichiers HTML sont des références de design. Ne pas déployer directement — les recréer dans Next.js en suivant ce document.
