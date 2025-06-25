import SlideUp from "@/app/components/common/animations/SlideUp";
import React from "react";

const Skills = () => {
  const progress = 90;
  return (
    <div className="bg-[#101828] md:mt-32 mt-20">
      <div className="container py-24">
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
          <h2 className="text-[#fff] text-2xl font-bold">Skills & Expertise</h2>
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
          <p className="mt-10 text-[#fff] text-center font-semibold md:text-3xl text-2xl">
            A snapshot of my core strengths in power electronics,
            <br /> simulations, research, and technical problem-solving.
          </p>
        </SlideUp>

        <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-6">
          {/* card 1  */}
          <div className="relative text-[#fff] overflow-hidden md:w-[424px] w-full  p-6 flex-col items-start gap-8 rounded-[24px] border border-white/20 bg-[linear-gradient(234deg,_rgba(199,215,245,0.10)_2.11%,_rgba(14,26,50,0.10)_50.54%,_rgba(210,225,255,0.10)_98.98%)] backdrop-blur-[4.5px]">
            {/* 🟦 Gradient Line at Top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#81CC1A] to-transparent" />

            <div>
              <h1 className="text-2xl font-semibold">Power Electronics</h1>
              <div className="mt-8">
                <div className="flex space-x-4">
                  <div
                    className="flex items-center justify-center w-14 h-14 p-4 aspect-square rounded-[99px] "
                    style={{
                      background:
                        "linear-gradient(180deg, #2B3957 0%, rgba(0, 0, 0, 0.00) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.6431 10.2427L15.8606 8.13991L13.7578 2.35741C13.6267 1.99654 13.3876 1.68477 13.0731 1.46447C12.7587 1.24416 12.384 1.12598 12 1.12598C11.616 1.12598 11.2414 1.24416 10.9269 1.46447C10.6124 1.68477 10.3734 1.99654 10.2422 2.35741L8.13939 8.13991L2.35689 10.2427C1.99602 10.3739 1.68426 10.6129 1.46395 10.9274C1.24364 11.2419 1.12546 11.6166 1.12546 12.0005C1.12546 12.3845 1.24364 12.7592 1.46395 13.0737C1.68426 13.3881 1.99602 13.6272 2.35689 13.7584L8.13939 15.8612L10.2422 21.6437C10.3734 22.0045 10.6124 22.3163 10.9269 22.5366C11.2414 22.7569 11.616 22.8751 12 22.8751C12.384 22.8751 12.7587 22.7569 13.0731 22.5366C13.3876 22.3163 13.6267 22.0045 13.7578 21.6437L15.8606 15.8612L21.6431 13.7584C22.004 13.6272 22.3158 13.3881 22.5361 13.0737C22.7564 12.7592 22.8746 12.3845 22.8746 12.0005C22.8746 11.6166 22.7564 11.2419 22.5361 10.9274C22.3158 10.6129 22.004 10.3739 21.6431 10.2427ZM14.5988 13.9262C14.4442 13.9823 14.3038 14.0717 14.1875 14.188C14.0712 14.3043 13.9818 14.4447 13.9256 14.5993L12 19.8952L10.0744 14.5993C10.0182 14.4447 9.92884 14.3043 9.81254 14.188C9.69624 14.0717 9.55585 13.9823 9.40127 13.9262L4.10533 12.0005L9.40127 10.0749C9.55585 10.0187 9.69624 9.92935 9.81254 9.81306C9.92884 9.69676 10.0182 9.55637 10.0744 9.40179L12 4.10585L13.9256 9.40179C13.9818 9.55637 14.0712 9.69676 14.1875 9.81306C14.3038 9.92935 14.4442 10.0187 14.5988 10.0749L19.8947 12.0005L14.5988 13.9262Z"
                        fill="#84CC16"
                      />
                    </svg>
                  </div>
                  {/* case 1 */}
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h1 className="tex-[16px] font-semibold">
                        Power Converter Design{" "}
                      </h1>
                    </div>
                    <div className="flex  space-x-4">
                      <div
                        className=" md:w-[245px] w-full  rounded-xl mt-4 h-4"
                        style={{
                          background: "rgba(1, 5, 13, 0.50",
                        }}
                      >
                        <div
                          className="
                         h-4 rounded-xl"
                          style={{
                            width: "86%",
                            background:
                              "linear-gradient(90deg, #84CC16 0%, #00E5FF 100%)",
                          }}
                        ></div>
                      </div>
                      <p className="tex-[16px] mt-2.5 font-semibold">83%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex space-x-4">
                  <div
                    className="flex items-center justify-center w-14 h-14 p-4 aspect-square rounded-[99px] "
                    style={{
                      background:
                        "linear-gradient(180deg, #2B3957 0%, rgba(0, 0, 0, 0.00) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.6431 10.2427L15.8606 8.13991L13.7578 2.35741C13.6267 1.99654 13.3876 1.68477 13.0731 1.46447C12.7587 1.24416 12.384 1.12598 12 1.12598C11.616 1.12598 11.2414 1.24416 10.9269 1.46447C10.6124 1.68477 10.3734 1.99654 10.2422 2.35741L8.13939 8.13991L2.35689 10.2427C1.99602 10.3739 1.68426 10.6129 1.46395 10.9274C1.24364 11.2419 1.12546 11.6166 1.12546 12.0005C1.12546 12.3845 1.24364 12.7592 1.46395 13.0737C1.68426 13.3881 1.99602 13.6272 2.35689 13.7584L8.13939 15.8612L10.2422 21.6437C10.3734 22.0045 10.6124 22.3163 10.9269 22.5366C11.2414 22.7569 11.616 22.8751 12 22.8751C12.384 22.8751 12.7587 22.7569 13.0731 22.5366C13.3876 22.3163 13.6267 22.0045 13.7578 21.6437L15.8606 15.8612L21.6431 13.7584C22.004 13.6272 22.3158 13.3881 22.5361 13.0737C22.7564 12.7592 22.8746 12.3845 22.8746 12.0005C22.8746 11.6166 22.7564 11.2419 22.5361 10.9274C22.3158 10.6129 22.004 10.3739 21.6431 10.2427ZM14.5988 13.9262C14.4442 13.9823 14.3038 14.0717 14.1875 14.188C14.0712 14.3043 13.9818 14.4447 13.9256 14.5993L12 19.8952L10.0744 14.5993C10.0182 14.4447 9.92884 14.3043 9.81254 14.188C9.69624 14.0717 9.55585 13.9823 9.40127 13.9262L4.10533 12.0005L9.40127 10.0749C9.55585 10.0187 9.69624 9.92935 9.81254 9.81306C9.92884 9.69676 10.0182 9.55637 10.0744 9.40179L12 4.10585L13.9256 9.40179C13.9818 9.55637 14.0712 9.69676 14.1875 9.81306C14.3038 9.92935 14.4442 10.0187 14.5988 10.0749L19.8947 12.0005L14.5988 13.9262Z"
                        fill="#84CC16"
                      />
                    </svg>
                  </div>
                  {/* case 1 */}
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h1 className="tex-[16px] font-semibold">
                        Power Converter Design{" "}
                      </h1>
                    </div>
                    <div className="flex  space-x-4">
                      <div
                        className=" md:w-[245px] w-full  rounded-xl mt-4 h-4"
                        style={{
                          background: "rgba(1, 5, 13, 0.50",
                        }}
                      >
                        <div
                          className="
                         h-4 rounded-xl"
                          style={{
                            width: "86%",
                            background:
                              "linear-gradient(90deg, #84CC16 0%, #00E5FF 100%)",
                          }}
                        ></div>
                      </div>
                      <p className="tex-[16px] mt-2.5 font-semibold">83%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <div className="flex space-x-4">
                  <div
                    className="flex items-center justify-center w-14 h-14 p-4 aspect-square rounded-[99px] "
                    style={{
                      background:
                        "linear-gradient(180deg, #2B3957 0%, rgba(0, 0, 0, 0.00) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.6431 10.2427L15.8606 8.13991L13.7578 2.35741C13.6267 1.99654 13.3876 1.68477 13.0731 1.46447C12.7587 1.24416 12.384 1.12598 12 1.12598C11.616 1.12598 11.2414 1.24416 10.9269 1.46447C10.6124 1.68477 10.3734 1.99654 10.2422 2.35741L8.13939 8.13991L2.35689 10.2427C1.99602 10.3739 1.68426 10.6129 1.46395 10.9274C1.24364 11.2419 1.12546 11.6166 1.12546 12.0005C1.12546 12.3845 1.24364 12.7592 1.46395 13.0737C1.68426 13.3881 1.99602 13.6272 2.35689 13.7584L8.13939 15.8612L10.2422 21.6437C10.3734 22.0045 10.6124 22.3163 10.9269 22.5366C11.2414 22.7569 11.616 22.8751 12 22.8751C12.384 22.8751 12.7587 22.7569 13.0731 22.5366C13.3876 22.3163 13.6267 22.0045 13.7578 21.6437L15.8606 15.8612L21.6431 13.7584C22.004 13.6272 22.3158 13.3881 22.5361 13.0737C22.7564 12.7592 22.8746 12.3845 22.8746 12.0005C22.8746 11.6166 22.7564 11.2419 22.5361 10.9274C22.3158 10.6129 22.004 10.3739 21.6431 10.2427ZM14.5988 13.9262C14.4442 13.9823 14.3038 14.0717 14.1875 14.188C14.0712 14.3043 13.9818 14.4447 13.9256 14.5993L12 19.8952L10.0744 14.5993C10.0182 14.4447 9.92884 14.3043 9.81254 14.188C9.69624 14.0717 9.55585 13.9823 9.40127 13.9262L4.10533 12.0005L9.40127 10.0749C9.55585 10.0187 9.69624 9.92935 9.81254 9.81306C9.92884 9.69676 10.0182 9.55637 10.0744 9.40179L12 4.10585L13.9256 9.40179C13.9818 9.55637 14.0712 9.69676 14.1875 9.81306C14.3038 9.92935 14.4442 10.0187 14.5988 10.0749L19.8947 12.0005L14.5988 13.9262Z"
                        fill="#84CC16"
                      />
                    </svg>
                  </div>
                  {/* case 1 */}
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h1 className="tex-[16px] font-semibold">
                        Power Converter Design{" "}
                      </h1>
                    </div>
                    <div className="flex  space-x-4">
                      <div
                        className=" md:w-[245px] w-full  rounded-xl mt-4 h-4"
                        style={{
                          background: "rgba(1, 5, 13, 0.50",
                        }}
                      >
                        <div
                          className="
                         h-4 rounded-xl"
                          style={{
                            width: "86%",
                            background:
                              "linear-gradient(90deg, #84CC16 0%, #00E5FF 100%)",
                          }}
                        ></div>
                      </div>
                      <p className="tex-[16px] mt-2.5 font-semibold">83%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* card 2  */}
          <div className="relative text-[#fff] overflow-hidden md:w-[424px] w-full  p-6 flex-col items-start gap-8 rounded-[24px] border border-white/20 bg-[linear-gradient(234deg,_rgba(199,215,245,0.10)_2.11%,_rgba(14,26,50,0.10)_50.54%,_rgba(210,225,255,0.10)_98.98%)] backdrop-blur-[4.5px]">
            {/* 🟦 Gradient Line at Top */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#81CC1A] to-transparent" />

            <div>
              <h1 className="text-2xl font-semibold">Power Electronics</h1>
              <div className="mt-8">
                <div className="flex space-x-4">
                  <div
                    className="flex items-center justify-center w-14 h-14 p-4 aspect-square rounded-[99px] "
                    style={{
                      background:
                        "linear-gradient(180deg, #2B3957 0%, rgba(0, 0, 0, 0.00) 100%)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.6431 10.2427L15.8606 8.13991L13.7578 2.35741C13.6267 1.99654 13.3876 1.68477 13.0731 1.46447C12.7587 1.24416 12.384 1.12598 12 1.12598C11.616 1.12598 11.2414 1.24416 10.9269 1.46447C10.6124 1.68477 10.3734 1.99654 10.2422 2.35741L8.13939 8.13991L2.35689 10.2427C1.99602 10.3739 1.68426 10.6129 1.46395 10.9274C1.24364 11.2419 1.12546 11.6166 1.12546 12.0005C1.12546 12.3845 1.24364 12.7592 1.46395 13.0737C1.68426 13.3881 1.99602 13.6272 2.35689 13.7584L8.13939 15.8612L10.2422 21.6437C10.3734 22.0045 10.6124 22.3163 10.9269 22.5366C11.2414 22.7569 11.616 22.8751 12 22.8751C12.384 22.8751 12.7587 22.7569 13.0731 22.5366C13.3876 22.3163 13.6267 22.0045 13.7578 21.6437L15.8606 15.8612L21.6431 13.7584C22.004 13.6272 22.3158 13.3881 22.5361 13.0737C22.7564 12.7592 22.8746 12.3845 22.8746 12.0005C22.8746 11.6166 22.7564 11.2419 22.5361 10.9274C22.3158 10.6129 22.004 10.3739 21.6431 10.2427ZM14.5988 13.9262C14.4442 13.9823 14.3038 14.0717 14.1875 14.188C14.0712 14.3043 13.9818 14.4447 13.9256 14.5993L12 19.8952L10.0744 14.5993C10.0182 14.4447 9.92884 14.3043 9.81254 14.188C9.69624 14.0717 9.55585 13.9823 9.40127 13.9262L4.10533 12.0005L9.40127 10.0749C9.55585 10.0187 9.69624 9.92935 9.81254 9.81306C9.92884 9.69676 10.0182 9.55637 10.0744 9.40179L12 4.10585L13.9256 9.40179C13.9818 9.55637 14.0712 9.69676 14.1875 9.81306C14.3038 9.92935 14.4442 10.0187 14.5988 10.0749L19.8947 12.0005L14.5988 13.9262Z"
                        fill="#84CC16"
                      />
                    </svg>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between">
                      <h1 className="tex-[16px] font-semibold">
                        Power Converter Design{" "}
                      </h1>
                    </div>
                    <div className="flex  space-x-4">
                      <div
                        className=" md:w-[245px] w-full  rounded-xl mt-4 h-4"
                        style={{
                          background: "rgba(1, 5, 13, 0.50",
                        }}
                      >
                        <div
                          className="
                         h-4 rounded-xl"
                          style={{
                            width: "86%",
                            background:
                              "linear-gradient(90deg, #84CC16 0%, #00E5FF 100%)",
                          }}
                        ></div>
                      </div>
                      <p className="tex-[16px] mt-2.5 font-semibold">83%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
