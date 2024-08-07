import { BlackDot, FlagLocationDark, HomeLocationBlack } from "@/assets";
import React, { useState } from "react";

export default function StepFive({ handleNext }) {
  const [location, setLocation] = useState("Home");

  return (
    <>
      <img
        src="/images/map.png"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
      />
      <div className="step_five_info relative">
        <div className="absolute left-[-1rem] top-4 flex items-center justify-center w-full">
          <div className=" bg-[#F2F2F2] w-[52px] h-[4px] rounded-[2px]"></div>
        </div>
        <div className="flex flex-col gap-2 mb-6">
          <p className="text-[1.375rem] font-mulish font-bold leading-6 text-[#1a1a1a]">
            Select a task you need help with
          </p>
          <p className="font-mulish text-[#1a1a1a]">
            You can select multiple task all at once
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <div
            className={`flex gap-4 py-3 px-4 border-[] rounded-xl border-[1px] ${
              location === "Home" ? "border-[#000000]" : "border-[#D9DDEA]"
            }`}
          >
            <HomeLocationBlack />
            <input
              className="w-full outline-none"
              readOnly
              value={`4767 Bernardo Street, Salem. Indiana Unite`}
              type="text"
              onClick={() => {
                setLocation("Home");
              }}
            />
          </div>
          <div
            className={`flex gap-4 py-3 px-4 border-[] rounded-xl border-[1px] ${
              location !== "Home" ? "border-[#000000]" : "border-[#D9DDEA]"
            }`}
          >
            <FlagLocationDark />
            <input
              className="w-full outline-none"
              placeholder="Somewhere else?"
              type="text"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleNext} className="black-button mt-9">
          Next
        </button>
      </div>
    </>
  );
}
