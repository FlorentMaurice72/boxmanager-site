import Link from "next/link";
import Reveal from "../ui/Reveal";

const POSTS: { delay: 0 | 1 | 2; gradient: string; tag: string; title: string; meta: string; icon: React.ReactNode }[] = [
  {
    delay: 0,
    gradient: "linear-gradient(135deg,#0a1f14,#0f2a1a)",
    tag: "Guide",
    title: "Optimiser le taux d'occupation de vos box : stratégies éprouvées",
    meta: "12 mars 2025 · 10 min",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth={1.5} opacity={0.7}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    delay: 1,
    gradient: "linear-gradient(135deg,#0f1a2e,#162030)",
    tag: "Juridique",
    title: "Bail de garage et box : ce que dit la loi en 2025",
    meta: "28 avr. 2025 · 8 min",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth={1.5} opacity={0.7}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    delay: 2,
    gradient: "linear-gradient(135deg,#0a1f10,#0f1e35)",
    tag: "Encaissement",
    title: "Comment réduire les impayés de loyer dans vos box",
    meta: "22 avr. 2025 · 10 min",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth={1.5} opacity={0.7}>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

export default function BlogPreview() {
  return (
    <section id="blog" className="section" style={{ background: "var(--section-alt)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
          <div>
            <Reveal className="section-label">Blog</Reveal>
            <Reveal delay={1}>
              <h2>Ressources & conseils</h2>
            </Reveal>
          </div>
          <Reveal delay={2}>
            <Link
              href="/blog"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--green)", fontSize: 14, fontWeight: 600, textDecoration: "none" }}
            >
              Tous les articles
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </Reveal>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {POSTS.map((post) => (
            <Reveal key={post.title} delay={post.delay}>
              <Link href="/blog" className="blog-card">
                <div className="blog-card-thumb" style={{ background: post.gradient }}>
                  {post.icon}
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-tag">{post.tag}</span>
                  <div className="blog-card-title">{post.title}</div>
                  <div className="blog-card-meta">{post.meta}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
