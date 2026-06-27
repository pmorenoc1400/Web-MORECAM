const services = [
  {
    title: "INGENIERÍA ELÉCTRICA Y CONTROL",
    items: [
      "S-02 Diseño de Planos de Baja Tensión",
      "S-03 Programación PLC Siemens S7-1200",
      "S-05 Memorias de Cálculo",
    ],
    label: "NOM-001",
    icon: "⚡",
  },
  {
    title: "ROBÓTICA INDUSTRIAL Y AUTOMATIZACIÓN",
    items: [
      "S-08 Pick & Place FANUC",
      "S-11 Integración PLC-Robot",
      "S-10 Simulación off-line ROBOGUIDE",
    ],
    label: "STPS DC-3",
    icon: "🤖",
  },
  {
    title: "DISEÑO DIGITAL Y MECÁNICO",
    items: [
      "S-15 Diseño Mecánico 3D + Planos ISO",
      "S-14 Planos HTML+CSS+SVG",
      "Validación OCR",
    ],
    label: "STEP, STL",
    icon: "📐",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-slate-100 text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-teal-600">Nuestros Servicios</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            NUESTROS SERVICIOS
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.15)] transition hover:-translate-y-1 hover:shadow-[0_28px_80px_-40px_rgba(15,23,42,0.18)]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-teal-600/10 text-3xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
              <ul className="mt-6 space-y-3 text-sm leading-7 text-slate-600">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-600" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-between text-sm text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-2 font-semibold uppercase tracking-[0.2em] text-slate-600">
                  {service.label}
                </span>
                <button className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Ver Detalles
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
