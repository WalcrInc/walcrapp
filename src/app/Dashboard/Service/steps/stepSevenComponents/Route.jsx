import { EditRouteIcon } from "@/assets";
import React from "react";

export default function Route() {
  return (
    <div className="my-6">
      <div className="flex items-center justify-between">
        <h3 className="text-[#1A1A1A] text-[1.125rem] font-bold">Route</h3>
        <i>
          <EditRouteIcon />
        </i>
      </div>
      <div className="mt-6 relative ">
        <img
          src="/images/route_frame.png"
          className="absolute left-0 top-[14px]"
        />
        <div className="flex flex-col gap-4 ml-8">
          <input
            readOnly
            type="text"
            value={`4767 Bernardo Street, Salem. Indiana US`}
            className="bg-[#F6F6F6] text-[#5B6178] px-4 py-2 rounded-[10px] w-full"
          />
          <input
            readOnly
            type="text"
            value={`4767 Bernardo Street, Salem. Indiana US`}
            className="bg-[#F6F6F6] text-[#5B6178] px-4 py-2 rounded-[10px] w-full"
          />
        </div>
      </div>
    </div>
  );
}
