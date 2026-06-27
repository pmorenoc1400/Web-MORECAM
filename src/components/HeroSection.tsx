import Logo from "./Logo";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-black text-white">
      <div className="relative mx-auto flex min-h-[calc(100vh-120px)] max-w-7xl items-center justify-center px-6 py-24 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="rounded-full p-6">
            <Logo size={220} />
          </div>
          <h1 className="text-3xl font-extrabold tracking-wide text-white sm:text-4xl lg:text-5xl">
            MORECAM
          </h1>
          <p className="text-sm uppercase tracking-widest text-white/70">Energía Cooperativa</p>
          <p className="max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            Ingeniería eléctrica, robótica industrial y automatización para proyectos cooperativos.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#servicios"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition hover:opacity-90"
            >
              EXPLORAR NUESTROS SERVICIOS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
