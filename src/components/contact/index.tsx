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

      {/* Main content */}
      <div className="flex items-start justify-between relative w-[calc(100%-100px)] h-[calc(100%-60px)]">
        {/* Left side - our origin section */}
        <section className=" h-full  relative flex z-10">
          {/* Left white bar */}
          <div className="flex relative">
            {/* Left most bar */}
            <div className="relative flex pl-4 items-center h-full bg-white text-xs text-blue-600 font-medium w-[80px]">
              <div
                className=""
                style={{
                  writingMode: "sideways-lr",
                }}
              >
                RECRUIT 2025
              </div>
            </div>

            {/* Main content box */}
            <div>
              <div className=" min-w-[200px] w-fit py-4 pl-4 pr-6 bg-white">
                {/* Team name */}
                <div className="font-extralight text-5xl text-black text-nowrap tracking-wide relative uppercase font-geist">
                  <span className="font-semibold text-transparent bg-[url('/images/hcm-pic/no1.avif')] bg-[length:300px] bg-bottom bg-clip-text">
                    AI Tech Lab
                  </span>

                  <div className="absolute -top-[2px] -left-3 w-[20px] h-3/4 border-t-[3px] border-l-[3px] border-black"></div>
                  <div className="absolute -bottom-[2px] -right-3 w-[20px] h-3/4 border-b-[3px] border-r-[3px] border-black"></div>
                </div>
              </div>
              {/*  */}
              <div className="flex">
                <div className="px-5 h-fit w-fit pb-4 bg-white flex flex-col items-center font-geist">
                  {"Innovators".split("").map((char, index) => (
                    <p
                      key={index}
                      className="text-3xl font-extralight leading-none text-black uppercase
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
                <div className="ml-10 mt-10 max-w-[300px]">
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

        {/* Middle side - title, inquiries & location */}
        <div className="grow mt-[180px] relative flex justify-end z-10">
          <div className="flex relative w-full justify-end">
            <div className="flex flex-col items-end w-full">
              <div className=" min-w-[200px] w-fit py-4 pl-6 pr-6 ">
                {/* Title */}
                <div className="font-medium text-5xl text-white text-nowrap tracking-widest relative uppercase font-geist">
                  <div className="-top-full -translate-y-[100px] font-geist text-9xl bg-white bg-clip-text text-transparent bg-opacity-50 font-extralight absolute right-0 py-6">
                    04
                  </div>
                  CONTACT US
                  <div className="absolute -top-[2px] -left-3 w-[20px] h-3/4 border-t-[2px] border-l-[2px] border-white"></div>
                  <div className="absolute -bottom-[2px] -right-3 w-[20px] h-3/4 border-b-[2px] border-r-[2px] border-white"></div>
                </div>
              </div>

              {/* Collab information section */}
              <section className="w-full text-white font-geist my-5 pl-20">
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
                <div className="max-w-[400px] mb-2">
                  For collaboration opportunities, please contact our leader,
                  Dr. Nguyen Duc Dung, via email as our primary point of
                  contact.
                </div>
                {/* Email */}
                <div className="relative max-w-[400px] border-t border-b border-white">
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
            </div>
          </div>
        </div>

        {/* Right side - Visit us section */}
        <section className="flex items-end absolute bottom-[60px] right-0 z-20">
          {/* Content */}
          <div
            className=" w-[400px] h-[204px] hover:w-[600px] hover:h-[400px]  relative group overflow-hidden
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
                group-hover:bg-gradient-to-t group-hover:bg-transparent group-hover:from-black from-[10%] group-hover:via-transparent group-hover:to-transparent
                    transition-all duration-300 ease-in-out
                    "
              ></div>
            </div>
            <div className=" text-white relative z-10 group-hover:absolute group-hover:bottom-0 group-hover:left-0 ">
              <p className="mb-2 font-geist text-white  p-4 ">
                Our lab is located at Faculty of Computer Science and
                Engineering Ho Chi Minh City University of Technology 268 Ly
                Thuong Kiet Street, District 10 Ho Chi Minh City, Vietnam
              </p>
              {/* Direction */}
              <Link
                href={`https://maps.app.goo.gl/PE4aTHpftzSePW118`}
                rel="noopener noreferrer"
                target="_blank"
                className="relative z-10 py-1 text-white text-lg font-medium
                  group-hover:text-black 
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

      {/* Bottom decorator */}
      <div className="absolute bottom-0 z-[5] left-0 w-full h-[60px] bg-[url('/images/hcm-pic/no1.avif')] bg-[length:2000px] bg-[top_90%_left_50%]">
        <div className="absolute w-full h-full bg-blue-950 bg-opacity-30">
          <div className="w-full h-full bg-black bg-opacity-15 backdrop-blur-[3px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
