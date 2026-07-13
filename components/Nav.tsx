import Link from "next/link";
import Logo from "./Logo";
import ThemeToggle from "./ui/ThemeToggle";

export default function Nav() {
  return (
    <nav className="site-nav">
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo">
          <Logo size={32} />
          <span>
            <span style={{ color: "var(--green)" }}>Box</span>gestion
          </span>
        </a>
        <div className="nav-links">
          <a href="#features">Fonctionnalités</a>
          <a href="#pricing">Tarifs</a>
          <Link href="/blog">Blog</Link>
          <a href="#faq">FAQ</a>
          <a href="#founder">Clients</a>
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <a href="#pricing" className="btn-ghost" style={{ padding: "10px 20px", fontSize: 14 }}>
            Connexion
          </a>
          <a href="#pricing" className="btn-primary" style={{ padding: "10px 20px", fontSize: 14 }}>
            Essai gratuit
          </a>
        </div>
      </div>
    </nav>
  );
}
