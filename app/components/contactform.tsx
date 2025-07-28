"use client";

import { useState } from "react";
import { Mail, Phone } from "react-feather";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error("Chyba:", err);
      setFormStatus("error");
    }
  };

  return (
    <section
      className="bg-[#21557E] text-white min-h-screen flex flex-col items-center justify-center px-4 md:px-8"
      id="kontakt"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Kontaktujte mě
      </h1>

      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-10 items-center py-16">
        {/* Levá část – profil a kontakt */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <img
            src="/shepardu.svg"
            alt="Karolína Jurečka Krobová"
            className="w-32 h-32 rounded-full object-cover border-4 border-white"
          />
          <h2 className="text-2xl md:text-3xl font-bold">
            Karolína Jurečka Krobová
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Phone size={16} />
            <span>+420 777 123 456</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <Mail size={16} />
            <span>karolina@email.cz</span>
          </div>
        </div>

        {/* Pravá část – formulář */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm mb-1">Jméno</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-700 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Vaše jméno"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-700 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="vas@email.cz"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Zpráva</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-700 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              placeholder="Vaše zpráva..."
              required
            />
          </div>
          <button
            type="submit"
            disabled={formStatus === "loading"}
            className="bg-blue-400 hover:bg-blue-500 text-black font-semibold py-2 px-6 rounded transition-colors disabled:opacity-50"
          >
            {formStatus === "loading" ? "Odesílání..." : "Odeslat"}
          </button>

          {formStatus === "success" && (
            <p className="text-green-400">
              Zpráva byla úspěšně odeslána.
            </p>
          )}
          {formStatus === "error" && (
            <p className="text-red-400">
              Došlo k chybě. Zkuste to prosím znovu.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
