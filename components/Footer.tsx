import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Logo size={28} />
              <span>
                <span style={{ color: "var(--green)" }}>Box</span>gestion
              </span>
            </div>
            <p className="footer-tagline">La gestion locative de box et garages, enfin simple et automatisée.</p>
          </div>
          <div>
            <div className="footer-col-title">Produit</div>
            <a href="#features" className="footer-link">Fonctionnalités</a>
            <a href="#pricing" className="footer-link">Tarifs</a>
            <a href="#" className="footer-link">Nouveautés</a>
            <a href="#" className="footer-link">Roadmap</a>
          </div>
          <div>
            <div className="footer-col-title">Ressources</div>
            <a href="#" className="footer-link">Documentation</a>
            <Link href="/blog" className="footer-link">Blog</Link>
            <a href="#faq" className="footer-link">FAQ</a>
            <a href="#" className="footer-link">Support</a>
          </div>
          <div>
            <div className="footer-col-title">Légal</div>
            <a href="#" className="footer-link">CGU</a>
            <a href="#" className="footer-link">Confidentialité</a>
            <a href="#" className="footer-link">Mentions légales</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 Boxgestion. Tous droits réservés.</span>
          <span className="footer-copy">
            <a href="mailto:contact@boxgestion.fr" style={{ color: "inherit", textDecoration: "none" }}>
              contact@boxgestion.fr
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
