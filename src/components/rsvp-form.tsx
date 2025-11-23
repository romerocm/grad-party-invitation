"use client";

import { FormEvent, useRef, useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { buildWhatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

type FormStatus = "idle" | "success" | "error";

type FormState = {
  status: FormStatus;
  message: string;
  errors?: Partial<Record<"name" | "guests", string>>;
};

const initialFormState: FormState = {
  status: "idle",
  message: "",
  errors: {},
};

export function RsvpForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<FormState>(initialFormState);
  const [isSending, setIsSending] = useState(false);

  const showMessage = state.status !== "idle";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const guests = Number(formData.get("guests") ?? 1);
    const attending = formData.get("attending") === "yes";
    const note = formData.get("note")?.toString().trim();

    const errors: FormState["errors"] = {};

    if (!name) {
      errors.name = "Escribe tu nombre, por favor.";
    }

    if (!Number.isFinite(guests) || guests < 1 || guests > 6) {
      errors.guests = "Selecciona entre 1 y 6 personas.";
    }

    if (Object.keys(errors).length) {
      setState({
        status: "error",
        message: "Revisa los campos resaltados antes de continuar.",
        errors,
      });
      return;
    }

    setIsSending(true);
    const whatsappUrl = buildWhatsappUrl({
      name,
      attending,
      guests,
      note,
    });

    window.open(whatsappUrl, "_blank");
    formRef.current?.reset();
    setState({
      status: "success",
      message:
        "Abrí WhatsApp en una nueva ventana para que confirmes y me quede tu contacto.",
      errors: {},
    });
    setIsSending(false);
  };

  return (
    <div className="rounded-[32px] border border-slate-200 bg-white/90 p-6 shadow-[0_15px_45px_rgba(15,23,42,0.08)] backdrop-blur">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
          Confirmación
        </p>
        <h3 className="mt-2 font-serif text-3xl text-slate-900">
          ¿Nos acompañas en la celebración?
        </h3>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 text-sm text-slate-700"
      >
        <div>
          <label
            htmlFor="name"
            className="flex justify-between text-xs font-medium uppercase tracking-[0.4em] text-slate-500"
          >
            Nombre completo
            {state.errors?.name && (
              <span className="text-rose-500">{state.errors.name}</span>
            )}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Ej. Pablito Díaz"
            className={cn(
              "mt-2 w-full rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3",
              "focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            )}
            required
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-slate-500">
              ¿Podrás asistir?
            </p>
            <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl border border-slate-100 bg-slate-50/70 p-1">
              {[
                { label: "Sí, ahí estaré", value: "yes" },
                { label: "No podré", value: "no" },
              ].map((option) => (
                <label key={option.value} className="group relative block">
                  <input
                    type="radio"
                    name="attending"
                    value={option.value}
                    defaultChecked={option.value === "yes"}
                    className="peer hidden"
                  />
                  <span
                    className={cn(
                      "flex h-full w-full items-center justify-center rounded-2xl border border-transparent px-4 py-3 text-center text-sm font-semibold transition",
                      "peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-slate-300",
                      "peer-checked:border-white peer-checked:bg-white peer-checked:text-slate-900 peer-checked:shadow-sm"
                    )}
                  >
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label
              htmlFor="guests"
              className="flex justify-between text-xs font-medium uppercase tracking-[0.4em] text-slate-500"
            >
              Número de invitados
              {state.errors?.guests && (
                <span className="text-rose-500">{state.errors.guests}</span>
              )}
            </label>
            <select
              id="guests"
              name="guests"
              className={cn(
                "mt-2 w-full rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3",
                "focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
              )}
              defaultValue="1"
            >
              {[1, 2, 3, 4, 5, 6].map((count) => (
                <option key={count} value={count}>
                  {count} {count === 1 ? "persona" : "personas"}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="note"
            className="text-xs font-medium uppercase tracking-[0.4em] text-slate-500"
          >
            Notas o peticiones
          </label>
          <textarea
            id="note"
            name="note"
            rows={4}
            placeholder="Comparte alergias, restricciones, canción favorita o mensaje especial"
            className={cn(
              "mt-2 w-full rounded-2xl border border-slate-200/60 bg-white/70 px-4 py-3",
              "focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
            )}
          />
        </div>

        <button
          type="submit"
          className={cn(
            "group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-4 font-semibold text-white shadow-lg shadow-slate-400/20",
            "transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          )}
          disabled={isSending}
        >
          {state.status === "success" ? (
            <Sparkles className="h-4 w-4 text-amber-200" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          <span>
            {isSending
              ? "Abriendo WhatsApp..."
              : state.status === "success"
              ? "¡Gracias!"
              : "Confirmar por WhatsApp"}
          </span>
        </button>

        {showMessage && (
          <p
            className={cn(
              "text-center text-sm",
              state.status === "success" ? "text-emerald-600" : "text-rose-500"
            )}
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
