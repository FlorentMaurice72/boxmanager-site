import Reveal from "../ui/Reveal";

export default function CTA() {
  return (
    <section id="cta" className="section">
      <div className="cta-glow" />
      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <Reveal className="section-label" style={{ justifyContent: "center" }}>
          Rejoignez-nous
        </Reveal>
        <Reveal delay={1}>
          <h2 style={{ marginBottom: 24 }}>
            Prêt à simplifier
            <br />
            votre gestion locative ?
          </h2>
        </Reveal>
        <Reveal delay={2} style={{ color: "var(--text-muted)", fontSize: "1rem", maxWidth: 480, margin: "0 auto 48px" }}>
          Boxgestion est le logiciel de gestion locative pensé pour les propriétaires de boxes et garages.
          Automatisez le suivi des loyers, la détection des impayés et les relances — et passez votre gestion
          à moins de 15 minutes par mois.
        </Reveal>
        <Reveal delay={3} style={{ margin: "0 auto 16px" }}>
          <form className="cta-form" action="https://formspree.io/f/xbdqavqz" method="POST">
            <input type="hidden" name="_subject" value="Nouvelle demande Boxgestion" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="nom" placeholder="Votre nom" required className="cta-input" />
            <input type="email" name="email" placeholder="Votre email" required className="cta-input" />
            <select name="nb_box" required defaultValue="" className="cta-select">
              <option value="" disabled>
                Combien de box gérez-vous ?
              </option>
              <option value="moins-10">Moins de 10</option>
              <option value="11-30">11 à 30</option>
              <option value="31-50">31 à 50</option>
              <option value="51+">Plus de 50</option>
            </select>
            <textarea
              name="message"
              placeholder="Une question ou un contexte à partager ? (optionnel)"
              className="cta-textarea"
            />
            <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
              Démarrer mon essai gratuit
            </button>
          </form>
        </Reveal>
        <Reveal delay={4} className="cta-note">
          3 mois d&apos;essai offerts · Aucune carte bancaire · Hébergé en France · Annulation à tout moment
        </Reveal>
      </div>
    </section>
  );
}
