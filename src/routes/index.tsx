import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, MapPin, Calendar, Gift, MessageCircle, Sparkles } from "lucide-react";
import { Envelope } from "@/components/Envelope";
import { Petals } from "@/components/Petals";
import { Countdown } from "@/components/Countdown";
import { MusicToggle } from "@/components/MusicToggle";
import { useReveal } from "@/hooks/use-reveal";
import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Karen & Stiven · Nos Casamos" },
      { name: "description", content: "Invitación digital a la boda de Karen y Stiven. Acompáñanos a celebrar nuestro amor." },
      { property: "og:title", content: "Karen & Stiven · Nos Casamos" },
      { property: "og:description", content: "Una invitación elegante para celebrar nuestro amor." },
    ],
  }),
  component: Index,
});

// Editable wedding details
const WEDDING = {
  date: new Date("2026-12-12T17:00:00"),
  dateLabel: "Sábado 12 de Diciembre, 2026",
  timeLabel: "5:00 p.m.",
  ceremony: "Iglesia San Francisco de Asís",
  ceremonyAddress: "Calle 10 #12-34, tu ciudad",
  reception: "Hacienda Los Jardines",
  receptionAddress: "Vía al lago, km 7",
  mapsQuery: "Hacienda+Los+Jardines",
  whatsapp: "+573000000000",
};

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto reveal">{children}</div>
    </section>
  );
}

function SectionTitle({ kicker, title }: { kicker?: string; title: string }) {
  return (
    <div className="text-center mb-12">
      {kicker && (
        <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-3">{kicker}</p>
      )}
      <h2 className="font-script text-5xl md:text-6xl text-gold-gradient">{title}</h2>
      <div className="divider mt-4 max-w-xs mx-auto"><Sparkles className="h-4 w-4" /></div>
    </div>
  );
}

