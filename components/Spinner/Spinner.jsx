import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        height: "100%", // Ensure the container takes up the full height of its parent
        width: "100%", // Ensure the container takes up the full width of its parent
      }}
    >
      <InfinitySpin
        visible={true}
        width="100"
        color="whitesmoke"
        ariaLabel="infinity-spin-loading"
        wra
      />
    </div>
  );
};

export { Spinner };
