import ParticlesCanvas from "../ui/ParticlesCanvas";
import Reveal from "../ui/Reveal";
import BrowserMockup from "./BrowserMockup";

export default function Hero() {
  return (
    <section id="hero">
      <ParticlesCanvas />
      <div className="container hero-grid">
        <div>
          <Reveal className="hero-badge">
            <div className="hero-badge-dot" />
            Gestion locative · Boxes & garages · Hébergé en France
          </Reveal>
          <Reveal delay={1}>
            <h1 className="hero-title">
              Gérez vos box
              <br />
              et garages en
              <br />
              <span className="highlight">15 min/mois.</span>
            </h1>
          </Reveal>
          <Reveal delay={2}>
            <p className="hero-desc">
              Boxgestion automatise le suivi des loyers, la détection des impayés et les relances — que vous
              gériez 10 ou 50 boxes. Simple, accessible depuis n&apos;importe quel navigateur, sans installation.
            </p>
          </Reveal>
          <Reveal delay={3} className="hero-actions">
            <a href="#pricing" className="btn-primary">
              Essai 3 mois gratuit
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#features" className="btn-ghost">
              Voir les fonctionnalités
            </a>
          </Reveal>
          <Reveal delay={4} style={{ fontSize: 12, color: "var(--text-subtle)", marginTop: 12 }}>
            Aucune carte bancaire requise · Annulation à tout moment
          </Reveal>
          <Reveal delay={4} className="hero-stats">
            <div>
              <span className="hero-stat-val">15 min</span>
              <div className="hero-stat-label">de gestion par mois</div>
            </div>
            <div>
              <span className="hero-stat-val">12 000+</span>
              <div className="hero-stat-label">Box gérées</div>
            </div>
            <div>
              <span className="hero-stat-val">98%</span>
              <div className="hero-stat-label">Taux de recouvrement</div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={2}>
          <BrowserMockup />
        </Reveal>
      </div>
    </section>
  );
}
