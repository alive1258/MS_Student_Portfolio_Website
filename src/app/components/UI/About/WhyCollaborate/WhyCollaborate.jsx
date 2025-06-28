import SlideUp from "@/app/components/common/animations/SlideUp";
import ChooseCard from "./ChooseCard";
import { cardData } from "@/utils/fakeData/cardData";

const WhyCollaborate = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/collaborate`, {
      next: { revalidate: 30 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch collaborate data");
    }

    const datas = await res.json();
    const collaborateItems = datas?.data?.data;

    // Merge fetched data with design cardData
    const styledItems = collaborateItems?.map((item, index) => ({
      ...item,
      ...cardData[index % cardData.length], // cycle through cardData if more items
    }));

    return (
      <div className="bg-[#18181B]">
        <div className="container py-20">
          <SlideUp>
            <h1 className="md:text-[40px] text-[34px] font-satoshi font-bold text-[#FFF] text-center mx-auto">
              Why Collaborate with Sayem on <br /> Power Electronics Research
            </h1>
          </SlideUp>

          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {styledItems?.map((card, index) => (
              <ChooseCard
                card={card}
                index={index}
                key={card.id}
                delay={index * 0.4}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("WhyCollaborate fetch failed:", error);
    return (
      <div className="md:pt-36 pt-28 text-center text-red-500 text-lg py-20">
        Oops! Something went wrong while loading the section.
      </div>
    );
  }
};

export default WhyCollaborate;
