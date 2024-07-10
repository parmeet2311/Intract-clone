
import { FaBookOpen } from "react-icons/fa";
export function Dictionary() {
  return (
    <div className="mt-[28px] max-w-[1200px] mx-auto">
      <div className="text-center">
        <div className="text-white leading-[30px] mb-[8px] text-[24px] ">
        Crypto Dictionary
        </div>
        <div className="text-white/40 overflow-hidden text-ellipsis leading-[20px] text-[16px] mb-[16px]">
        Your one-stop to catch up on all crypto terms

        </div>
      </div>
      <div className="mt-[40px] dict-container">
       <img className="object-cover bg-white/5" src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"/>
       <img className="dictionary-img" src="https://static.highongrowth.xyz/enterprise/660ed0280f5e5a9e8238d0f5/2e422c461a9a447b8c67c5642f6bf0fd.svg"/>
       <div className="dict-content">
        <div className="dict-content-left">
            <div className="dict-heading-main">Web3 + Degen Glossary</div>
            <div className="dict-heading-sub">Your own crypto dictionary</div>
        </div>
        <div className="dict-content-right"><FaBookOpen className="text-2xl"/></div>
       </div>
      </div>
    </div>
  );
}
