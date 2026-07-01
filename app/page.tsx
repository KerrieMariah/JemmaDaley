import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BestKnownFor from "@/components/BestKnownFor";
import Affiliations from "@/components/Affiliations";
import About from "@/components/About";
import Quote from "@/components/Quote";
import Services from "@/components/Services";
import Insights from "@/components/Insights";
import Testimonials from "@/components/Testimonials";
import Consultation from "@/components/Consultation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BestKnownFor />
        <Affiliations />
        <About />
        <Quote />
        <Services />
        <Insights />
        <Testimonials />
        <Consultation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
