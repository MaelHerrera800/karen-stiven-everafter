import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Calendar, MessageCircle, Sparkles, Heart, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Envelope } from "@/components/Envelope";
import { Countdown } from "@/components/Countdown";
import { MusicToggle } from "@/components/MusicToggle";
import { Petals } from "@/components/Petals";
import { useReveal } from "@/hooks/use-reveal";
import p1 from "@/assets/photos/p1.jpg";
import p2 from "@/assets/photos/p2.jpg";
import p3 from "@/assets/photos/p3.jpg";
import p4 from "@/assets/photos/p4.jpg";
import p5 from "@/assets/photos/p5.jpg";
import p6 from "@/assets/photos/p6.jpg";
import pLove from "@/assets/photos/p_love.jpg";

const gallery = [p1, p2, p3, p4, p5, p6];

const galleryLeft = [
  { src: p1, aspect: "3/4" },
  { src: p3, aspect: "1/1" },
  { src: p5, aspect: "1/1" },
];

const galleryRight = [
  { src: p2, aspect: "1/1" },
  { src: p4, aspect: "1/1" },
  { src: p6, aspect: "1/1" },
];

export const Route = createFileRoute("/recuerdo")({
  head: () => ({
    meta: [
      { title: "Stiven & Gisel · Con Cariño Para Ti" },
      { name: "description", content: "Aunque no puedas estar físicamente, apreciamos tu persona y tu amistad." },
      { property: "og:title", content: "Stiven & Gisel · Nos Casamos" },
      { property: "og:description", content: "Apreciamos tu persona y tu amistad." },
    ],
  }),
  component: Recuerdo,
});

