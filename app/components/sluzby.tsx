import { FaPaintBrush, FaFeatherAlt, FaFileAlt, FaInstagram } from "react-icons/fa";

const sluzby = [
  {
    title: "Kresba na míru",
    desc: "Originální kresby zvířat nebo osob dle přání.",
    icon: <FaFeatherAlt className="text-4xl text-[#0F828C]" />,
    image: "/images/boydrawingwithcrayon.webp",
  },
  {
    title: "Logo a identita",
    desc: "Vytvoření loga a uceleného vzhledu vaší značky.",
    icon: <FaPaintBrush className="text-4xl text-[#0F828C]" />,
    image: "/images/journeyguidedestinationlocationdirection.webp",
  },
  {
    title: "Tiskové materiály",
    desc: "Letáky, vizitky, brožury a další tiskové produkty.",
    icon: <FaFileAlt className="text-4xl text-[#0F828C]" />,
    image: "/images/englishbookrestingtableworkingspace.webp",
  },
  {
    title: "Online příspěvky",
    desc: "Design Instagramových a jiných online postů.",
    icon: <FaInstagram className="text-4xl text-[#0F828C]" />,
    image: "/images/handholdingsmartphonesocialmediaconcept.webp",
  },
];

export default function Sluzby() {
  return (
    <section className="bg-[#F7FAFC] py-16 px-4 md:px-8" id="sluzby">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#065084] mb-12">
        Co vám mohu nabídnout
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {sluzby.map((sluzba, index) => (
          <div
            key={index}
            className="bg-[#78B9B5] border border-[#0F828C] p-6 rounded-sm shadow-lg hover:shadow-xl transition duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              {sluzba.icon}
              <h3 className="text-xl font-semibold text-[#065084]">{sluzba.title}</h3>
              <p className="text-sm text-[#320A6B]">{sluzba.desc}</p>
              <img
                src={sluzba.image}
                alt={sluzba.title}
                className="w-36 h-36 object-cover border border-white shadow rounded-none"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
