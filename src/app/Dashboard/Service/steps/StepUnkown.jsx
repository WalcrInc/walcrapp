import { ElsewhereIconLarge, HomeLarge } from "@/assets";
import React from "react";

export default function StepUnkown({ location, setLocation, handleNext }) {
  return (
    <div className="location">
      <div className="location-area">
        <div>
          <h1>Where would you like your task completed?</h1>
          <p className="">Will the task be done at home or somewhere else?</p>
        </div>

        <div className="options-container">
          <label className="option-label">
            <div className="option-box">
              <input
                type="radio"
                value="home"
                checked={location === "home"}
                onChange={() => setLocation("home")}
                className="radio-input"
              />
              <HomeLarge />
            </div>
            <p>Home</p>
          </label>

          <label className="option-label">
            <div className="option-box">
              <input
                type="radio"
                value="elsewhere"
                checked={location === "elsewhere"}
                onChange={() => setLocation("elsewhere")}
                className="radio-input"
              />
              <ElsewhereIconLarge />
            </div>
            <p>Somewhere else</p>
          </label>
        </div>
      </div>
      <button className="black-button" onClick={handleNext}>
        Continue
      </button>
    </div>
  );
}
