"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "../ui/Reveal";

const STATS = [
  { target: 350, suffix: "+", label: "Propriétaires actifs" },
  { target: 12000, suffix: "+", label: "Box gérées chaque mois" },
  { target: 98, suffix: "%", label: "Taux de recouvrement moyen" },
  { target: 4, suffix: "M+", prefix: "€", label: "Encaissés chaque mois" },
];

function useCountUp(target: number, start: boolean, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let frame = 0;
    let startTs = 0;
    function step(ts: number) {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(ease * target));
      if (progress < 1) frame = requestAnimationFrame(step);
      else setValue(target);
    }
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);
  return value;
}

function CounterItem({ target, prefix, suffix, label, delay, start }: { target: number; prefix?: string; suffix: string; label: string; delay: 0 | 1 | 2 | 3; start: boolean }) {
  const value = useCountUp(target, start);
  return (
    <Reveal delay={delay} className="counter-item">
      <span className="counter-value">
        {prefix}
        <span className="counter-num">{value.toLocaleString("fr-FR")}</span>
        {suffix}
      </span>
      <div className="counter-label">{label}</div>
    </Reveal>
  );
}

export default function Counters() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="counters-row" id="counters" ref={ref}>
      {STATS.map((s, i) => (
        <CounterItem key={s.label} {...s} delay={i as 0 | 1 | 2 | 3} start={start} />
      ))}
    </div>
  );
}
