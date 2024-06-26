import React from "react";
import { TaskwalkerStyle } from "./TaskWalcr.style";
import { BackIcon, CreateIcon, LocationIconX, ShieldIcon } from "@/Assets";
import { Button } from "@chakra-ui/react";
import useRoutes from "@/Components/hooks/Routes/Routes";

const TaskWalcr = () => {
  const { handleHomeRoute, handleLoginRoute } = useRoutes();
  return (
    <TaskwalkerStyle>
      <header>
        <span onClick={handleHomeRoute}>
          <BackIcon />
        </span>
        <h1>Work your way</h1>
        <p>
          {" "}
          Work your way You bring the skill.
          <br />
          We’ll make earning easy.
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
          <div className="sub-box">
            <span>
              <CreateIcon />
            </span>
            <div className="text">
              <h1>Create a Task</h1>
              <p>Offer your services to a global audience and start earning.</p>
            </div>
          </div>
          <div className="sub-box">
            <span>
              <LocationIconX />
            </span>
            <div className="text">
              <h1>Complete your task</h1>
              <p>
                Use our built-in tools to communicate with your customers and
                deliver their orders.
              </p>
            </div>
          </div>
          <div className="sub-box">
            <span>
              <ShieldIcon />
            </span>
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
      <Button
        size={"lg"}
        background={"#1a1a1a"}
        color={"#fff"}
        width={"100%"}
        borderReadius={"16px"}
        onClick={handleLoginRoute}
      >
        Continue
      </Button>
    </TaskwalkerStyle>
  );
};

export { TaskWalcr };
