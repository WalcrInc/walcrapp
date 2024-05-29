import React, { useState } from "react";
import { ActivitiesStyle } from "./Activities.style";
import { BottomNavbar } from "@/components/BottomNavbar";
import { ActivityData } from "./data";
import Image from "next/image";
import { BackIcon } from "@/assets";
import { Ongoing } from "./Status/Ongoing";

const Activities = () => {
  const [step, setStep] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleSelected = (activity) => {
    setSelectedActivity(activity);
    setStep(2); // Move to the next step when an activity is selected
  };

  const handlePrev = () => {
    setStep(1); // Move back to step 1
  };

  const renderActivity = (activity) => {
    if (!activity) return null;
    switch (activity.status) {
      case "Completed":
        return <div>Completed Activity Details</div>;
      case "In Transit":
        return <div>In Transit Activity Details</div>;
      case "Delivered":
        return <div>Delivered Activity Details</div>;
      case "On Going":
        return <Ongoing handlePrev={handlePrev}/>;
      default:
        return null;
    }
  };

  return (
    <ActivitiesStyle>
      {step === 1 && (
        <>
          <header>
            <h1>Activities</h1>
          </header>
          <div className="body">
            <div className="box">
              {ActivityData.map((activity) => (
                <div
                  key={activity.id}
                  className="sub-box"
                  onClick={() => handleSelected(activity)}
                >
                  <div className="a">
                    <div className="icon">{activity.icon}</div>
                    <div className="text">
                      <h2>{activity.name}</h2>
                      <h3>{activity.price}</h3>
                      <p>{activity.date}</p>
                    </div>
                  </div>
                  <div className="b">
                    <div
                      className={
                        activity.status === "Completed" ||
                        activity.status === "Delivered"
                          ? "completed"
                          : "status"
                      }
                    >
                      {activity.status}
                    </div>
                    <div className="icon">
                      <Image
                        src={"/images/profile.svg"}
                        height={30}
                        width={30}
                        alt="profile-picture"
                      />
                    </div>
                    <p>{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <BottomNavbar />
        </>
      )}
      {step === 2 && (
        <>
         
          <div className="activity-detail">
            {renderActivity(selectedActivity)}
          </div>
        </>
      )}
    </ActivitiesStyle>
  );
};

export { Activities };
