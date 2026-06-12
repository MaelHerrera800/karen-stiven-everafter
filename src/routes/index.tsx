import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Calendar, MessageCircle, Sparkles, Shirt, ChevronLeft, ChevronRight, X, Download, CalendarPlus } from "lucide-react";
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
  date: new Date("2026-08-22T15:00:00"),
  dateLabel: "Sábado 22 de Agosto, 2026",
  timeLabel: "3:00 p.m.",
  ceremony: "Casa del Río",
  ceremonyAddress: "Santander de Quilichao, Cauca",
  reception: "Casa del Río",
  receptionAddress: "Santander de Quilichao, Cauca",
  mapsQuery: "Casa del Río, Santander de Quilichao, Cauca",
  mapsShortUrl: "https://maps.app.goo.gl/sfDRXrtd2ybD2zbV8?g_st=ic",
  whatsapp: "+573103709830",
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

function Invitation({ invitado, pases, isAdmin }: { invitado: string; pases: number | null; isAdmin: boolean }) {
  useReveal();
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const rsvpText = invitado
    ? `¡Hola! Confirmo la asistencia de ${invitado} (${pases || 1} personas) a la boda de Stiven & Gisel 💍`
    : "¡Hola! Confirmo mi asistencia a la boda de Stiven & Gisel 💍";

  const rsvpUrl = `https://wa.me/${WEDDING.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(rsvpText)}`;

  const calendarTitle = encodeURIComponent("Recordatorio: ¡Boda de Stiven & Gisel! 💍");
  const calendarDetails = encodeURIComponent("Faltan solo 5 días para la boda de Stiven y Gisel. Prepárate para acompañarlos en su gran día. Ubicación: Casa del Río, Santander de Quilichao, Cauca.");
  const calendarLocation = encodeURIComponent("Casa del Río, Santander de Quilichao, Cauca");
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${calendarTitle}&dates=20260817T150000/20260817T160000&details=${calendarDetails}&location=${calendarLocation}`;

  const downloadIcs = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "URL:" + window.location.href,
      "DTSTART:20260817T150000",
      "DTEND:20260817T160000",
      "SUMMARY:Recordatorio: ¡Boda de Stiven & Gisel! 💍",
      "DESCRIPTION:Faltan solo 5 dias para la boda de Stiven y Gisel. Prepárate para acompañarlos en su gran dia. Lugar: Casa del Rio.",
      "LOCATION:Casa del Rio\\, Santander de Quilichao\\, Cauca",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "recordatorio_boda_stiven_y_gisel.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

          <div className="space-y-2 mb-8">
            <p className="font-serif uppercase tracking-widest text-[10px] text-muted-foreground">Ubicación</p>
            <h4 className="font-serif text-xl font-semibold text-foreground">{WEDDING.ceremony}</h4>
            <p className="font-serif text-foreground/75">{WEDDING.ceremonyAddress}</p>
          </div>

          {/* CALENDAR REMINDER BUTTONS */}
          <div className="bg-secondary/20 rounded-xl p-6 border border-primary/10">
            <p className="font-serif text-sm text-foreground/80 mb-4 flex items-center justify-center gap-1.5">
              <CalendarPlus className="h-4 w-4 text-primary" />
              ¿Quieres que te lo recordemos? Añade un recordatorio a tu calendario 5 días antes de la boda.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a 
                href={googleCalendarUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 hover:border-primary bg-card text-xs font-serif uppercase tracking-wider transition-all hover:scale-[1.02]"
              >
                Google Calendar
              </a>
              <button 
                onClick={downloadIcs}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 hover:border-primary bg-card text-xs font-serif uppercase tracking-wider transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Download className="h-3.5 w-3.5" /> Descargar .ics
              </button>
            </div>
            <p className="text-[10px] font-serif text-muted-foreground mt-3">
              * Recordatorio programado para el lunes 17 de agosto de 2026.
            </p>
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
              {/* overlay degradado inferior */}
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

      {/* RSVP */}
      <Section>
        <SectionTitle kicker="Confirma tu asistencia" title="Te esperamos" />
        <div className="text-center max-w-2xl mx-auto">
          {invitado && (
            <div className="mb-8 p-5 rounded-2xl bg-secondary/20 border border-primary/20 inline-block font-serif text-lg shadow-[var(--shadow-soft)]">
              Especialmente para: <span className="text-primary font-semibold">{invitado}</span>
              {pases !== null && (
                <span> · Pases reservados: <span className="text-primary font-semibold">{pases}</span></span>
              )}
            </div>
          )}
          
          <p className="font-serif text-lg text-foreground/80 mb-8">
            Apreciamos tu presencia. Por favor confirma tu asistencia antes del
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
                {pases !== null ? (
                  <>Hemos reservado <span className="text-primary font-semibold">{pases} pases</span> en tu honor. Agradecemos respetar este número de cupos asignados.</>
                ) : (
                  <>Te pedimos respetar el número de invitados asignados en tu pase. No se permitirán acompañantes adicionales no registrados.</>
                )}
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
          <p className="font-serif text-lg italic text-foreground/80 leading-relaxed mb-10">
            Agradecemos respetar el código de vestimenta y la paleta de colores obligatoria de nuestra celebración.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 text-left">
            {/* Ellas Card */}
            <div className="rounded-2xl p-6 bg-card border border-border shadow-[var(--shadow-soft)] flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Ellas</p>
                <h3 className="font-script text-3xl text-gold-gradient mt-2">Vestido largo</h3>
                <p className="font-serif text-foreground/75 mt-3 text-sm leading-relaxed">
                  Es totalmente obligatorio respetar la paleta de colores escogida para nuestra boda. Las mujeres deben vestir en tonos de **palo de rosa, rosa viejo, malva, vino tinto o azul oscuro**. Está estrictamente prohibido el uso de negro o blanco, así como cualquier color extremadamente brillante o peinados ostentosos. Nuestro dress code es elegante, sencillo, minimalista y formal.
                </p>
              </div>
              
              <div className="mt-8 border-t border-border/40 pt-4">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3 text-center">Paleta obligatoria (Ellas)</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    { name: "Palo de Rosa", hex: "#C9A0A0" },
                    { name: "Rosa Viejo", hex: "#B07A7A" },
                    { name: "Malva", hex: "#9E7B9B" },
                    { name: "Vino Tinto", hex: "#6E1F2A" },
                    { name: "Azul Oscuro", hex: "#1D2D44" },
                  ].map((c) => (
                    <div key={c.name} className="flex flex-col items-center gap-1 w-14">
                      <div className="h-9 w-9 rounded-full border border-border shadow-sm"
                           style={{ background: c.hex }} aria-label={c.name} />
                      <span className="font-serif text-[9px] text-foreground/60 text-center leading-none mt-1">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Ellos Card */}
            <div className="rounded-2xl p-6 bg-card border border-border shadow-[var(--shadow-soft)] flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Ellos</p>
                <h3 className="font-script text-3xl text-gold-gradient mt-2">Traje formal</h3>
                <p className="font-serif text-foreground/75 mt-3 text-sm leading-relaxed">
                  Es obligatorio ir vestido formalmente, ceñido a la paleta de colores indicada: **verde olivo, azul oscuro, gris piedra, gris topo y negro**. Está estrictamente prohibido vestir de color azul petróleo o azul acero claro.
                </p>
              </div>

              <div className="mt-8 border-t border-border/40 pt-4">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3 text-center">Paleta obligatoria (Ellos)</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    { name: "Verde Olivo", hex: "#6B7A3A" },
                    { name: "Azul Oscuro", hex: "#1D2D44" },
                    { name: "Gris Piedra", hex: "#7D7B76" },
                    { name: "Gris Topo", hex: "#8B7E6E" },
                    { name: "Negro", hex: "#1A1A1A" },
                  ].map((c) => (
                    <div key={c.name} className="flex flex-col items-center gap-1 w-14">
                      <div className="h-9 w-9 rounded-full border border-border shadow-sm"
                           style={{ background: c.hex }} aria-label={c.name} />
                      <span className="font-serif text-[9px] text-foreground/60 text-center leading-none mt-1">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* GIFT SECTION / LLUVIA DE SOBRES */}
      <Section className="bg-secondary/30" id="lluvia-de-sobres">
        <SectionTitle kicker="Regalos" title="Lluvia de Sobres" />
        <div className="max-w-2xl mx-auto rounded-2xl p-8 md:p-10 bg-card border border-primary/30 text-center relative overflow-hidden"
             style={{ boxShadow: "var(--shadow-soft)" }}>
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          <div className="mx-auto h-16 w-16 rounded-full flex items-center justify-center text-primary-foreground mb-6"
               style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}>
            <Sparkles className="h-7 w-7" />
          </div>

          <div className="max-w-md mx-auto">
            <h4 className="font-serif font-bold uppercase tracking-wider text-xs text-primary/80 mb-3">— El día del evento —</h4>
            <p className="font-serif text-base text-foreground/75 leading-relaxed">
              Dispondremos de un cofre especial en la recepción para que puedas depositar tu sobre con tu obsequio y felicitaciones.
            </p>
          </div>
        </div>
      </Section>

      {/* GUESTBOOK */}
      <Guestbook />

      {/* ADMIN PANEL */}
      {isAdmin && <AdminPanel />}

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
          {/* Close button */}
          <button 
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer z-50"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Previous button */}
          <button 
            onClick={() => setActivePhoto((prev) => (prev !== null ? (prev - 1 + gallery.length) % gallery.length : null))}
            className="absolute left-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all cursor-pointer z-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Photo container */}
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

          {/* Next button */}
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

interface GuestMessage {
  id: string;
  name: string;
  message: string;
  date: string;
}

const DEFAULT_MESSAGES: GuestMessage[] = [];

const GUEST_LIST = [
  { name: "Familia Ortiz Alomia", pases: 3 },
  { name: "Familia Golú Vera", pases: 3 },
  { name: "Familia Golú Zambrano", pases: 3 },
  { name: "Familia Golú Izquierdo", pases: 2 },
  { name: "Familia Campo Meneses", pases: 3 },
  { name: "Familia Golú López", pases: 3 },
  { name: "María y Lindelia", pases: 2 },
  { name: "Beatriz Caicedo", pases: 1 },
  { name: "Familia Golú Castillo", pases: 2 },
  { name: "Nayda Sierra", pases: 1 },
  { name: "Miguel", pases: 1 },
  { name: "Jenifer Vera", pases: 2 },
  { name: "Familia Villaquirán Lasso", pases: 2 },
  { name: "Familia Díaz Sánchez", pases: 2 },
  { name: "Karol Quintero", pases: 1 },
  { name: "Familia Palacios Salazar", pases: 2 },
  { name: "Familia Camacho Rodas", pases: 2 },
  { name: "Rosa Alomia", pases: 1 },
  { name: "Familia Alomia Córdoba", pases: 4 },
  { name: "Familia Ordoñez Garcia", pases: 2 },
  { name: "Familia Sánchez Ocampo", pases: 2 },
  { name: "Familia Ocampo Mariaca", pases: 2 },
  { name: "Sirley Ospina", pases: 1 },
  { name: "Julieth Arbelaez", pases: 1 },
  { name: "Yari Barrios", pases: 1 },
  { name: "Darwin Barrios", pases: 1 },
  { name: "Jhon Lara", pases: 1 },
  { name: "Familia Barrios Vallecilla", pases: 2 },
  { name: "Modesta Cabrera", pases: 1 },
  { name: "Juan David Ospina", pases: 1 },
  { name: "María Paula Girón", pases: 1 },
  { name: "Brayan Tolosa", pases: 1 },
  { name: "Inelia Medina", pases: 1 },
  { name: "Familia Ordoñez Gil", pases: 2 },
  { name: "Gertrudis Mantilla", pases: 1 },
  { name: "Fotógrafo", pases: 1 },
  { name: "Familia Alomia Campo", pases: 2 },
  { name: "Familia Chocó", pases: 2 },
  { name: "Familia García Lasso", pases: 2 },
  { name: "Andy Cuéllar", pases: 1 },
  { name: "Familia Lizcano Mélendez", pases: 2 },
  { name: "Familia Escobar Chocó", pases: 2 },
  { name: "Esteban Anacona", pases: 1 },
  { name: "Rudy Diaz", pases: 1 },
  { name: "Esteban Anacona 2", pases: 1 },
];

function AdminPanel() {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const getLink = (name: string, pases: number, type: "asistencia" | "recuerdo") => {
    if (typeof window === "undefined") return "";
    const origin = window.location.origin;
    if (type === "recuerdo") {
      return `${origin}/recuerdo?invitado=${encodeURIComponent(name)}`;
    }
    return `${origin}/?invitado=${encodeURIComponent(name)}&pases=${pases}`;
  };

  const copyToClipboard = (name: string, pases: number, index: number, type: "asistencia" | "recuerdo") => {
    const link = getLink(name, pases, type);
    navigator.clipboard.writeText(link);
    setCopiedIndex(`${type}-${index}`);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Section className="bg-muted py-10 border-t border-border" id="admin-panel">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="font-serif text-2xl font-semibold">Generador de Enlaces de Invitados (Admin)</h2>
        </div>
        <p className="font-serif text-sm text-foreground/75 mb-6">
          Haz clic en cualquiera de los botones para copiar el enlace correspondiente al portapapeles.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GUEST_LIST.map((guest, idx) => {
            return (
              <div key={idx} className="p-4 rounded-xl bg-card border border-border flex flex-col justify-between gap-3 shadow-sm">
                <div>
                  <h4 className="font-serif font-bold text-sm text-foreground">{guest.name}</h4>
                  <p className="font-serif text-xs text-muted-foreground">{guest.pases} pase(s)</p>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => copyToClipboard(guest.name, guest.pases, idx, "asistencia")}
                    className="w-full text-center py-2 px-3 rounded-lg border border-primary/20 hover:bg-primary/5 text-xs font-serif uppercase tracking-wider transition-all cursor-pointer"
                  >
                    {copiedIndex === `asistencia-${idx}` ? "¡Copiado!" : "Enlace Asistencia"}
                  </button>
                  <button
                    onClick={() => copyToClipboard(guest.name, guest.pases, idx, "recuerdo")}
                    className="w-full text-center py-2 px-3 rounded-lg border border-primary/20 hover:bg-primary/5 text-xs font-serif uppercase tracking-wider transition-all cursor-pointer"
                  >
                    {copiedIndex === `recuerdo-${idx}` ? "¡Copiado!" : "Enlace Recuerdo"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

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
        {/* FORM */}
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

        {/* MESSAGES LIST */}
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

function Index() {
  const [opened, setOpened] = useState(false);
  const [invitado, setInvitado] = useState("");
  const [pases, setPases] = useState<number | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const nameParam = params.get("invitado");
      const pasesParam = params.get("pases");
      const adminParam = params.get("admin");
      if (nameParam) setInvitado(nameParam);
      if (pasesParam) {
        const num = parseInt(pasesParam, 10);
        if (!isNaN(num)) setPases(num);
      }
      if (adminParam === "true") {
        setIsAdmin(true);
      }
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
  return <Invitation invitado={invitado} pases={pases} isAdmin={isAdmin} />;
}
