import { SearchIconFlipped, SearchIconG, SearchIconGray } from "@/assets";
import React from "react";

export default function StepOne({
  searchService,
  setSearchService,
  service,
  handleClick,
}) {
  return (
    <>
      <div className="flex flex-col gap-2 mb-[1.375rem]">
        <p className="text-[1.375rem] font-mulish font-bold leading-6 text-[#1a1a1a]">
          Select a task you need help with
        </p>
        <p className="font-mulish text-[#1a1a1a]">
          You can select multiple task all at once
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex items-center px-6 py-3 rounded-lg justify-between bg-[#f7f7f7] mb-8">
          <input
            type="text"
            value={searchService}
            required
            placeholder="Search Task"
            className="bg-transparent outline-none w-full"
            onChange={(e) => setSearchService(e.target.value)}
          />
          <i>
            <SearchIconGray />
          </i>
        </div>
      </form>
      <div className="big-box">
        {service?.map(({ name, _id, icon, details }) => (
          <div key={_id} className="box" onClick={() => handleClick(name)}>
            <span>{icon}</span>
            <h1>{name}</h1>
            <p>{details}</p>
          </div>
        ))}
      </div>
    </>
  );
}
