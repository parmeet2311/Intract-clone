import CoverSection from "@/components/cover-section";
import { Card1, Card3 } from "@/components/Card1";
import { Card2, Card4 } from "@/components/Card2";
import { IoMdCheckmark } from "react-icons/io";
import { CryptoProject } from "@/components/cryptoProjects";
import { Dictionary } from "@/components/dictionay";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <CoverSection />
      <section className="mt-[120px] lg:mt-[-135px]">
        <div className="mx-auto relative overflow-hidden list-none p-0 z-[1]">
          <div className="section2-outer">
            <div className="section2-outer-1">
              <article>
                <div>
                  <div className="section2-container">
                    <div className="mx-auto my-0 px-[1rem] py-0 relative w-full max-w-[1200px]">
                      <Card1 />
                      <Card2 />
                    </div>
                    <div className="mx-auto my-0 px-[1rem] py-0 relative w-full max-w-[1200px]">
                      <Card3 />
                      <Card4 />
                    </div>
                    <div className="flex gap-[24px] w-full lg:w-fit mt-[215px] lg:mt-[80px] mb-[48px] px-[20px] mx-auto">
                      <div className="w-full lg:w-[320px]">
                        <div className="timer-container">
                          <div className="flex gap-x-[10px] items-center text-[16px] text-white/40">
                            <div>Rewards unlocks in</div>
                          </div>
                          <hr />
                          <div className="timer-container-inner">
                            <img
                              className="absolute object-cover w-full h-full top-0 left-0"
                              src="/assets/background/dot-bg.png"
                            ></img>
                            <div className="count">
                              <h3>00</h3>
                              <p>Days</p>
                            </div>
                            <div className="count">
                              <h3>00</h3>
                              <p>Hrs</p>
                            </div>
                            <div className="count">
                              <h3>00</h3>
                              <p>Mins</p>
                            </div>
                            <div className="count">
                              <h3>00</h3>
                              <p>Sec</p>
                            </div>
                          </div>
                        </div>
                        <div className="final_reward text-white/40">
                          <img src="/assets/others/reward.gif"></img>
                          <div className="flex justify-between gap-x-[1rem] text-[16px] mb-[12px] mt-[10px]">
                            <div>Exclusive Community</div>
                            <span className="text-white">
                              <p>Earndrop</p>
                            </span>
                          </div>
                          <hr className="dotted_line relative" />
                          <div className="flex items-center justify-between my-[10px] gap-x-[1rem]">
                            <div>Complete all Essential quests</div>
                            <div className="check">
                              <IoMdCheckmark />
                            </div>
                          </div>
                          <div className="flex items-center justify-between mb-[10px] gap-x-[1rem]">
                            <div>Complete all Essential quests</div>
                            <div className="check">
                              <IoMdCheckmark />
                            </div>
                          </div>
                          <button className="claim-btn !w-full" disabled>
                            Claim Now
                          </button>

                          <img
                            alt=""
                            className=" hidden lg:block absolute top-[43%] right-[-75%] z-[-1] translate-y-[-50%] opacity-50"
                            src="/assets/others/path.svg"
                          />

                          <div className="reward_info_container">
                            <div className="reward_info_header">
                              Reward Info
                            </div>
                            <div className="reward_info_body">
                              <p className="text-[16px] text-white">
                                Free access to paid KOL (crypto earning)
                                communities!
                              </p>
                              <br />
                              <p className="text-[16px]">
                                Win access to exclusive earning communities of
                                some of the the greatest earners in crypto for a
                                month, every 24 hours. Get access to unmatched
                                insights, a close-knit community of the best
                                airdrop earners, and more.
                              </p>
                              <br />
                              <p className="text-[16px]">
                                To win: make sure you ve connected your Twitter
                                and Discord accounts - and follow our criteria!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="divider"></section>
      <CryptoProject />

      <section className="divider mt-[50px]"></section>
      <Dictionary />
      
    </div>
  );
}