function Invitation() {
  useReveal();
  const rsvpUrl = `https://wa.me/${WEDDING.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    "¡Hola! Confirmo mi asistencia a la boda de Karen & Stiven 💍",
  )}`;

  return (
    <div className="relative animate-fade-in" style={{ background: "var(--background)" }}>
      <Petals />
      <MusicToggle autoplay />

      {/* HERO */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
              style={{ background: "var(--gradient-romantic)" }}>
        <div className="text-center max-w-2xl animate-fade-up relative z-10">
          <p className="font-serif uppercase tracking-[0.5em] text-xs text-primary mb-6">Nos Casamos</p>
          <h1 className="font-script text-7xl md:text-9xl text-gold-gradient leading-none">Karen</h1>
          <div className="my-3 flex items-center justify-center gap-3 text-primary">
            <span className="h-px w-20 bg-current opacity-40" />
            <Heart className="h-4 w-4 fill-current" />
            <span className="h-px w-20 bg-current opacity-40" />
          </div>
          <h1 className="font-script text-7xl md:text-9xl text-gold-gradient leading-none">Stiven</h1>
          <p className="mt-10 font-serif italic text-lg md:text-xl text-foreground/70">
            “Y al fin, los dos serán uno solo”
          </p>
          <p className="mt-8 font-serif tracking-[0.4em] uppercase text-xs text-muted-foreground">
            {WEDDING.dateLabel}
          </p>
        </div>
      </header>

      {/* COUNTDOWN */}
      <Section>
        <SectionTitle kicker="Cuenta regresiva" title="Falta poco para el sí" />
        <Countdown target={WEDDING.date} />
      </Section>

      {/* DATE & PLACE */}
      <Section className="bg-secondary/30">
        <SectionTitle kicker="Detalles del evento" title="Fecha y Lugar" />
        <div className="grid md:grid-cols-2 gap-6">
          <DetailCard icon={<Calendar className="h-6 w-6" />} title="Ceremonia"
                      heading={WEDDING.ceremony}
                      lines={[WEDDING.ceremonyAddress, `${WEDDING.dateLabel} · ${WEDDING.timeLabel}`]} />
          <DetailCard icon={<Sparkles className="h-6 w-6" />} title="Recepción"
                      heading={WEDDING.reception}
                      lines={[WEDDING.receptionAddress, "Cena, baile y celebración"]} />
        </div>
      </Section>

      {/* LOVE STORY */}
      <Section>
        <SectionTitle kicker="Nuestra historia" title="Así nos enamoramos" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={couple1} alt="Karen y Stiven" width={1024} height={1280} loading="lazy"
               className="rounded-2xl object-cover w-full h-[28rem] shadow-[var(--shadow-soft)]" />
          <div className="space-y-6 font-serif text-lg leading-relaxed text-foreground/80">
            <p className="first-letter:font-script first-letter:text-6xl first-letter:text-primary first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              Nos conocimos un día cualquiera que terminó siendo extraordinario. Entre risas, café y
              conversaciones interminables, descubrimos que el destino tenía planes maravillosos para
              los dos.
            </p>
            <p>
              Cada paso del camino nos enseñó que el amor verdadero se construye día a día — con
              ternura, paciencia y la certeza de querer compartirlo todo. Hoy, queremos celebrarlo
              contigo.
            </p>
            <p className="font-script text-3xl text-gold-gradient">Por siempre, juntos.</p>
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section className="bg-secondary/30" id="galeria">
        <SectionTitle kicker="Galería" title="Momentos que atesoramos" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {[couple2, gallery1, gallery2, gallery3, couple1, couple2].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-sm group reveal bg-card p-2 border border-primary/30"
                 style={{ aspectRatio: i % 5 === 0 ? "3/4" : "1/1", boxShadow: "var(--shadow-soft)" }}>
              <img src={src} alt={`Galería ${i + 1}`} width={1024} height={1024} loading="lazy"
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </Section>

      {/* RSVP */}
      <Section>
        <SectionTitle kicker="Confirma tu asistencia" title="Te esperamos" />
        <div className="text-center max-w-xl mx-auto">
          <p className="font-serif text-lg text-foreground/80 mb-8">
            Tu presencia es el mejor regalo. Por favor confirma tu asistencia antes del
            <span className="text-primary font-semibold"> 1 de Diciembre</span>.
          </p>
          <a href={rsvpUrl} target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-primary-foreground font-serif uppercase tracking-[0.2em] text-sm transition-transform hover:scale-105"
             style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
            <MessageCircle className="h-5 w-5" /> Confirmar por WhatsApp
          </a>
        </div>
      </Section>

      {/* MAP */}
      <Section className="bg-secondary/30">
        <SectionTitle kicker="Cómo llegar" title="Ubicación" />
        <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] border border-border">
          <iframe
            title="Mapa de la ubicación"
            src={`https://www.google.com/maps?q=${WEDDING.mapsQuery}&output=embed`}
            className="w-full h-80 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-6 text-center">
          <a href={`https://www.google.com/maps/search/?api=1&query=${WEDDING.mapsQuery}`}
             target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 text-primary font-serif underline-offset-4 hover:underline">
            <MapPin className="h-4 w-4" /> Abrir en Google Maps
          </a>
        </div>
      </Section>

      {/* GIFTS — Lluvia de sobres */}
      <Section>
        <SectionTitle kicker="Mesa de regalos" title="Lluvia de sobres" />
        <div className="max-w-xl mx-auto text-center">
          <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center text-primary-foreground mb-6"
               style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
            <Gift className="h-7 w-7" />
          </div>
          <p className="font-serif text-lg italic text-foreground/80 leading-relaxed">
            Tu compañía es nuestro mayor regalo. Si deseas obsequiarnos algo,
            agradecemos tu detalle en una <span className="text-primary">lluvia de sobres</span> el día del evento.
          </p>
          <div className="divider mt-8 max-w-[12rem] mx-auto"><Sparkles className="h-4 w-4" /></div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative py-20 px-6 text-center overflow-hidden"
              style={{ background: "var(--gradient-romantic)" }}>
        <p className="font-serif uppercase tracking-[0.4em] text-xs text-muted-foreground">Con amor</p>
        <h2 className="font-script text-6xl md:text-7xl text-gold-gradient mt-3">Karen &amp; Stiven</h2>
        <p className="mt-4 font-serif italic text-foreground/70">{WEDDING.dateLabel}</p>
      </footer>
    </div>
  );
}

function DetailCard({ icon, title, heading, lines }: {
  icon: React.ReactNode; title: string; heading: string; lines: string[];
}) {
  return (
    <div className="rounded-2xl p-8 bg-card border border-border text-center"
         style={{ boxShadow: "var(--shadow-soft)" }}>
      <div className="mx-auto h-14 w-14 rounded-full flex items-center justify-center text-primary-foreground mb-4"
           style={{ background: "var(--gradient-gold)" }}>{icon}</div>
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{title}</p>
      <h3 className="font-script text-4xl text-gold-gradient mt-2">{heading}</h3>
      {lines.map((l, i) => (
        <p key={i} className="font-serif text-foreground/75 mt-1">{l}</p>
      ))}
    </div>
  );
}

function Index() {
  const [opened, setOpened] = useState(false);

  // load fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&display=swap";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  if (!opened) return <Envelope onOpen={() => setOpened(true)} />;
  return <Invitation />;
}
