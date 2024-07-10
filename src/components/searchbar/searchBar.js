import { CiSearch } from "react-icons/ci";

export default function SearchBar({ onFocus, onBlur }) {
  return (
    <div className="lg:w-full">
      <div className="relative w-full hidden lg:flex text-[#fff6] rounded-full gap-[0.5rem] items-center h-[42.5px] px-[10px] py-[16px] bg-[rgba(255,255,255,.07)] border-[1px] border-[rgba(255,255,255,.05)] transition-all duration-300">
        <CiSearch className="text-[20px] flex-shrink-0" />
        <input
          className="w-full bg-transparent text-white font-outfit tracking-[0.138px] focus:outline-none "
          type="text"
          placeholder="Search for ecosystems, trending quests etc.."
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      {/* <div className=" relative w-full flex lg:hidden text-[#fff6] rounded-full gap-[0.5rem] items-center h-[42.5px] px-[10px] py-[16px] cursor-pointer bg-[rgba(255,255,255,.07)] hover:bg-[rgba(255,255,255,0.11)]  border-[1px] border-[rgba(255,255,255,.05)] transition-all duration-300">
        <CiSearch className="text-[20px] flex-shrink-0" />
        
      </div> */}
    </div>
  );
}
