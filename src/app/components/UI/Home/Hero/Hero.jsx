import SlideLeft from "@/app/components/common/animations/SlideLeft";
import ZoomIn from "@/app/components/common/animations/ZoomIn";
import Button from "@/app/components/common/Button/Button";
import ButtonOutline from "@/app/components/common/Button/ButtonOutline";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="md:pt-36 pt-28 relative h-full w-full  overflow-hidden">
      <div className="absolute md:block hidden blurred-blue-circle"></div>
      <div
        className="absolute rounded-full opacity-40 blur-[150px] bg-[#E9C12F]"
        // 952fe9
        style={{
          width: "593.727px",
          height: "531.226px",
          right: "-72.727px",
          top: "-345.17px",
        }}
      ></div>

      {/* Blurred Effect - Blue Circle */}
      <div
        className="absolute rounded-full opacity-[0.38] blur-[125px] bg-[#5158DA] pointer-events-none"
        style={{
          width: "699.729px",
          height: "626.07px",
          left: "152.271px",
          bottom: "-477.762px",
        }}
      ></div>

      {/* Blurred Effect - Yellow Circle */}
      <div className="grid md:grid-cols-2 grid-cols-1 container md:gap-20 gap-10  ">
        {/* left section  */}
        <div className="flex justify-center items-center">
          <div className="md:mt-6 ">
            <p>Hi 👋, I'm Abu Sayem — </p>

            <h2 className="md:text-4xl text-primary-base text-2xl font-bold pt-4">
              MS Student &
            </h2>
            <div className="pt-8 text-lg">
              <SlideLeft delay={0.4}>
                <h2 className="text-[#3479FD] md:text-4xl text-2xl font-bold">
                  Power Electronics Researcher
                </h2>
                <p className="text-secondary-base md:text-lg text-base mt-8">
                  with over 2 years of hands-on experience, I specialize in
                  building modern, responsive, and scalable web applications.
                  With a strong foundation in both front-end and back-end
                  technologies, I bring a balanced approach to design and
                  functionality.
                </p>
              </SlideLeft>
            </div>

            <div className="md:mt-10 mt-6 flex items-center gap-6">
              <Button content="View Our Work" />
              <ButtonOutline content="Download Cv" />
            </div>
          </div>
        </div>

        <ZoomIn>
          <div className=" rounded-2xl ">
            <div className="z-20 p-1.5 relative overflow-hidden rounded-2xl cursor-pointer">
              <Image
                src="/assets/images/sayem_image.png"
                alt="zamirulPic"
                width={400}
                height={700}
                className="w-full  object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>
          </div>
        </ZoomIn>
      </div>
    </div>
  );
};

export default Hero;
