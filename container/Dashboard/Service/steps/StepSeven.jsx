import Availability from "./stepSevenComponents/Availability";
import WalkerBasics from "./stepSevenComponents/WalkerBasics";
import WalkerContacts from "./stepSevenComponents/WalkerContacts";

export default function StepSeven({ handleNext, searchService }) {
  return (
    <>
      <img
        src="/images/available-walkers-map.png"
        className="available_walkers_map"
      />
      <div className="overlay"></div>
      <div className="available_taskwalker">
        <h2>{searchService || "Assembling"}</h2>
        <div className="walker_info">
          <div className="walker_specs">
            <WalkerBasics />
            <WalkerContacts />
          </div>
          <Availability />
        </div>
      </div>
    </>
  );
}
