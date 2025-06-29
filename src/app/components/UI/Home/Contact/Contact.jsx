import SlideUp from "@/app/components/common/animations/SlideUp";
import {
  RiDribbbleLine,
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
  RiTwitterXLine,
} from "@remixicon/react";
import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="bg-[#101828] overflow-hidden relative">
      <div className="absolute md:block hidden bottom-gradient-line"></div>
      <div className="absolute md:block hidden custom-gradient-line"></div>
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
          <h2 className="text-[#fff] text-2xl font-bold">Contact me</h2>
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
          <p className="mt-10 text-[#fff] text-center font-semibold md:text-3xl text-xl">
            Lorem ipsum dolor sit amet consectetur. Mattis venenatis fermentum
            ac dolor dui a in auctor nunc. Commodo amet non vehicula euismod
            nisl neque. Ac fringilla egestas congue fusce massa.
          </p>
        </SlideUp>

        <div className="mt-16 grid  md:grid-cols-3  grid-cols-1 gap-6">
          {/* card 1  */}
          <div
            className="relative  overflow-hidden rounded-b-[24px] text-white backdrop-blur-[4.5px]"
            style={{
              background:
                "linear-gradient(54deg, rgba(199, 215, 245, 0.10) 1.02%, rgba(14, 26, 50, 0.10) 49.46%, rgba(210, 225, 255, 0.10) 97.89%)",
            }}
          >
            {/* Fake gradient top border */}
            <div
              className="absolute top-0 left-0 h-[4px] w-full"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.6))",
              }}
            />

            {/* Content */}
            <div className="p-6">
              {/* Icon wrapper */}
              <div
                className="flex items-center justify-center w-14 h-14 aspect-square rounded-[99px]"
                style={{
                  background:
                    "linear-gradient(180deg, #2B3957 0%, rgba(0, 0, 0, 0.00) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_488_296)">
                    <path
                      d="M25.3333 18.6663C25.5828 18.6663 25.8272 18.7363 26.0389 18.8683C26.2505 19.0003 26.4209 19.189 26.5307 19.413L26.5947 19.569L26.768 20.073C26.9509 20.6093 27.2457 21.1005 27.6328 21.5143C28.0199 21.928 28.4904 22.2548 29.0133 22.473L29.26 22.5663L29.764 22.7383C30.0136 22.8235 30.2323 22.9807 30.3925 23.1902C30.5527 23.3997 30.6472 23.6519 30.6641 23.9151C30.6809 24.1783 30.6193 24.4405 30.4871 24.6687C30.3549 24.8969 30.158 25.0807 29.9213 25.197L29.764 25.261L29.26 25.4343C28.7237 25.6173 28.2325 25.912 27.8187 26.2991C27.405 26.6862 27.0782 27.1568 26.86 27.6797L26.7667 27.9263L26.5947 28.4303C26.5095 28.6799 26.3523 28.8987 26.1428 29.0589C25.9333 29.2191 25.6811 29.3136 25.4179 29.3304C25.1547 29.3473 24.8925 29.2857 24.6643 29.1535C24.4361 29.0213 24.2523 28.8244 24.136 28.5877L24.072 28.4303L23.8987 27.9263C23.7157 27.3901 23.4209 26.8988 23.0339 26.4851C22.6468 26.0713 22.1762 25.7445 21.6533 25.5263L21.4067 25.433L20.9027 25.261C20.6531 25.1759 20.4343 25.0186 20.2741 24.8091C20.1139 24.5997 20.0194 24.3474 20.0026 24.0842C19.9857 23.8211 20.0473 23.5588 20.1795 23.3306C20.3117 23.1025 20.5086 22.9186 20.7453 22.8023L20.9027 22.7383L21.4067 22.565C21.9429 22.3821 22.4342 22.0873 22.8479 21.7002C23.2617 21.3131 23.5885 20.8426 23.8067 20.3197L23.9 20.073L24.072 19.569C24.1618 19.3058 24.3317 19.0773 24.5579 18.9154C24.7841 18.7535 25.0552 18.6665 25.3333 18.6663ZM29.3333 9.29034V19.3197L29.2907 19.2117L29.1187 18.7063C28.8559 17.9374 28.3651 17.2667 27.7118 16.7836C27.0584 16.3005 26.2733 16.0278 25.4611 16.0019C24.649 15.976 23.8481 16.198 23.1653 16.6385C22.4824 17.079 21.9499 17.717 21.6387 18.4677L21.548 18.7077L21.3747 19.2117C21.3173 19.3799 21.2269 19.535 21.1088 19.6678C20.9906 19.8006 20.8471 19.9085 20.6867 19.985L20.5453 20.0423L20.04 20.2143C19.4381 20.42 18.8938 20.7663 18.4525 21.2244C18.0112 21.6825 17.6855 22.2393 17.5025 22.8485C17.3195 23.4577 17.2844 24.1018 17.4001 24.7273C17.5158 25.3528 17.7791 25.9416 18.168 26.445L18.352 26.6663H5.33332C4.66055 26.6666 4.01257 26.4125 3.51926 25.955C3.02595 25.4976 2.72378 24.8705 2.67332 24.1997L2.66666 23.9997V9.29034L14.72 19.3357C15.0524 19.6125 15.4656 19.774 15.8976 19.7962C16.3295 19.8183 16.7571 19.6997 17.116 19.4583L17.28 19.3357L29.3333 9.29034ZM26.6667 5.33301C27.4187 5.33301 28.0973 5.64367 28.5813 6.14367L28.736 6.31701L16 16.9303L3.26399 6.31701C3.70399 5.77701 4.35199 5.41167 5.08532 5.34367L5.33332 5.33301H26.6667Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_488_296">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h2 className="mt-8 text-[20px] font-semibold">
                Chat to Support
              </h2>
              <p className="mt-4 text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Sagittis vitae et
                viverra vehicula arcu neque euismod.
              </p>
              <p className="mt-6 w-fit border-white/60 border-b">
                abusayem@gmail.com
              </p>
            </div>
          </div>
          {/* card 2  */}
          <div
            className="relative  overflow-hidden rounded-b-[24px] text-white backdrop-blur-[4.5px]"
            style={{
              background:
                "linear-gradient(54deg, rgba(199, 215, 245, 0.10) 1.02%, rgba(14, 26, 50, 0.10) 49.46%, rgba(210, 225, 255, 0.10) 97.89%)",
            }}
          >
            {/* Fake gradient top border */}
            <div
              className="absolute top-0 left-0 h-[4px] w-full"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.6))",
              }}
            />

            {/* Content */}
            <div className="p-6">
              {/* Icon wrapper */}
              <div
                className="flex items-center justify-center w-14 h-14 aspect-square rounded-[99px]"
                style={{
                  background:
                    "linear-gradient(180deg, #2B3957 0%, rgba(0, 0, 0, 0.00) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_488_440)">
                    <path
                      d="M9.80937 3.26029C11.3334 4.37095 12.52 5.88695 13.5334 7.33762L14.1227 8.19629L14.6787 9.01629C14.9568 9.42259 15.0757 9.91702 15.0128 10.4053C14.9498 10.8937 14.7094 11.3418 14.3374 11.6643L11.736 13.5963C11.6104 13.687 11.5219 13.8203 11.4871 13.9714C11.4523 14.1224 11.4734 14.281 11.5467 14.4176C12.136 15.4883 13.184 17.083 14.384 18.283C15.5854 19.483 17.2547 20.6003 18.4 21.2563C18.5436 21.3369 18.7127 21.3594 18.8724 21.3193C19.0321 21.2791 19.1703 21.1793 19.2587 21.0403L20.952 18.463C21.2634 18.0494 21.7226 17.7724 22.2336 17.6899C22.7446 17.6073 23.2677 17.7258 23.6934 18.0203L24.5774 18.6323C26.2294 19.779 28.004 21.0816 29.3614 22.819C29.5766 23.096 29.7136 23.4258 29.7579 23.7738C29.8022 24.1219 29.7523 24.4754 29.6134 24.7976C28.4974 27.4016 25.6734 29.619 22.736 29.511L22.336 29.4883L22.0254 29.4616L21.6814 29.4216L21.3067 29.371L20.9 29.3043C20.8288 29.2915 20.7577 29.2781 20.6867 29.2643L20.2387 29.1683C20.1604 29.1511 20.0821 29.1333 20.004 29.115L19.516 28.9896L19.0027 28.843L18.4667 28.6696C16.0054 27.835 12.8814 26.195 9.67604 22.9896C6.47204 19.7856 4.83204 16.6616 3.99737 14.2003L3.82404 13.6643L3.67737 13.151L3.55204 12.663L3.44804 12.2016C3.418 12.0571 3.39 11.9122 3.36404 11.767L3.29737 11.3603L3.24404 10.9856L3.20537 10.6416L3.17871 10.331L3.15737 9.93095C3.04937 7.00295 5.29071 4.15895 7.88271 3.04829C8.19468 2.91358 8.53631 2.86229 8.87408 2.89945C9.21185 2.93662 9.53416 3.06097 9.80937 3.26029ZM20.656 8.05362L20.8107 8.07095C21.7813 8.24215 22.6727 8.71621 23.3572 9.42519C24.0418 10.1342 24.4843 11.0417 24.6214 12.0176C24.6702 12.3552 24.5879 12.6987 24.3912 12.9774C24.1946 13.2561 23.8986 13.4488 23.5642 13.5159C23.2298 13.583 22.8823 13.5194 22.5934 13.3382C22.3044 13.157 22.0959 12.8719 22.0107 12.5416L21.98 12.3883C21.9264 12.0058 21.7631 11.6469 21.51 11.3552C21.2568 11.0635 20.9245 10.8513 20.5534 10.7443L20.3467 10.6976C20.0119 10.6383 19.7124 10.4533 19.5095 10.1804C19.3066 9.90759 19.2156 9.56753 19.2551 9.22981C19.2946 8.8921 19.4617 8.58223 19.7221 8.3636C19.9825 8.14496 20.3166 8.03408 20.656 8.05362ZM20.6667 4.00029C22.7884 4.00029 24.8233 4.84314 26.3236 6.34343C27.8239 7.84372 28.6667 9.87856 28.6667 12.0003C28.6663 12.3401 28.5362 12.667 28.3029 12.9141C28.0696 13.1612 27.7508 13.3099 27.4115 13.3299C27.0723 13.3498 26.7382 13.2394 26.4776 13.0213C26.217 12.8031 26.0495 12.4937 26.0094 12.1563L26 12.0003C26.0005 10.6462 25.4857 9.34264 24.56 8.35432C23.6344 7.36601 22.3673 6.76701 21.016 6.67895L20.6667 6.66695C20.3131 6.66695 19.9739 6.52648 19.7239 6.27643C19.4739 6.02638 19.3334 5.68724 19.3334 5.33362C19.3334 4.98 19.4739 4.64086 19.7239 4.39081C19.9739 4.14076 20.3131 4.00029 20.6667 4.00029Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_488_440">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(0.666626)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h2 className="mt-8 text-[20px] font-semibold">
                Chat to Support
              </h2>
              <p className="mt-4 text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Sagittis vitae et
                viverra vehicula arcu neque euismod.
              </p>
              <p className="mt-6 w-fit border-white/60 border-b">
                abusayem@gmail.com
              </p>
            </div>
          </div>
          {/* card 3  */}
          <div
            className="relative  overflow-hidden rounded-b-[24px] text-white backdrop-blur-[4.5px]"
            style={{
              background:
                "linear-gradient(54deg, rgba(199, 215, 245, 0.10) 1.02%, rgba(14, 26, 50, 0.10) 49.46%, rgba(210, 225, 255, 0.10) 97.89%)",
            }}
          >
            {/* Fake gradient top border */}
            <div
              className="absolute top-0 left-0 h-[4px] w-full"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.6))",
              }}
            />

            {/* Content */}
            <div className="p-6">
              {/* Icon wrapper */}
              <div
                className="flex items-center justify-center w-14 h-14 aspect-square rounded-[99px]"
                style={{
                  background:
                    "linear-gradient(180deg, #2B3957 0%, rgba(0, 0, 0, 0.00) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_488_446)">
                    <path
                      d="M16.3334 2.66699C19.516 2.66699 22.5682 3.93127 24.8187 6.18171C27.0691 8.43215 28.3334 11.4844 28.3334 14.667C28.3334 18.7657 26.0987 22.1203 23.744 24.527C22.5674 25.7162 21.2838 26.7945 19.9094 27.7483L19.3414 28.135L19.0747 28.3123L18.572 28.6323L18.124 28.9057L17.5694 29.2283C17.1927 29.4427 16.7668 29.5554 16.3334 29.5554C15.9 29.5554 15.474 29.4427 15.0974 29.2283L14.5427 28.9057L13.8494 28.479L13.5934 28.3123L13.0467 27.9483C11.564 26.9448 10.1828 25.7989 8.92271 24.527C6.56804 22.119 4.33337 18.7657 4.33337 14.667C4.33337 11.4844 5.59766 8.43215 7.84809 6.18171C10.0985 3.93127 13.1508 2.66699 16.3334 2.66699ZM16.3334 10.667C15.8081 10.667 15.2879 10.7705 14.8026 10.9715C14.3173 11.1725 13.8764 11.4671 13.5049 11.8386C13.1335 12.21 12.8389 12.651 12.6379 13.1363C12.4368 13.6216 12.3334 14.1417 12.3334 14.667C12.3334 15.1923 12.4368 15.7124 12.6379 16.1977C12.8389 16.683 13.1335 17.124 13.5049 17.4954C13.8764 17.8669 14.3173 18.1615 14.8026 18.3625C15.2879 18.5635 15.8081 18.667 16.3334 18.667C17.3942 18.667 18.4117 18.2456 19.1618 17.4954C19.9119 16.7453 20.3334 15.7279 20.3334 14.667C20.3334 13.6061 19.9119 12.5887 19.1618 11.8386C18.4117 11.0884 17.3942 10.667 16.3334 10.667Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_488_446">
                      <rect
                        width="32"
                        height="32"
                        fill="white"
                        transform="translate(0.333374)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <h2 className="mt-8 text-[20px] font-semibold">
                Chat to Support
              </h2>
              <p className="mt-4 text-[16px]">
                Lorem ipsum dolor sit amet consectetur. Sagittis vitae et
                viverra vehicula arcu neque euismod.
              </p>
              <p className="mt-6 w-fit border-white/60 border-b">
                abusayem@gmail.com
              </p>
            </div>
          </div>

          {/* card 4*/}
          <div
            className="p-6 md:row-start-2 relative text-[#fff] overflow-hidden  backdrop-blur-[4.5px] "
            style={{
              borderRadius: "24px  24px  24px 24px",
              background:
                "linear-gradient(54deg, rgba(199, 215, 245, 0.10) 1.02%, rgba(14, 26, 50, 0.10) 49.46%, rgba(210, 225, 255, 0.10) 97.89%)",
            }}
            //   className=" p-6 flex-col items-start gap-8 rounded-[24px] border border-white/20 bg-[linear-gradient(234deg,_rgba(199,215,245,0.10)_2.11%,_rgba(14,26,50,0.10)_50.54%,_rgba(210,225,255,0.10)_98.98%)] backdrop-blur-[4.5px]"
          >
            <div>
              <div className="flex items-center justify-center space-x-4">
                <div
                  className="mt-1"
                  style={{
                    width: "64px",
                    height: "24px",
                    background:
                      "linear-gradient(270deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
                  }}
                ></div>
                <h2 className="text-[#fff] text-2xl font-bold">Get In Touch</h2>
                <div
                  className="mt-1"
                  style={{
                    width: "64px",
                    height: "24px",
                    background:
                      "linear-gradient(90deg, #3F51B5 5.38%, rgba(255, 255, 255, 0.00) 100%)",
                  }}
                ></div>
              </div>

              <h2 className="mt-14 text-[20px] text-center font-semibold">
                Send me any message
              </h2>
              <p className="mt-5 text-[16px] text-center">
                Lorem ipsum dolor sit amet consectetur. Sagittis vitae et
                viverra vehicula arcu neque euismod. Lorem ipsum dolor sit amet
                consectetur. Sagittis vitae et viverra vehicula arcu neque
                euismod.{" "}
              </p>
              <div className="mt-20 flex justify-center space-x-4">
                <div className="footer-social-icon">
                  <RiFacebookFill size={20} />
                </div>

                <div className="footer-social-icon">
                  <RiInstagramLine size={20} />
                </div>
                <div className="footer-social-icon">
                  <RiLinkedinFill size={20} />
                </div>
                <div className="footer-social-icon">
                  <RiTwitterXLine size={20} />
                </div>
                <div className="footer-social-icon">
                  <RiDribbbleLine size={20} />
                </div>
              </div>
            </div>
          </div>
          {/* card 5*/}
          <div
            className="p-6 md:col-span-2 relative text-white overflow-hidden w-full backdrop-blur-[4.5px]"
            style={{
              borderRadius: "24px",
              background:
                "linear-gradient(54deg, rgba(199, 215, 245, 0.10) 1.02%, rgba(14, 26, 50, 0.10) 49.46%, rgba(210, 225, 255, 0.10) 97.89%)",
            }}
          >
            {/* Optional gradient top border */}
            <div
              className="absolute top-0 left-0 h-[4px] w-full"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent)",
              }}
            />

            {/* Form */}
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
