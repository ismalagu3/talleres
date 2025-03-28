import Link from "next/link"
import { Wrench, Phone, Mail, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Contacto() {
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
              <Link href="/nosotros" className="text-sm font-medium transition-colors hover:text-primary">
                Nosotros
              </Link>
              <Link href="/contacto" className="text-sm font-medium transition-colors text-primary">
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-heading">Contacto</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos a su disposición para cualquier consulta o para concertar una cita. No dude en ponerse en
                  contacto con nosotros.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4 font-heading">Información de Contacto</h2>
                  <p className="text-gray-500 md:text-lg/relaxed mb-6">
                    Puede contactar con nosotros a través de los siguientes medios o visitarnos en nuestras
                    instalaciones.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold font-heading">Dirección</h3>
                      <p className="text-gray-500">Calle Ejemplo, 123</p>
                      <p className="text-gray-500">34001 Palencia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold font-heading">Teléfono</h3>
                      <p className="text-gray-500">979 123 456</p>
                      <p className="text-gray-500">654 321 987 (Móvil)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold font-heading">Email</h3>
                      <p className="text-gray-500">info@tallermecanicopalencia.es</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold font-heading">Horario</h3>
                      <p className="text-gray-500">Lunes a Viernes: 9:00 - 19:00</p>
                      <p className="text-gray-500">Sábados: 9:00 - 14:00</p>
                      <p className="text-gray-500">Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>

                <div className="aspect-video w-full overflow-hidden rounded-lg border shadow-sm">
                  <img
                    alt="Mapa de ubicación"
                    className="object-cover w-full h-full"
                    src="/placeholder.svg?height=400&width=600"
                  />
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4 font-heading">Envíenos un Mensaje</h2>
                  <p className="text-gray-500 md:text-lg/relaxed mb-6">
                    Complete el siguiente formulario y nos pondremos en contacto con usted lo antes posible.
                  </p>
                </div>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="nombre"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Nombre
                      </label>
                      <input
                        id="nombre"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Introduzca su nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="apellidos"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Apellidos
                      </label>
                      <input
                        id="apellidos"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Introduzca sus apellidos"
                      />
                    </div>
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
                      htmlFor="telefono"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Introduzca su teléfono"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="asunto"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Asunto
                    </label>
                    <select
                      id="asunto"
                      defaultValue=""
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="" disabled>
                        Seleccione un asunto
                      </option>
                      <option value="presupuesto">Solicitud de presupuesto</option>
                      <option value="cita">Solicitud de cita</option>
                      <option value="informacion">Información general</option>
                      <option value="reclamacion">Reclamación</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="mensaje"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Describa su consulta o solicite una cita"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="privacidad"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor="privacidad" className="text-sm text-gray-500">
                      He leído y acepto la{" "}
                      <Link href="/politica-privacidad" className="text-primary hover:underline">
                        política de privacidad
                      </Link>
                    </label>
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 gradient-section">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-heading">Preguntas Frecuentes</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Respuestas a las preguntas más comunes de nuestros clientes.
              </p>
              <div className="mx-auto grid max-w-3xl gap-4 mt-8">
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold font-heading">¿Cuánto tiempo tarda una reparación?</h3>
                  <p className="text-gray-500 mt-1">
                    El tiempo de reparación depende del tipo de avería. Le informaremos del plazo estimado cuando
                    realicemos el diagnóstico de su vehículo.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold font-heading">¿Ofrecen servicio de recogida y entrega?</h3>
                  <p className="text-gray-500 mt-1">
                    Sí, disponemos de servicio de recogida y entrega de vehículos en Palencia y alrededores. Consulte
                    condiciones.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold font-heading">¿Qué garantía tienen las reparaciones?</h3>
                  <p className="text-gray-500 mt-1">
                    Todas nuestras reparaciones tienen una garantía de 12 meses en piezas y mano de obra, según
                    establece la normativa vigente.
                  </p>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="font-bold font-heading">¿Es necesario pedir cita previa?</h3>
                  <p className="text-gray-500 mt-1">
                    Para garantizar un servicio óptimo, recomendamos solicitar cita previa. No obstante, atendemos
                    urgencias sin cita siempre que sea posible.
                  </p>
                </div>
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

