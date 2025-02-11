"use client";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
export default function FullPagePopupWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen overflow-y-auto flex scrollbar-hidden relative">
      {/* Header */}
      <Header />

      {children}

      {/* Right side bar */}
      <Sidebar />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