const WEDDING = {
  date: new Date("2026-08-22T15:00:00"),
  dateLabel: "Sábado 22 de Agosto, 2026",
  timeLabel: "3:00 p.m.",
  ceremony: "Casa del Río",
  ceremonyAddress: "Santander de Quilichao, Cauca",
  reception: "Casa del Río",
  receptionAddress: "Santander de Quilichao, Cauca",
  mapsQuery: "Casa del Río, Santander de Quilichao, Cauca",
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

function RecuerdoInvitation() {
  useReveal();
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  return (
    <div className="relative animate-fade-in" style={{ background: "var(--cream)" }}>
      <Petals count={36} />
      <MusicToggle autoplay />

      {/* HERO */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cream/50 to-cream" />
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
        
        <div className="max-w-2xl mx-auto rounded-2xl p-8 md:p-10 bg-card border border-primary/30 text-center relative overflow-hidden"
             style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center text-primary-foreground mb-6"
               style={{ background: "var(--gradient-gold)" }}>
            <Calendar className="h-8 w-8" />
          </div>

          <h3 className="font-script text-4xl md:text-5xl text-gold-gradient mb-2">Ceremonia & Recepción</h3>
          <p className="font-serif italic text-foreground/80 text-lg mb-6">Mismo lugar para toda la celebración</p>

          <div className="grid sm:grid-cols-2 gap-8 text-left border-y border-border/40 py-6 my-6">
            <div className="space-y-2">
              <h4 className="font-serif font-bold uppercase tracking-wider text-xs text-primary/80">— La Ceremonia —</h4>
              <p className="font-serif font-medium text-lg leading-tight">3:00 p.m.</p>
              <p className="font-serif text-sm text-foreground/75">Ceremonia de unión matrimonial.</p>
            </div>
            <div className="sm:border-l sm:border-border/40 sm:pl-8 space-y-2">
              <h4 className="font-serif font-bold uppercase tracking-wider text-xs text-primary/80">— La Recepción —</h4>
              <p className="font-serif font-medium text-lg leading-tight">Inmediatamente después</p>
              <p className="font-serif text-sm text-foreground/75">Cena, brindis y celebración festiva.</p>
            </div>
          </div>

          <div className="space-y-2 mb-4">
            <p className="font-serif uppercase tracking-widest text-[10px] text-muted-foreground">Ubicación</p>
            <h4 className="font-serif text-xl font-semibold text-foreground">{WEDDING.ceremony}</h4>
            <p className="font-serif text-foreground/75">{WEDDING.ceremonyAddress}</p>
          </div>
        </div>
      </Section>

      {/* LOVE STORY */}
      <Section>
        <SectionTitle kicker="Nuestra historia" title="Así nos enamoramos" />
        <div className="max-w-3xl mx-auto">
          {/* FOTO PRINCIPAL */}
          <div className="relative mb-12 flex justify-center">
            <div
              className="relative overflow-hidden rounded-2xl"
              style={{
                boxShadow: "0 30px 80px -20px color-mix(in oklab, oklch(0.3 0.05 30) 35%, transparent), 0 0 0 1px color-mix(in oklab, var(--primary) 25%, transparent)",
                maxWidth: "480px",
                width: "100%",
              }}
            >
              {/* borde decorativo dorado */}
              <div className="absolute inset-0 rounded-2xl z-10 pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 6px color-mix(in oklab, var(--cream) 80%, transparent)" }} />
              <img
                src={pLove}
                alt="Stiven y Gisel enamorados"
                className="w-full object-cover"
                style={{ aspectRatio: "3/4", display: "block" }}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent rounded-b-2xl z-10" />
              <p className="absolute bottom-5 inset-x-0 text-center font-script text-2xl text-white/90 z-20 drop-shadow-md">
                Stiven &amp; Gisel
              </p>
            </div>
          </div>

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
      <Section className="bg-cream" id="galeria">
        <SectionTitle kicker="Galería" title="Momentos que atesoramos" />
        <div className="grid grid-cols-2 gap-3 md:gap-4 max-w-lg mx-auto">
          <div className="flex flex-col gap-3 md:gap-4">
            {galleryLeft.map((item, i) => {
              const photoIndex = gallery.indexOf(item.src);
              return (
                <div
                  key={`left-${i}`}
                  onClick={() => setActivePhoto(photoIndex)}
                  className="overflow-hidden rounded-md group reveal bg-white p-1.5 border border-border/60 cursor-pointer"
                  style={{ aspectRatio: item.aspect, boxShadow: "0 2px 12px -4px rgba(0,0,0,0.08)" }}
                >
                  <img
                    src={item.src}
                    alt={`Galería ${photoIndex + 1}`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-sm transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            {galleryRight.map((item, i) => {
              const photoIndex = gallery.indexOf(item.src);
              return (
                <div
                  key={`right-${i}`}
                  onClick={() => setActivePhoto(photoIndex)}
                  className="overflow-hidden rounded-md group reveal bg-white p-1.5 border border-border/60 cursor-pointer"
                  style={{ aspectRatio: item.aspect, boxShadow: "0 2px 12px -4px rgba(0,0,0,0.08)" }}
                >
                  <img
                    src={item.src}
                    alt={`Galería ${photoIndex + 1}`}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-sm transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* MENSAJE ESPECIAL (Reemplaza RSVP) */}
      <Section className="bg-secondary/30">
        <SectionTitle kicker="Con especial cariño" title="Un mensaje para ti" />
        <div className="max-w-2xl mx-auto rounded-2xl p-8 md:p-10 bg-card border border-primary/30 text-center relative overflow-hidden"
             style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center text-primary-foreground mb-6"
               style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
            <Heart className="h-7 w-7 fill-current" />
          </div>

          <div className="max-w-xl mx-auto">
            <p className="font-serif text-lg italic text-foreground/80 leading-relaxed mb-6">
              "Aunque no estés para compartir este momento junto a nosotros, apreciamos tu persona y tu amistad."
            </p>
            <p className="font-serif text-sm text-foreground/75 leading-relaxed">
              Tu presencia y cariño en nuestras vidas han sido invaluables. Aunque la distancia física nos impida celebrar juntos este gran día, tu afecto nos acompaña en este nuevo camino que comenzamos. ¡Gracias por ser parte de nuestra historia!
            </p>
          </div>
        </div>
      </Section>

      {/* GUESTBOOK */}
      <Guestbook />

      {/* FOOTER */}
      <footer className="relative py-20 px-6 text-center overflow-hidden"
              style={{ background: "var(--gradient-romantic)" }}>
        <p className="font-serif uppercase tracking-[0.4em] text-xs text-muted-foreground">Con amor</p>
        <h2 className="font-script text-6xl md:text-7xl text-gold-gradient mt-3">Stiven &amp; Gisel</h2>
        <p className="mt-4 font-serif italic text-foreground/70">{WEDDING.dateLabel}</p>
      </footer>

      {/* LIGHTBOX OVERLAY */}
      {activePhoto !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300 animate-fade-in">
          <button 
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer z-50"
          >
            <X className="h-6 w-6" />
          </button>

          <button 
            onClick={() => setActivePhoto((prev) => (prev !== null ? (prev - 1 + gallery.length) % gallery.length : null))}
            className="absolute left-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer z-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="max-w-[90vw] max-h-[85vh] flex flex-col items-center justify-center">
            <img 
              src={gallery[activePhoto]} 
              alt={`Foto ${activePhoto + 1}`} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-fade-in"
            />
            <p className="text-white/60 font-serif mt-4 tracking-widest text-sm">
              {activePhoto + 1} de {gallery.length}
            </p>
          </div>

          <button 
            onClick={() => setActivePhoto((prev) => (prev !== null ? (prev + 1) % gallery.length : null))}
            className="absolute right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer z-50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
}

interface GuestMessage {
  id: string;
  name: string;
  message: string;
  date: string;
}

const DEFAULT_MESSAGES: GuestMessage[] = [];

function Guestbook() {
  const [messages, setMessages] = useState<GuestMessage[]>(DEFAULT_MESSAGES);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("wedding_guestbook_messages");
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing saved messages", e);
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newMessage: GuestMessage = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    };

    const updated = [newMessage, ...messages];
    setMessages(updated);
    localStorage.setItem("wedding_guestbook_messages", JSON.stringify(updated));

    setName("");
    setMessage("");
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <Section id="libro-de-visitas" className="bg-secondary/10">
      <SectionTitle kicker="Libro de visitas" title="Deja tus buenos deseos" />
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <div className="md:col-span-2 rounded-2xl p-6 bg-card border border-primary/20 shadow-[var(--shadow-soft)]">
          <h3 className="font-serif text-xl font-semibold mb-4 text-foreground/90">Escribe tu mensaje</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="guest-name" className="block font-serif text-sm text-foreground/70 mb-1">Tu Nombre</label>
              <input
                id="guest-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ej. Familia Rodríguez"
                required
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div>
              <label htmlFor="guest-message" className="block font-serif text-sm text-foreground/70 mb-1">Tu Mensaje de Felicitación</label>
              <textarea
                id="guest-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe tus felicitaciones y buenos deseos aquí..."
                required
                rows={4}
                className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-serif text-base focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg text-primary-foreground font-serif uppercase tracking-[0.2em] text-xs transition-transform active:scale-95 cursor-pointer"
              style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
            >
              <MessageCircle className="h-4 w-4" /> Enviar Mensaje
            </button>
            {isSubmitted && (
              <p className="text-center text-xs font-serif text-primary italic mt-2 animate-fade-in">
                ¡Gracias por tus hermosos deseos! ✨
              </p>
            )}
          </form>
        </div>

        <div className="md:col-span-3 space-y-4 max-h-[480px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/25 scrollbar-track-transparent">
          {messages.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground font-serif italic">
              Sé el primero en dejar un mensaje de felicitación.
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="p-5 rounded-2xl bg-card border border-border/80 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all hover:border-primary/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-primary/5 via-transparent to-transparent pointer-events-none" />
                <p className="font-serif italic text-foreground/80 leading-relaxed text-base mb-3">
                  "{msg.message}"
                </p>
                <div className="flex justify-between items-center border-t border-border/40 pt-3">
                  <span className="font-script text-2xl text-gold-gradient">{msg.name}</span>
                  <span className="font-serif text-[11px] text-muted-foreground">{msg.date}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Section>
  );
}

function Recuerdo() {
  const [opened, setOpened] = useState(false);
  const [invitado, setInvitado] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const nameParam = params.get("invitado");
      if (nameParam) setInvitado(nameParam);
    }
  }, []);

  // load fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400&display=swap";
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);

  if (!opened) return <Envelope onOpen={() => setOpened(true)} invitado={invitado} />;
  return <RecuerdoInvitation />;
}
