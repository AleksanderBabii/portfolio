import HeroSection from "../components/Hero/HeroSection";
import SelectedWork from "../components/SelectedWork/SelectedWork";
import About from "../components/About/About.tsx";
import ArtSkills from "../components/Skills/Art/ArtSkills.tsx";
import TechnicalSkills from "../components/Skills/TechSkills/TechSkills.tsx";
import Contact from "../components/Contact/Contact.tsx";



function Home() {
  return (
    <>
      <main className="home">
        <HeroSection />
        <SelectedWork />
        <About />
        <ArtSkills />
        <TechnicalSkills />
        <Contact />
      </main>
    </>
  );
}

export default Home;
