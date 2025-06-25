import SlideUp from "@/app/components/common/animations/SlideUp";
import Button from "@/app/components/common/Button/Button";
import ButtonOutline from "@/app/components/common/Button/ButtonOutline";
import Image from "next/image";
import Link from "next/link";

const Articles = () => {
  return (
    <div className=" md:my-32 my-20">
      <div className="container ">
        <SlideUp className="flex items-center justify-center space-x-4">
          <div
            className="mt-1"
            style={{
              width: "64px",
              height: "24px",
              background:
                "linear-gradient(270deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
            }}
          ></div>
          <h2 className="text-primary-base text-2xl font-bold">
            Insights & Articles
          </h2>
          <div
            className="mt-1"
            style={{
              width: "64px",
              height: "24px",
              background:
                "linear-gradient(90deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
            }}
          ></div>
        </SlideUp>
        <SlideUp>
          <p className="mt-10 text-primary-base text-center font-semibold md:text-3xl text-2xl">
            Sharing thoughts, research experiences, and lessons learned <br />{" "}
            in the world of power electronics and renewable energy.
          </p>
        </SlideUp>

        <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-6">
          <div className="group border border-[#E0E0E0] cursor-pointer bg-[#fff] p-4 rounded-2xl flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl">
            {/* START BLOG IMAGE */}
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                className="w-full h-[245px] rounded-2xl shadow-lg hover:scale-110 duration-500 transition-transform ease-[cubic-bezier(0.4,0,0.2,1)] object-cover"
                src="/assets/images/p1.png"
                alt={`blogtitle`}
                height={245}
                width={392}
              />
            </div>
            {/* END BLOG IMAGE */}

            {/* START BLOG TITLE AND EXCERPT */}
            <div className="md:mt-6 mt-4">
              <Link href="/">
                <h2 className="text-primary-base group-hover:text-[#3B82F6] font-satoshi font-bold md:text-2xl text-[20px] capitalize">
                  blog title START BLOG TITLE AND EXCERPT
                </h2>
              </Link>
              <p className="md:mt-6 mt-4 text-[#464646] text-[16px] ">
                blog?.excerpt Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Esse, nostrum!
              </p>
            </div>
            {/* START BLOG CATEGORY BADGE */}
            <div className="md:mt-6 mt-4 flex justify-between items-center">
              <h3
                className={`rounded-[99px] w-fit px-3 py-1.5 border text-sm `}
              >
                blogcategory
              </h3>
              <p>April 30, 2025</p>
            </div>
            {/* END BLOG CATEGORY BADGE */}
            {/* END BLOG TITLE AND EXCERPT */}

            {/* START BLOG AUTHOR AND READING TIME */}
            <div className="mt-auto md:pt-6 pt-4">
              <div className="flex items-center justify-center">
                <Button content="View Details" />
              </div>
            </div>
            {/* START BLOG AUTHOR AND READING TIME */}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <ButtonOutline content="View All Articles" />
        </div>
      </div>
    </div>
  );
};

export default Articles;
