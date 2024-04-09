// Layout.js
"use client";
import React, { useEffect, useState } from "react";

const Layout = ({ children }: any) => {
  const [containerHeight, setContainerHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setContainerHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col" style={{ minHeight: containerHeight }}>
      {children}
    </div>
  );
};

export default Layout;
