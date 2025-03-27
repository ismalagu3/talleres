import Link from "next/link";
import { Phone, Wrench, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Wrench className="h-6 w-6" />
            <span className="inline-block font-bold">VEYMAQ</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors text-primary">
              Inicio
            </Link>
            <Link href="/servicios" className="text-sm font-medium transition-colors hover:text-primary">
              Servicios
            </Link>
            <Link href="/nosotros" className="text-sm font-medium transition-colors hover:text-primary">
              Nosotros
            </Link>
            <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
              Contacto
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="hidden md:flex items-center space-x-1">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">979 724 818</span>
            <Smartphone className="h-4 w-4" />
            <span className="text-sm font-medium">679 497 349</span>
          </div>
          <Button className="hidden md:inline-flex">Pedir Cita</Button>
        </div>
      </div>
    </header>
  );
}
