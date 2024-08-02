import { useRouter } from "next/router";
import Availability from "./stepSevenComponents/Availability";
import Rate from "./stepSevenComponents/Rate";
import Route from "./stepSevenComponents/Route";
import WalkerBasics from "./stepSevenComponents/WalkerBasics";
import WalkerContacts from "./stepSevenComponents/WalkerContacts";

export default function StepSeven({ handleNext, searchService, handlePrev }) {
  const router = useRouter();

  return (
    <>
      <img
        src="/images/available-walkers-map.png"
        className="available_walkers_map"
      />
      <div className="overlay"></div>
      <div className="available_taskwalker">
        <h2>{searchService || "Assembling"}</h2>
        <div className="walker_info relative">
          <div className="walker_specs">
            <WalkerBasics />
            <WalkerContacts />
          </div>
          <Availability />
          <Route />
          <div className="absolute h-1 bg-[#F6F6F682] w-screen left-[-1rem]"></div>
          <Rate />
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                router.push("/dashboard");
              }}
              className="p-4 rounded-[1rem] bg-[#F0F2F6] font-bold text-[#1a1a1a] w-[128px]"
            >
              Cancel
            </button>
            <button onClick={handleNext} className="black-button">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
