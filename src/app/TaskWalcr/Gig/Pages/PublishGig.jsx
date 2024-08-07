import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Button,
} from "@chakra-ui/react";
import Assembly from "@/components/Accordion/Assembly";
import Link from "next/link";
// import style from './Style.module.css'

const PublishGig = () => {
  const Menu = [
    { title: "Assembling Gig", item: <Assembly /> },
    { title: "Cleaning Gig" },
    { title: "Moving Gig" },
    { title: "Assembling Gig" },
  ];
  return (
    <>
      <Accordion allowToggle style={{ marginTop: "20px" }}>
        {Menu.map((accord, i) => (
          <AccordionItem key={i}>
            <h1 Style={{ fontSize: "55px", fontWeight: "700" }}>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  Style={{ fontSize: "55px", fontWeight: "700" }}
                >
                  <h1 Style={{ fontSize: "55px", fontWeight: "700" }}>
                    {accord.title}
                  </h1>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h1>
            <AccordionPanel pb={4}>
              <p>
                Publish a Gig to the Walcr marketplace taskwalkers can create
                more
              </p>
              {accord.item}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>

      <Link href={"/taskwalcr/gig/completed-gig"}>
        <Button
          variant="default"
          style={{
            background: "#000",
            color: "#fff",
            width: "90%",
            bottom: "5px",
            position: "absolute",
            margin: "auto",
          }}
        >
          publish Gig
        </Button>
      </Link>
    </>
  );
};

export default PublishGig;
