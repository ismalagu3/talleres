import Link from "next/link"
import { Phone, Mail, Clock, MapPin, Wrench, Car, Shield, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Taller Mecánico de Confianza en Palencia
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Servicio profesional y de calidad para el mantenimiento y reparación de su vehículo. Más de X años de
                  experiencia nos avalan.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/contacto">Solicitar Presupuesto</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/servicios">Nuestros Servicios</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
                <img
                  alt="Taller mecánico"
                  className="object-cover w-full h-full"
                  src="/images/veymaq.jpg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Servicios</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una amplia gama de servicios para mantener su vehículo en perfectas condiciones.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Car className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Mecánica General</h3>
                <p className="text-center text-gray-500">
                  Diagnóstico y reparación de averías, cambio de aceite, filtros y más.
                </p>
                <Button variant="link" asChild>
                  <Link href="/servicios">Ver más</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Revisiones Oficiales</h3>
                <p className="text-center text-gray-500">Preparamos su vehículo para pasar la ITV con garantía.</p>
                <Button variant="link" asChild>
                  <Link href="/servicios">Ver más</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Wrench className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Neumáticos</h3>
                <p className="text-center text-gray-500">
                  Cambio, equilibrado y alineación de neumáticos de todas las marcas.
                </p>
                <Button variant="link" asChild>
                  <Link href="/servicios">Ver más</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Mantenimiento</h3>
                <p className="text-center text-gray-500">
                  Servicios de mantenimiento preventivo para alargar la vida de su vehículo.
                </p>
                <Button variant="link" asChild>
                  <Link href="/servicios">Ver más</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Electricidad</h3>
                <p className="text-center text-gray-500">
                  Reparación de sistemas eléctricos y electrónicos del automóvil.
                </p>
                <Button variant="link" asChild>
                  <Link href="/servicios">Ver más</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Car className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Aire Acondicionado</h3>
                <p className="text-center text-gray-500">Recarga y reparación de sistemas de climatización.</p>
                <Button variant="link" asChild>
                  <Link href="/servicios">Ver más</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg" asChild>
                <Link href="/servicios">Ver Todos los Servicios</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto w-full max-w-[500px] aspect-video overflow-hidden rounded-xl">
                <img
                  alt="Nuestro equipo"
                  className="object-cover w-full h-full"
                  src="/placeholder.svg?height=500&width=800"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Nosotros</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Con más de X años de experiencia en el sector, nuestro taller mecánico en Palencia se ha convertido
                  en un referente por la calidad de nuestro trabajo y la atención personalizada.
                </p>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Contamos con un equipo de profesionales altamente cualificados y las herramientas más modernas para
                  ofrecer el mejor servicio a nuestros clientes.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/nosotros">Conoce Nuestro Equipo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos a su disposición para cualquier consulta o para concertar una cita.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-12 mt-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <p className="text-gray-500">Calle Ejemplo, 123, 34001 Palencia</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-gray-500">979 123 456</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <p className="text-gray-500">info@tallermecanicopalencia.es</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-gray-500">Lunes a Viernes: 9:00 - 19:00</p>
                    <p className="text-gray-500">Sábados: 9:00 - 14:00</p>
                  </div>
                </div>
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img
                    alt="Mapa de ubicación"
                    className="object-cover w-full h-full"
                    src="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Introduzca su nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Introduzca su email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Introduzca su teléfono"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Describa su consulta o solicite una cita"
                    />
                  </div>
                  <Button size="lg" className="w-full">
                    Enviar Mensaje
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg" asChild>
                <Link href="/contacto">Contacto Completo</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
            © 2024 VEYMAQ. Todos los derechos reservados.
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

