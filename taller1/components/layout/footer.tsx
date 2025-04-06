import Link from 'next/link';
{/*
import Instagram from "@/lib/icons/instagram"
import Facebook from "@/lib/icons/facebook"
*/}

export function Footer() {
    return (
        <footer className="w-full border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-center text-sm leading-loose text-gray-500 md:text-left">
                    © 2025 VEYMAQ. Todos los derechos reservados.
                </p>
                {/*
  <div className="w-32">
    <p className="w-8">
      <Link href="https://www.instagram.com/veymaq/" target="_blank">
        <Instagram />
      </Link>
    </p>
    <p className="w-8">
      <Link href="https://www.facebook.com/veymaq.vehiculosmaquinaria?locale=es_ES" target="_blank">
        <Facebook />
      </Link>
    </p>
  </div>
  */}
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
    );
}   