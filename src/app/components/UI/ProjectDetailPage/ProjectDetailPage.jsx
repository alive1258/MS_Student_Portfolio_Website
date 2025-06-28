import React from "react";
import Banner from "../About/Banner/Banner";
import ProjectDetails from "./ProjectDetails";

const ProjectDetailPage = ({ singleData }) => {
  return (
    <div>
      <Banner />
      <ProjectDetails singleData={singleData} />
    </div>
  );
};

export default ProjectDetailPage;
