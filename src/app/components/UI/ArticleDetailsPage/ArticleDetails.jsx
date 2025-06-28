import React from "react";
import Image from "next/image";
import ZoomIn from "../../common/animations/ZoomIn";
import DetailOfArticle from "./DetailOfArticle";

const ArticleDetails = ({ singleData }) => {
  const article = singleData?.data;

  return (
    <div className="container my-12">
      <div className="bg-[#F5F7FA] border border-[#E0E0E0]  rounded-xl p-6">
        <ZoomIn className="rounded-2xl">
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGE_URL +
              article?.thumbnail +
              `?v=${new Date().getTime()}`
            }
            alt={article.article_title}
            width={900} // real image width in px
            height={600} // real image height in px
            quality={90} // good balance of quality and size
            className="object-cover w-full h-[600px] rounded-2xl  "
          />
        </ZoomIn>
        <div className="mt-8">
          <div>
            <h1 className="text-primary-muted text-3xl font-bold">
              {article.article_title}
            </h1>
            <p className="mt-6 text-[20px] text-[#7C7C7C]">
              {article?.article_description}
            </p>

            <DetailOfArticle articleId={article?.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
