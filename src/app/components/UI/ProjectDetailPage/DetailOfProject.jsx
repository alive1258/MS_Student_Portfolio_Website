import React from "react";
import Details from "./Details";

const DetailOfProject = async ({ projectId }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/project-details?project_id=${projectId}`,

      {
        next: { revalidate: 30 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch project details");
    }

    const detailsData = await response.json();
    const projectDetails = detailsData?.data?.data;

    return (
      <div className="p-4">
        {projectDetails?.length > 0 ? (
          <ul className="list-disc pl-5 space-y-2">
            {projectDetails?.map((detail) => (
              <Details key={detail.id} detail={detail} />
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No details found for this project.</p>
        )}
      </div>
    );
  } catch (error) {
    console.error("Project detail fetch failed:", error);
    return (
      <div className="md:pt-36 pt-28 text-center text-red-500 text-lg py-20">
        Oops! Something went wrong while loading the project details.
      </div>
    );
  }
};

export default DetailOfProject;
