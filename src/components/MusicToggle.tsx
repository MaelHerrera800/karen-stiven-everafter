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
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !containerRef.current || playerRef.current) return;
      playerRef.current = new window.YT.Player(containerRef.current, {
        videoId: VIDEO_ID,
        playerVars: {
          autoplay: autoplay ? 1 : 0,
          controls: 0,
          loop: 1,
          playlist: VIDEO_ID,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (e: any) => {
            setReady(true);
            e.target.setVolume(40);
            if (autoplay) {
              e.target.playVideo();
            }
          },
          onStateChange: (e: any) => {
            // 1 = playing, 2 = paused, 0 = ended
            if (e.data === 1) setPlaying(true);
            else if (e.data === 2 || e.data === 0) setPlaying(false);
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

    return () => {
      cancelled = true;
    };
  }, [autoplay]);

  const toggle = () => {
    const p = playerRef.current;
    if (!p || !ready) return;
    const state = p.getPlayerState?.();
    if (state === 1) {
      p.pauseVideo();
    } else {
      p.playVideo();
    }
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
        aria-label={playing ? "Pausar música" : "Reproducir música"}
        className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full flex items-center justify-center text-primary-foreground transition-transform hover:scale-110"
        style={{ background: "var(--gradient-gold)", boxShadow: "var(--shadow-gold)" }}
      >
        {playing ? <Music2 className="h-5 w-5 animate-pulse" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </>
  );
}
