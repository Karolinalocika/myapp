import React from "react";

type WorkCategory = {
  title: string;
  works: {
    title: string;
    img: string;
  }[];
};

const portfolioData: WorkCategory[] = [
  {
    title: "Ilustrace na míru",
    works: [
      { title: "Portrét", img: "https://via.placeholder.com/600x400?text=Portrét" },
      { title: "Zvířecí ilustrace", img: "https://via.placeholder.com/600x400?text=Zvíře" },
      { title: "Postava", img: "https://via.placeholder.com/600x400?text=Postava" },
      { title: "Scéna", img: "https://via.placeholder.com/600x400?text=Scéna" },
    ],
  },
  {
    title: "Tvorba vizuální identity",
    works: [
      { title: "Logo návrh", img: "https://via.placeholder.com/600x400?text=Logo" },
      { title: "Barevná paleta", img: "https://via.placeholder.com/600x400?text=Paleta" },
      { title: "Typografie", img: "https://via.placeholder.com/600x400?text=Fonty" },
      { title: "Branding", img: "https://via.placeholder.com/600x400?text=Brand" },
    ],
  },
  {
    title: "Obsah pro sociální sítě",
    works: [
      { title: "Instagram post", img: "https://via.placeholder.com/600x400?text=IG+Post" },
      { title: "Stories", img: "https://via.placeholder.com/600x400?text=Stories" },
      { title: "Reklamní banner", img: "https://via.placeholder.com/600x400?text=Banner" },
      { title: "Ilustrovaný citát", img: "https://via.placeholder.com/600x400?text=Citát" },
    ],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-gray-800">
          Ukázky Prací
        </h2>

        {portfolioData.map((category, catIndex) => (
          <div key={catIndex} className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700">
              {category.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.works.map((work, workIndex) => (
                <div
                  key={workIndex}
                  className="bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
                >
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <p className="font-medium text-gray-800">{work.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
