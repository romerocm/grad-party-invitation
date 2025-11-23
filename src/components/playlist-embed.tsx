const PLAYLIST_EMBED =
  "https://open.spotify.com/embed/playlist/5HMdENP7Nsgd2KIwMPgMUS?utm_source=generator";

export function PlaylistEmbed() {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white/90 p-4 shadow-[0_15px_40px_rgba(15,23,42,0.08)]">
      <div className="overflow-hidden rounded-3xl">
        <iframe
          src={PLAYLIST_EMBED}
          width="100%"
          height="380"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </section>
  );
}

