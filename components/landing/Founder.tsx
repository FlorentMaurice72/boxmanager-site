import Reveal from "../ui/Reveal";

export default function Founder() {
  return (
    <section id="founder" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal className="section-label" style={{ justifyContent: "center" }}>
            Témoignage
          </Reveal>
          <Reveal delay={1}>
            <h2>Créé par un propriétaire, pour des propriétaires</h2>
          </Reveal>
        </div>
        <Reveal delay={2}>
          <div className="founder-card">
            <p className="founder-quote">
              &ldquo;Je gérais mes box sur Excel. Chaque mois, je vérifiais manuellement qui avait payé, je
              relançais à la main, je cherchais mes chiffres au moment des impôts. J&apos;ai construit
              Boxgestion parce que je n&apos;ai pas trouvé d&apos;outil adapté à ma réalité — pas à celle
              d&apos;un grand exploitant, la mienne.&rdquo;
            </p>
            <div className="founder-stats">
              <div className="founder-stat">
                <strong>34</strong>
                <span>box en gestion</span>
              </div>
              <div className="founder-stat">
                <strong>30+</strong>
                <span>locataires</span>
              </div>
              <div className="founder-stat">
                <strong>10 ans</strong>
                <span>d&apos;expérience</span>
              </div>
            </div>
            <p className="founder-byline">
              <strong>Florent Maurice</strong> — fondateur de Boxgestion
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
