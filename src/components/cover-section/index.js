import Image from "next/image"
export default function CoverSection(){
    return (
        <div className="relative">
            <img src={"/assets/others/cover-img.png"}  className="h-[40vh] sm:h-auto w-full relative object-cover"/>
            {/* <Image src={"/assets/others/cover-img.png"} width={"500"} height={0}/> */}
            <div style={{transition:"top 0.8s ease"}} className="top-[65%] sm:top-[42%] absolute left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center mix-blend-screen">
                <div>
                    <img className="m-auto w-[235px] mix-blend-screen transition-all duration-500 ease-linear top-0" src="/assets/others/intract.gif"></img>
                    <div className="hero_text">
                        <p><span>Intract users</span> have together made more than <span>$100 million</span> in web3.<br/> Join them and <span>learn how to earn crypto!</span></p>
                        <div className="mt-5 w-max">
                            <div className="primary-btn-container">
                                <div className="primary-btn">
                                    <span>Get Started</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}