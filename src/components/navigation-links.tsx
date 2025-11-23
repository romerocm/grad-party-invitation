import { Navigation, MapPinned } from "lucide-react";

const links = [
  {
    label: "Abrir en Waze",
    href: "https://waze.com/ul/hd42tctc60",
    description: "CONDOMINIO 71 · 71 Av. Sur · Colonia Escalón",
    icon: Navigation,
    accent: "bg-slate-900 text-white hover:bg-slate-800",
    descriptionClass: "text-white/70",
  },
  {
    label: "Ver en Google Maps",
    href: "https://maps.app.goo.gl/NiptAeiPhGb3aHjU7",
    description: "Ruta rápida vía Google",
    icon: MapPinned,
    accent: "bg-white text-slate-800 border border-slate-200 hover:border-slate-300",
    descriptionClass: "text-slate-500",
  },
];

export function NavigationLinks() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {links.map(
        ({ label, href, description, icon: Icon, accent, descriptionClass }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          className={`flex flex-col rounded-2xl px-5 py-4 text-sm transition ${accent}`}
        >
          <span className="flex items-center gap-2 text-base font-semibold">
            <Icon className="h-4 w-4" />
            {label}
          </span>
          <span
            className={`mt-1 text-xs uppercase tracking-[0.35em] ${descriptionClass}`}
          >
            {description}
          </span>
        </a>
        ),
      )}
    </div>
  );
}

