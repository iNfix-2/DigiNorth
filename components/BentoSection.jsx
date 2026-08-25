"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, RotateCcw, Maximize2, Volume2, VolumeX } from "lucide-react";

export default function BentoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:10");
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 10;
    setProgress((current / dur) * 100);
    setCurrentTime(formatTime(current));
    setDuration(formatTime(dur));
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    const seekTime = pos * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(pos * 100);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().then(() => {
      setIsPlaying(true);
    }).catch(() => {});
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleFullscreen = () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else {
      containerRef.current.requestFullscreen().catch(() => {});
    }
  };

  return (
    <section className="relative w-full bg-black py-20 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-stretch">
          
          {/* Left Tall Card: Real Video Player with /videos/DigiVid.mp4 (5 Columns on Desktop) */}
          <div
            ref={containerRef}
            className="md:col-span-5 relative flex flex-col justify-between overflow-hidden rounded-xl sm:rounded-2xl bg-black min-h-[420px] md:min-h-[560px] group shadow-2xl border border-white/10"
          >
            {/* Native Video Element */}
            <video
              ref={videoRef}
              src="/videos/DigiVid.mp4"
              playsInline
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleTimeUpdate}
              onEnded={() => setIsPlaying(false)}
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 pointer-events-none" />

            {/* Center Play Button Overlay */}
            <div className="relative z-10 my-auto flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.4)] backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-slate-200 active:scale-95 cursor-pointer"
                aria-label="Play video"
              >
                {isPlaying ? (
                  <Pause className="h-6 w-6 fill-black" />
                ) : (
                  <Play className="h-6 w-6 fill-black ml-1" />
                )}
              </button>
            </div>

            {/* Bottom Scrubber & Controls */}
            <div className="relative z-10 p-4 sm:p-5 flex items-center gap-3 text-xs text-white/90 font-mono">
              <button
                onClick={handleRestart}
                className="text-white/70 hover:text-white transition cursor-pointer"
                aria-label="Restart"
              >
                <RotateCcw className="h-4 w-4" />
              </button>

              <button
                onClick={togglePlay}
                className="text-white/70 hover:text-white transition cursor-pointer"
                aria-label="Play / Pause"
              >
                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>

              <button
                onClick={toggleMute}
                className="text-white/70 hover:text-white transition cursor-pointer"
                aria-label="Mute / Unmute"
              >
                {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
              </button>

              {/* Scrubber track */}
              <div
                onClick={handleSeek}
                className="relative flex-1 h-2 bg-white/20 hover:bg-white/30 rounded-full overflow-hidden cursor-pointer transition-all"
              >
                <div
                  className="h-full bg-white rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Timestamp */}
              <span className="text-[0.7rem] text-white/80 shrink-0 tabular-nums font-mono">
                {currentTime} / {duration}
              </span>

              <button
                onClick={handleFullscreen}
                className="text-white/70 hover:text-white transition cursor-pointer"
                aria-label="Fullscreen"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Grid Area (7 Columns on Desktop): 4 Photos Grid */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            
            {/* Top Left: Builders Collaborating */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-black min-h-[220px] md:min-h-[270px] group shadow-xl border border-white/10">
              <img
                src="/images/bento/collaborate.jpg"
                alt="Hackathon builders collaborating"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Top Right: Judges Panel with Clipboards */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-black min-h-[220px] md:min-h-[270px] group shadow-xl border border-white/10">
              <img
                src="/images/bento/judges.jpg"
                alt="Judges panel and auditorium audience"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Bottom Left: Stage Winners & Group Celebration */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-black min-h-[220px] md:min-h-[270px] group shadow-xl border border-white/10">
              <img
                src="/images/bento/stage-group.jpg"
                alt="Celebratory hackathon stage photo"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Bottom Right: Pitch Demo with Glowing "CODE!" LED */}
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-black min-h-[220px] md:min-h-[270px] group shadow-xl border border-white/10">
              <img
                src="/images/bento/pitch-demo.jpg"
                alt="Stage pitch with CODE LED screen"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
