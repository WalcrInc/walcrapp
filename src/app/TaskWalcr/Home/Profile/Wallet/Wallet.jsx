import React from "react";
import Withdraw from "@/assets/images/WithdrawWalcrIcon.svg";
import { TopBar } from "@/components/TopBar/TopBar";
import Image from "next/image";
import WalletCard from "@/components/Card/WalletCard";

const Wallet = () => {
  const history = [
    { amount: "18.00" },
    { amount: "18.00" },
    { amount: "18.00" },
    { amount: "18.00" },
    { amount: "18.00" },
  ];
  return (
    <div style={{ padding: "15px" }}>
      <TopBar href={"/taskwalcr/profile"} text={"Wallet"} />

      <WalletCard balance={"120.07"} />

      <div style={{ marginTop: "30px" }}>
        <h1 style={{ fontSize: "21px", fontWeight: "700" }}>
          All Transactions
        </h1>

        <div>
          {history.map((his, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "15px",
              }}
            >
              <div style={{ display: "flex" }}>
                <Image
                  src={Withdraw}
                  style={{ height: "50px", marginRight: "10px" }}
                  alt=""
                />
                <div style={{ marginTop: "8px" }}>
                  <h1
                    style={{
                      fontSize: "19px",
                      fontWeight: "700",
                      color: "black",
                    }}
                  >
                    Money Withdrawn
                  </h1>
                  <p>Chase bank ****2054</p>
                  <p>8:00 PM</p>
                </div>
              </div>

              <h1
                style={{ fontSize: "19px", fontWeight: "700", color: "black" }}
              >
                ${his.amount}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
