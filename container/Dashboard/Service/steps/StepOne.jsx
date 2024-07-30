import { SearchIconFlipped } from "@/assets";
import React from "react";

export default function StepOne({
  searchService,
  setSearchService,
  service,
  handleClick,
}) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="search_form">
          <i>
            <SearchIconFlipped />
          </i>
          <input
            type="text"
            value={searchService}
            required
            placeholder="Search tasks"
            onChange={(e) => setSearchService(e.target.value)}
          />
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
