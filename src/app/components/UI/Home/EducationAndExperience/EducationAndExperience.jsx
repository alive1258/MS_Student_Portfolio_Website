import SlideLeft from "@/app/components/common/animations/SlideLeft";
import SlideRight from "@/app/components/common/animations/SlideRight";
import SlideUp from "@/app/components/common/animations/SlideUp";
import React from "react";

const EducationAndExperience = () => {
  return (
    <div className="container md:mt-32 mt-20">
      <SlideUp className="flex items-center justify-center md:space-x-4 space-x-1">
        <div
          className="mt-1"
          style={{
            width: "64px",
            height: "24px",
            background:
              "linear-gradient(270deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
          }}
        ></div>
        <h2 className="text-primary-base text-center text-2xl font-bold">
          My Education & Experiences{" "}
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

      <div className="mt-12 grid md:grid-cols-2 grid-cols-1 gap-6">
        {/* education  */}
        <div>
          <SlideLeft delay={0.2}>
            <div
              className="flex items-center gap-4 p-6 w-full"
              style={{
                borderBottom: "3px solid var(--MEDIUMBLUE, #0000C2)",
                background: "linear-gradient(270deg, #A787FF 0%, #4F1ED8 100%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clipPath="url(#clip0_444_2516)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.425 6.11159C5.21563 5.86713 5.08073 5.56777 5.0363 5.24899C4.99186 4.93021 5.03975 4.60537 5.17428 4.31297C5.30881 4.02058 5.52436 3.77288 5.79536 3.59924C6.06637 3.42559 6.38147 3.33329 6.70333 3.33325H27.5C28.4849 3.33325 29.4602 3.52725 30.3701 3.90416C31.2801 4.28107 32.1069 4.83351 32.8033 5.52995C33.4997 6.22639 34.0522 7.05318 34.4291 7.96313C34.806 8.87307 35 9.84834 35 10.8333C35 11.8182 34.806 12.7934 34.4291 13.7034C34.0522 14.6133 33.4997 15.4401 32.8033 16.1366C32.1069 16.833 31.2801 17.3854 30.3701 17.7623C29.4602 18.1393 28.4849 18.3333 27.5 18.3333H6.70333C6.38147 18.3332 6.06637 18.2409 5.79536 18.0673C5.52436 17.8936 5.30881 17.6459 5.17428 17.3535C5.03975 17.0611 4.99186 16.7363 5.0363 16.4175C5.08073 16.0987 5.21563 15.7994 5.425 15.5549L6.68167 14.0883C7.45853 13.182 7.88556 12.0277 7.88556 10.8341C7.88556 9.64043 7.45853 8.48616 6.68167 7.57992L5.425 6.11159ZM10.1033 6.66659C10.8341 7.93363 11.2188 9.37058 11.2188 10.8333C11.2188 12.2959 10.8341 13.7329 10.1033 14.9999H27.5C28.6051 14.9999 29.6649 14.5609 30.4463 13.7795C31.2277 12.9981 31.6667 11.9383 31.6667 10.8333C31.6667 9.72818 31.2277 8.66838 30.4463 7.88697C29.6649 7.10557 28.6051 6.66659 27.5 6.66659H10.1033ZM5 27.4999C5 25.5108 5.79018 23.6031 7.1967 22.1966C8.60322 20.7901 10.5109 19.9999 12.5 19.9999H33.2967C33.6185 20 33.9336 20.0923 34.2046 20.2659C34.4756 20.4395 34.6912 20.6872 34.8257 20.9796C34.9603 21.272 35.0081 21.5969 34.9637 21.9157C34.9193 22.2344 34.7844 22.5338 34.575 22.7783L33.3167 24.2449C32.5398 25.1512 32.1128 26.3054 32.1128 27.4991C32.1128 28.6927 32.5398 29.847 33.3167 30.7533L34.575 32.2199C34.7849 32.4643 34.9202 32.7639 34.965 33.0829C35.0097 33.402 34.9619 33.7271 34.8273 34.0198C34.6927 34.3126 34.4769 34.5605 34.2056 34.7342C33.9343 34.9079 33.6188 35.0002 33.2967 34.9999H12.5C10.5109 34.9999 8.60322 34.2097 7.1967 32.8032C5.79018 31.3967 5 29.489 5 27.4999ZM12.5 23.3333C11.3949 23.3333 10.3351 23.7722 9.55372 24.5536C8.77232 25.335 8.33333 26.3948 8.33333 27.4999C8.33333 28.605 8.77232 29.6648 9.55372 30.4462C10.3351 31.2276 11.3949 31.6666 12.5 31.6666H29.8967C29.1659 30.3995 28.7812 28.9626 28.7812 27.4999C28.7812 26.0372 29.1659 24.6003 29.8967 23.3333H12.5Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_444_2516">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="text-white text-2xl font-semibold">Education</h1>
            </div>
          </SlideLeft>

          {/* edcu  */}
          <SlideLeft delay={0.2}>
            <div className="mt-8">
              <div className="group border-b border-gray-200 pb-8 cursor-pointer bg-white hover:bg-[#F5F7FA] transition-all ease-in-out duration-300 rounded-xl p-6">
                <div className="flex space-x-6 items-start">
                  {/* Icon */}
                  <div className="bg-[#95DCBC] p-4 rounded-full w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                    >
                      <path
                        d="M16 25.8336C14.1758 24.7804 12.1064 24.2259 10 24.2259C7.89356 24.2259 5.82423 24.7804 4 25.8336V8.50027C5.82423 7.44705 7.89356 6.89258 10 6.89258C12.1064 6.89258 14.1758 7.44705 16 8.50027M16 25.8336C17.8242 24.7804 19.8936 24.2259 22 24.2259C24.1064 24.2259 26.1758 24.7804 28 25.8336V8.50027C26.1758 7.44705 24.1064 6.89258 22 6.89258C19.8936 6.89258 17.8242 7.44705 16 8.50027M16 25.8336V8.50027"
                        stroke="#19B36E"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div>
                    <h1 className="text-[#3D3D3D] md:text-2xl text-xl font-semibold">
                      Masters in Electrical Engineering
                    </h1>
                    <div className="mt-3 text-[18px] text-info-muted flex space-x-6">
                      <p>Chongqing University, China</p>
                      <p>2023–Present</p>
                    </div>

                    {/* Smooth expand on hover */}
                    <div className="mt-6 text-[18px] text-info-muted ml-2 overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all ease-in-out duration-500">
                      <div className="flex space-x-6">
                        <p>Result:</p>
                        <p>GPA – 3.47 (Out of 4.00)</p>
                      </div>
                      <div className="mt-4 flex space-x-6">
                        <p>Major subject:</p>
                        <p>Electronics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideLeft>
          {/* edcu  */}
          <div className="mt-8">
            <div className="group border-b border-gray-200 pb-8 cursor-pointer bg-white hover:bg-[#F5F7FA] transition-all ease-in-out duration-300 rounded-xl p-6">
              <div className="flex space-x-6 items-start">
                {/* Icon */}
                <div className="bg-[#95DCBC] p-4 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <path
                      d="M16 25.8336C14.1758 24.7804 12.1064 24.2259 10 24.2259C7.89356 24.2259 5.82423 24.7804 4 25.8336V8.50027C5.82423 7.44705 7.89356 6.89258 10 6.89258C12.1064 6.89258 14.1758 7.44705 16 8.50027M16 25.8336C17.8242 24.7804 19.8936 24.2259 22 24.2259C24.1064 24.2259 26.1758 24.7804 28 25.8336V8.50027C26.1758 7.44705 24.1064 6.89258 22 6.89258C19.8936 6.89258 17.8242 7.44705 16 8.50027M16 25.8336V8.50027"
                      stroke="#19B36E"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <h1 className="text-[#3D3D3D] text-2xl font-semibold">
                    Masters in Electrical Engineering
                  </h1>
                  <div className="mt-3 text-[18px] text-info-muted flex space-x-6">
                    <p>Chongqing University, China</p>
                    <p>2023–Present</p>
                  </div>

                  {/* Smooth expand on hover */}
                  <div className="mt-6 text-[18px] text-info-muted ml-2 overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all ease-in-out duration-500">
                    <div className="flex space-x-6">
                      <p>Result:</p>
                      <p>GPA – 3.47 (Out of 4.00)</p>
                    </div>
                    <div className="mt-4 flex space-x-6">
                      <p>Major subject:</p>
                      <p>Electronics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* edcu  */}
          <div className="mt-8">
            <div className="group border-b border-gray-200 pb-8 cursor-pointer bg-white hover:bg-[#F5F7FA] transition-all ease-in-out duration-300 rounded-xl p-6">
              <div className="flex space-x-6 items-start">
                {/* Icon */}
                <div className="bg-[#95DCBC] p-4 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <path
                      d="M16 25.8336C14.1758 24.7804 12.1064 24.2259 10 24.2259C7.89356 24.2259 5.82423 24.7804 4 25.8336V8.50027C5.82423 7.44705 7.89356 6.89258 10 6.89258C12.1064 6.89258 14.1758 7.44705 16 8.50027M16 25.8336C17.8242 24.7804 19.8936 24.2259 22 24.2259C24.1064 24.2259 26.1758 24.7804 28 25.8336V8.50027C26.1758 7.44705 24.1064 6.89258 22 6.89258C19.8936 6.89258 17.8242 7.44705 16 8.50027M16 25.8336V8.50027"
                      stroke="#19B36E"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <h1 className="text-[#3D3D3D] text-2xl font-semibold">
                    Masters in Electrical Engineering
                  </h1>
                  <div className="mt-3 text-[18px] text-info-muted flex space-x-6">
                    <p>Chongqing University, China</p>
                    <p>2023–Present</p>
                  </div>

                  {/* Smooth expand on hover */}
                  <div className="mt-6 text-[18px] text-info-muted ml-2 overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all ease-in-out duration-500">
                    <div className="flex space-x-6">
                      <p>Result:</p>
                      <p>GPA – 3.47 (Out of 4.00)</p>
                    </div>
                    <div className="mt-4 flex space-x-6">
                      <p>Major subject:</p>
                      <p>Electronics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* edcu  */}
          <div className="mt-8">
            <div className="group border-b border-gray-200 pb-8 cursor-pointer bg-white hover:bg-[#F5F7FA] transition-all ease-in-out duration-300 rounded-xl p-6">
              <div className="flex space-x-6 items-start">
                {/* Icon */}
                <div className="bg-[#95DCBC] p-4 rounded-full w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="33"
                    viewBox="0 0 32 33"
                    fill="none"
                  >
                    <path
                      d="M16 25.8336C14.1758 24.7804 12.1064 24.2259 10 24.2259C7.89356 24.2259 5.82423 24.7804 4 25.8336V8.50027C5.82423 7.44705 7.89356 6.89258 10 6.89258C12.1064 6.89258 14.1758 7.44705 16 8.50027M16 25.8336C17.8242 24.7804 19.8936 24.2259 22 24.2259C24.1064 24.2259 26.1758 24.7804 28 25.8336V8.50027C26.1758 7.44705 24.1064 6.89258 22 6.89258C19.8936 6.89258 17.8242 7.44705 16 8.50027M16 25.8336V8.50027"
                      stroke="#19B36E"
                      strokeWidth="2.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                {/* Content */}
                <div>
                  <h1 className="text-[#3D3D3D] text-2xl font-semibold">
                    Masters in Electrical Engineering
                  </h1>
                  <div className="mt-3 text-[18px] text-info-muted flex space-x-6">
                    <p>Chongqing University, China</p>
                    <p>2023–Present</p>
                  </div>

                  {/* Smooth expand on hover */}
                  <div className="mt-6 text-[18px] text-info-muted ml-2 overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all ease-in-out duration-500">
                    <div className="flex space-x-6">
                      <p>Result:</p>
                      <p>GPA – 3.47 (Out of 4.00)</p>
                    </div>
                    <div className="mt-4 flex space-x-6">
                      <p>Major subject:</p>
                      <p>Electronics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* expricen e  */}
        <div>
          <SlideRight delay={0.2}>
            <div
              className="flex items-center gap-4 p-6 w-full"
              style={{
                borderBottom: "3px solid var(--MEDIUMBLUE, #0000C2)",
                background: "linear-gradient(90deg, #A787FF 0%, #4F1ED8 100%)",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clipPath="url(#clip0_444_2521)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.7001 3.33325C16.2877 3.33344 16.8647 3.48893 17.3728 3.78396C17.8809 4.07898 18.302 4.50307 18.5935 5.01325L20.0001 7.47325L21.4068 5.01325C21.6982 4.50307 22.1193 4.07898 22.6274 3.78396C23.1355 3.48893 23.7126 3.33344 24.3001 3.33325H31.8968C32.3347 3.3331 32.765 3.44799 33.1446 3.66643C33.5242 3.88486 33.8397 4.19917 34.0596 4.57789C34.2795 4.95661 34.3961 5.38645 34.3976 5.82439C34.3992 6.26232 34.2857 6.69298 34.0685 7.07325L28.4318 16.9366C30.0113 18.5882 31.0709 20.6673 31.4791 22.9158C31.8874 25.1643 31.6263 27.4832 30.7282 29.5846C29.8302 31.6861 28.3347 33.4775 26.4275 34.7365C24.5204 35.9955 22.2854 36.6666 20.0001 36.6666C17.7149 36.6666 15.4799 35.9955 13.5727 34.7365C11.6655 33.4775 10.1701 31.6861 9.27204 29.5846C8.37399 27.4832 8.11288 25.1643 8.52113 22.9158C8.92938 20.6673 9.989 18.5882 11.5685 16.9366L5.93179 7.07325C5.71458 6.69298 5.60106 6.26232 5.60262 5.82439C5.60417 5.38645 5.72073 4.95661 5.94064 4.57789C6.16055 4.19917 6.47608 3.88486 6.85566 3.66643C7.23523 3.44799 7.66552 3.3331 8.10346 3.33325H15.7001ZM20.0001 16.6666C17.79 16.6666 15.6704 17.5446 14.1076 19.1074C12.5448 20.6702 11.6668 22.7898 11.6668 24.9999C11.6668 27.2101 12.5448 29.3297 14.1076 30.8925C15.6704 32.4553 17.79 33.3333 20.0001 33.3333C22.2103 33.3333 24.3299 32.4553 25.8927 30.8925C27.4555 29.3297 28.3335 27.2101 28.3335 24.9999C28.3335 22.7898 27.4555 20.6702 25.8927 19.1074C24.3299 17.5446 22.2103 16.6666 20.0001 16.6666ZM20.0001 21.6666C20.8842 21.6666 21.732 22.0178 22.3571 22.6429C22.9823 23.268 23.3335 24.1159 23.3335 24.9999C23.3335 25.884 22.9823 26.7318 22.3571 27.3569C21.732 27.9821 20.8842 28.3333 20.0001 28.3333C19.1161 28.3333 18.2682 27.9821 17.6431 27.3569C17.018 26.7318 16.6668 25.884 16.6668 24.9999C16.6668 24.1159 17.018 23.268 17.6431 22.6429C18.2682 22.0178 19.1161 21.6666 20.0001 21.6666ZM30.4618 6.66659H24.3001L21.9201 10.8333L23.6868 13.9283C24.4201 14.1716 25.1201 14.4866 25.7785 14.8616L30.4618 6.66659ZM15.7001 6.66659H9.53846L14.2218 14.8616C15.8388 13.938 17.6544 13.4172 19.5151 13.3433L15.7001 6.66659Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_444_2521">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h1 className="text-white text-2xl font-semibold">Experience</h1>
            </div>
          </SlideRight>
          {/* eEXPRICE  */}
          <SlideRight delay={0.2}>
            <div className="mt-8">
              <div className="group border-b border-gray-200 pb-8 cursor-pointer bg-white hover:bg-[#F5F7FA] transition-all ease-in-out duration-300 rounded-xl p-6">
                <div className="flex space-x-6 items-start">
                  {/* Icon */}
                  <div className="bg-[#95DCBC] p-4 rounded-full w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="33"
                      viewBox="0 0 32 33"
                      fill="none"
                    >
                      <path
                        d="M16 25.8336C14.1758 24.7804 12.1064 24.2259 10 24.2259C7.89356 24.2259 5.82423 24.7804 4 25.8336V8.50027C5.82423 7.44705 7.89356 6.89258 10 6.89258C12.1064 6.89258 14.1758 7.44705 16 8.50027M16 25.8336C17.8242 24.7804 19.8936 24.2259 22 24.2259C24.1064 24.2259 26.1758 24.7804 28 25.8336V8.50027C26.1758 7.44705 24.1064 6.89258 22 6.89258C19.8936 6.89258 17.8242 7.44705 16 8.50027M16 25.8336V8.50027"
                        stroke="#19B36E"
                        strokeWidth="2.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Content */}
                  <div>
                    <h1 className="text-[#3D3D3D] text-2xl font-semibold">
                      Masters in Electrical Engineering
                    </h1>
                    <div className="mt-3 text-[18px] text-info-muted flex space-x-6">
                      <p>Chongqing University, China</p>
                      <p>2023–Present</p>
                    </div>

                    {/* Smooth expand on hover */}
                    <div className="mt-6 text-[18px] text-info-muted ml-2 overflow-hidden max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 transition-all ease-in-out duration-500">
                      <div className="flex space-x-6">
                        <p>Result:</p>
                        <p>GPA – 3.47 (Out of 4.00)</p>
                      </div>
                      <div className="mt-4 flex space-x-6">
                        <p>Major subject:</p>
                        <p>Electronics</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SlideRight>
        </div>
      </div>
    </div>
  );
};

export default EducationAndExperience;
