import { useState } from "react";

export function Envelope({ onOpen, invitado }: { onOpen: () => void; invitado?: string }) {
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
        Stiven &amp; Gisel
      </h1>

      <div className="envelope-stage" onClick={handleOpen} role="button" aria-label="Abrir invitación">
        <div className={`envelope ${open ? "is-open" : ""}`}>
          <div className="env-body" />
          <div className="env-letter">
            <p className="font-serif uppercase tracking-[0.35em] text-[10px] text-muted-foreground">Nuestra boda</p>
            <p className="font-script text-2xl text-gold-gradient mt-1">S &amp; G</p>
            <div className="divider w-24 my-1.5"><span>✦</span></div>
            {invitado ? (
              <div className="text-center px-2">
                <p className="font-serif text-[9px] tracking-widest text-muted-foreground uppercase">Familia Invitada</p>
                <p className="font-script text-xl text-primary mt-0.5 leading-tight">{invitado}</p>
              </div>
            ) : (
              <p className="font-serif text-xs text-foreground/70 italic">Te invitamos a celebrar nuestro amor</p>
            )}
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
