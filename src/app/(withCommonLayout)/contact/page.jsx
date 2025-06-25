import Banner from "@/app/components/UI/About/Banner/Banner";
import ProfessionalJourney from "@/app/components/UI/About/ProfessionalJourney/ProfessionalJourney";
import Contact from "@/app/components/UI/Home/Contact/Contact";
import React from "react";

const page = () => {
  return (
    <div>
      <Banner />
      <ProfessionalJourney />
      <Contact />
    </div>
  );
};

export default page;
