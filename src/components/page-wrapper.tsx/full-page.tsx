"use client";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import LeftBar from "../sidebar/recruit-bar";
export default function FullPagePopupWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen overflow-y-auto flex scrollbar-hidden relative">
      {/* Header */}
      <Header />

      {/* Left side bar */}
      <LeftBar />

      {children}

      {/* Right side bar */}
      <Sidebar />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
