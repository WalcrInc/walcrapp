import React, { useState } from "react";
import { ActivitiesStyle } from "./Activities.style";
import { BottomNavbar } from "@/components/BottomNavbar/BottomNavbar";
import Profile from "@/assets/images/profile.svg";
import { ActivityData } from "./data";
import Image from "next/image";
import { BackIcon } from "@/assets/index";
import { Ongoing } from "./Status/Ongoing";
import { Completed } from "./Status/Completed";
import { Report } from "./Status/Report";

const Activity = () => {
  const [step, setStep] = useState(1);
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleSelected = (activity) => {
    setSelectedActivity(activity);
    setStep((prev) => prev + 1);
  };

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setStep((prev) => prev - 1); // Move back to step 1
  };

  const renderActivity = (activity) => {
    if (!activity) return null;
    switch (activity.status) {
      case "Completed":
        return <Completed handlePrev={handlePrev} handleNext={handleNext} />;
      case "In Transit":
        return <div>In Transit Activity Details</div>;
      case "Delivered":
        return <div>Delivered Activity Details</div>;
      case "Ongoing":
        return <Ongoing handlePrev={handlePrev} />;
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
                      <p>{activity.time}</p>
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

                    <h4>{activity.price}</h4>
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
      {step === 3 && (
        <>
          <Report setStep={setStep} />
        </>
      )}
    </ActivitiesStyle>
  );
};

export default Activity;
