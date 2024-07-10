import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import { FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="mt-[80px]">
      <hr className="rounded-full border-[1px] border-[#ffffff26]" />
      <div className="bg-black text-[15px] text-white/40">
        <div className="mx-auto p-[2em] max-w-[1300px]">
          <div className="flex flex-col sm:flex-row gap-[3rem] mt-[1.5rem]">
            <div className="sm:w-[40%]">
              <div className="text-[28px] text-white">intract.</div>
              <div className="mt-[1.5rem] ">
                We are your personal guide for exploring web3 projects & earning
                100x rewards
              </div>
            </div>
            <div className=" sm:w-[60%]">
              <div className="w-full grid grid-cols-2 xs:grid-cols-4 text-[16px] gap-x-[1rem] gap-y-[2rem]">
                <div className=" flex flex-col gap-[1rem]">
                  <h3 className=" text-white">INTRACT</h3>
                  <p className="hover:text-white transition-all duration-300 cursor-pointer">
                    Explore Quests
                  </p>
                  <p className="hover:text-white transition-all duration-300 cursor-pointer">
                    Comunities
                  </p>
                  <p className="hover:text-white transition-all duration-300 cursor-pointer">
                    Alpha Hub
                  </p>
                </div>
                <div className=" flex flex-col gap-[1rem]">
                  <h3 className=" text-white">INTRACT</h3>
                  <p className="hover:text-white transition-all duration-300 cursor-pointer">
                    Explore Quests
                  </p>
                  <p className="hover:text-white transition-all duration-300 cursor-pointer">
                    Comunities
                  </p>
                  <p className="hover:text-white transition-all duration-300 cursor-pointer">
                    Alpha Hub
                  </p>
                </div>
                <div className=" flex flex-col gap-[1rem]">
                  <h3 className=" text-white">INTRACT</h3>
                  <p className="hover:text-white transition-all duration-300 cursor-pointer">
                    Explore Quests
                  </p>
                  <p className="hover:text-white transition-all duration-300 cursor-pointer">
                    Comunities
                  </p>
                  <p className="hover:text-white transition-all duration-300 cursor-pointer">
                    Alpha Hub
                  </p>
                </div>
                <div className=" flex flex-col gap-[1rem]">
                  <h3 className=" text-white">INTRACT</h3>
                  <p className="hover:text-white transition-all duration-300 cursor-pointer">
                    Explore Quests
                  </p>
                  <p className="hover:text-white transition-all duration-300 cursor-pointer">
                    Comunities
                  </p>
                  <p className="hover:text-white transition-all duration-300 cursor-pointer">
                    Alpha Hub
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr className="rounded-full border-[1px] border-[#ffffff26] my-[2rem]" />
          <div
            style={{ letterSpacing: "1px" }}
            className="font-light leading-snug"
          >
            <span className="text-white/70">Disclaimer:</span> Crypto Products,
            Virtual Digital Assets, and NFTs are unregulated and can be highly
            risky. There may be no regulatory recourse for any loss from such
            transactions. We advise the viewer to proceed with caution. Nothing
            in this website or any communication published by us amounts to, is
            intended to be, or should be construed as investment or purchase
            advice of any kind or financial advice or promotion under any
            applicable laws. Any decision made based on the content provided on
            this website or any communication published by us shall not be
            attributable to us.
          </div>
          <hr className="rounded-full border-[1px] border-[#ffffff26] my-[2rem]" />
          <div className="flex flex-col gap-[1rem] xs:flex-row xs:items-center justify-between">
            <div className="text-white">
                CREATED BY <span>PARMEET</span>
            </div>
            <div className="flex gap-x-[1rem] text-[20px]">
               <div className=" cursor-pointer flex items-center justify-center w-[40px] h-[40px] text-white bg-white/15 hover:bg-white/30 transition-all duration-300 rounded-md"><FaXTwitter/></div>
               <div className=" cursor-pointer flex items-center justify-center w-[40px] h-[40px] text-white bg-white/15 hover:bg-white/30 transition-all duration-300 rounded-md"><FaDiscord/></div>
               <div className=" cursor-pointer flex items-center justify-center w-[40px] h-[40px] text-white bg-white/15 hover:bg-white/30 transition-all duration-300 rounded-md"><FaTelegram/></div>
               <div className=" cursor-pointer flex items-center justify-center w-[40px] h-[40px] text-white bg-white/15 hover:bg-white/30 transition-all duration-300 rounded-md"><FaSpotify/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
