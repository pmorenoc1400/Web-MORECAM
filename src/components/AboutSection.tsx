export default function AboutSection() {
  return (
    <section id="sobre-nosotros" className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-teal-300">Sobre Nosotros</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Cooperación y Excelencia en Ingeniería
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              MORECAM es una cooperativa dedicada a soluciones integrales de ingeniería. Nuestro equipo de expertos tiene experiencia en diseño eléctrico, robótica industrial, automatización y diseño mecánico, entregando proyectos con calidad certificada y cumplimiento normativo.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-8 shadow-xl shadow-slate-950/20">
            <h3 className="text-xl font-semibold text-white">Experiencia destacada</h3>
            <p className="mt-4 text-slate-300">
              El equipo de MORECAM ha trabajado en empresas como UNILEVER y COOPER TIRES, aportando soluciones eficientes y adaptadas a cada industria.
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div>
                <p className="font-semibold text-white">Stack técnico</p>
                <ul className="mt-3 space-y-2 list-inside list-disc">
                  <li>PLC Siemens</li>
                  <li>Delta</li>
                  <li>AB</li>
                  <li>Python</li>
                  <li>SOLIDWORKS</li>
                  <li>FANUC</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
