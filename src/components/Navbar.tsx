import Link from "next/link";
import Logo from "./Logo";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-nosotros", label: "Sobre Nosotros" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-black text-white/95 shadow-lg shadow-black/30">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#inicio" className="flex items-center gap-3">
          <Logo size={44} />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex lg:gap-10">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-slate-50/80">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="#catalogo"
            className="rounded-full bg-white/90 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-white/80"
          >
            Catálogo Completo
          </Link>
        </div>

        <div className="md:hidden">
          <Link href="#catalogo" className="rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-slate-950">
            Catálogo
          </Link>
        </div>
      </div>
    </header>
  );
}
