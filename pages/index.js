
import Contact from "@components/Contact";
import FrontGallery from "@components/FrontGallery";
import Hero from "@components/Hero";
import ParallaxSection from "@components/ParallaxSection";
import Services from "@components/Services";



export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <FrontGallery />
        <ParallaxSection>about</ParallaxSection>
        <Services />
        <ParallaxSection>contact</ParallaxSection>
        <Contact />
      </div>
    </>
  );
}
