"use client";

import { useState } from "react";

export default function FormularioContacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  });

  const [estado, setEstado] = useState<"idle" | "enviando" | "enviado" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEstado("enviando");

    const response = await fetch("https://formspree.io/f/mblgplaw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setEstado("enviado");
      setFormData({
        nombre: "",
        apellidos: "",
        email: "",
        telefono: "",
        asunto: "",
        mensaje: "",
      });
    } else {
      setEstado("error");
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6">
      {estado === "enviado" ? (
        <div className="text-green-600 font-medium text-center">
          ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="nombre" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                className="h-10 w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Introduzca su nombre"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="apellidos" className="text-sm font-medium">
                Apellidos
              </label>
              <input
                id="apellidos"
                name="apellidos"
                required
                value={formData.apellidos}
                onChange={handleChange}
                className="h-10 w-full rounded-md border px-3 py-2 text-sm"
                placeholder="Introduzca sus apellidos"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="h-10 w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Introduzca su email"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="telefono" className="text-sm font-medium">
              Teléfono
            </label>
            <input
              id="telefono"
              name="telefono"
              type="number"
              value={formData.telefono}
              onChange={handleChange}
              className="h-10 w-full rounded-md border px-3 py-2 text-sm"
              placeholder="Introduzca su teléfono"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="asunto" className="text-sm font-medium">
              Asunto
            </label>
            <select
              id="asunto"
              name="asunto"
              required
              value={formData.asunto}
              onChange={handleChange}
              className="h-10 w-full rounded-md border px-3 py-2 text-sm"
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
            <label htmlFor="mensaje" className="text-sm font-medium">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              value={formData.mensaje}
              onChange={handleChange}
              className="input-style min-h-[120px] h-10 w-full rounded-md border px-3 py-2 text-sm"
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
              <a href="/politica-privacidad" className="text-primary hover:underline">
                política de privacidad
              </a>
            </label>
          </div>

          <button
            type="submit"
            disabled={estado === "enviando"}
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary/90 transition"
          >
            {estado === "enviando" ? "Enviando..." : "Enviar Mensaje"}
          </button>

          {estado === "error" && (
            <p className="text-sm text-red-500 text-center">
              ❌ Hubo un error al enviar el mensaje. Intente de nuevo.
            </p>
          )}
        </form>
      )}
    </div>
  );
}
