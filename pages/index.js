import About from "@components/About";
import Contact from "@components/Contact";
import Hero from "@components/Hero";
import ParallaxSection from "@components/ParallaxSection";
import Services from "@components/Services";
import Work from "@components/Work";


export default function Home() {
  return (
    <>
      <div>
        <Hero />
        <About />
        <ParallaxSection>work</ParallaxSection>
        <Work />
        <ParallaxSection>about me</ParallaxSection>
        <Services />
        <ParallaxSection>contact</ParallaxSection>
        <Contact />
      </div>
    </>
  );
}
