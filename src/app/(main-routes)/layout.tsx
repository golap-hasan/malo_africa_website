"use client";

import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export default function MainRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="screen-height">{children}</div>
      <Footer />
    </>
  );
}
