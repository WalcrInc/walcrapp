import React, { useEffect, useState } from "react";
import { AddCashStyle } from "./AddCash.style";
import { Button, Input, Spinner } from "@chakra-ui/react";
import { BackIcon, DeleteIcon } from "@/assets";
import useRoutes from "@/hooks/Routes/Routes";
import axios from "axios";
import { useSelector } from "react-redux";
import useFetchData from "@/hooks/useFetchDataHook/useFetchData";

const AddCash = () => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.data : "";

  const { handleDashboardRoute } = useRoutes();
  const [input, setInput] = useState("");
  const [cardInfo, setCardInfo] = useState(null);
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

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
    url: "https://reluctant-jean-cliqpod-e187c94a.koyeb.app/v1/wallet/card",
    token: accessToken,
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
      console.error("Invalid input");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "https://reluctant-jean-cliqpod-e187c94a.koyeb.app/v1/wallet/deposit",
        { amount: parseFloat(input), paymentMethodId: cardInfo[selectedCardIndex]?.paymentMethodId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log(response.data);
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

  if (isLoading) return <Spinner />;

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
        <div className="card-details" key={cardInfo[selectedCardIndex]?.card_number}>
          <div className="brand-logo">
            <img
              src={brandLogos[cardInfo[selectedCardIndex]?.brand]}
              alt={`${cardInfo[selectedCardIndex]?.brand} logo`}
              style={{ width: "100px", height: "auto" }}
            />
          </div>
          <div className="cardnumber">
            <p> **** {cardInfo[selectedCardIndex]?.card_number}</p>
            {/* <p> ****  {cardInfo[selectedCardIndex]?.paymentMethodId}</p> */}
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
    </AddCashStyle>
  );
};

export { AddCash };
