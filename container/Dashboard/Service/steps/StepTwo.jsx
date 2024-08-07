import { SearchIconFlipped, SearchIcon, SearchIconGray } from "@/assets";
import React from "react";

export default function StepTwo({
  searchService,
  setSearchService,
  selectedService,
  handleNext,
}) {
  return (
    <>
      <div className="flex flex-col gap-2 mb-[1.375rem]">
        <p className="text-[1.375rem] font-mulish font-bold leading-6 text-[#1a1a1a]">
          Choose the sub category within your selected task
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
            placeholder="Search tasks"
            className="bg-transparent outline-none w-full"
            onChange={(e) => setSearchService(e.target.value)}
          />
          <i>
            <SearchIconGray />
          </i>
        </div>
      </form>
      <div className="questions">
        <div>
          {selectedService.questions.map((question, index) => (
            <label key={index}>
              <p>{question}</p>
              <input type="radio" />
            </label>
          ))}
        </div>

        <button className="black-button" onClick={handleNext}>
          Continue
        </button>
      </div>
    </>
  );
}
