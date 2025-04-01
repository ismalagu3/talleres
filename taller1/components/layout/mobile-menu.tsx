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
        className="relative p-2 text-primary focus:outline-none focus:ring-2 focus:ring-secondary top-0 right-0"
        aria-label="Abrir menú"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background shadow-lg z-50">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="/servicios"
              className="text-base font-medium text-primary hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/nosotros"
              className="text-base font-medium text-primary hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="text-base font-medium text-primary hover:text-secondary"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}