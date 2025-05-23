'use client'

import Link from "next/link";
import { Phone, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background text-primary">
      <div className="px-4 md:px-14 flex h-12 w-full items-center justify-between">
        <Link href="/" className="">
          <img
            src="/images/logo_veymaq.png"
            alt="Logo Veymaq"
            className="h-10 w-auto"
          />
        </Link>

        {/* Menú de navegación para pantallas grandes */}
        <nav className="hidden md:flex gap-6 px-10 text-xl">
          <Link href="/servicios" className="font-medium transition-all hover:text-secondary">
            Servicios
          </Link>
          <Link href="/nosotros" className="font-medium transition-colors hover:text-secondary">
            Nosotros
          </Link>
          <Link href="/contacto" className="font-medium transition-colors hover:text-secondary">
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
