// "use client"
import { useState, useEffect } from "react";
import Head from "next/head";
import "@/styles/globals.css";
import "@/styles/navbar.css";
import "@/styles/cover.css";
import "@/styles/card.css";
import "@/styles/project.css";
import Layout from "@/components/layout";
import dynamic from "next/dynamic";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { BiSolidMessageSquareDots } from "react-icons/bi";

function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const LayoutComponent = Component.layout || (({ children }) => <>{children}</>);

  return (
    <>
      <Head>
        <title>{"Maviex "}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          @keyframes zoomInOut {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }

          .preloader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: black; /* or any color you want for the preloader background */
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }

          .loader {
            font-size: 40px;
            font-weight: bold;
            color: white; /* Adjust the color as needed */
            animation: zoomInOut 2s ease-in-out infinite;
          }
        `}</style>
      </Head>

      {loading ? (
        <div className="preloader">
          {/* Add your preloader content here */}
          <div className="loader">P.</div>
        </div>
      ) : (
        <LayoutComponent>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          <div className="fixed bottom-[20px] right-[20px] xs:bottom-[50px] xs:right-[50px] cursor-pointer bg-white text-black p-[8px] rounded-full transition-all duration-300 hover:scale-[1.1] z-[10000]">
            <BiSolidMessageSquareDots className="text-3xl" />
          </div>
        </LayoutComponent>
      )}
    </>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});