import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div>
      <InfinitySpin
        visible={true}
        width="150"
        color="whitesmoke"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export { Spinner };
