import {
  LocationIconShrink,
  OnlineIcon,
  VerifiedWalkerBadgeIcon,
} from "@/assets";
import { FaChevronRight } from "react-icons/fa6";

export default function WalkerBasics() {
  return (
    <div className="walker_details">
      <div className="profile_image_component">
        <div className="image_wrapper" style={{ background: "#E7D3D0" }}>
          <img src="/images/profile.svg" />
        </div>
        <i className="online_icon">
          <OnlineIcon />
        </i>
      </div>
      <div className="walker_basics">
        <div className="walker_name">
          <p>Mansa Eight</p>
          <i>
            <VerifiedWalkerBadgeIcon />
          </i>
          <i>
            <FaChevronRight />
          </i>
        </div>
        <div className="walker_location">
          <i>
            <LocationIconShrink />
          </i>
          <p>Stonewood CR, Arizona</p>
        </div>
        <p>06:14</p>
      </div>
    </div>
  );
}
