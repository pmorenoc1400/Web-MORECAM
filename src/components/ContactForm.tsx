"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type ContactFormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  async function onSubmit(data: ContactFormData) {
    setStatusMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el mensaje. Por favor intenta de nuevo.");
      }

      setStatusMessage("Tu solicitud de cotización se ha enviado correctamente.");
      reset();
    } catch (error) {
      setStatusMessage("Hubo un error al enviar el formulario. Intenta más tarde.");
      console.error(error);
    }
  }

  return (
    <section id="contacto" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
        <div className="rounded-[28px] border border-slate-800 bg-slate-900/95 p-10 shadow-[0_25px_80px_-35px_rgba(15,23,42,0.7)]">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-teal-300">Contacto</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Solicita tu cotización
            </h2>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                <span>Nombre</span>
                <input
                  type="text"
                  {...register("name", { required: "El nombre es obligatorio." })}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                />
                {errors.name && <p className="text-sm text-rose-400">{errors.name.message}</p>}
              </label>

              <label className="space-y-2 text-sm text-slate-200">
                <span>Correo Electrónico</span>
                <input
                  type="email"
                  {...register("email", {
                    required: "El correo es obligatorio.",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Ingresa un correo válido.",
                    },
                  })}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
                />
                {errors.email && <p className="text-sm text-rose-400">{errors.email.message}</p>}
              </label>
            </div>

            <label className="space-y-2 text-sm text-slate-200">
              <span>Servicio de Interés</span>
              <select
                {...register("service", { required: "Selecciona un servicio." })}
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              >
                <option value="">Selecciona una opción</option>
                <option value="Ingeniería Eléctrica">Ingeniería Eléctrica</option>
                <option value="Robótica">Robótica</option>
                <option value="Diseño Digital">Diseño Digital</option>
                <option value="Otro">Otro</option>
              </select>
              {errors.service && <p className="text-sm text-rose-400">{errors.service.message}</p>}
            </label>

            <label className="space-y-2 text-sm text-slate-200">
              <span>Mensaje</span>
              <textarea
                rows={5}
                {...register("message", { required: "El mensaje es obligatorio." })}
                className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
              />
              {errors.message && <p className="text-sm text-rose-400">{errors.message.message}</p>}
            </label>

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              {statusMessage && <p className="text-sm text-slate-300">{statusMessage}</p>}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Enviando..." : "SOLICITAR COTIZACIÓN"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
