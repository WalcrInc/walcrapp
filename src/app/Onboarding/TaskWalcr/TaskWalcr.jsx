import React from "react";
import { TaskwalkerStyle } from "./TaskWalcr.style";
import { BackIconX, CreateIcon, LocationIconX, ShieldIcon } from "@/assets";
import { Button } from "@chakra-ui/react";
import useRoutes from "@/hooks/Routes/Routes";
import Image from "next/image";

const TaskWalcr = () => {
  const { handleHomeRoute, handleLoginRoute, handleWalcrOnboardingRoute } =
    useRoutes();
  return (
    <TaskwalkerStyle>
      <header>
        <span onClick={handleHomeRoute}>
          <BackIconX />
        </span>
        <h1>Work your way</h1>
        <p>
          {" "}
          Work your way You bring the skill.
          <br />
          We&apos;ll make earning easy.
        </p>
      </header>
      <div className="section-1">
        <div className="box">
          <div className="sub-box">
            <p>
              A Task is <br /> requested every
            </p>
            <span>5 Sec</span>
          </div>
          <div className="sub-box">
            <p>
              Projects <br /> completed
            </p>
            <span>50M+</span>
          </div>
          <div className="sub-box">
            <p>
              Price <br /> range
            </p>
            <span>$5 - $10K</span>
          </div>
        </div>
      </div>

      <div className="section-2">
        <div className="box">
          {/* <Image
            src={"/images/dots.svg"}
            width={16}
            height={100}
            alt="Dots"
            style={{
              position: "absolute",
              left: "5rem",
            }}
          /> */}
          <div className="sub-box" style={{ position: "relative" }}>
            <span>
              <CreateIcon />
            </span>
            <Image
              src={"/images/dots.svg"}
              alt={"Dots"}
              width={16}
              height={100}
              style={{
                position: "absolute",
                left: "3.65rem",
                top: "8px"
              }}
            />
            <div className="text">
              <h1>Create a Task</h1>
              <p>Offer your services to a global audience and start earning.</p>
            </div>
          </div>
          <div className="sub-box" style={{ position: "relative" }}>
            <span>
              <LocationIconX />
            </span>
            <Image
              src="/images/Radio.svg"
              alt={"radio button"}
              height={16}
              width={16}
              style={{
                position: "absolute",
                left: "3.65rem",
                top: "8px"
              }}
            />
            <div className="text">
              <h1>Complete your task</h1>
              <p>
                Use our tools to connect with customers and deliver orders.
              </p>
            </div>
          </div>
          <div className="sub-box" style={{ position: "relative" }}>
            <span>
              <ShieldIcon />
            </span>
            <Image
              src="/images/Radio.svg"
              alt={"radio button"}
              height={16}
              width={16}
              style={{
                position: "absolute",
                left: "3.65rem",
                top: "8px"
              }}
            />
            <div className="text">
              <h1>Get paid</h1>
              <p>
                Get paid on time, every time. Payment is transferred to your
                account and is available for withdrawal once it’s cleared.
              </p>
            </div>
          </div>
        </div>
      </div>
      <button
        style={{
          background: "#1a1a1a",
          padding: "1rem",
          color: "#ffffff",
          borderRadius: "1rem",
          width: "100%"
        }}
        onClick={handleLoginRoute}
      >
        Continue
      </button>
    </TaskwalkerStyle>
  );
};

export { TaskWalcr };
