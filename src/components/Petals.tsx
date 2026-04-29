import { useMemo } from "react";

export function Petals({ count = 18 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 9 + Math.random() * 10,
        drift: (Math.random() - 0.5) * 240,
        scale: 0.6 + Math.random() * 1.1,
        rot: Math.random() * 360,
        key: i,
      })),
    [count],
  );

  return (
    <div className="petals" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.key}
          className="petal"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `scale(${p.scale}) rotate(${p.rot}deg)`,
            ["--drift" as string]: `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
