export default function SuccessCasesSection() {
  return (
    <section id="proyectos" className="bg-slate-100 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-teal-600">Casos de Éxito Destacados</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Casos de éxito destacados
            </h2>
            <div className="mt-10 space-y-6">
              <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.15)]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">Caso PIM Plant Plastics (Edo. Méx.)</p>
                <p className="mt-4 text-lg font-semibold text-slate-950">Sistema PLC S7-1200 y 4 líneas</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">Automatización y control integral para línea de producción con cumplimiento industrial garantizado.</p>
              </article>
              <article className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.15)]">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-600">Caso Troquelado Tapa Ø915</p>
                <p className="mt-4 text-lg font-semibold text-slate-950">Diseño ISO + Validación OCR</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">Proyecto mecánico y digital con verificación avanzada para garantizar precisión y trazabilidad.</p>
              </article>
            </div>
          </div>

          <div className="rounded-[28px] bg-slate-950 px-8 py-10 text-slate-100 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.25)]">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-teal-300">Catálogo de servicios 2026</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">Descarga el catálogo completo</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Revisa el portafolio de soluciones y descubre todos los servicios disponibles para tu empresa.
            </p>
            <a
              href="/Catalogo_Servicios_PAMC_2026.pdf"
              download
              id="catalogo"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-400"
            >
              DESCARGAR CATÁLOGO COMPLETO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
