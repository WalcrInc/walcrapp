import React from "react";
import { TopBar } from "@/components/TopBar/TopBar";
import Gig from "@/assets/images/GigPublished.png";
import { Button } from "@chakra-ui/react";
import Image from "next/image";

const CompletedGig = () => {
  return (
    <div style={{ padding: "15px" }}>
      <TopBar href={"/taskwalcr/gig"} text={"Publish Gig"} />
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          justifyContent: "center",
          padding: "20px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Image src={Gig} style={{ marginBottom: "10px" }} alt="under review" />

        <p
          style={{
            fontSize: "21px",
            fontWeight: "700",
            marginBottom: "8px",
            textAlign: "center",
          }}
        >
          Your Gig has been published to the Walcr Marketplace
        </p>
        <span>
          Choose price range from the lowest gig price to highest price range
          from the lowest gig price to highest price range from
        </span>

        <Button
          variant="default"
          style={{
            border: "1px solid #000",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          View on Marketplace
        </Button>
      </div>
    </div>
  );
};

export default CompletedGig;
