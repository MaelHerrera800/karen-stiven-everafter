import { useState } from "react";

export function Envelope({ onOpen }: { onOpen: () => void }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (open) return;
    setOpen(true);
    setTimeout(onOpen, 1600);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center px-6 relative overflow-hidden"
         style={{ background: "var(--gradient-romantic)" }}>
      {/* soft glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-50"
           style={{ background: "radial-gradient(circle, var(--gold-soft), transparent 70%)" }} />
      <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-40"
           style={{ background: "radial-gradient(circle, var(--blush), transparent 70%)" }} />

      <p className="font-serif tracking-[0.4em] text-sm uppercase text-muted-foreground mb-6 animate-fade-in">
        Tienes una invitación
      </p>
      <h1 className="font-script text-5xl md:text-6xl text-gold-gradient mb-12 animate-fade-up">
        Stiven &amp; Gisell
      </h1>

      <div className="envelope-stage" onClick={handleOpen} role="button" aria-label="Abrir invitación">
        <div className={`envelope ${open ? "is-open" : ""}`}>
          <div className="env-body" />
          <div className="env-letter">
            <p className="font-serif uppercase tracking-[0.35em] text-xs text-muted-foreground">Nuestra boda</p>
            <p className="font-script text-3xl text-gold-gradient mt-2">S &amp; G</p>
            <div className="divider w-32 my-2"><span>✦</span></div>
            <p className="font-serif text-sm text-foreground/70 italic">Te invitamos a celebrar nuestro amor</p>
          </div>
          <div className="env-flap" />
          <div className="env-seal">S&amp;G</div>
        </div>

        {!open && (
          <div className="env-hint animate-pulse-soft rounded-full px-4 py-2">
            Toca el sobre
          </div>
        )}
      </div>
    </div>
  );
}
