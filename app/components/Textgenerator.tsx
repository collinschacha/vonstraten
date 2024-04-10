"use client";
import Link from "next/link";
import { TypewriterEffect } from "./ui/typewriter-effect";
const words = [
  {
    text: "The",
  },
  {
    text: "Road",
  },
  {
    text: "To",
  },
  {
    text: "Freedom",
  },
  {
    text: "Starts",
  },
  {
    text: "Here",
  },
];

const Textgenerator = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        Von Straten Group
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Link className="nav-link black" href="/chat">
          chat Now
        </Link>
      </div>
    </div>
  );
};

export default Textgenerator;
