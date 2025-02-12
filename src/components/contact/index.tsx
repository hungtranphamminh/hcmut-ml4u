import React from "react";
import Link from "next/link";
import MailIcon from "../ui/svgs/mail-icon";
import ArrowIcon from "../ui/svgs/arrow-icon";
import MapIcon from "../ui/svgs/map-icon";

const ContactPage = () => {
  return (
    <div className="w-full h-screen relative">
      {/* Bg decorator for header */}
      <div className="w-full h-[60px] bg-[url('/images/hcm-pic/no3.jpg')] bg-[length:2000px] bg-[top_44%_left_30%] relative">
        <div className="absolute w-full h-full bg-blue-950 bg-opacity-30">
          <div className="w-full h-full bg-black bg-opacity-55"></div>
        </div>
      </div>

      <div className="xl:w-[calc(100%-80px)] h-[calc(100%-60px)] flex overflow-y-auto scrollbar-hidden relative">
        {/* Left most bar */}
        <div
          className="sticky top-0 left-0 hidden md:flex z-30
            pl-4 items-center h-full bg-white text-xs text-blue-600 font-medium w-[80px]"
        >
          <div
            className=""
            style={{
              writingMode: "sideways-lr",
            }}
          >
            RECRUIT 2025
          </div>
        </div>

        {/* Main content */}
        <div className="@container flex items-start justify-between relative w-full h-full flex-wrap">
          {/* Left side - our origin section */}

          <section
            className="@[1200px]:h-full @md:max-w-[50%] @[1200px]:max-w-[400px] max-w-[370px]
         relative flex flex-col items-end z-10 shrink-0"
          >
            {/* [Mobile] - Title */}
            <div className="relative z-10 @3xl:hidden flex flex-col items-center w-full">
              <div className="font-geist pl-3 text-8xl bg-white bg-clip-text text-transparent bg-opacity-50 font-extralight pt-4">
                05
              </div>
              <div className=" min-w-[200px] w-fit py-2 px-3 ">
                <div className="font-medium text-3xl text-white text-nowrap tracking-widest relative uppercase font-geist">
                  CONTACT US
                  <div className="absolute -top-[2px] -left-2 w-[20px] h-3/4 border-t-[2px] border-l-[2px] border-white"></div>
                  <div className="absolute -bottom-[2px] -right-2 w-[20px] h-3/4 border-b-[2px] border-r-[2px] border-white"></div>
                </div>
              </div>
            </div>
            {/* Origin */}
            <div className="flex relative w-full">
              {/* Main content box */}
              <div className="w-full">
                <div
                  className="md:w-fit w-fit 
                lg:py-4 lg:pl-4 lg:pr-6 
                py-2 pl-2 pr-3
                bg-white"
                >
                  {/* Team name */}
                  <div className="font-extralight lg:text-5xl md:text-4xl text-3xl text-black text-nowrap tracking-wide relative uppercase font-geist w-fit">
                    <span className="font-semibold text-transparent bg-[url('/images/hcm-pic/no1.avif')] bg-[length:300px] bg-bottom bg-clip-text">
                      AI Tech Lab
                    </span>

                    <div
                      className="absolute -top-[2px] md:-left-3 -left-1 
                     w-[20px] h-3/4 lg:border-t-[3px] lg:border-l-[3px] border-black"
                    ></div>
                    <div
                      className="absolute -bottom-[2px] md:-right-3 -right-1 
                    w-[20px] h-3/4 
                    lg:border-b-[3px] lg:border-r-[3px]  
                    border-black"
                    ></div>
                  </div>
                </div>
                {/*  */}
                <div className="flex">
                  <div className="px-5 h-fit w-fit pb-4 bg-white flex flex-col items-center font-geist">
                    {"Innovators".split("").map((char, index) => (
                      <p
                        key={index}
                        className="lg:text-3xl text-xl font-extralight leading-none text-black uppercase
                    "
                        style={{
                          transform: "scaleX(1.5)",
                        }}
                      >
                        {char}
                      </p>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="xl:ml-10 xl:mt-10 md:ml-5 md:mt-5 mt-3 ml-3">
                    <div className=" mx-auto">
                      <p className=" mb-6 font-geist text-white">
                        The ML4U - AITech Lab evolved from the ML4U group, which
                        has been active since 2020. Our lab is a collaborative
                        research effort at Ho Chi Minh City University of
                        Technology (HCMUT - VNUHCM), led by Dr. Nguyen Duc Dung.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Middle side - contact information */}
          <section
            className="@[1200px]:h-full @md:max-w-[50%] @[1200px]:max-w-[400px] max-w-[370px] shrink-0 
        flex flex-col items-center justify-center w-full px-4 py-6"
          >
            {/* [Tablet] - Title */}
            <div className="mt-[60px] relative justify-end z-10 @[1200px]:hidden @3xl:block hidden">
              <div className="flex relative w-full justify-end">
                <div className="flex flex-col items-end w-full">
                  <div className="font-geist  text-7xl md:text-9xl  bg-white bg-clip-text text-transparent bg-opacity-50 font-extralight pt-4">
                    05
                  </div>
                  <div className=" min-w-[200px] w-fit py-4 pl-6 pr-6 ">
                    <div className="font-medium lg:text-5xl text-4xl text-white text-nowrap tracking-widest relative uppercase font-geist">
                      CONTACT US
                      <div className="absolute -top-[2px] -left-3 w-[20px] h-3/4 border-t-[2px] border-l-[2px] border-white"></div>
                      <div className="absolute -bottom-[2px] -right-3 w-[20px] h-3/4 border-b-[2px] border-r-[2px] border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Collab information section */}
            <section className="w-full text-white font-geist my-5">
              <div className="uppercase font-medium text-xl mb-2">
                COLLABORATION OPPORTUNITIES
              </div>
              <div className="mb-2">
                We welcome collaboration proposals from:
                <p> - Industry partners</p>
                <p> - Academic Institutions</p>
                <p> - Potential graduate students</p>
                <p> - Research internship candidates</p>
              </div>
              <div className=" mb-2">
                For collaboration opportunities, please contact our leader, Dr.
                Nguyen Duc Dung, via email as our primary point of contact.
              </div>
              {/* Email */}
              <div className="relative border-t border-b border-white">
                <Link
                  href="mailto:dung.nguyen@hcmut.edu.vn"
                  className="relative z-10 py-1 group text-white text-lg font-medium
                  hover:text-black
                   transition-all duration-300 ease-in-out
                  "
                >
                  <div
                    className="w-0 h-full absolute top-0 right-0 bg-transparent
                      group-hover:bg-white group-hover:left-0 group-hover:w-full transition-all duration-500 ease-in-out
                    "
                  ></div>

                  <div className="relative flex items-center gap-2 w-fit">
                    <div className="w-0 h-full group-hover:w-[10px] transition-all duration-300 ease-in-out"></div>

                    <MailIcon />

                    <p className="">Email Us</p>
                    <p> | </p>

                    <ArrowIcon />
                  </div>
                </Link>
              </div>
            </section>
          </section>

          {/* Right side - Visit us section */}
          <section
            className="flex 
        @[1200px]:h-full @[1200px]:justify-end @md:max-w-full  @[1200px]:max-w-[400px] max-w-[370px]
        items-end @[1200px]:pb-[60px] right-0 z-30 relative"
          >
            {/* [Desktop] - Title */}
            <div className="top-[80px] absolute hidden justify-end z-10 @[1200px]:flex">
              <div className="flex relative w-full justify-end">
                <div className="flex flex-col items-end w-full">
                  <div className=" font-geist  text-5xl md:text-9xl  bg-white bg-clip-text text-transparent bg-opacity-50 font-extralight py-4">
                    05
                  </div>
                  <div className=" min-w-[200px] w-fit pl-6 pr-6 ">
                    <div className="font-medium lg:text-5xl text-4xl text-white text-nowrap tracking-widest relative uppercase font-geist">
                      CONTACT US
                      <div className="absolute -top-[2px] -left-3 w-[20px] h-3/4 border-t-[2px] border-l-[2px] border-white"></div>
                      <div className="absolute -bottom-[2px] -right-3 w-[20px] h-3/4 border-b-[2px] border-r-[2px] border-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div
              className=" w-full h-[204px] 
            relative group overflow-hidden
            transition-all duration-500 ease-in-out shadow-xl
          "
            >
              {/* Faculty image */}
              <div
                className="w-full h-full absolute top-0 left-0 bg-[url('/images/hcm-pic/no4.jpg')]  
                  group-hover:scale-110 transition-all duration-300 ease-in-out bg-cover bg-center bg-no-repeat"
              >
                <div
                  className="w-full h-full bg-black bg-opacity-80 
                
                    transition-all duration-300 ease-in-out
                    "
                ></div>
              </div>
              <div
                className=" text-white relative z-10 h-full
            "
              >
                <p className=" font-geist text-white p-4 ">
                  Our lab is located at Faculty of Computer Science and
                  Engineering Ho Chi Minh City University of Technology 268 Ly
                  Thuong Kiet Street, District 10 Ho Chi Minh City, Vietnam
                </p>
                {/* Direction */}
                <div className="w-full absolute bottom-0 left-0 ">
                  <Link
                    href={`https://maps.app.goo.gl/PE4aTHpftzSePW118`}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="relative z-10 py-1 text-white text-lg font-medium
                  group-hover:text-black w-full flex justify-center
                   transition-all duration-300 ease-in-out
                  "
                  >
                    <div
                      className="w-0 h-full absolute top-0 right-0 bg-transparent
                      group-hover:bg-white group-hover:left-0 group-hover:w-full transition-all duration-500 ease-in-out
                    "
                    ></div>
                    <div className="relative flex items-center gap-2">
                      <p className="w-0 h-full group-hover:w-[10px] transition-all duration-300 ease-in-out"></p>

                      <MapIcon />

                      <p className="">Direction</p>
                      <p> | </p>

                      <ArrowIcon />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* Right content bar */}
            <div className="px-5 h-fit w-fit py-2 bg-white flex flex-col items-center font-geist">
              {"Visit Us".split("").map((char, index) => (
                <p
                  key={index}
                  className="text-lg font-light leading-none text-black uppercase"
                  style={{
                    transform: "scaleX(1.2)",
                    height: char === " " ? "1em" : "auto",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Bottom decorator */}
      <div className="fixed md:block hidden bottom-0 z-20 left-0 w-full h-[60px] bg-[url('/images/hcm-pic/no1.avif')] bg-[length:2000px] bg-[top_90%_left_50%]">
        <div className="absolute w-full h-full bg-blue-950 bg-opacity-30">
          <div className="w-full h-full bg-black bg-opacity-15 backdrop-blur-[3px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
