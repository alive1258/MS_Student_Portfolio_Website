import SlideUp from "@/app/components/common/animations/SlideUp";
import Button from "@/app/components/common/Button/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleCard = ({ item, delay = 0 }) => {
  return (
    <SlideUp delay={delay}>
      <div className="group border border-gray-200 cursor-pointer bg-[#fff] p-4 rounded-2xl flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl">
        {/* BLOG IMAGE */}
        <div className="relative overflow-hidden rounded-2xl">
          <Image
            className="w-full h-[245px] rounded-2xl shadow-lg hover:scale-110 duration-500 transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] object-cover"
            src={
              process?.env?.NEXT_PUBLIC_IMAGE_URL +
              item?.thumbnail +
              `?v=${new Date().getTime()}`
            }
            alt={item?.article_title}
            height={245}
            width={392}
          />
        </div>

        {/* CATEGORY */}
        <div className="md:mt-6 mt-4 flex justify-between items-center">
          <div className="rounded-[99px] w-fit px-3 py-1.5 border text-sm">
            {item?.articleCategory?.name}
          </div>
        </div>

        {/* TITLE & EXCERPT */}
        <div className="md:mt-6 mt-4">
          <Link href={`/articles/${item.slug}`} className="group">
            <h2 className="text-primary-base group-hover:text-[#3B82F6] font-satoshi font-bold md:text-2xl text-[20px] capitalize">
              {item?.article_title}
            </h2>
          </Link>
          <p className="md:mt-6 mt-4 text-[#464646] text-[16px]">
            {item.article_description}
          </p>
        </div>

        {/* BUTTON */}
        <div className="mt-auto md:pt-6 pt-4">
          <div className="flex items-center justify-center">
            <Link href={`/articles/${item.slug}`}>
              <Button content="View Details" />
            </Link>
          </div>
        </div>
      </div>
    </SlideUp>
  );
};

export default ArticleCard;
