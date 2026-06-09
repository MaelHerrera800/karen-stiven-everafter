import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Calendar, MessageCircle, Sparkles, Shirt } from "lucide-react";
import { Envelope } from "@/components/Envelope";
import { Countdown } from "@/components/Countdown";
import { MusicToggle } from "@/components/MusicToggle";
import { useReveal } from "@/hooks/use-reveal";
import p1 from "@/assets/photos/p1.jpg.asset.json";
import p2 from "@/assets/photos/p2.jpg.asset.json";
import p3 from "@/assets/photos/p3.jpg.asset.json";
import p4 from "@/assets/photos/p4.jpg.asset.json";
import p5 from "@/assets/photos/p5.jpg.asset.json";
import p6 from "@/assets/photos/p6.jpg.asset.json";
import p7 from "@/assets/photos/p7.jpg.asset.json";
const couple1 = p2.url;
const gallery = [p1.url, p3.url, p4.url, p5.url, p6.url, p7.url];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stiven & Gisel · Nos Casamos" },
      { name: "description", content: "Invitación digital a la boda de Stiven y Gisel. Acompáñanos a celebrar nuestro amor." },
      { property: "og:title", content: "Stiven & Gisel · Nos Casamos" },
      { property: "og:description", content: "Una invitación elegante para celebrar nuestro amor." },
    ],
  }),
  component: Index,
});

