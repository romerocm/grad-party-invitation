import { Music3, ExternalLink } from "lucide-react";

const PLAYLIST_URL =
  "https://open.spotify.com/playlist/5HMdENP7Nsgd2KIwMPgMUS?si=3add46d7bd824dbf&pt=8f4de264877489bb0c9a5eee57e0a534";

export function PlaylistCard() {
  return (
    <div className="h-full rounded-[32px] border border-slate-200 bg-gradient-to-br from-[#fff9f0] via-white to-[#f6f2ea] p-6 shadow-[0_15px_40px_rgba(15,23,42,0.08)]">
      <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
        Playlist
      </p>
      <h3 className="mt-3 font-serif text-3xl text-slate-900">
        Dinner Time - Grad Party @ Condominio 71 w/ Carlos
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Escucha la lista y, si quieres, agrega tu canción favorita. La playlist
        es colaborativa: abre el enlace, toca “Añadir canciones” y suma tu
        propuesta.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <div className="rounded-3xl border border-slate-200 bg-white/80 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
              <Music3 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                Curada en Spotify
              </p>
              <p className="text-base font-semibold text-slate-900">
                Abre el enlace y toca “Añadir canción”
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1DB954] px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#19a349]"
          >
            Abrir Spotify
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-700 transition hover:border-slate-300"
          >
            Añadir canción
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
