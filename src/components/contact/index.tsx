import React from "react";
import Link from "next/link";
import MailIconDark from "../ui/svgs/mail-icon-dark";
import locationIcon from "@images/shared/location.svg";
import ArrowIcon from "../ui/svgs/arrow-icon-dark";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="w-full h-screen overflow-y-auto scrollbar-hidden relative text-white">
      {/* Bg decorator for header */}
      <div className="w-full h-[60px] bg-[url('/images/hcm-pic/no1.avif')] bg-[length:2000px] bg-[top_70%_left_60%] fixed">
        <div className="absolute w-full h-full bg-blue-950 bg-opacity-50">
          {/* <div className="w-full h-full bg-black bg-opacity-55"></div> */}
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-col items-center justify-center relative w-full my-[60px] pt-20 md:px-10 px-4">
        {/* Contact information */}
        <div className="w-fit flex flex-col items-center justify-center bg-black/30 backdrop-blur-md rounded-md relative">
          <section
            className="flex lg:max-w-3xl  xl:max-w-4xl md:flex-row flex-col items-stretch border rounded-lg
          "
          >
            {/* Content */}
            <div className=" md:w-1/2 w-full flex flex-col text-base text-black">
              <div className="flex w-full items-start gap-1 justify-between bg-white rounded-tl-lg p-4">
                <div>
                  <div className="text-3xl font-semibold">Get in touch</div>

                  <div className="border-b border-b-slate-400 pb-4 italic">
                    Let&apos;s talk about our next projects together!
                  </div>
                </div>
              </div>

              <div className="px-4 py-3 bg-white text-black">
                We welcome collaboration proposals from industry partners,
                academic institutions, prospective graduate students, and
                research internship candidates.
              </div>

              <div className="px-4 pb-3 bg-white text-black">
                For collaboration opportunities or visit requests, please
                contact our leader,{" "}
                <span className="font-medium mx-1">Dr. Nguyen Duc Dung</span>,
                for detailed information and arrangements. Email is our primary
                point of contact.
              </div>

              {/* Email */}
              <Link
                href="mailto:dung.nguyen@hcmut.edu.vn"
                className=" z-10  group text-lg font-medium w-full px-4
                    transition-all duration-300 ease-in-out bg-white
                    "
              >
                <div className="relative flex items-center gap-2 w-full">
                  <div
                    className="w-0 h-full absolute top-0 right-0 bg-[url('/images/hcm-pic/no1.avif')] bg-bottom 
                    group-hover:w-full transition-all duration-500  ease-in-out group-hover:left-0
                  "
                  ></div>
                  <div className="flex items-center z-10 gap-4 w-full border-t border-b">
                    <div className="w-0 group-hover:w-6 transition-all duration-300 ease-in-out"></div>

                    <MailIconDark />

                    <p className="text-black group-hover:text-white font-normal">
                      Email Us
                    </p>
                    <div className="w-0 group-hover:w-6 transition-all duration-500 ease-in-out overflow-hidden">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </Link>

              {/* Location */}
              <div className="relative pt-60 p-4 bg-white rounded-bl-lg group">
                <div className="w-full h-full absolute top-0 left-0 p-4 ">
                  <div
                    className="w-full h-full bg-[url('/images/hcm-pic/no4.jpg')]  rounded-lg 
                   transition-all duration-300 ease-in-out bg-cover bg-center bg-no-repeat"
                  >
                    <div
                      className="w-full h-full bg-gradient-to-t from-black/70 to-transparent rounded-lg
                    
                    transition-all duration-300 ease-in-out
                    "
                    ></div>
                  </div>
                </div>
                <div className="w-full flex items-center gap-2 relative z-10">
                  {/* Title card */}
                  <div className="  w-2/6 shrink-0 self-stretch  relative ">
                    <div className="relative z-20 flex flex-col items-start w-full bg-white rounded-bl-md rounded-tr-2xl h-full">
                      <div
                        className=" leading-none text-5xl font-semibold text-transparent bg-clip-text bg-[url('/images/hcm-pic/no1.avif')] bg-[top_80%_left_45%] pt-4"
                        style={{
                          transform: "scaleX(1.3)",
                        }}
                      >
                        05
                      </div>
                      <div className=" w-fit py-2 ">
                        <div className="font-semibold sm:text-xl text-sm -ml-1 text-black text-nowrap tracking-tighter relative uppercase">
                          CONTACT US
                        </div>
                      </div>
                    </div>

                    {/* Decorated thingy */}

                    <div className="z-10 top-0 -translate-y-full left-0 size-[22px]  absolute  rounded-full ">
                      <div className="cornered w-full h-full relative overflow-hidden"></div>
                    </div>

                    <div className=" bottom-0 right-0 translate-x-full size-[22px] z-[20]  absolute  rounded-full ">
                      <div className="cornered w-full h-full relative overflow-hidden"></div>
                    </div>
                  </div>

                  <div className="flex grow gap-2 p-2 text-white">
                    <Image
                      src={locationIcon}
                      alt="Location Icon"
                      width={24}
                      height={24}
                    />
                    <div className="text-xs">
                      Faculty of Computer Science and Engineering, Ho Chi Minh
                      City University of Technology.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div
              className=" grow self-stretch border rounded-r-lg
              relative group overflow-hidden 
              transition-all duration-500 ease-in-out shadow-xl
            "
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.495656880097!2d106.65572007465535!3d10.772909189387625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2sHo%20Chi%20Minh%20City%20University%20of%20Technology%20(HCMUT)!5e0!3m2!1sen!2s!4v1708087524659!5m2!1sen!2s"
                className="  w-full xl:max-w-4xl lg:max-w-3xl h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="HCMUT Location Map"
              />
            </div>
          </section>

          {/* Title tag */}
          <div className="bg-white py-1 absolute top-4 left-0 -translate-x-full rounded-l md:block hidden">
            <div
              className="text-3xl font-medium text-nowrap text-transparent bg-[url('/images/hcm-pic/no1.avif')] bg-[length:2000px] bg-clip-text bg-[top_65%_left_50%]"
              style={{
                writingMode: "sideways-lr",
              }}
            >
              AITech Lab
            </div>
          </div>
        </div>
      </div>

      {/* Bottom decorator */}
      <div className="fixed md:block hidden bottom-0 z-20 left-0 w-full h-[60px] bg-[url('/images/hcm-pic/no1.avif')] bg-[length:2500px] bg-[top_90%_left_50%]">
        <div className="absolute w-full h-full bg-blue-950 bg-opacity-30">
          <div className="w-full h-full bg-black bg-opacity-15 "></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
