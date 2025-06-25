import React from "react";
import Banner from "./Banner/Banner";
import HomeAbout from "../Home/HomeAbout/HomeAbout";
import EducationAndExperience from "../Home/EducationAndExperience/EducationAndExperience";
import DigitalFuture from "../Home/DigitalFuture/DigitalFuture";
import Contact from "../Home/Contact/Contact";
import MyHobby from "./MyHobby/MyHobby";
import WhyCollaborate from "./WhyCollaborate/WhyCollaborate";
import ProfessionalJourney from "./ProfessionalJourney/ProfessionalJourney";
import Snapshots from "./Snapshots/Snapshots";

const About = () => {
  return (
    <>
      <Banner />
      <HomeAbout />
      <EducationAndExperience />
      <ProfessionalJourney />
      <MyHobby />
      <WhyCollaborate />
      <Snapshots />
      <Contact />
      <DigitalFuture />
    </>
  );
};

export default About;
