import Articles from "../components/UI/Home/Articles/Articles";
import Contact from "../components/UI/Home/Contact/Contact";
import DigitalFuture from "../components/UI/Home/DigitalFuture/DigitalFuture";
import EducationAndExperience from "../components/UI/Home/EducationAndExperience/EducationAndExperience";
import ExtraCurriculum from "../components/UI/Home/ExtraCurriculum/ExtraCurriculum";
import Hero from "../components/UI/Home/Hero/Hero";
import HomeAbout from "../components/UI/Home/HomeAbout/HomeAbout";
import Project from "../components/UI/Home/Project/Project";
import ResearchAndPublications from "../components/UI/Home/ResearchAndPublications/ResearchAndPublications";
import Skills from "../components/UI/Home/Skills/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <EducationAndExperience />
      <Project />
      <ResearchAndPublications />
      <Skills />
      <ExtraCurriculum />
      <Articles />
      <Contact />
      <DigitalFuture />
    </>
  );
}
