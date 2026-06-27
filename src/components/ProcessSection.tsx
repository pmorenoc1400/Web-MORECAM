const processSteps = [
  { label: "BRIEFING GRATIS", description: "Inicio del proyecto", icon: "📝" },
  { label: "COTIZACIÓN < 48h", description: "Respuesta rápida", icon: "⏱️" },
  { label: "ANTICIPO 50%", description: "Compromiso inicial", icon: "💰" },
  { label: "AVANCES 30/60/90%", description: "Revisiones periódicas", icon: "📈" },
  { label: "ENTREGA FINAL", description: "Proyecto completo", icon: "🎯" },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-teal-300">Nuestro Proceso</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            NUESTRO PROCESO
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step.label} className="rounded-[28px] border border-slate-800 bg-slate-900/90 p-6 text-center shadow-[0_20px_50px_-30px_rgba(15,23,42,0.4)]">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-500 text-2xl text-slate-950">
                {step.icon}
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">Paso {index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.label}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
