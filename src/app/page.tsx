import { InvitationCard } from "@/components/invitation-card";
import { RsvpForm } from "@/components/rsvp-form";
import { NavigationLinks } from "@/components/navigation-links";
import { PlaylistCard } from "@/components/playlist-card";
import { PlaylistEmbed } from "@/components/playlist-embed";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f6f2ea]">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col gap-12 px-5 py-14 sm:px-8 lg:px-0">
        <header className="rounded-[40px] border border-slate-200 bg-white/90 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.12)] lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-xs uppercase tracking-[0.6em] text-slate-500">
                Sábado 6 de diciembre · 18:00 hrs
              </p>
              <h1 className="font-serif text-5xl leading-snug text-slate-900 sm:text-6xl">
                ¡Confirma por WhatsApp y acompañanos!
              </h1>
              <p className="text-lg text-slate-700">
                Aquí tienes todo lo necesario: abre la tarjeta, confirma tu
                asistencia directamente en WhatsApp y escucha la playlist que
                estamos creando juntos para la noche.
              </p>
              <NavigationLinks />
              <div className="inline-flex rounded-full border border-slate-900/10 bg-slate-900/5 px-6 py-3 text-xs font-semibold uppercase tracking-[0.6em] text-slate-600">
                Confirma antes del 03 de diciembre
              </div>
            </div>
            <InvitationCard />
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <RsvpForm />
          <PlaylistCard />
        </section>

        <PlaylistEmbed />
      </div>
    </div>
  );
}
