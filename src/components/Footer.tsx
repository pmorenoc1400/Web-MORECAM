import Link from "next/link";

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-nosotros", label: "Sobre Nosotros" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-xl font-semibold text-white">Morecam Cooperativa</h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
              Cooperativa de ingeniería dedicada a soluciones integrales de energía, automatización y diseño mecánico en el Estado de México.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-300">
              <p>Contacto: contacto@morecam.com</p>
              <p>Ubicación: Estado de México, México</p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Enlaces rápidos</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Síguenos</h3>
              <p className="mt-4 text-sm text-slate-300">Para proyectos y cotizaciones, envía un correo o usa el formulario.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Morecam Cooperativa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
