import Reveal from "../ui/Reveal";

const FEATURES: { delay: 0 | 1 | 2 | 3; title: string; desc: string; icon: React.ReactNode }[] = [
  {
    delay: 0,
    title: "Gestion des sites",
    desc: "Créez vos environnements (adresses), organisez vos box et garages par site. Vue d'ensemble claire de l'intégralité de votre parc.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    delay: 1,
    title: "Fiches locataires",
    desc: "Enregistrez toutes les informations de vos locataires — identité, contacts, caution — prêtes pour la génération automatique du bail.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
  {
    delay: 2,
    title: "Génération de bail auto",
    desc: "À chaque entrée locataire, un bail conforme est généré instantanément en PDF. Personnalisé, signé, archivé.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    delay: 1,
    title: "Import CSV bancaire",
    desc: "Importez votre relevé bancaire. L'algorithme de matching identifie et rapproche automatiquement chaque paiement au bon locataire.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <polyline points="13 2 13 9 20 9" />
        <path d="M8 13h2m0 0h4m-4 0v4" />
      </svg>
    ),
  },
  {
    delay: 2,
    title: "Relances automatiques",
    desc: "Détection des impayés en temps réel. Relances par e-mail envoyées automatiquement selon votre calendrier de recouvrement.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    delay: 3,
    title: "Tableau de bord finances",
    desc: "Rentabilité brute et nette, cash-flow mensuel, taux d'occupation — tous vos KPIs immobiliers en un coup d'œil.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <polyline points="9 10 12 13 15 10" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="section" style={{ background: "var(--section-alt)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal className="section-label" style={{ justifyContent: "center" }}>
            Fonctionnalités
          </Reveal>
          <Reveal delay={1}>
            <h2>
              Tout ce dont vous avez besoin.
              <br />
              <span style={{ color: "var(--text-muted)" }}>Rien de superflu.</span>
            </h2>
          </Reveal>
        </div>
        <div className="features-grid">
          {FEATURES.map((f) => (
            <Reveal key={f.title} delay={f.delay} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <div className="feature-title">{f.title}</div>
              <p className="feature-desc">{f.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
