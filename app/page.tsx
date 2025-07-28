import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Sluzby from "@/app/components/sluzby";
import Footer from "@/app/components/footer";
import SocialProof from "./components/social";
import ContactForm from "@/app/components/contactform";

export default function Home() {
  return (
    <>
      <Navbar />      {/* 1. Navigace - vždy nahoře */}
      <Hero />        {/* 2. Hlavní hero sekce */}
      <Sluzby />      {/* 3. Služby - co nabízíte */}
      <SocialProof /> {/* 4. Sociální důkazy/reference */}
      <ContactForm /> {/* 5. Kontaktní formulář */}
      <Footer />      {/* 6. Zápatí - vždy dole */}
    </>
  );
}