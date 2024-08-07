import React, { useEffect } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function StepSix({ handleNext }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 3000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <img
        src="/images/findmaploader.png"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
      />
      <div className="flex_col_align_center">
        <i>
          <InfinitySpin color="#000" />
        </i>
        <p style={{ width: "251px", textAlign: "center" }}>
          Finding available Taskwalker nearby
        </p>
      </div>
    </>
  );
}
