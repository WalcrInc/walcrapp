import React from "react";

export default function StepFive({ handleNext }) {
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
      <div className="step_five_info">
        <h2>Where would you like your task completed?</h2>
        <div className="addresses">
          <div className="home_address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M0.35139 11.2135C-0.00162992 8.9162 -0.17814 7.76763 0.25617 6.74938C0.69047 5.73112 1.65403 5.03443 3.58114 3.64106L5.02099 2.6C7.41829 0.86667 8.61698 0 9.99998 0C11.3831 0 12.5817 0.86667 14.979 2.6L16.4189 3.64106C18.346 5.03443 19.3096 5.73112 19.7439 6.74938C20.1782 7.76763 20.0017 8.9162 19.6486 11.2135L19.3476 13.1724C18.8472 16.4289 18.5969 18.0572 17.429 19.0286C16.2611 20 14.5537 20 11.1388 20H8.86118C5.44634 20 3.73891 20 2.571 19.0286C1.40309 18.0572 1.15287 16.4289 0.65243 13.1724L0.35139 11.2135Z"
                fill="#1A1A1A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#1A1A1A" />
            </svg>
            <input
              readOnly
              value={`4767 Bernardo Street, Salem. Indiana Unite`}
              type="text"
            />
          </div>
          <div className="other_address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="24"
              viewBox="0 0 18 24"
              fill="none"
            >
              <g clip-path="url(#clip0_2883_7558)">
                <path
                  d="M0 10.956C0 6.63439 4.02984 3.13037 9 3.13037C13.9702 3.13037 18 6.63439 18 10.956C18 14.1112 16.7358 14.9924 9.92344 23.579C9.47667 24.1402 8.52141 24.1402 8.07469 23.579C1.26422 14.9911 0 14.1108 0 10.956Z"
                  fill="#1A1A1A"
                />
              </g>
              <defs>
                <clipPath id="clip0_2883_7558">
                  <rect width="18" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#1A1A1A" />
            </svg>
            <input
              readOnly
              // value={}
              type="text"
              placeholder="Somewhere else?"
            />
          </div>
        </div>
        <button onClick={handleNext} className="black-button">
          Next
        </button>
      </div>
    </>
  );
}
