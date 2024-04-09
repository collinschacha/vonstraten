// Section.js
import React from "react";

const Section = ({ children }: any) => {
  return <div className="flex-1 overflow-y-auto h-screen">{children}</div>;
};

export default Section;
