import { Mail, Phone } from "react-feather";

export default function ContactForm() {
  return (
    <section className="bg-neutral-900 text-white py-16 px-4 md:px-8" id="kontakt">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Levá část – profil a kontakt */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg" // můžeš nahradit vlastní URL
            alt="Karolína Jurečka Krobová"
            className="w-32 h-32 rounded-full object-cover border-4 border-white"
          />
          <h2 className="text-2xl md:text-3xl font-bold">Karolína Jurečka Krobová</h2>
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
        <form className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Jméno</label>
            <input
              type="text"
              className="w-full p-3 rounded border border-gray-700 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Vaše jméno"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">E-mail</label>
            <input
              type="email"
              className="w-full p-3 rounded border border-gray-700 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="vas@email.cz"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Zpráva</label>
            <textarea
              className="w-full p-3 rounded border border-gray-700 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              placeholder="Vaše zpráva..."
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-500 text-black font-semibold py-2 px-6 rounded transition-colors"
          >
            Odeslat
          </button>
        </form>
      </div>
    </section>
  );
}
