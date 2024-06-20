import { BackIcon, CameraIcon, MicrophoneIcon } from "@/Assets";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const StepFive = ({ setStep }) => {
  return (
    <div className="step-three">
      <div className="header">
        <>
          <span onClick={() => setStep(2)}>
            <BackIcon />
          </span>
          <h1>FAQs</h1>
          <span style={{ color: "white" }}>.</span>
        </>
      </div>

      <div className="body">
        <Accordion allowMultiple>
          <AccordionItem _expanded={{ bg: "#F0F2F6" }}>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"16px"}
                  fontWeight={"700"}
                >
                  What is Walcr?
                </Box>
                <AccordionIcon color={"#8C92AB"} />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"16"} fontWeight={"400"} pb={4}>
              Walcr is a technology company dedicated to revolutionizing the way
              users connect with TaskWalkers for package retrieval and delivery
              services. Our platform provides a seamless and efficient way for
              users to request assistance with retrieving items and having them
              delivered to their desired location. With Walcr, users can rely on
              a network of reliable TaskWalkers to fulfill their delivery needs
              with convenience and peace of mind.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"16px"}
                  fontWeight={"700"}
                >
                  How does Walcr work?
                </Box>
                <AccordionIcon color={"#8C92AB"} />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"16"} fontWeight={"400"} pb={4}>
              Walcr is a technology company dedicated to revolutionizing the way
              users connect with TaskWalkers for package retrieval and delivery
              services. Our platform provides a seamless and efficient way for
              users to request assistance with retrieving items and having them
              delivered to their desired location. With Walcr, users can rely on
              a network of reliable TaskWalkers to fulfill their delivery needs
              with convenience and peace of mind.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"16px"}
                  fontWeight={"700"}
                >
                  Who are TaskWalkers?
                </Box>
                <AccordionIcon color={"#8C92AB"} />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"16"} fontWeight={"400"} pb={4}>
              Walcr is a technology company dedicated to revolutionizing the way
              users connect with TaskWalkers for package retrieval and delivery
              services. Our platform provides a seamless and efficient way for
              users to request assistance with retrieving items and having them
              delivered to their desired location. With Walcr, users can rely on
              a network of reliable TaskWalkers to fulfill their delivery needs
              with convenience and peace of mind.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"16px"}
                  fontWeight={"700"}
                >
                  How do I request a package retrieval?
                </Box>
                <AccordionIcon color={"#8C92AB"} />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"16"} fontWeight={"400"} pb={4}>
              Walcr is a technology company dedicated to revolutionizing the way
              users connect with TaskWalkers for package retrieval and delivery
              services. Our platform provides a seamless and efficient way for
              users to request assistance with retrieving items and having them
              delivered to their desired location. With Walcr, users can rely on
              a network of reliable TaskWalkers to fulfill their delivery needs
              with convenience and peace of mind.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"16px"}
                  fontWeight={"700"}
                >
                  How do I pay for Walcr services?
                </Box>
                <AccordionIcon color={"#8C92AB"} />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"16"} fontWeight={"400"} pb={4}>
              Walcr is a technology company dedicated to revolutionizing the way
              users connect with TaskWalkers for package retrieval and delivery
              services. Our platform provides a seamless and efficient way for
              users to request assistance with retrieving items and having them
              delivered to their desired location. With Walcr, users can rely on
              a network of reliable TaskWalkers to fulfill their delivery needs
              with convenience and peace of mind.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize={"16px"}
                  fontWeight={"700"}
                >
                  How much does it cost to use Walcr?
                </Box>
                <AccordionIcon color={"#8C92AB"} />
              </AccordionButton>
            </h2>
            <AccordionPanel fontSize={"16"} fontWeight={"400"} pb={4}>
              Walcr is a technology company dedicated to revolutionizing the way
              users connect with TaskWalkers for package retrieval and delivery
              services. Our platform provides a seamless and efficient way for
              users to request assistance with retrieving items and having them
              delivered to their desired location. With Walcr, users can rely on
              a network of reliable TaskWalkers to fulfill their delivery needs
              with convenience and peace of mind.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export { StepFive };
