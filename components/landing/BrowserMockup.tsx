"use client";

import { useState } from "react";
import Logo from "../Logo";

const TABS = ["Dashboard", "Loyers", "Biens", "Finances"];

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const CHART_HEIGHTS = [68, 70, 72, 74, 72, 73, 75, 72, 82, 90, 95, 93];

const RENT_ROWS: [string, string, string, string, string, boolean][] = [
  ["Rés. Voltaire", "A3", "M. Bernard", "80 €", "Payé", false],
  ["Rés. Voltaire", "A7", "Mme. Dupont", "60 €", "Payé", false],
  ["Rés. Gambetta", "B2", "SCI Investloc", "90 €", "Payé", false],
  ["Rés. Voltaire", "A11", "M. Faure", "70 €", "En attente", true],
  ["Rés. Gambetta", "B5", "Mme. Martin", "60 €", "Payé", false],
];

const PROPERTIES: [string, string, number, number, number][] = [
  ["Résidence Voltaire", "16, avenue Voltaire", 22, 22, 0],
  ["Résidence Gambetta", "8, rue Gambetta", 12, 12, 0],
];

const FINANCE_ROWS: [string, string, string, string, boolean][] = [
  ["Janvier", "1 035 €", "234 €", "+801 €", true],
  ["Février", "1 035 €", "234 €", "+801 €", true],
  ["Mars", "2 155 €", "234 €", "+1 921 €", true],
  ["Avril", "2 165 €", "234 €", "+1 931 €", true],
  ["Mai", "—", "234 €", "−234 €", false],
];

