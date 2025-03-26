import React, { useState } from 'react';
import { Wrench, Phone, Clock, MapPin, Car, PenTool as Tool, Sparkles, Shield, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "Nosotros" },
    { href: "#servicios", label: "Servicios" },
    { href: "#galeria", label: "Galería" },
    { href: "#opiniones", label: "Opiniones" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header id="inicio" className="relative h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <nav className="relative z-20 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white">
              <Wrench className="h-8 w-8" />
              <span className="text-2xl font-bold">Taller Palencia</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 text-white">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-yellow-400 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="tel:+34900000000" className="flex items-center space-x-2 bg-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 transition-colors">
                <Phone className="h-4 w-4" />
                <span>900 000 000</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-xl py-4 px-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-gray-800 hover:text-yellow-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:+34900000000"
                className="block py-2 text-gray-800 hover:text-yellow-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>900 000 000</span>
                </span>
              </a>
            </div>
          )}
        </nav>

        <div className="relative z-10 container mx-auto px-6 h-[calc(100%-88px)] flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Tu taller de confianza en Palencia</h1>
            <p className="text-xl mb-8">Más de 20 años de experiencia reparando todo tipo de vehículos con la última tecnología y los mejores profesionales.</p>
            <a href="#contacto" className="bg-yellow-500 text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-400">
              Pide tu cita
            </a>
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section id="nosotros" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Sobre Nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Expertos en mecánica desde 2003</h3>
              <p className="text-gray-600 mb-4">
                En Taller Palencia nos dedicamos a ofrecer el mejor servicio de reparación y mantenimiento de vehículos. 
                Nuestro equipo de profesionales altamente cualificados está comprometido con la excelencia y la satisfacción del cliente.
              </p>
              <p className="text-gray-600">
                Utilizamos la última tecnología y herramientas de diagnóstico para garantizar reparaciones precisas y eficientes.
              </p>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1504222490345-c075b6008014?auto=format&fit=crop&q=80" 
                alt="Equipo de mecánicos"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Nuestros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Car,
                title: "Mecánica General",
                description: "Diagnóstico y reparación de todo tipo de averías mecánicas"
              },
              {
                icon: Sparkles,
                title: "Chapa y Pintura",
                description: "Reparación de carrocería y pintura con acabados perfectos"
              },
              {
                icon: Tool,
                title: "Mantenimiento",
                description: "Servicios de mantenimiento preventivo y revisiones"
              },
              {
                icon: Shield,
                title: "Diagnosis",
                description: "Diagnóstico electrónico con equipos de última generación"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Galería de Trabajos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1632823551722-5df4aa24a1f9?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1635770310392-f1ae37929ca4?auto=format&fit=crop&q=80",
            ].map((image, index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden">
                <img 
                  src={image}
                  alt={`Trabajo ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="opiniones" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Opiniones de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Martínez",
                text: "Excelente servicio y profesionalidad. Repararon mi coche en tiempo récord y a un precio muy competitivo."
              },
              {
                name: "Ana García",
                text: "Personal muy amable y trabajos de calidad. Siempre explican todo detalladamente y son muy transparentes."
              },
              {
                name: "Miguel Rodríguez",
                text: "El mejor taller de Palencia. Llevan años cuidando de mi coche y nunca me han fallado."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Contacta con nosotros</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Dirección</h3>
                    <p className="text-gray-600">Calle Example 123, 34001 Palencia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Teléfono</h3>
                    <p className="text-gray-600">900 000 000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-yellow-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Horario</h3>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 20:00</p>
                    <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                  <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent h-32"></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wrench className="h-8 w-8" />
              <span className="text-2xl font-bold">Taller Palencia</span>
            </div>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Taller Palencia. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;