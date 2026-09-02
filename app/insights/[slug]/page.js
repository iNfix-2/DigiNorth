"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { INSIGHTS_ARTICLES } from "@/data/insightsData";
import { 
  Play, 
  Headphones, 
  Clock, 
  Share2, 
  Check, 
  ArrowLeft, 
  ArrowRight,
  ChevronRight,
  Volume2,
  Calendar,
  User,
  ShieldCheck,
  Building,
  Sparkles
} from "lucide-react";

export default function SingleInsightPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const [copied, setCopied] = useState(false);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  // Find the article by slug or id
  const article = INSIGHTS_ARTICLES.find(
    (a) => a.slug === slug || a.id === slug
  ) || INSIGHTS_ARTICLES[0];

  // Related content: 4 articles from same topic or latest
  const relatedArticles = INSIGHTS_ARTICLES.filter(
    (a) => a.id !== article.id
  ).slice(0, 4);

  const handleCopyLink = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-space">
      <Navbar />

      {/* Breadcrumbs Navigation */}
      <section className="pt-32 pb-4 px-4 sm:px-6 max-w-6xl mx-auto">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/insights" className="hover:text-white transition-colors">Insights</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-[#38bdf8] truncate max-w-[200px] sm:max-w-md font-semibold">{article.title}</span>
        </nav>
      </section>

      {/* Main Single Article Container (GovCIO Media Exact Pattern) */}
      <article className="px-4 sm:px-6 max-w-6xl mx-auto pb-20">
        
        {/* Top Hero Card Header Container */}
        <div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-6 sm:p-10 mb-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#0052FF]/10 blur-3xl pointer-events-none rounded-full" />
          
          {/* Chips Group */}
          <div className="flex flex-wrap items-center gap-2 mb-4 relative z-10">
            {article.chips?.map((chip, idx) => (
              <span
                key={idx}
                className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase px-3 py-1 rounded-md ${
                  chip.type === "media"
                    ? "bg-[#38bdf8] text-black shadow-[0_0_10px_rgba(56,189,248,0.4)]"
                    : "bg-[#0052FF]/30 text-[#93c5fd] border border-[#0052FF]/50"
                }`}
              >
                {chip.label === "Video" && <Play className="w-3 h-3 fill-current" />}
                {chip.label === "Podcast" && <Headphones className="w-3 h-3" />}
                <span>{chip.label}</span>
              </span>
            ))}
          </div>

          {/* Show / Topic Indicator & Duration */}
          <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-3 relative z-10">
            <span className="text-[#38bdf8] font-bold uppercase">{article.topic}</span>
            <span>·</span>
            <div className="flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>{article.duration}</span>
            </div>
          </div>

          {/* Article Main Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-tight mb-6 relative z-10">
            {article.title}
          </h1>

          {/* Share Bar & Publication Date */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs font-mono text-slate-400 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-white font-bold uppercase tracking-wider">Share:</span>
              
              {/* Share Buttons */}
              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`, "_blank");
                  }
                }}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                title="Share on X"
              >
                𝕏
              </button>

              <button
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`, "_blank");
                  }
                }}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-colors font-bold"
                title="Share on LinkedIn"
              >
                in
              </button>

              <button
                onClick={handleCopyLink}
                className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1.5 font-bold uppercase text-slate-300">
              <Calendar className="w-3.5 h-3.5 text-[#38bdf8]" />
              <span>{article.date}</span>
            </div>
          </div>

          {/* Full-Width Video / Hero Media Player Container (GovCIO Style) */}
          <div className="mt-8 relative rounded-2xl overflow-hidden border border-white/15 bg-black group">
            {isPlayingVideo ? (
              <div className="w-full aspect-video bg-black flex items-center justify-center">
                <iframe
                  title={article.title}
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/NVj3TZgnV4U?autoplay=1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="relative w-full h-72 sm:h-[480px] bg-slate-900">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Big Circular Play Button with Blue Glowing Ring */}
                <button
                  onClick={() => setIsPlayingVideo(true)}
                  aria-label="Play Video"
                  className="absolute inset-0 m-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/60 backdrop-blur-md border-2 border-[#38bdf8] flex items-center justify-center text-[#38bdf8] hover:scale-110 hover:bg-[#38bdf8] hover:text-black transition-all shadow-[0_0_30px_rgba(56,189,248,0.5)] group/btn cursor-pointer"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </button>

                {/* Video Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-white/15 px-3 py-1 rounded-lg text-xs font-mono text-white flex items-center gap-1.5">
                  <Play className="w-3 h-3 text-[#38bdf8] fill-current" />
                  <span>{article.duration}</span>
                </div>
              </div>
            )}
          </div>

          {/* Speaker / Featured Interviewee Profile Card (GovCIO Exact Component) */}
          {article.speaker && (
            <div className="mt-8 pt-8 border-t border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 block mb-4 font-bold">
                Featuring:
              </span>
              
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-lg">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#38bdf8]/50 flex-shrink-0 bg-slate-800">
                  <img
                    src={article.speaker.avatar}
                    alt={article.speaker.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-base font-bold text-white uppercase">{article.speaker.name}</h3>
                  <p className="text-xs text-[#38bdf8] font-mono">{article.speaker.role}</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">{article.speaker.organization}</p>
                </div>
              </div>
            </div>
          )}

          {/* Author Callout & Lead Synopsis */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-xs font-mono text-[#38bdf8] font-bold uppercase mb-2">
              Executive Synopsis · {article.author}
            </p>
            <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </div>

        {/* Rich Article Body Content */}
        <div className="max-w-4xl mx-auto py-6">
          <div className="prose prose-invert max-w-none text-slate-300 text-base sm:text-lg font-light leading-relaxed space-y-6">
            <div className="whitespace-pre-line">
              {article.content}
            </div>
          </div>

          {/* Action Back to Insights */}
          <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono uppercase tracking-wider text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Intelligence</span>
            </Link>

            <button
              onClick={handleCopyLink}
              className="button-enchanced is-primary !py-2.5 !px-6 text-xs font-bold uppercase tracking-wider"
            >
              <span>{copied ? "Link Copied!" : "Share This Intelligence"}</span>
            </button>
          </div>
        </div>

        {/* GovCIO-style "RELATED CONTENT" 4-Column Grid */}
        <section className="mt-20 pt-12 border-t border-white/10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-[#38bdf8] text-black text-xs font-mono font-bold uppercase tracking-wider">
                Related Content
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                Recommended Briefings
              </h2>
            </div>

            <Link
              href="/insights"
              className="text-xs font-mono text-[#38bdf8] hover:text-white flex items-center gap-1 transition-colors font-bold uppercase"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 4 Column Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.id}
                href={`/insights/${rel.slug}`}
                className="group flex flex-col justify-between bg-black/70 border border-white/10 rounded-2xl p-4 hover:border-white/30 hover:-translate-y-1 transition-all shadow-xl"
              >
                <div>
                  {/* Thumbnail Image */}
                  <div className="w-full h-36 rounded-xl overflow-hidden mb-3 relative bg-white/5">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Chips */}
                  <div className="flex flex-wrap items-center gap-1 mb-2">
                    <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-[#0052FF]/20 text-[#38bdf8] border border-[#0052FF]/30">
                      {rel.topic}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xs sm:text-sm font-bold text-white uppercase leading-snug group-hover:text-[#38bdf8] transition-colors mb-2 line-clamp-2">
                    {rel.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-[11px] text-slate-400 font-light leading-relaxed line-clamp-2 mb-3">
                    {rel.excerpt}
                  </p>
                </div>

                {/* Duration */}
                <div className="pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <div className="flex items-center gap-1 text-slate-400">
                    <Clock className="w-3 h-3 text-[#38bdf8]" />
                    <span>{rel.duration}</span>
                  </div>
                  <span>{rel.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </article>

      <Footer />
    </main>
  );
}
