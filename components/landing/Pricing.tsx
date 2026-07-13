import Reveal from "../ui/Reveal";

const CHECK = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth={2.5}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Pricing() {
  return (
    <section id="pricing" className="section" style={{ background: "var(--section-alt)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal className="section-label" style={{ justifyContent: "center" }}>
            Tarifs
          </Reveal>
          <Reveal delay={1}>
            <h2>Simple et transparent</h2>
          </Reveal>
          <Reveal
            delay={2}
            style={{
              color: "var(--text-muted)",
              fontSize: "1rem",
              marginTop: 16,
              maxWidth: 480,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            3 mois d&apos;essai offerts sur tous les plans · aucune carte bancaire requise.
          </Reveal>
        </div>
        <div className="pricing-grid">
          {/* Starter */}
          <Reveal className="pricing-card">
            <div className="pricing-name">Starter</div>
            <div>
              <span className="pricing-price">49€</span>
              <span className="pricing-per"> / mois</span>
            </div>
            <div style={{ marginTop: 8, marginBottom: 4 }}>
              <span
                style={{
                  display: "inline-block",
                  background: "var(--green-glow)",
                  border: "1px solid rgba(22,163,74,0.25)",
                  color: "var(--green)",
                  fontSize: 11,
                  fontWeight: 700,
                  padding: "3px 10px",
                  borderRadius: 20,
                }}
              >
                3 mois offerts · sans CB
              </span>
            </div>
            <div className="pricing-divider" />
            {["1 site", "Jusqu'à 20 boxes", "Gestion locataires", "Génération de bail", "Import CSV bancaire"].map((item) => (
              <div className="pricing-item" key={item}>
                {CHECK}
                <span>{item}</span>
              </div>
            ))}
            <div style={{ marginTop: 28 }}>
              <a href="#cta" className="btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
                Démarrer l&apos;essai gratuit
              </a>
            </div>
          </Reveal>

          {/* Pro (featured) */}
          <Reveal delay={1} className="pricing-card featured">
            <div className="pricing-badge">Recommandé</div>
            <div className="pricing-name">Pro</div>
            <div>
              <span className="pricing-price">99€</span>
              <span className="pricing-per"> / mois</span>
            </div>
            <div className="pricing-divider" />
            {["Sites illimités", "Jusqu'à 100 box", "Import CSV bancaire", "Matching automatique", "Relances automatiques", "Support e-mail prioritaire"].map((item) => (
              <div className="pricing-item" key={item}>
                {CHECK}
                <span>{item}</span>
              </div>
            ))}
            <div style={{ marginTop: 28 }}>
              <a href="#cta" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Essai 3 mois gratuit · sans CB
              </a>
            </div>
          </Reveal>

          {/* Entreprise */}
          <Reveal delay={2} className="pricing-card">
            <div className="pricing-name">Entreprise</div>
            <div>
              <span className="pricing-price" style={{ fontSize: 30 }}>Sur devis</span>
            </div>
            <div className="pricing-divider" />
            {["Box illimitées", "Toutes fonctionnalités Pro", "API & Webhooks", "Export comptable", "Support téléphonique", "Onboarding dédié"].map((item) => (
              <div className="pricing-item" key={item}>
                {CHECK}
                <span>{item}</span>
              </div>
            ))}
            <div style={{ marginTop: 28 }}>
              <a href="#cta" className="btn-ghost" style={{ width: "100%", justifyContent: "center" }}>
                Contacter les ventes
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
