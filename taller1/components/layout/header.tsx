'use client'

import Link from "next/link";
import { Phone, Wrench, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background text-primary">
      <div className="px-4 md:px-14 flex h-16 w-full items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Wrench className="h-6 w-6" />
          <span className="text-2xl inline-block font-bold">VEYMAQ</span>
        </Link>

        {/* Menú de navegación para pantallas grandes */}
        <nav className="hidden md:flex gap-6 px-10">
          <Link href="/servicios" className="text-base font-medium transition-colors hover:text-secondary">
            Servicios
          </Link>
          <Link href="/nosotros" className="text-base font-medium transition-colors hover:text-secondary">
            Nosotros
          </Link>
          <Link href="/contacto" className="text-base font-medium transition-colors hover:text-secondary">
            Contacto
          </Link>
        </nav>

        {/* Botón MobileMenu para pantallas pequeñas */}
        <div className="md:hidden">
          <MobileMenu />
        </div>

        <div className="hidden md:flex flex-1 items-center justify-end space-x-4">
          <div className="hidden md:flex items-center space-x-1">
          <a href="tel:979 724 818">
            <Button className="hidden md:inline-flex">
            <Phone className="h-4 w-4" />
            979 724 818
            </Button>
          </a>
          </div>
          <a href="tel:679 497 349">
            <Button className="hidden md:inline-flex">
              <Smartphone className="h-4 w-4" />
              679 497 349
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
