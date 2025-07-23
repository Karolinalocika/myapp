export default function SocialProof() {
  const feedback = [
    {
      name: "Petra Nováková",
      role: "Zakladatelka značky PetArt",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      text: "Spolupráce byla fantastická. Kresba pro naše produkty se skvěle hodila a zákazníci ji milují!",
    },
    {
      name: "Tomáš Havel",
      role: "Marketingový manažer GolfClub CZ",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "Díky profesionálním návrhům jsme posílili identitu značky a zaujali nové klienty.",
    },
    {
      name: "Lucie Bílá",
      role: "Tvůrkyně obsahu na IG",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
      text: "Grafické posty pro sociální sítě mi šetří čas a skvěle reprezentují moji značku.",
    },
  ];

  return (
    <section className="bg-[#f5fbff] py-16 px-4 md:px-8" id="reference">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
        Zkušenosti mých klientů
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {feedback.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#b3e0ff] p-6 shadow-md hover:shadow-lg transition-shadow"
          >
            <p className="text-neutral-800 mb-4 italic">"{item.text}"</p>
            <div className="flex items-center mt-6 space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full object-cover border border-[#1e1e1e]"
              />
              <div>
                <p className="text-sm font-semibold text-neutral-900">{item.name}</p>
                <p className="text-xs text-neutral-500">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
