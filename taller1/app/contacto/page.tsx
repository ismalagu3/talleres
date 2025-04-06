import Link from "next/link"
import { Phone, Mail, Clock, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import ContactForm from "@/components/layout/ContactForm"

export default function Contacto() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacto</h1>
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
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Información de Contacto</h2>
                  <p className="text-gray-500 md:text-lg/relaxed mb-6">
                    Puede contactar con nosotros a través de los siguientes medios o visitarnos en nuestras
                    instalaciones.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Dirección</h3>
                      <p className="text-gray-500">C/ Bordadores, 30 (Polígono de San Antolín)</p>
                      <p className="text-gray-500">34004 - Palencia</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Teléfono</h3>
                      <p className="text-gray-500">979 724 818</p>
                      <p className="text-gray-500">679 497 349 (Móvil)</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-500">administracion@veymaq.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-bold">Horario</h3>
                      <p className="text-gray-500">Lunes a Viernes: 9:00 - 17:00</p>
                      <p className="text-gray-500">Sábados y Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>

                <div className="aspect-video w-full overflow-hidden rounded-lg border shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.763823875836!2d-4.504367791484901!3d42.00534395108433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd47b1c3f28ff82b%3A0x685b344a9f28580d!2sTalleres%20veymaq!5e0!3m2!1ses!2ses!4v1743114467063!5m2!1ses!2ses"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-full">
                  </iframe>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter mb-4">Envíenos un Mensaje</h2>
                  <p className="text-gray-500 md:text-lg/relaxed mb-6">
                    Complete el siguiente formulario y nos pondremos en contacto con usted lo antes posible.
                  </p>
                </div>

                <ContactForm/>

              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Preguntas Frecuentes</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Respuestas a las preguntas más comunes de nuestros clientes.
              </p>
              <div className="mx-auto grid max-w-3xl gap-4 mt-8">
                <div className="rounded-lg border p-4 hover:border-primary transition duration-300">
                  <h3 className="font-bold">¿Cuánto tiempo tarda una reparación?</h3>
                  <p className="text-gray-500 mt-1">
                    El tiempo de reparación depende del tipo de avería. Le informaremos del plazo estimado cuando
                    realicemos el diagnóstico de su vehículo.
                  </p>
                </div>
                <div className="rounded-lg border p-4 hover:border-primary transition duration-300">
                  <h3 className="font-bold">¿Ofrecen servicio de recogida y entrega?</h3>
                  <p className="text-gray-500 mt-1">
                    Sí, disponemos de servicio de recogida y entrega de vehículos en Palencia y alrededores. Consulte
                    condiciones.
                  </p>
                </div>
                <div className="rounded-lg border p-4 hover:border-primary transition duration-300">
                  <h3 className="font-bold">¿Qué garantía tienen las reparaciones?</h3>
                  <p className="text-gray-500 mt-1">
                    Todas nuestras reparaciones tienen una garantía de 12 meses en piezas y mano de obra, según
                    establece la normativa vigente.
                  </p>
                </div>
                <div className="rounded-lg border p-4 hover:border-primary transition duration-300">
                  <h3 className="font-bold">¿Es necesario pedir cita previa?</h3>
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

