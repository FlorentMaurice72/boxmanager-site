import Reveal from "../ui/Reveal";

const STEPS: { number: number; title: string; desc: string; delay: 0 | 2 | 4 }[] = [
  {
    number: 1,
    title: "Créez votre site",
    desc: "Ajoutez votre adresse, définissez vos box et leur tarif mensuel. Votre espace est opérationnel en 5 minutes chrono.",
    delay: 0,
  },
  {
    number: 2,
    title: "Enregistrez vos locataires",
    desc: "Saisissez les informations du locataire : le bail est généré automatiquement et envoyé pour signature électronique.",
    delay: 2,
  },
  {
    number: 3,
    title: "Pilotez vos encaissements",
    desc: "Importez votre CSV bancaire chaque mois. Boxgestion rapproche les paiements, détecte les manquants et relance automatiquement.",
    delay: 4,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <Reveal className="section-label" style={{ justifyContent: "center" }}>
            Comment ça marche
          </Reveal>
          <Reveal delay={1}>
            <h2>Opérationnel en 3 étapes</h2>
          </Reveal>
        </div>
        <div className="steps-grid">
          {STEPS.map((s) => (
            <Reveal key={s.number} delay={s.delay} className="step-card">
              <div className="step-number">{s.number}</div>
              <div className="step-title">{s.title}</div>
              <p className="step-desc">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
