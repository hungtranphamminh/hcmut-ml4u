import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/get-projects";
import Markdown from "react-markdown";
import authorIcon from "@images/shared/author-black.svg";
import dateIcon from "@images/shared/date-black.svg";

const SLIDE_DURATION = 5000;

interface ProjectFullDetailProps {
  readonly projects: Project[];
  readonly selectedIndex: number;
  readonly onIndexChange: (index: number) => void;
}

export default function ProjectFullDetail({
  projects,
  selectedIndex,
  onIndexChange,
}: ProjectFullDetailProps) {
  const [isHovered, setIsHovered] = useState(false);
  const progressAnimation = useAnimation();
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const progressRef = useRef<number>(0);

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    startTimeRef.current = Date.now();
    timerRef.current = setInterval(() => {
      onIndexChange((selectedIndex + 1) % projects.length);
      startTimeRef.current = Date.now();
      progressRef.current = 0;
      progressAnimation.set({ width: "0%" });
      progressAnimation.start({
        width: "100%",
        transition: { duration: SLIDE_DURATION / 1000, ease: "linear" },
      });
    }, SLIDE_DURATION);

    progressAnimation.start({
      width: "100%",
      transition: {
        duration: (SLIDE_DURATION - progressRef.current) / 1000,
        ease: "linear",
      },
    });
  }, [projects.length, onIndexChange, progressAnimation, selectedIndex]);

  const pauseTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    progressRef.current = Date.now() - startTimeRef.current;
    progressAnimation.stop();
  }, [progressAnimation]);

  useEffect(() => {
    if (isHovered) {
      pauseTimer();
    } else {
      startTimer();
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, pauseTimer, startTimer]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  const currentProject = projects[selectedIndex];
  if (!currentProject) return null;

  return (
    <div
      className="h-full w-full overflow-hidden relative rounded-md border border-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 z-10 flex items-start group-hover:opacity-0 transition-all duration-300 ease-in-out">
        <div
          className="bg-white w-fit p-4 text-2xl uppercase font-medium rounded-br"
          style={{
            writingMode: "sideways-rl",
          }}
        >
          Project details
        </div>
      </div>

      <div className="absolute top-0 right-0 z-10 flex flex-col items-end group-hover:opacity-0 transition-all duration-300 ease-in-out">
        <div className="px-4 py-2 text-2xl bg-white font-geist font-semibold shadow-lg rounded-bl">
          AITech Lab
        </div>

        <div className="px-4 bg-white rounded-bl shadow-lg">
          <div className=" bg-[url('/images/hcm-pic/no1.avif')] bg-[top_90%_left_45%] bg-clip-text text-transparent font-geist font-semibold text-4xl">
            {new Date()
              .getFullYear()
              .toString()
              .split("")
              .map((char, index) => (
                <div key={index} className=" font-geist">
                  {char}
                </div>
              ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="h-full w-full flex flex-col p-8 relative overflow-y-auto backdrop-blur-none hover:backdrop-blur-lg rounded-md peer
          [&::-webkit-scrollbar]:w-2 
          [&::-webkit-scrollbar-track]:bg-white/20
          [&::-webkit-scrollbar-thumb]:bg-white
          [&::-webkit-scrollbar-thumb]:rounded-full
          group transition-all duration-300 ease-in-out"
        >
          {currentProject.image && (
            <div className="relative w-full lg:h-80 h-64 mb-6">
              <Image
                src={currentProject.image}
                alt={currentProject.title}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          )}

          <div className="prose prose-lg max-w-none flex-grow group-hover:text-white/95 text-white/75 transition-all duration-300 ease-in-out">
            <p>{currentProject.description}</p>
            <Markdown>{currentProject.content}</Markdown>
          </div>
        </motion.div>
      </AnimatePresence>

      <div
        className="w-full p-8 absolute bottom-0 right-0 rounded-tl-xl z-10 bg-white overflow-y-auto backdrop-blur-sm transition-all duration-[400ms] ease-in-out h-[280px]
        peer-hover:h-0 overflow-hidden peer-hover:p-0 peer-hover:opacity-0 scrollbar-hidden
      "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProject.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col w-full"
          >
            <div className="w-full flex gap-2">
              <div className="text-7xl font-geist font-semibold text-transparent bg-[url('/images/hcm-pic/no1.avif')] bg-[top_90%_left_45%] bg-clip-text">
                {"0" + (selectedIndex + 1)}
              </div>
              <div>
                <div className="font-geist text-black text-lg font-medium">
                  {currentProject.title}
                </div>

                <div className="flex items-start mt-2">
                  <Image src={authorIcon} alt="Author" width={20} height={20} />
                  <div className="text-xs text-black ml-2">
                    By {currentProject.author}
                  </div>
                </div>

                <div className="flex items-start mt-2">
                  <Image src={dateIcon} alt="Author" width={20} height={20} />
                  <div className="text-xs text-black ml-2">
                    {new Date().toISOString().split("T")[0]}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t mt-4 text-base tracking-tight">
              <p>{currentProject.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
