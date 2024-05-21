"use client";
import Image from "next/image";
import mainPic from "../public/mainPic.svg";
import leftChat from "../public/left-robot.png";
import TriggreChat from "../pages/TriggreChat";
import React, { useEffect, useState } from "react";

export default function Main() {

  const courses = ["History", "English", " Math"];
  const [element, setElement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElement((prevIndex) => (prevIndex + 1) % courses.length);
    }, 1500); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []); // Empty dependency array to run useEffect only once on mount

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Modified toggleChatbot function to close the chatbot only when a button is clicked
  const toggleChatbot = () => {
 
    setIsChatbotOpen(!isChatbotOpen); // Toggle chatbot visibility
  };
  return (
    <main className="flex min-h-auto flex-col items-center justify-between">
       <div className=" h-full ">
        <Image
          className="z-30"
          src={mainPic}
          alt="background"
          style={{
            width: "100%",
            height: "auto",
          }}
          objectFit="cover"
        />
        <div className=" absolute flex justify-center w-full top-1/3">
          <span className="text-white text-[70px] font-bold w-[1122px] h-[270px] leading-[85.08px]">
           Take a quiz in{" "}
            {
              <span className="uppercase text-lime-400">
                {courses[element]}
              </span>
            }
          </span>
        </div>
        <div
           onClick={() => setIsChatbotOpen(!isChatbotOpen)} // Toggle chatbot visibility when clicked
           className="absolute bottom-0 left-0 p-2 cursor-pointer"
        >
          {/* Left bottom icon */}
          <Image
            className="z-30"
            src={leftChat}
            alt="background"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
          {/* Render Chatbot*/}
          {isChatbotOpen && <TriggreChat onClose={() => setIsChatbotOpen(false)} />} {/* Pass function to close the chatbot */}
        </div>

      </div>
    </main>
  );
}
