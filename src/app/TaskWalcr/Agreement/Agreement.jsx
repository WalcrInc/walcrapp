import React from "react";
import { WalcrBar } from "@/components/TopBar/TopBar";
import style from "./Agreement.module.css";
import { Button } from "@chakra-ui/react";
import useRoutes from "@/features/Hooks/Routes/Routes";

export const Agreement = () => {
  const { handleVerificationRoute } = useRoutes();

  return (
    <div>
      <WalcrBar href={"/"} />
      <div className={style.Container}>
        <h1>Requirements to become a TaskWalker</h1>
        <p>
          To be a TaskWalker in the US, you{`'`}ll need to meet these
          requirements:
        </p>

        <ul>
          <li className={style.list}>
            Please ensure that you possess a valid U.S. Social Security Number
            as it is essential for the background check process.
          </li>
          <li className={style.list}>
            Additionally, all Taskwalkers must be at least 18 years old to be
            eligible to perform tasks.
          </li>
          <li className={style.list}>
            You will be required to submit personal information for both
            background and ID checks. Rest assured, your personal data is
            securely stored and handled in compliance with our Privacy Policy.
          </li>
          <li className={style.list}>
            Furthermore, it is necessary to have an active checking account with
            a recognized financial institution. Please note that savings
            accounts, prepaid debit cards, and reloadable bank cards are not
            acceptable forms of payment, even if they allow for direct deposits.
          </li>
        </ul>

        <span>
          If you meet all the requirements, click continue to proceed with the
          registration
        </span>
      </div>
      <Button
        color={"#fff"}
        background={"#1a1a1a"}
        borderRadius={"6px"}
        size={"lg"}
        className={style.button}
        onClick={handleVerificationRoute}
      >
        Continue
      </Button>
    </div>
  );
};
