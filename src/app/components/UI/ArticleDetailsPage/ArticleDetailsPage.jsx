import React from "react";
import Banner from "../About/Banner/Banner";
import ArticleDetails from "./ArticleDetails";

const ArticleDetailsPage = ({ singleData }) => {
  return (
    <div>
      <Banner />
      <ArticleDetails singleData={singleData} />
    </div>
  );
};

export default ArticleDetailsPage;
