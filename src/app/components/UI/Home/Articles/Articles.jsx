import SlideUp from "@/app/components/common/animations/SlideUp";
import ButtonOutline from "@/app/components/common/Button/ButtonOutline";
import ArticleCard from "./ArticleCard";
import Link from "next/link";

const Articles = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
      next: { revalidate: 30 },
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/section-description`,
      {
        next: { revalidate: 30 },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to fetch section-description data");
    }
    const sectionData = await response.json();

    const sectionsItem = sectionData?.data?.data?.find(
      (item) => item?.title === "Insights & Articles"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch article data");
    }

    const datas = await res.json();
    const articlesItem = datas?.data?.data || [];

    return (
      <div className="md:my-32 my-20">
        <div className="container">
          {/* Title Section */}
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

          {/* Description */}
          <SlideUp>
            {sectionsItem && (
              <p className="mt-10 text-primary-base md:w-3/4  mx-auto text-center font-semibold md:text-3xl text-xl">
                {sectionsItem?.description}
              </p>
            )}
          </SlideUp>

          {/* Articles Grid */}
          <div className="mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {articlesItem.length > 0 ? (
              articlesItem.map((item, index) => (
                <ArticleCard key={index} item={item} delay={0.4 * index} />
              ))
            ) : (
              <div className="col-span-2 text-center text-gray-500 text-xl py-20">
                Coming Soon — project content will be available shortly.
              </div>
            )}
          </div>

          {/* View All Button */}
          <div className="mt-10 flex items-center justify-center">
            <Link href="/articles">
              <ButtonOutline content="View All Articles" />
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Articles fetch failed:", error);
    return (
      <div className="md:pt-36 pt-28 text-center text-red-500 text-lg py-20">
        Oops! Something went wrong while loading the articles section.
      </div>
    );
  }
};

export default Articles;