function DashboardPanel() {
  return (
    <>
      <div className="app-page-title">Tableau de bord</div>
      <div className="app-date">jeudi 1er mai 2025</div>
      <div className="stat-cards">
        <div className="stat-card green">
          <div className="stat-card-label">Taux d&apos;occupation</div>
          <div className="stat-card-value">100%</div>
          <div className="stat-card-sub">34/34 boxes louées</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Loyers encaissés</div>
          <div className="stat-card-value" style={{ color: "#1e3a5f" }}>2 165 €</div>
          <div className="stat-card-sub">/ 2 305 € attendus</div>
        </div>
        <div className="stat-card red">
          <div className="stat-card-label">Impayés</div>
          <div className="stat-card-value">2</div>
          <div className="stat-card-sub">ce mois-ci</div>
        </div>
        <div className="stat-card">
          <div className="stat-card-label">Locataires actifs</div>
          <div className="stat-card-value" style={{ color: "#1e3a5f" }}>34</div>
          <div className="stat-card-sub">sur 2 biens</div>
        </div>
      </div>
      <div className="chart-block">
        <div className="chart-title">Loyers encaissés — 12 derniers mois</div>
        <div className="chart-bars">
          {CHART_HEIGHTS.map((h, i) => (
            <div className="chart-bar-wrap" key={i}>
              <div className="chart-bar" style={{ height: `${h}%` }} />
              <div className="chart-bar-label">{MONTHS[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function LoyersPanel() {
  return (
    <>
      <div className="app-page-title" style={{ color: "#1e3a5f" }}>Loyers & Paiements — Mai 2025</div>
      <div className="app-date">2 165 € encaissés sur 2 305 € attendus</div>
      <div className="table-block">
        <div className="table-header" style={{ gridTemplateColumns: "2fr 0.7fr 1.5fr 0.8fr 0.8fr 0.8fr" }}>
          {["Bien", "Box", "Locataire", "Loyer", "Statut", "Retard"].map((h) => (
            <div className="table-header-cell" key={h}>{h}</div>
          ))}
        </div>
        {RENT_ROWS.map(([bien, box, loc, loyer, status, late], i) => (
          <div className="table-row" style={{ gridTemplateColumns: "2fr 0.7fr 1.5fr 0.8fr 0.8fr 0.8fr" }} key={i}>
            <div className="table-cell">{bien}</div>
            <div className="table-cell">{box}</div>
            <div className="table-cell" style={{ color: "#1e3a5f", fontWeight: 500 }}>{loc}</div>
            <div className="table-cell">{loyer}</div>
            <div className="table-cell">
              <span className={`badge ${status === "Payé" ? "badge-green" : "badge-yellow"}`}>{status}</span>
            </div>
            <div className="table-cell" style={{ color: late ? "#dc2626" : "#9ca3af" }}>{late ? "750 €" : "—"}</div>
          </div>
        ))}
      </div>
    </>
  );
}

function BiensPanel() {
  return (
    <>
      <div className="app-page-title">Biens & Locataires</div>
      <div className="app-date">2 sites actifs · 34 locataires</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {PROPERTIES.map(([nom, addr, total, louees, vac], i) => (
          <div key={i} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 8, padding: 14 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 11, color: "#0f1e35" }}>{nom}</div>
                <div style={{ fontSize: 9, color: "#9ca3af", marginTop: 2 }}>{addr}</div>
              </div>
              <span className="badge badge-green">actif</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
              <div><div style={{ fontSize: 8, color: "#9ca3af" }}>Total</div><div style={{ fontWeight: 700, fontSize: 14, color: "#0f1e35" }}>{total}</div></div>
              <div><div style={{ fontSize: 8, color: "#9ca3af" }}>Louées</div><div style={{ fontWeight: 700, fontSize: 14, color: "#16a34a" }}>{louees}</div></div>
              <div><div style={{ fontSize: 8, color: "#9ca3af" }}>Vacantes</div><div style={{ fontWeight: 700, fontSize: 14, color: "#f59e0b" }}>{vac}</div></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function FinancesPanel() {
  return (
    <>
      <div className="app-page-title">Finances & Documents</div>
      <div className="app-date">Rentabilité annuelle estimée</div>
      <div className="stat-cards">
        <div className="stat-card green"><div className="stat-card-label">Loyers annuels</div><div className="stat-card-value">27 660 €</div><div className="stat-card-sub">Encaissés : 8 000 €</div></div>
        <div className="stat-card red"><div className="stat-card-label">Charges totales</div><div className="stat-card-value">2 816 €</div></div>
        <div className="stat-card"><div className="stat-card-label">Rentabilité</div><div className="stat-card-value" style={{ color: "#1e3a5f" }}>10.7%</div><div className="stat-card-sub">9.6% nette</div></div>
        <div className="stat-card green"><div className="stat-card-label">Cash flow</div><div className="stat-card-value">+1 074 €</div><div className="stat-card-sub">/ mois</div></div>
      </div>
      <div className="table-block">
        <div className="table-header" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
          {["Mois", "Encaissés", "Charges", "Résultat"].map((h) => (
            <div className="table-header-cell" key={h}>{h}</div>
          ))}
        </div>
        {FINANCE_ROWS.map(([m, e, c, r, pos], i) => (
          <div className="table-row" style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }} key={i}>
            <div className="table-cell" style={{ color: "#1e3a5f", fontWeight: 500 }}>{m}</div>
            <div className="table-cell">{e}</div>
            <div className="table-cell">{c}</div>
            <div className="table-cell" style={{ color: pos ? "#16a34a" : "#dc2626", fontWeight: 600 }}>{r}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function BrowserMockup() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="browser-frame">
      <div className="browser-topbar">
        <div className="browser-dots">
          <div className="browser-dot" style={{ background: "#FF5F57" }} />
          <div className="browser-dot" style={{ background: "#FEBC2E" }} />
          <div className="browser-dot" style={{ background: "#28C840" }} />
        </div>
        <div className="browser-urlbar">app.boxgestion.fr/dashboard</div>
      </div>
      <div className="browser-content">
        <div className="app-shell">
          <div className="app-sidebar">
            <div className="app-sidebar-header">
              <Logo size={22} />
              <span style={{ color: "#fff" }}>
                <span style={{ color: "#22c55e" }}>Box</span>gestion
              </span>
            </div>
            <div className="app-sidebar-nav">
              {TABS.map((label, i) => (
                <div
                  key={label}
                  className={`app-nav-item ${i === activeTab ? "active" : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="app-main">
            {activeTab === 0 && <DashboardPanel />}
            {activeTab === 1 && <LoyersPanel />}
            {activeTab === 2 && <BiensPanel />}
            {activeTab === 3 && <FinancesPanel />}
          </div>
        </div>
      </div>
    </div>
  );
}
