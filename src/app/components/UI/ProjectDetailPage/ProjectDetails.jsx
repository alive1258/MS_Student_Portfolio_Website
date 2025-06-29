import React from "react";
import Image from "next/image";
import ZoomIn from "../../common/animations/ZoomIn";
import DetailOfProject from "./DetailOfProject";

const ProjectDetails = ({ singleData }) => {
  const project = singleData?.data;

  return (
    <div className="container my-12">
      <div className="bg-[#F5F7FA] border border-[#E0E0E0]  rounded-xl p-3 md:p-6">
        <ZoomIn className="rounded-2xl">
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGE_URL +
              project?.thumbnail +
              `?v=${new Date().getTime()}`
            }
            alt={project.project_title}
            width={900} // real image width in px
            height={600} // real image height in px
            quality={90} // good balance of quality and size
            className="object-cover w-full  md:h-[600px] rounded-2xl  "
          />
        </ZoomIn>
        <div className="mt-8">
          <div>
            <h1 className="text-primary-muted md:text-3xl text-2xl font-bold">
              {project.project_title}
            </h1>
            <p className="mt-6 text-[20px] text-[#7C7C7C]">
              {project?.project_description}
            </p>

            <DetailOfProject projectId={project?.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
