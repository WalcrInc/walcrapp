import React, { useEffect, useState } from "react";
import { AddCashStyle } from "./AddCash.style";
import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
  extendTheme
} from "@chakra-ui/react";
import { BackIcon, ConfirmIcon, DeleteIcon } from "@/assets";
import useRoutes from "@/hooks/Routes/Routes";
import axios from "axios";
import { useSelector } from "react-redux";
import useFetchData, { BASE_URL } from "@/hooks/useFetchDataHook/useFetchData";
import { toast } from "react-toastify";

const AddCash = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.data : "";
  const { handleDashboardRoute } = useRoutes();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [input, setInput] = useState("");
  const [cardInfo, setCardInfo] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");

  const handleNumberInput = (number) => {
    setInput((prevInput) => {
      if (prevInput === "0" && number === ".") return "0.";
      if (number === "." && prevInput.includes(".")) return prevInput;
      if (prevInput === "0" && number !== ".") return number.toString();
      return prevInput + number.toString();
    });
  };

  const handleBackspace = () => {
    setInput((prevInput) => {
      if (prevInput.length === 1) return "";
      return prevInput.slice(0, -1);
    });
  };

  const { data, isLoading } = useFetchData({
    url: `${BASE_URL}/wallet/card`,

  });

  useEffect(() => {
    if (data) {
      setCardInfo(data?.data?.card?.details);
    }
  }, [data]);

  useEffect(() => {
    if (cardInfo) {
      setSelectedCardIndex(0);
    }
  }, [cardInfo]);

  const handleCardChange = () => {
    if (cardInfo && cardInfo.length > 0) {
      setSelectedCardIndex((prevIndex) => (prevIndex + 1) % cardInfo.length);
    }
  };



  const handleSubmit = async () => {
    if (!input || input === "$" || isNaN(parseFloat(input))) {
      toast.error("Invalid input", {
        theme: "dark",
      });
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "https://reluctant-jean-cliqpod-e187c94a.koyeb.app/v1/wallet/deposit",
        {
          amount: parseFloat(input),
          paymentMethodId: cardInfo[selectedCardIndex]?.paymentMethodId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response.data);
      setMessage(response?.data?.message);
      onOpen();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // console.log( cardInfo[selectedCardIndex]?.paymentMethodId )

  const brandLogos = {
    Visa: "/images/Visa.svg",
    MasterCard: "/images/Mastercard.svg",
    venmo: "/images/Venmo.svg",
    applePay: "/images/Apple.svg",
  };

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          height: "100dvh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {" "}
        <Spinner />
      </div>
    );

  return (
    <AddCashStyle>
      <header>
        <div className="header">
          {step === 1 ? (
            <span onClick={handleDashboardRoute}>
              <BackIcon />
            </span>
          ) : (
            <span onClick={() => setStep((prev) => prev - 1)}>
              <BackIcon />
            </span>
          )}

          <h1>Add cash</h1>
          <span style={{ color: "white" }}>.</span>
        </div>
      </header>

      {cardInfo && cardInfo.length > 0 && (
        <div
          className="card-details"
          key={cardInfo[selectedCardIndex]?.card_number}
        >
          <div className="brand-logo">
            <img
              src={brandLogos[cardInfo[selectedCardIndex]?.brand]}
              alt={`${cardInfo[selectedCardIndex]?.brand} logo`}
              style={{ width: "100px", height: "auto" }}
            />
          </div>
          <div className="cardnumber">
            <p> **** {cardInfo[selectedCardIndex]?.card_number}</p>
            <Button
              background={"#1a1a1a"}
              color={"#fff"}
              width={"fit-content"}
              onClick={handleCardChange}
            >
              Change
            </Button>
          </div>
        </div>
      )}

      <div className="number-body">
        <div className="input">
          <p>Amount</p>
          <Input
            fontSize={"40px"}
            textAlign={"center"}
            border={"none"}
            readOnly
            value={input ? `$${input}` : ""}
            placeholder="$0.00"
          />
        </div>
        <Button
          className="button-submit"
          color={"#fff"}
          size={"lg"}
          margin={"auto"}
          background={"#1a1a1a"}
          width={"90%"}
          onClick={handleSubmit}
        >
          {loading ? <Spinner /> : `Add ${input ? `$${input}` : "$0.00"}`}
        </Button>
        <div className="numbers">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0].map((number) => (
            <button
              className="number-button"
              key={number}
              onClick={() => handleNumberInput(number)}
            >
              {number}
            </button>
          ))}
          <button
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={handleBackspace}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

 
        <Modal   isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent
            display={"flex"}
            flexDirection={"column"}
            textAlign={"center"}
            width={"90%"}
            p={10}
            gap={"50px"}
            borderRadius={"32px"}
            position={"absolute"}
            bottom={"0"}

          >
            <ModalBody
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
              gap={"50px"}
            
            >
              {/* <Lorem count={2} />
               */}

              <ConfirmIcon />
              <div className="text" style={{
                display:"flex",
                flexDirection:"column",
                gap:"20px"
              }}>
                <Text fontSize={"22px"} fontWeight={"700"}>
                  Congratulations
                </Text>
                <Text color={"#8C92AB"} fontSize={"14px"} fontWeight={"400"}>
                  {" "}
                  ${message}
                </Text>
              </div>
            </ModalBody>

            <Button
              size={"lg"}
              background={"#1a1a1a"}
              color={"#fff"}
              onClick={handleDashboardRoute}
            >
              Continue
            </Button>
          </ModalContent>
        </Modal>
    
    </AddCashStyle>
  );
};

export { AddCash };
