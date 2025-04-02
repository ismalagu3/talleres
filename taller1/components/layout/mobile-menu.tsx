'use client'

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {/* Botón de menú hamburguesa */}
      <button
        onClick={toggleMenu}
        className="relative p-2 text-primary transform duration-300 hover:scale-105"
        aria-label="Abrir menú"
      >
        {isOpen ? <X className="h-6 w-6 transform" /> : <Menu className="h-6 w-6 transform" />}
      </button>

      {/* Menú desplegable con animación */}
      <div
        className={`absolute top-16 left-0 w-full bg-background shadow-lg z-50 transform transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-4 py-4 text-2xl">
          <Link
            href="/servicios"
            className="font-medium text-primary hover:text-secondary"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </Link>
          <Link
            href="/nosotros"
            className="font-medium text-primary hover:text-secondary"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            href="/contacto"
            className="font-medium text-primary hover:text-secondary"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </div>
  );
}