import { IoMdCheckmark } from "react-icons/io";

export function Card2() {
  return (
    <div className="flex mx-auto lg:mx-0 w-min lg:w-full justify-center lg:justify-end relative mt-[245px] lg:mt-[-25px]">
      <div className="flex flex-col items-center">
        <div className="check-big lg:ml-[55px]">
          <IoMdCheckmark />
        </div>
        <div className="relative z-10">
          <div className="card-2-img-outer">
            <img
              src="/assets/others/avatar-card.png"
              className="w-[147px] h-[165px] rounded-[20px] object-cover z-10"
            />
          </div>
          <div className="nft-name">Intract Certified: Learner NFT</div>
          <div className="nft-desc">
            Your crypto black-belt <br /> certicate
          </div>
          <button className="claim-btn" disabled>
            Claim
          </button>
        </div>
      </div>
      <div className="absolute hidden lg:block top-[45%] left-[57%] z-[-1]">
        <svg
          width="778"
          height="329"
          viewBox="0 0 778 329"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1016_21647)">
            <path
              d="M386.615 8C455.063 12.0917 620.356 28.8358 544.235 94.4422C457.798 168.94 638.298 187.8 747.615 190"
              stroke="white"
              stroke-opacity="0.4"
              stroke-linecap="round"
              stroke-dasharray="8 8"
            ></path>
            <path
              d="M747.5 190C726.099 225.723 543.202 363.742 389 278.5C149.5 146.106 1.23354 246.726 15.3849 305.717"
              stroke="white"
              stroke-opacity="0.4"
              stroke-linecap="round"
              stroke-dasharray="8 8"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_1016_21647">
              <rect width="778" height="329" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="absolute transform scale-x-[-1] lg:hidden top-[135%] left-[50%] translate-x-[-50%] translate-y-[-60%] z-[-1]">
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

export function Card4() {
  return (
    <div className="mt-[190px] mx-auto lg:mx-0 justify-center lg:mt-0 flex w-min lg:w-full lg:justify-start relative">
      <div className="flex flex-col items-center">
        <div className="check-big lg:ml-[55px]">
          <IoMdCheckmark />
        </div>
        <div className="relative z-10">
          <div className="card-2-img-outer">
            <img
              src="/assets/others/avatar-card.png"
              className="w-[147px] h-[165px] rounded-[20px] object-cover z-10"
            />
          </div>
          <div className="nft-name">Intract Certified: Learner NFT</div>
          <div className="nft-desc">
            Your crypto black-belt <br /> certicate
          </div>
          <button className="claim-btn" disabled>
            Claim
          </button>
        </div>
        <div className="absolute hidden lg:block top-[46%] left-[-23%] z-[-1]">
          <svg
            width="896"
            height="484"
            viewBox="0 0 896 484"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M18.8408 235.879C18.8408 155.379 118.841 34.8789 275.341 26"
              stroke="white"
              stroke-opacity="0.4"
              stroke-linecap="round"
              stroke-dasharray="8 8"
            ></path>
            <path
              d="M869.5 322.001C840.959 259.05 741.655 172.229 509.137 292.079C207.841 447.379 8.10772 335.458 18.8406 236.379"
              stroke="white"
              stroke-opacity="0.4"
              stroke-linecap="round"
              stroke-dasharray="8 8"
            ></path>

            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M326.184 348.182C326.246 348.106 326.323 348.042 326.41 347.995C326.496 347.948 326.592 347.919 326.69 347.909C326.788 347.899 326.887 347.908 326.982 347.937C327.076 347.965 327.164 348.012 327.24 348.074L337.11 356.111C337.187 356.173 337.25 356.25 337.297 356.336C337.344 356.423 337.373 356.518 337.383 356.616C337.394 356.715 337.384 356.814 337.356 356.908C337.327 357.003 337.281 357.091 337.218 357.167L329.182 367.037C329.056 367.191 328.874 367.289 328.676 367.31C328.478 367.33 328.28 367.271 328.125 367.145C327.971 367.019 327.873 366.837 327.852 366.639C327.832 366.441 327.891 366.243 328.017 366.089L335.581 356.801L326.292 349.239C326.216 349.176 326.152 349.1 326.105 349.013C326.058 348.926 326.029 348.831 326.019 348.733C326.009 348.635 326.018 348.535 326.047 348.441C326.075 348.347 326.122 348.259 326.184 348.182Z"
              fill="white"
              fill-opacity="0.6"
            ></path>
          </svg>
        </div>
        <div className="absolute transform scale-x-[-1] lg:hidden top-[135%] left-[50%] translate-x-[-50%] translate-y-[-60%] z-[-1]">
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
    </div>
  );
}
