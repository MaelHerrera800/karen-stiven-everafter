import { useEffect, useRef, useState } from "react";
import { Music2, VolumeX } from "lucide-react";

const VIDEO_ID = "HUfUk-z00g8";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

export function MusicToggle({ autoplay }: { autoplay: boolean }) {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [muted, setMuted] = useState(true);
  const unmutedOnceRef = useRef(false);

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !containerRef.current || playerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: 1,
          controls: 0,
          loop: 1,
          playlist: VIDEO_ID,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (e: any) => {
            try {
              e.target.mute();
              e.target.setVolume(50);
              e.target.playVideo();
            } catch {}
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      init();
    } else {
      const existing = document.getElementById("yt-iframe-api");
      if (!existing) {
        const tag = document.createElement("script");
        tag.id = "yt-iframe-api";
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        init();
      };
    }

    // Auto-unmute on first user interaction (browser policy workaround)
    const tryUnmute = () => {
      if (unmutedOnceRef.current) return;
      const p = playerRef.current;
      if (!p?.unMute) return;
      try {
        p.unMute();
        p.setVolume(50);
        p.playVideo();
        unmutedOnceRef.current = true;
        setMuted(false);
        removeListeners();
      } catch {}
    };
    const removeListeners = () => {
      window.removeEventListener("pointerdown", tryUnmute);
      window.removeEventListener("keydown", tryUnmute);
      window.removeEventListener("scroll", tryUnmute);
      window.removeEventListener("touchstart", tryUnmute);
    };
    window.addEventListener("pointerdown", tryUnmute, { once: false });
    window.addEventListener("keydown", tryUnmute);
    window.addEventListener("scroll", tryUnmute, { passive: true });
    window.addEventListener("touchstart", tryUnmute, { passive: true });

    return () => {
      cancelled = true;
      removeListeners();
    };
  }, [autoplay]);

  const toggle = () => {
    const p = playerRef.current;
    if (!p) return;
    try {
      if (muted) {
        p.unMute();
        p.setVolume(50);
        p.playVideo();
        unmutedOnceRef.current = true;
        setMuted(false);
      } else {
        p.mute();
        setMuted(true);
      }
    } catch {}
  };

  return (
    <>
      <div
        aria-hidden
        style={{
          position: "fixed",
          width: 1,
          height: 1,
          opacity: 0,
          pointerEvents: "none",
          left: -9999,
          top: -9999,
        }}
      >
        <div ref={containerRef} />
      </div>
      <button
        onClick={toggle}
        aria-label={muted ? "Activar música" : "Silenciar música"}
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full flex items-center justify-center text-primary-foreground transition-transform hover:scale-110"
        style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
      >
        {muted ? <VolumeX className="h-5 w-5" /> : <Music2 className="h-5 w-5 animate-pulse" />}
      </button>
    </>
  );
}
