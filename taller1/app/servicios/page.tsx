import Link from "next/link"
import { Car, Shield, Wrench, Clock, Users, Battery, Cpu, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Servicios() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Servicios</h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ofrecemos una amplia gama de servicios para mantener su vehículo en perfectas condiciones. Nuestros
                  técnicos cualificados utilizan equipamiento de última generación para garantizar la máxima calidad en
                  todas nuestras reparaciones.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12">
              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 rounded-lg bg-primary/10 px-3 py-1">
                    <Car className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Mecánica General</span>
                  </div>
                  <h2 className="text-3xl font-bold">Reparación y Mantenimiento</h2>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    Realizamos todo tipo de reparaciones mecánicas, desde cambios de aceite y filtros hasta reparaciones
                    complejas del motor. Nuestro servicio incluye:
                  </p>
                  <ul className="grid gap-2 text-gray-500">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Diagnóstico electrónico de averías</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Cambio de aceite y filtros</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Reparación de motores</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Sistemas de frenos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Sistemas de suspensión</span>
                    </li>
                  </ul>
                  <Button>Solicitar Presupuesto</Button>
                </div>
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img
                    alt="Mecánica general"
                    className="object-cover w-full h-full"
                    src="/placeholder.svg?height=500&width=800"
                  />
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="order-2 md:order-1 aspect-video overflow-hidden rounded-xl">
                  <img
                    alt="Revisiones oficiales"
                    className="object-cover w-full h-full"
                    src="/placeholder.svg?height=500&width=800"
                  />
                </div>
                <div className="order-1 md:order-2 space-y-4">
                  <div className="inline-flex items-center space-x-2 rounded-lg bg-primary/10 px-3 py-1">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Revisiones Oficiales</span>
                  </div>
                  <h2 className="text-3xl font-bold">Preparación para la ITV</h2>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    Preparamos su vehículo para pasar la Inspección Técnica de Vehículos (ITV) con total garantía.
                    Nuestro servicio pre-ITV incluye:
                  </p>
                  <ul className="grid gap-2 text-gray-500">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Revisión completa del vehículo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Comprobación de emisiones</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Verificación de luces y señalización</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Revisión de frenos y dirección</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Corrección de defectos detectados</span>
                    </li>
                  </ul>
                  <Button>Solicitar Cita Pre-ITV</Button>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 rounded-lg bg-primary/10 px-3 py-1">
                    <Gauge className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Neumáticos</span>
                  </div>
                  <h2 className="text-3xl font-bold">Servicio de Neumáticos</h2>
                  <p className="text-gray-500 md:text-lg/relaxed">
                    Ofrecemos un servicio completo de neumáticos para todo tipo de vehículos, con las mejores marcas del
                    mercado y precios competitivos.
                  </p>
                  <ul className="grid gap-2 text-gray-500">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Cambio de neumáticos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Equilibrado de ruedas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Alineación de la dirección</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Reparación de pinchazos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Asesoramiento personalizado</span>
                    </li>
                  </ul>
                  <Button>Ver Catálogo de Neumáticos</Button>
                </div>
                <div className="aspect-video overflow-hidden rounded-xl">
                  <img
                    alt="Servicio de neumáticos"
                    className="object-cover w-full h-full"
                    src="/placeholder.svg?height=500&width=800"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Otros Servicios</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Además de nuestros servicios principales, también ofrecemos:
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Clock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Mantenimiento Preventivo</h3>
                <p className="text-center text-gray-500">
                  Servicios de mantenimiento programado para alargar la vida de su vehículo y prevenir averías costosas.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Electricidad y Electrónica</h3>
                <p className="text-center text-gray-500">
                  Diagnóstico y reparación de sistemas eléctricos y electrónicos del automóvil.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Battery className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Baterías</h3>
                <p className="text-center text-gray-500">
                  Venta e instalación de baterías de todas las marcas con garantía.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Car className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Aire Acondicionado</h3>
                <p className="text-center text-gray-500">
                  Recarga, desinfección y reparación de sistemas de climatización.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Cpu className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Diagnosis Electrónica</h3>
                <p className="text-center text-gray-500">
                  Diagnóstico avanzado mediante equipos electrónicos de última generación.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
                <Wrench className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Reparaciones Rápidas</h3>
                <p className="text-center text-gray-500">Servicio rápido para pequeñas reparaciones sin cita previa.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">¿Necesita un Servicio Específico?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed">
                Contacte con nosotros para cualquier consulta o para solicitar un presupuesto sin compromiso.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contacto">Contactar Ahora</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contacto">Solicitar Presupuesto</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

