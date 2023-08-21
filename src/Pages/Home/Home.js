import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Projects from "../../Components/Projects/Projects";
import Skills from "../../Components/My Skills/Skills";
import Contact from "../../Components/Contact/Contact";
import RelatedLinks from "../../Components/RelatedLinks/RelatedLinks";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <RelatedLinks />
    </>
  );
};

export default Home;
