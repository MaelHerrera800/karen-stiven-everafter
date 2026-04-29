import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";

export function MusicToggle({ autoplay }: { autoplay: boolean }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (autoplay && ref.current) {
      ref.current.volume = 0.4;
      ref.current.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, [autoplay]);

  const toggle = () => {
    const a = ref.current;
    if (!a) return;
    if (a.paused) { a.play().then(() => setPlaying(true)).catch(() => {}); }
    else { a.pause(); setPlaying(false); }
  };

  return (
    <>
      <audio
        ref={ref}
        loop
        src="https://cdn.pixabay.com/download/audio/2022/10/18/audio_8f0c2a4c2e.mp3?filename=romantic-piano-15527.mp3"
      />
      <button
        onClick={toggle}
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full flex items-center justify-center text-primary-foreground transition-transform hover:scale-110"
        style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
      >
        {playing ? <Music2 className="h-5 w-5 animate-pulse" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </>
  );
}
