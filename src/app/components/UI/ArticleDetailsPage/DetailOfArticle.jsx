import React from "react";
import DetailArt from "./DetailArt";

const DetailOfArticle = async ({ articleId }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/article-details?article_id=${articleId}`,

      {
        next: { revalidate: 30 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch article details");
    }

    const detailsData = await response.json();
    const articleDetails = detailsData?.data?.data;

    return (
      <div className="md:p-4">
        {articleDetails?.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2">
            {articleDetails?.map((detail) => (
              <DetailArt key={detail.id} detail={detail} />
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No details found for this article.</p>
        )}
      </div>
    );
  } catch (error) {
    console.error("article detail fetch failed:", error);
    return (
      <div className="md:pt-36 pt-28 text-center text-red-500 text-lg py-20">
        Oops! Something went wrong while loading the article details.
      </div>
    );
  }
};

export default DetailOfArticle;
