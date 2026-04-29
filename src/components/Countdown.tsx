import { useEffect, useState } from "react";

export function Countdown({ target }: { target: Date }) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff / 3600000) % 24);
    const m = Math.floor((diff / 60000) % 60);
    const s = Math.floor((diff / 1000) % 60);
    return { d, h, m, s };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);

  const Item = ({ v, l }: { v: number; l: string }) => (
    <div className="flex flex-col items-center px-4 md:px-6 py-4 md:py-6 rounded-2xl bg-card/70 backdrop-blur border border-border min-w-[72px] md:min-w-[100px]"
         style={{ boxShadow: "var(--shadow-soft)" }}>
      <span className="font-serif text-3xl md:text-5xl text-gold-gradient tabular-nums">
        {String(v).padStart(2, "0")}
      </span>
      <span className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">{l}</span>
    </div>
  );

  return (
    <div className="flex justify-center gap-3 md:gap-5">
      <Item v={t.d} l="Días" />
      <Item v={t.h} l="Horas" />
      <Item v={t.m} l="Min" />
      <Item v={t.s} l="Seg" />
    </div>
  );
}
