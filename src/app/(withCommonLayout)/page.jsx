import DigitalFuture from "../components/UI/Home/DigitalFuture/DigitalFuture";
import EducationAndExperience from "../components/UI/Home/EducationAndExperience/EducationAndExperience";
import Hero from "../components/UI/Home/Hero/Hero";
import HomeAbout from "../components/UI/Home/HomeAbout/HomeAbout";
import Project from "../components/UI/Home/Project/Project";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <EducationAndExperience />
      <Project />
      <DigitalFuture />
    </>
  );
}
