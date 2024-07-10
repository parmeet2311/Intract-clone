import Image from "next/image";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { FaPlay } from "react-icons/fa";

const data = [
  {
    src: "/assets/nfts/nft1.png",
    title: "How to plan your retirement with crypto?",
  },
  { src: "/assets/nfts/nft2.png", title: "Why are there limited Bitcoin?" },
  { src: "/assets/nfts/nft3.png", title: "How does Uniswap actually work?" },
  {
    src: "/assets/nfts/nft4.png",
    title: "How to spot crypto projects to invest in?",
  },
];

export function CryptoProject() {
  return (
    <div className="mt-[28px] max-w-[1200px] mx-auto px-[20px] lg:px-0">
      <div className="text-center">
        <div className="text-white leading-[30px] mb-[8px] text-[24px] ">
          Top Crypto Creators and Projects to Follow
        </div>
        <div className="text-white/40 overflow-hidden text-ellipsis leading-[20px] text-[16px] mb-[16px]">
          Answers to your crypto doubts, straight from the experts
        </div>
      </div>
      <div className="mt-[40px] flex flex-wrap gap-[16px] mb-[20px]">
        {data.map((item, index) => (
          <div key={index} className="vid-card-container">
            <div className="w-full h-full">
                <div className="reel-vid"><img src="/assets/others/reel-video.svg"/></div>
               <div className="play-vid"><FaPlay className="text-xl"/></div>
                <img src={item.src} className="vid-card-img w-full h-full object-cover"></img>
                <img src={item.src} className="w-full h-full object-cover"></img>
                <div className="vid-card-title">{item.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