// Editable wedding details
const WEDDING = {
  date: new Date("2026-08-22T17:00:00"),
  dateLabel: "Sábado 22 de Agosto, 2026",
  timeLabel: "5:00 p.m.",
  ceremony: "Casa del Río",
  ceremonyAddress: "Santander de Quilichao, Cauca",
  reception: "Casa del Río",
  receptionAddress: "Santander de Quilichao, Cauca",
  mapsQuery: "Casa del Río, Santander de Quilichao, Cauca",
  mapsShortUrl: "https://maps.app.goo.gl/sfDRXrtd2ybD2zbV8?g_st=ic",
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
    "¡Hola! Confirmo mi asistencia a la boda de Stiven & Gisel 💍",
  )}`;

  return (
    <div className="relative animate-fade-in" style={{ background: "var(--background)" }}>
      <MusicToggle autoplay />

      {/* HERO */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-background">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="text-center max-w-2xl animate-fade-up relative z-10">
          <p className="font-serif uppercase tracking-[0.6em] text-[10px] text-primary/80 mb-8">— Nos Casamos —</p>
          <h1 className="font-script text-7xl md:text-[8.5rem] text-foreground leading-[0.95]">Stiven</h1>
          <div className="my-5 flex items-center justify-center gap-4 text-primary/70">
            <span className="h-px w-24 bg-current" />
            <span className="font-serif italic text-base">&</span>
            <span className="h-px w-24 bg-current" />
          </div>
          <h1 className="font-script text-7xl md:text-[8.5rem] text-foreground leading-[0.95]">Gisel</h1>
          <p className="mt-12 font-serif italic text-lg md:text-xl text-foreground/60">
            “Y al fin, los dos serán uno solo”
          </p>
          <p className="mt-10 font-serif tracking-[0.5em] uppercase text-[11px] text-muted-foreground">
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
        <p className="text-center font-serif italic text-foreground/70 mb-8 max-w-xl mx-auto">
          La ceremonia y la recepción se celebrarán en un mismo lugar: <span className="text-primary">Casa del Río</span>.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <DetailCard icon={<Calendar className="h-6 w-6" />} title="Ceremonia"
                      heading="Casa del Río"
                      lines={[WEDDING.ceremonyAddress, `${WEDDING.dateLabel} · ${WEDDING.timeLabel}`]} />
          <DetailCard icon={<Sparkles className="h-6 w-6" />} title="Recepción"
                      heading="Casa del Río"
                      lines={["Mismo lugar de la ceremonia", "Cena, baile y celebración"]} />
        </div>
      </Section>


      {/* LOVE STORY */}
      <Section>
        <SectionTitle kicker="Nuestra historia" title="Así nos enamoramos" />
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={couple1} alt="Stiven y Gisel" width={1024} height={1280} loading="lazy"
               className="rounded-2xl object-cover w-full h-[28rem] shadow-[var(--shadow-soft)]" />
          <div className="space-y-6 font-serif text-lg leading-relaxed text-foreground/80">
            <p className="font-script text-3xl text-gold-gradient leading-normal">
              "El amor Todo lo sufre, todo lo cree, todo lo espera, todo lo soporta..."
            </p>
            <p className="font-serif italic text-foreground/70">1 Corintios 13:7</p>
            <p>
              Entre el afán de los días y el ruido del mundo, Dios permitió que nuestros caminos se cruzaran sin previo aviso. Lo que comenzó como un encuentro inesperado se convirtió en nuestra mayor certeza: esperar vale la pena cuando es Su mano la que guía el destino.
            </p>
            <p>
              Unimos nuestras vidas con la alegría de saber que nada fue coincidencia. Hoy nos presentamos ante ustedes como una muestra de que Dios es fiel, transformando nuestra espera en una hermosa realidad que apenas comienza.
            </p>
            <p className="font-script text-3xl text-gold-gradient">Por siempre, juntos.</p>
          </div>
        </div>
      </Section>

      {/* GALLERY */}
      <Section className="bg-secondary/30" id="galeria">
        <SectionTitle kicker="Galería" title="Momentos que atesoramos" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {gallery.map((src, i) => (
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
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-serif text-lg text-foreground/80 mb-8">
            Tu presencia es el mejor regalo. Por favor confirma tu asistencia antes del
            <span className="text-primary font-semibold"> 1 de Agosto</span>.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mt-10 mb-10 text-left">
            <div className="rounded-2xl p-5 bg-card border border-primary/30" style={{ boxShadow: "var(--shadow-soft)" }}>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Obligatorio</p>
              <h4 className="font-script text-2xl text-gold-gradient mt-2">Confirmación</h4>
              <p className="font-serif text-sm text-foreground/75 mt-2">
                Es <span className="text-primary font-semibold">estrictamente obligatorio</span> confirmar tu asistencia antes de la fecha límite para garantizar tu lugar.
              </p>
            </div>
            <div className="rounded-2xl p-5 bg-card border border-primary/30" style={{ boxShadow: "var(--shadow-soft)" }}>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Cupos limitados</p>
              <h4 className="font-script text-2xl text-gold-gradient mt-2">Pase personal</h4>
              <p className="font-serif text-sm text-foreground/75 mt-2">
                Te pedimos respetar el número de invitados asignados en tu pase. No se permitirán acompañantes adicionales no registrados.
              </p>
            </div>
            <div className="rounded-2xl p-5 bg-card border border-primary/30" style={{ boxShadow: "var(--shadow-soft)" }}>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Control de acceso</p>
              <h4 className="font-script text-2xl text-gold-gradient mt-2">Invitación digital</h4>
              <p className="font-serif text-sm text-foreground/75 mt-2">
                Deberás presentar tu invitación digital o código de acceso en la entrada del evento de manera obligatoria.
              </p>
            </div>
          </div>

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
            src={`https://www.google.com/maps?q=${encodeURIComponent(WEDDING.mapsQuery)}&output=embed`}
            className="w-full h-80 md:h-96"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-6 text-center">
          <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(WEDDING.mapsQuery)}`}
             target="_blank" rel="noreferrer"
             className="inline-flex items-center gap-2 text-primary font-serif underline-offset-4 hover:underline">
            <MapPin className="h-4 w-4" /> Abrir en Google Maps
          </a>
        </div>
      </Section>

      {/* DRESS CODE */}
      <Section>
        <SectionTitle kicker="Código de vestimenta" title="Dress Code" />
        <div className="max-w-3xl mx-auto text-center">
          <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center text-primary-foreground mb-6"
               style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
            <Shirt className="h-7 w-7" />
          </div>
          <p className="font-serif text-lg italic text-foreground/80 leading-relaxed">
            Te invitamos a vestir con tonos <span className="text-primary">suaves, empolvados o profundos</span>,
            inspirados en la paleta romántica de nuestra celebración.
          </p>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5">Paleta sugerida</p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 max-w-2xl mx-auto">
              {[
                { name: "Palo de Rosa", hex: "#C9A0A0" },
                { name: "Rosa Viejo", hex: "#B07A7A" },
                { name: "Malva", hex: "#9E7B9B" },
                { name: "Vino Tinto", hex: "#6E1F2A" },
                { name: "Azul Oscuro", hex: "#1F2A44" },
                { name: "Verde Olivo", hex: "#6B7A3A" },
                { name: "Gris Piedra", hex: "#7D7B76" },
                { name: "Gris Topo", hex: "#8B7E6E" },
              ].map((c) => (
                <div key={c.name} className="flex flex-col items-center gap-2">
                  <div className="h-14 w-14 rounded-full border border-border shadow-[var(--shadow-soft)]"
                       style={{ background: c.hex }} aria-label={c.name} />
                  <span className="font-serif text-[11px] text-foreground/70 leading-tight text-center">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mt-12 text-left">
            <div className="rounded-2xl p-6 bg-card border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Ellas</p>
              <h3 className="font-script text-3xl text-gold-gradient mt-2">Vestido largo</h3>
              <p className="font-serif text-foreground/75 mt-2">
                Tonos de la paleta. Se reserva el color blanco exclusivamente para la novia.
              </p>
            </div>
            <div className="rounded-2xl p-6 bg-card border border-border" style={{ boxShadow: "var(--shadow-soft)" }}>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Ellos</p>
              <h3 className="font-script text-3xl text-gold-gradient mt-2">Traje formal</h3>
              <p className="font-serif text-foreground/75 mt-2">
                Traje completo con corbata en tonos de la paleta (azul oscuro, vino tinto, olivo o grises).
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl p-6 bg-secondary/40 border border-primary/30 text-left max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Recomendaciones</p>
            <ul className="font-serif text-foreground/80 space-y-2 text-sm leading-relaxed">
              <li>• Elige tonos suaves, empolvados o profundos de la paleta.</li>
              <li>• <span className="text-primary font-semibold">Evitar colores neón o muy brillantes.</span></li>
              <li>• Los estampados pequeños y los accesorios en tonos neutros son bienvenidos.</li>
            </ul>
          </div>

          <div className="divider mt-10 max-w-[12rem] mx-auto"><Sparkles className="h-4 w-4" /></div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative py-20 px-6 text-center overflow-hidden"
              style={{ background: "var(--gradient-romantic)" }}>
        <p className="font-serif uppercase tracking-[0.4em] text-xs text-muted-foreground">Con amor</p>
        <h2 className="font-script text-6xl md:text-7xl text-gold-gradient mt-3">Stiven &amp; Gisel</h2>
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
