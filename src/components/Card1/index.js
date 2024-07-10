import Image from "next/image";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const data = [
  { title: "But what is crypto and web3?" },
  { title: "Setting up your own web3 wallet!" },
  { title: "What the heck is a blockchain?" },
  { title: "But what is crypto and web3?" },
  { title: "Setting up your own web3 wallet!" },
  { title: "What the heck is a blockchain?" },
];

export function SubCard({ index, title }) {
  return (
    <div className="subcard-container">
      <div className="h-[80px]">
        {" "}
        <img
          className="rounded-[12px] object-cover w-full h-full"
          src="/assets/others/avatar-card.png"
        />
      </div>
      <div className="w-full">
        <div className="subcard-title">
          #{index + 1}: {title}
        </div>
        <hr className="dotted_line relative" />
        <div className="flex items-center gap-[10px] mt-[12px]">
          <div className="text-white/40 text-[16px]"> 11 Tasks</div>
          <div className="flex-grow">
            <div className="progress-container">
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="check">
        <IoMdCheckmark />
      </div>
    </div>
  );
}
export function Card1() {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative z-10">
      <div
        onClick={handleOpen}
        className={`cursor-pointer lg:w-[520px] backdrop-blur-[20px] bg-white/10 hover:bg-white/20 transition-all duration-300 ${
          isOpen ? "rounded-br-none rounded-bl-none" : ""
        } rounded-[24px]`}
      >
        <div
          className={`p-[24px] flex items-center gap-[24px]  rounded-[24px] border-[1px] border-white/10 ${
            isOpen ? "rounded-br-none rounded-bl-none" : ""
          }`}
        >
          <div className="relative flex h-[180px] p-[8px] rounded-[16px] border-[1px] border-[rgba(255,255,255,.2)] bg-white/5">
            <img
              src="/assets/others/card-img-1.png"
              className="object-cover w-full h-full rounded-[12px]"
            />
            <div className="absolute whitespace-nowrap text-white left-[50%] bottom-[16px] translate-x-[-50%]  backdrop-blur-md rounded-full px-[24px] py-[11px] border-[1px] border-white/20">
              6 Quests
            </div>
          </div>
          <div>
            <div className="text-white leading-[30px] mb-[8px] text-[24px] font-">
              Basics of Crypto
            </div>
            <div className="text-white/40 overflow-hidden text-ellipsis leading-[20px] text-[16px] mb-[16px]">
              The safest and easiest place to start your crypto journey!
            </div>
            <hr className="dotted_line relative" />
            <div className="mt-[16px]">
              <div>
                <div className="h-[32px] py-[8px] px-[12px] justify-center rounded-full text-[14px] gap-[4px] text-[#fffc] bg-[rgba(255,255,255,.07)] items-center w-max">
                  {" "}
                  1490 XPs
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        {isOpen && (
          <div className="card-body">
            {data.map((item, index) => (
              <SubCard key={index} index={index} title={item.title} />
            ))}
          </div>
        )}
      </div>
      <div className="absolute hidden lg:block lg:top-[45%] lg:left-[-120px] z-0 active-path">
        <svg
          width="121"
          height="19"
          viewBox="0 0 121 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M120 7.80708C94.898 1.43658 35.7551 -5.51932 0 17.6211"
            stroke="#A286F2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-dasharray="8 8"
          ></path>
        </svg>
      </div>
      <div className="absolute hidden lg:block top-[100%] left-[50%]  lg:top-[83%] lg:left-[219px] z-[-1]">
        <svg
          width="721"
          height="274"
          viewBox="0 0 721 274"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1010_21529)">
            <path
              d="M720.905 171.318C536 182.12 461.57 -30.1358 308 144.12C133.618 341.992 62.806 153.751 0.000135395 39.2605"
              stroke="white"
              stroke-opacity="0.4"
              stroke-linecap="round"
              stroke-dasharray="8 8"
            ></path>
            <g clip-path="url(#clip1_1010_21529)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M550.571 111.852C550.664 111.819 550.762 111.805 550.861 111.81C550.959 111.815 551.056 111.84 551.145 111.883C551.234 111.925 551.313 111.985 551.379 112.058C551.445 112.132 551.496 112.217 551.529 112.31L555.769 124.311C555.802 124.404 555.816 124.503 555.811 124.601C555.806 124.7 555.781 124.796 555.738 124.885C555.696 124.974 555.636 125.054 555.563 125.12C555.489 125.186 555.404 125.237 555.311 125.27L543.31 129.509C543.122 129.576 542.915 129.565 542.736 129.479C542.556 129.393 542.418 129.239 542.352 129.051C542.285 128.864 542.296 128.657 542.382 128.477C542.468 128.298 542.622 128.16 542.809 128.093L554.104 124.104L550.113 112.811C550.08 112.718 550.065 112.619 550.071 112.521C550.076 112.422 550.1 112.326 550.143 112.237C550.185 112.147 550.245 112.068 550.318 112.002C550.392 111.936 550.478 111.885 550.571 111.852Z"
                fill="white"
                fill-opacity="0.6"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_b_1010_21529"
              x="467.558"
              y="45.6074"
              width="195.368"
              height="107.677"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feGaussianBlur
                in="BackgroundImageFix"
                stdDeviation="5"
              ></feGaussianBlur>
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1010_21529"
              ></feComposite>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1010_21529"
                result="shape"
              ></feBlend>
            </filter>
            <clipPath id="clip0_1010_21529">
              <rect width="721" height="274" fill="white"></rect>
            </clipPath>
            <clipPath id="clip1_1010_21529">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(545.348 106.621) rotate(25.5422)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute lg:hidden top-[125%] left-[50%] translate-x-[-60%] translate-y-[-60%] z-[-1]">
        <svg
          width="306"
          height="242"
          viewBox="0 0 306 242"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1257_6542)">
            <path
              d="M183 239.499C183 173.501 -4.41123 192.554 144 103.503C201.5 69.0015 208.618 19.5766 169.097 -53.0002"
              stroke="white"
              stroke-opacity="0.4"
              stroke-linecap="round"
              stroke-dasharray="8 8"
            ></path>
            <g clip-path="url(#clip1_1257_6542)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M102.341 145.12C102.362 145.216 102.363 145.316 102.345 145.413C102.326 145.51 102.289 145.602 102.235 145.685C102.181 145.767 102.111 145.839 102.03 145.894C101.948 145.95 101.857 145.989 101.76 146.009L89.3016 148.613C89.205 148.634 89.1054 148.635 89.0085 148.617C88.9115 148.598 88.8191 148.561 88.7366 148.507C88.654 148.453 88.5829 148.383 88.5274 148.302C88.4718 148.22 88.4329 148.129 88.4128 148.032L85.808 135.574C85.7673 135.379 85.8056 135.175 85.9147 135.009C86.0237 134.842 86.1945 134.726 86.3894 134.685C86.5844 134.644 86.7875 134.682 86.9542 134.791C87.1208 134.9 87.2374 135.071 87.2781 135.266L89.7284 146.991L101.453 144.539C101.549 144.518 101.649 144.517 101.746 144.535C101.843 144.554 101.935 144.591 102.018 144.645C102.1 144.699 102.171 144.769 102.227 144.85C102.282 144.932 102.321 145.023 102.341 145.12Z"
                fill="white"
                fill-opacity="0.6"
              ></path>
            </g>
          </g>
          <defs>
            <filter
              id="filter0_b_1257_6542"
              x="0.907227"
              y="34.5249"
              width="168.602"
              height="140.678"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
              <feGaussianBlur
                in="BackgroundImageFix"
                stdDeviation="5"
              ></feGaussianBlur>
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_1257_6542"
              ></feComposite>
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1257_6542"
                result="shape"
              ></feBlend>
            </filter>
            <clipPath id="clip0_1257_6542">
              <rect width="306" height="242" fill="white"></rect>
            </clipPath>
            <clipPath id="clip1_1257_6542">
              <rect
                width="24"
                height="24"
                fill="white"
                transform="translate(108.223 140.638) rotate(123.191)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export function Card3() {
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mt-[215px] lg:mt-[96px] flex  lg:justify-end">
      <div className="relative lg:mr-[240px] z-10">
        <div className="relative z-10">
          <div
            onClick={handleOpen}
            className={`cursor-pointer lg:w-[520px] backdrop-blur-[20px] bg-white/10 hover:bg-white/20 transition-all duration-300 ${
              isOpen ? "rounded-br-none rounded-bl-none" : ""
            } rounded-[24px]`}
          >
            <div
              className={`p-[24px] flex items-center gap-[24px]  rounded-[24px] border-[1px] border-white/10 ${
                isOpen ? "rounded-br-none rounded-bl-none" : ""
              }`}
            >
              <div className="relative flex h-[180px] p-[8px] rounded-[16px] border-[1px] border-[rgba(255,255,255,.2)] bg-white/5">
                <img
                  src="/assets/others/card-img-1.png"
                  className="object-cover w-full h-full rounded-[12px]"
                />
                <div className="absolute whitespace-nowrap text-white left-[50%] bottom-[16px] translate-x-[-50%]  backdrop-blur-md rounded-full px-[24px] py-[11px] border-[1px] border-white/20">
                  6 Quests
                </div>
              </div>
              <div>
                <div className="text-white leading-[30px] mb-[8px] text-[24px] font-">
                  Basics of Crypto
                </div>
                <div className="text-white/40 overflow-hidden text-ellipsis leading-[20px] text-[16px] mb-[16px]">
                  The safest and easiest place to start your crypto journey!
                </div>
                <hr className="dotted_line relative" />
                <div className="mt-[16px]">
                  <div>
                    <div className="h-[32px] py-[8px] px-[12px] justify-center rounded-full text-[14px] gap-[4px] text-[#fffc] bg-[rgba(255,255,255,.07)] items-center w-max">
                      {" "}
                      1490 XPs
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {isOpen && (
              <div className="card-body">
                {data.map((item, index) => (
                  <SubCard key={index} index={index} title={item.title} />
                ))}
              </div>
            )}
          </div>
          <div className="absolute hidden lg:block top-[10%] left-[-54%] z-[-1]">
            <svg
              width="280"
              height="457"
              viewBox="0 0 280 457"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1010_21580)">
                <path
                  d="M0 428.082C53.0893 419.786 181.294 385.838 122.254 252.823C55.2113 101.781 195.211 63.5432 280 59.082"
                  stroke="white"
                  stroke-opacity="0.4"
                  stroke-linecap="round"
                  stroke-dasharray="8 8"
                ></path>
              </g>
              <defs>
                <filter
                  id="filter0_b_1010_21580"
                  x="31.9072"
                  y="20.5249"
                  width="168.602"
                  height="140.678"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="5"
                  ></feGaussianBlur>
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1010_21580"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1010_21580"
                    result="shape"
                  ></feBlend>
                </filter>
                <clipPath id="clip0_1010_21580">
                  <rect width="280" height="457" fill="white"></rect>
                </clipPath>
                <clipPath id="clip1_1010_21580">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(125.92 132.658) rotate(103.437)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="absolute lg:hidden top-[116%] left-[50%] translate-x-[-60%] translate-y-[-60%] z-[-1]">
            <svg
              width="306"
              height="242"
              viewBox="0 0 306 242"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1257_6542)">
                <path
                  d="M183 239.499C183 173.501 -4.41123 192.554 144 103.503C201.5 69.0015 208.618 19.5766 169.097 -53.0002"
                  stroke="white"
                  stroke-opacity="0.4"
                  stroke-linecap="round"
                  stroke-dasharray="8 8"
                ></path>
                <g clip-path="url(#clip1_1257_6542)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M102.341 145.12C102.362 145.216 102.363 145.316 102.345 145.413C102.326 145.51 102.289 145.602 102.235 145.685C102.181 145.767 102.111 145.839 102.03 145.894C101.948 145.95 101.857 145.989 101.76 146.009L89.3016 148.613C89.205 148.634 89.1054 148.635 89.0085 148.617C88.9115 148.598 88.8191 148.561 88.7366 148.507C88.654 148.453 88.5829 148.383 88.5274 148.302C88.4718 148.22 88.4329 148.129 88.4128 148.032L85.808 135.574C85.7673 135.379 85.8056 135.175 85.9147 135.009C86.0237 134.842 86.1945 134.726 86.3894 134.685C86.5844 134.644 86.7875 134.682 86.9542 134.791C87.1208 134.9 87.2374 135.071 87.2781 135.266L89.7284 146.991L101.453 144.539C101.549 144.518 101.649 144.517 101.746 144.535C101.843 144.554 101.935 144.591 102.018 144.645C102.1 144.699 102.171 144.769 102.227 144.85C102.282 144.932 102.321 145.023 102.341 145.12Z"
                    fill="white"
                    fill-opacity="0.6"
                  ></path>
                </g>
              </g>
              <defs>
                <filter
                  id="filter0_b_1257_6542"
                  x="0.907227"
                  y="34.5249"
                  width="168.602"
                  height="140.678"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood
                    flood-opacity="0"
                    result="BackgroundImageFix"
                  ></feFlood>
                  <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="5"
                  ></feGaussianBlur>
                  <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1257_6542"
                  ></feComposite>
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_backgroundBlur_1257_6542"
                    result="shape"
                  ></feBlend>
                </filter>
                <clipPath id="clip0_1257_6542">
                  <rect width="306" height="242" fill="white"></rect>
                </clipPath>
                <clipPath id="clip1_1257_6542">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(108.223 140.638) rotate(123.191)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
          
        </div>
      </div>
    </div>
  );
}
