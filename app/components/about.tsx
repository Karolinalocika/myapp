import React from "react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white px-6">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">O mně</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Jmenuji se Karolína a tvořím ilustrace, které spojují emoci, funkčnost a hravost.
          Kreslení je pro mě nejen práce, ale způsob, jak vyprávět příběhy, jak komunikovat.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Obrázek maskota / autoportrét */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/shepardu.svg" // nahraď reálným obrázkem
            alt="Maskot nebo autoportrét"
            className="w-72 h-72 object-contain rounded-full border-8 border-white shadow-xl bg-white"
          />
        </div>

        {/* Textový profil */}
        <div className="text-left">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ilustrátorka s vášní pro detail a dojem</h3>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Od dětství jsem si kreslila, co mě po světě zaujalo, nebo jak by mohlo vypadat v mých očích. Dnes to hezké a pozitivní pomáhám vytvářet ostatním – značkám, podnikatelům, kulturním projektům i jednotlivcům.
          </p>

          <h4 className="text-xl font-medium text-gray-800 mb-2 mt-6">Co tvořím</h4>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Ilustrace na míru – od logotypů po plakáty</li>
            <li>Statický obsah pro sociální sítě </li>
            <li>Ručně kreslené prvky pro weby, e-shopy a blogy</li>
            <li>Originální vizuální identita a moodboardy</li>
          </ul>

          <h4 className="text-xl font-medium text-gray-800 mb-2 mt-6">Můj přístup</h4>
          <p className="text-gray-700 leading-relaxed">
            Každý projekt beru osobně. Pracuji s respektem k zadání, ale nebojím se navrhnout nové úhly pohledu. 
            Věřím, že vizuál není jen “hezký obrázek”, ale nositel atmosféry, hodnot a emoce.
          </p>
        </div>
      </div>

      {/* Podsekce / výzva k akci */}
      <div className="max-w-4xl mx-auto text-center mt-20">
        <p className="text-lg text-gray-600 mb-6">
          Máte projekt, který by ožil díky ilustraci? Nebo jen chcete vytvořit něco výjimečného?
        </p>
        <a
          href="#contact"
          className="inline-block bg-black text-white font-semibold py-3 px-8 rounded-full hover:bg-gray-800 transition"
        >
          Napište mi
        </a>
      </div>
    </section>
  );
}
