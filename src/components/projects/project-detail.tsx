import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/get-projects";
import Markdown from "react-markdown";
import ArrowIcon from "../ui/svgs/arrow-icon";

interface ProjectDetailOverlayProps {
  readonly projects: Project[];
  readonly selectedIndex: number;
  readonly onClose: () => void;
  readonly onIndexChange: (index: number) => void;
}

export default function ProjectDetailOverlay({
  projects,
  selectedIndex,
  onClose,
  onIndexChange,
}: ProjectDetailOverlayProps) {
  const [isVisible, setIsVisible] = useState(false);
  const currentProject = selectedIndex !== -1 ? projects[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex !== -1) {
      setIsVisible(true);
    }
  }, [selectedIndex]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleExitComplete = () => {
    if (!isVisible) {
      onClose();
    }
  };

  if (!currentProject) return null;

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex xl:pr-[80px] xl:pl-[80px] pt-[60px]">
          <div className="w-full h-full flex relative">
            {/* Navigation Sidebar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="sticky left-0 top-0 h-full w-[300px] border-r border-white/20 "
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-white mb-8">
                  Projects Details
                </h2>
                <div
                  className="space-y-4 overflow-y-auto
                  [&::-webkit-scrollbar]:w-2 
                  [&::-webkit-scrollbar-track]:bg-white/20
                  [&::-webkit-scrollbar-thumb]:bg-white
                  [&::-webkit-scrollbar-thumb]:rounded-full"
                >
                  {projects.map((project, idx) => (
                    <button
                      key={idx}
                      onClick={() => onIndexChange(idx)}
                      className={`w-full text-left p-4 rounded transition-all duration-300 ease-in-out
                      ${
                        idx === selectedIndex
                          ? "bg-white text-black"
                          : "text-white/70 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-3xl font-light">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-sm leading-tight line-clamp-2">
                          {project.title}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="  group z-10 mt-10 relative transition-colors w-full flex items-center border-t border-b border-white"
                >
                  <div className="absolute top-0 left-0 w-0 h-[40px] group-hover:w-full bg-white transition-all duration-300 ease-in-out"></div>
                  <div className="w-0 group-hover:w-5 transition-all duration-300 ease-in-out relative z-10"></div>
                  <div className="px-4 py-2 backdrop-blur-sm text-white rounded-md transition-all group-hover:text-black duration-300 ease-in-out relative z-10">
                    Minimize
                  </div>
                  <div className="relative z-10">
                    <ArrowIcon />
                  </div>
                </button>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1 h-full overflow-y-auto p-8
                [&::-webkit-scrollbar]:w-2 
                [&::-webkit-scrollbar-track]:bg-white/20
                [&::-webkit-scrollbar-thumb]:bg-white
                [&::-webkit-scrollbar-thumb]:rounded-full
                backdrop-blur-md
                "
            >
              <div className="max-w-4xl mx-auto">
                {currentProject.image && (
                  <div className="relative w-full mb-6">
                    <Image
                      src={currentProject.image}
                      alt={currentProject.title}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      className="rounded-lg"
                    />
                  </div>
                )}

                <h1 className="text-4xl font-bold text-white mb-4">
                  {currentProject.title}
                </h1>
                <div className="text-white/60 mb-8">
                  <p>By {currentProject.author}</p>
                </div>

                <div className="prose prose-lg prose-invert max-w-none text-white/90">
                  <p className="mb-2">{currentProject.description}</p>
                  <Markdown>{currentProject.content}</Markdown>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
