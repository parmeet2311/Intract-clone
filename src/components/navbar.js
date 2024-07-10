import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./searchbar/searchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";

const data =[
  {name:"Linea"},
  {name:"Linea"},
  {name:"Linea"},
  {name:"Linea"},
  {name:"Linea"},
  {name:"Linea"},
  {name:"Linea"},
  {name:"Linea"},
  {name:"Linea"},
  {name:"Linea"},
]

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(true);
  const dropdownRef = useRef(null);

  const handleSearchBarClick = () => {
    setShowNavLinks(false);
  };

  const handleSearchBarBlur = () => {
    setShowNavLinks(true);
  };

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="z-[1000] sticky top-0 w-full backdrop-blur-sm bg-[#00000040] border-b-[1px] border-[rgba(255,255,255,.15)] transition-all duration-300">
        <div className="container flex items-center justify-center h-[64px]">
          <div className="flex flex-shrink-0">
            <Link href="/">
              <Image
                src="/assets/logo/intract_text.svg"
                width={100}
                height={0}
              />
            </Link>
          </div>
          <div
            className={`ml-[40px] gap-[1rem] items-center transition-opacity duration-300 ${
              showNavLinks ? 'hidden lg:flex' : 'hidden'
            }`}
          >
            <div className="nav_link">Compass</div>
            <div className="nav_link">Explore</div>
            <div className="nav_link selected">
              Academy
              <div className="nav_active_strip"></div>
            </div>
            <div className="nav_link">NFTs</div>
            <div className="nav_link">For Projects</div>
          </div>
          <div
            className={`w-full flex justify-end items-center ${
              showNavLinks ? 'ml-[2rem]' : ' ml-[4rem]'
            }`}
          >
            <SearchBar
              onFocus={handleSearchBarClick}
              onBlur={handleSearchBarBlur}
            />
            <div className="flex gap-[0.5rem] justify-end items-center">
              <div className="flex justify-between gap-[0.5rem] items-center">
                <div></div>
                <div className="broadcast">
                  <Image
                    src="/assets/others/broadcast.svg"
                    width={20}
                    height={0}
                  />
                </div>
              </div>
              <button className="h-fit whitespace-nowrap text-black bg-white rounded-md py-[7px] px-[24px] text-[15px] font-medium inline-block transition-all duration-300">
                Sign In
              </button>
              <RxHamburgerMenu onClick={handleShowMenu} className="text-2xl cursor-pointer lg:hidden" />
            </div>
          </div>
        </div>
      </header>
      <div  className="mobile-dropdown">
        {showMenu && (
          <div  data-mobile-bottom-drawer={showMenu} className="mobile-dropdown-container">
            <div ref={dropdownRef}>
              <span></span>
              <div>
                <div className="flex text-white flex-col text-[20px] gap-7 relative">
                  <div className="compass-container">
                    <Link href="/" className="flex items-center gap-[1rem]">
                      <h4>Compass</h4>{' '}
                      <span className="text-[11px] border-[1px] border-white/40 px-[8px] py-[4px] rounded-[4px] bg-white/10">
                        NEW
                      </span>
                    </Link>
                    <div className="mt-[1rem] grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-[10px]">
                      {data.map((item, index) => (
                        <div key={index} className="nav_icon_container">
                          <img
                            className="logo_bg"
                            src="/assets/others/compass.webp"
                          />
                          <div className="logo_main w-full h-full absolute flex justify-center items-center object-cover">
                            {' '}
                            <div className="transparent">
                              <img
                                className="w-[48px] h-[48px] z-[100] rounded-full object-cover"
                                src="/assets/others/compass.webp"
                              />
                            </div>
                            <div className="logo_name">Linea</div>
                          </div>
                          <img src="/assets/background/dot-bg.png" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <hr className="rounded-full opacity-[0.1] text-[#ffffff26]" />
                  <div>
                    <Link href="/" className="flex items-center gap-[1rem]">
                      <h4>Explore</h4>
                      <FaArrowRightLong />
                    </Link>
                  </div>
                  <hr className="rounded-full opacity-[0.1] text-[#ffffff26]" />
                  <div>
                    <Link href="/" className="flex items-center gap-[1rem]">
                      <h4>Academy</h4>
                      <FaArrowRightLong />
                    </Link>
                  </div>
                  <hr className="rounded-full opacity-[0.1] text-[#ffffff26]" />
                  <div>
                    <Link href="/" className="flex items-center gap-[1rem]">
                      <h4>NFTs</h4>
                      <FaArrowRightLong />
                    </Link>
                  </div>
                  <hr className="rounded-full opacity-[0.1] text-[#ffffff26]" />
                  <div>
                    <Link href="/" className="flex items-center gap-[1rem]">
                      <h4>For Projects</h4>
                      <FaArrowRightLong />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
