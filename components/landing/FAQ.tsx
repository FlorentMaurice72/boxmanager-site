"use client";

import * as Accordion from "@radix-ui/react-accordion";
import Reveal from "../ui/Reveal";

const FAQS = [
  {
    q: "Qu'est-ce qu'un box dans Boxgestion ?",
    a: "Un box est toute unité locative de type garde-meuble, box de stockage ou garage. Vous pouvez les créer, les nommer, définir leur superficie et leur tarif mensuel.",
  },
  {
    q: "Comment fonctionne l'import CSV ?",
    a: "Exportez votre relevé bancaire depuis votre banque au format CSV, importez-le dans Boxgestion. L'algorithme de matching identifie automatiquement les paiements par montant et référence locataire.",
  },
  {
    q: "Le bail généré est-il légalement valide ?",
    a: "Oui. Le modèle de bail est conforme à la loi française pour les locations de locaux non résidentiels. Vous pouvez le personnaliser avec vos clauses spécifiques.",
  },
  {
    q: "Puis-je essayer gratuitement ?",
    a: "Oui ! Le plan Starter est gratuit à vie pour jusqu'à 5 box. Le plan Pro dispose d'un essai de 14 jours sans carte bancaire requise.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Vos données sont hébergées en France, chiffrées en transit et au repos. Des sauvegardes automatiques quotidiennes sont incluses dans tous les plans.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section" style={{ background: "var(--section-alt)" }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <Reveal className="section-label" style={{ justifyContent: "center" }}>
            FAQ
          </Reveal>
          <Reveal delay={1}>
            <h2>Questions fréquentes</h2>
          </Reveal>
        </div>
        <Accordion.Root type="single" collapsible>
          {FAQS.map((f) => (
            <Accordion.Item value={f.q} key={f.q} style={{ borderBottom: "1px solid var(--border)" }}>
              <Accordion.Header>
                <Accordion.Trigger
                  className="faq-trigger"
                  style={{
                    width: "100%",
                    padding: "22px 0",
                    background: "none",
                    border: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "var(--text)",
                    textAlign: "left",
                    gap: 16,
                    fontFamily: "var(--font-display), sans-serif",
                    fontSize: 16,
                    fontWeight: 600,
                  }}
                >
                  {f.q}
                  <span className="faq-plus" style={{ color: "var(--green)", fontSize: 20, lineHeight: 1 }}>
                    +
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content
                style={{
                  paddingBottom: 20,
                  color: "var(--text-muted)",
                  fontSize: 14,
                  lineHeight: 1.75,
                  overflow: "hidden",
                }}
              >
                {f.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}
