import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero"; // <- Opravený import
import Sluzby from "@/app/components/sluzby";
import Footer from "@/app/components/footer";
import SocialProof from "./components/social";
import ContactForm from "@/app/components/contactform";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sluzby />
      <SocialProof />
      <ContactForm />
      <Footer />
    </>
  );
}
