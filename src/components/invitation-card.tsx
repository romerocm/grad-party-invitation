"use client";

import { motion } from "framer-motion";
import { CalendarDays, Clock4, GraduationCap, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function InvitationCard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full max-w-xl">
      <div className="mb-3 text-xs uppercase tracking-[0.6em] text-slate-500"></div>
      <div
        className="perspective cursor-pointer"
        role="button"
        aria-pressed={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.div
          className="relative h-[420px] w-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{
            rotateY: isOpen ? 0 : -18,
            rotateX: isOpen ? 0 : 6,
            scale: isOpen ? 1 : 0.97,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
        >
          {/* Envelope overlay */}
          <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
            <motion.div
              className="relative h-full w-full"
              animate={{
                opacity: isOpen ? 0 : 1,
                y: isOpen ? -40 : 0,
              }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            >
              <motion.div
                className="absolute inset-x-4 top-6 h-[180px] rounded-t-[26px] bg-[#f0e6da] shadow-[0_10px_30px_rgba(15,23,42,0.15)]"
                style={{ transformOrigin: "top center" }}
                animate={{
                  rotateX: isOpen ? -140 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
              />
              <div className="absolute inset-x-4 top-[140px] h-[220px] rounded-[26px] border border-[#e0d7cb] bg-[#f7ede1] shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
                <div className="absolute -top-20 left-1/2 h-16 w-2 -translate-x-1/2 bg-[#e0d7cb]" />
                <p className="mt-28 text-center text-xs uppercase tracking-[0.6em] text-slate-500">
                  Para ti
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative h-full w-full"
            style={{
              visibility: isOpen ? "visible" : "hidden",
            }}
            animate={{
              opacity: isOpen ? 1 : 0,
              y: isOpen ? 0 : 20,
              scale: isOpen ? 1 : 0.94,
            }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              aria-hidden={!isOpen}
              className={cn(
                "absolute inset-0 rounded-[34px] border border-slate-200 bg-[#fdfcf7] p-10 text-center shadow-[0_30px_70px_rgba(15,23,42,0.18)]",
                "backface-hidden flex flex-col items-center justify-between"
              )}
            >
              <div>
                <p className="text-[13px] uppercase tracking-[0.6em] text-slate-600">
                  Celebración de
                </p>
                <h1 className="mt-2 text-4xl font-black tracking-[0.2em] text-slate-900">
                  GRADUACIÓN
                </h1>
                <p className="mt-1 text-lg font-semibold uppercase tracking-[0.6em] text-slate-700">
                  para Carlos
                </p>
              </div>

              <GraduationCap
                className="h-14 w-14 text-slate-800"
                strokeWidth={1.3}
              />

              <p className="text-lg leading-8 text-slate-700">
                Te invitamos a acompañarnos en una reunión íntima para celebrar
                este logro.
              </p>

              <div className="w-full space-y-3 text-sm uppercase tracking-[0.35em] text-slate-700">
                <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                  <CalendarDays
                    className="h-5 w-5 flex-shrink-0 text-slate-700"
                    strokeWidth={1.4}
                  />
                  <span>Sábado 6 de diciembre</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 text-center">
                  <Clock4
                    className="h-5 w-5 flex-shrink-0 text-slate-700"
                    strokeWidth={1.4}
                  />
                  <span>18:00 - 23:00 horas</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3 text-center text-[11px] leading-relaxed tracking-[0.28em] sm:text-xs">
                  <MapPin
                    className="h-5 w-5 flex-shrink-0 text-slate-700"
                    strokeWidth={1.4}
                  />
                  <span className="max-w-[320px]">
                    Ala norte, 9no piso · Condominio 71 · Calle Nueva No. 1 y 71
                    Av Sur · Colonia Escalón
                  </span>
                </div>
              </div>
            </div>

            <div
              aria-hidden={!isOpen}
              className={cn(
                "absolute inset-0 flex h-full flex-col justify-between rounded-[34px] border border-slate-200 bg-[#fdf9f1] p-10 text-center shadow-inner",
                "backface-hidden"
              )}
              style={{ transform: "rotateY(180deg)" }}
            >
              <div>
                <p className="text-xs uppercase tracking-[0.6em] text-slate-400">
                  Detalles
                </p>
                <h2 className="mt-4 font-serif text-4xl text-slate-900">
                  Gracias por ser parte de este camino.
                </h2>
              </div>
              <div className="space-y-4 text-sm text-slate-600">
                <p>
                  Dress code elegante casual. Habrá música en vivo, aperitivos y
                  un brindis para celebrar juntos.
                </p>
                <p>
                  Por favor confirma tu asistencia para reservar tu lugar y el
                  de tus acompañantes.
                </p>
              </div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-500">
                Toca para {isOpen ? "cerrar" : "abrir"}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <p className="mt-3 text-center text-xs uppercase tracking-[0.5em] text-slate-500">
        {isOpen ? "Gracias por acompañarme" : "Toca para abrir"}
      </p>
    </div>
  );
}
