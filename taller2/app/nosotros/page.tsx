import Link from "next/link"
import { Wrench, Award, Clock, Users, Star, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Nosotros() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <Wrench className="h-6 w-6" />
              <span className="inline-block font-bold">Taller Mecánico Palencia</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
                Inicio
              </Link>
              <Link href="/servicios" className="text-sm font-medium transition-colors hover:text-primary">
                Servicios
              </Link>
              <Link href="/nosotros" className="text-sm font-medium transition-colors text-primary">
                Nosotros
              </Link>
              <Link href="/contacto" className="text-sm font-medium transition-colors hover:text-primary">
                Contacto
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button className="hidden md:inline-flex">Pedir Cita</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 gradient-hero">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading">
                  Sobre Nosotros
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conozca la historia y los valores que nos han convertido en un referente en el sector de la reparación
                  de automóviles en Palencia.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter font-heading">Nuestra Historia</h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Fundado en 2004, Taller Mecánico Palencia nació con la visión de ofrecer un servicio de reparación de
                  automóviles de alta calidad, transparente y cercano. Lo que comenzó como un pequeño taller familiar,
                  se ha convertido en uno de los talleres de referencia en la provincia de Palencia.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed">
                  A lo largo de estos más de 20 años, hemos crecido tanto en instalaciones como en personal, pero
                  manteniendo siempre nuestra filosofía de trabajo: ofrecer un servicio honesto, profesional y de
                  calidad a precios justos.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Hoy contamos con unas modernas instalaciones de más de 500 m², equipadas con la última tecnología en
                  diagnóstico y reparación de vehículos, y un equipo de profesionales altamente cualificados y en
                  constante formación.
                </p>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl">
                <img
                  alt="Nuestro taller"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=500&width=800"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 gradient-section">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">Nuestros Valores</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Los pilares que guían nuestro trabajo diario y nos permiten ofrecer el mejor servicio.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <ShieldCheck className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold font-heading">Confianza</h3>
                <p className="text-center text-gray-500">
                  Trabajamos con total transparencia, explicando cada reparación y presupuesto de forma clara y
                  detallada.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <Star className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold font-heading">Calidad</h3>
                <p className="text-center text-gray-500">
                  Utilizamos recambios de primeras marcas y seguimos procedimientos rigurosos en todas nuestras
                  reparaciones.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <Award className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold font-heading">Profesionalidad</h3>
                <p className="text-center text-gray-500">
                  Nuestro equipo está formado por profesionales cualificados en constante actualización técnica.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold font-heading">Puntualidad</h3>
                <p className="text-center text-gray-500">
                  Respetamos los plazos de entrega acordados, valorando el tiempo de nuestros clientes.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold font-heading">Cercanía</h3>
                <p className="text-center text-gray-500">
                  Tratamos a cada cliente de forma personalizada, atendiendo sus necesidades específicas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <Wrench className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold font-heading">Innovación</h3>
                <p className="text-center text-gray-500">
                  Invertimos constantemente en equipamiento y formación para ofrecer las mejores soluciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 mx-auto aspect-video overflow-hidden rounded-xl">
                <img
                  alt="Nuestro equipo"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=500&width=800"
                />
              </div>
              <div className="order-1 lg:order-2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter font-heading">Nuestro Equipo</h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Contamos con un equipo de profesionales altamente cualificados y con amplia experiencia en el sector
                  de la automoción. Todos nuestros técnicos reciben formación continua para estar al día de las últimas
                  tecnologías y métodos de reparación.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed">Nuestro equipo está formado por:</p>
                <ul className="grid gap-2 text-gray-500">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Mecánicos especialistas en diferentes áreas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Técnicos en electrónica del automóvil</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Especialistas en diagnosis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Personal de atención al cliente</span>
                  </li>
                </ul>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Todos ellos trabajan con un objetivo común: ofrecer el mejor servicio y solucionar cualquier problema
                  que pueda tener su vehículo de la forma más eficiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 gradient-section">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">Confíe en Nosotros</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Ponga su vehículo en manos de profesionales. Contacte con nosotros o solicite una cita.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contacto">Contactar Ahora</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/servicios">Ver Nuestros Servicios</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2024 Taller Mecánico Palencia. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/politica-privacidad" className="text-sm text-gray-500 underline-offset-4 hover:underline">
              Política de Privacidad
            </Link>
            <Link href="/aviso-legal" className="text-sm text-gray-500 underline-offset-4 hover:underline">
              Aviso Legal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

