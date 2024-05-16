import { DateIcon } from "@/assets";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const StepTwo = ({ handleNext }) => {
  const { user } = useSelector((state) => state.auth);
  const accessToken = user ? user.data : "";
  const stripe = useStripe();
  const elements = useElements();
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
    cardType: "",
  });

  const detectCardType = (cardNumber) => {
    const patterns = {
      visa: /^4/,
      mastercard: /^5[1-5]/,
      venmo: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
      applePay: /^(?:5[0-9]{14})$/,
    };
    return Object.keys(patterns).find((type) =>
      patterns[type].test(cardNumber)
    );
  };

  const cardTypeLogos = {
    visa: "/images/Visa.svg",
    mastercard: "/images/Mastercard.svg",
    venmo: "/images/Venmo.svg",
    applePay: "/images/Apple.svg",
  };

  const handleCardNumberChange = (event) => {
    let cardNumber = event.target.value;
    cardNumber = cardNumber.slice(0, 19);
    const formattedCardNumber = cardNumber
      .replace(/[^0-9]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
    const cardType = detectCardType(cardNumber);
    console.log("Card Type:", cardType);
    setCardData({ ...cardData, cardNumber, cardType });
  };

  const handleInputChange = (field, maxLength) => (event) => {
    let value = event.target.value;
    if (value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    setCardData({ ...cardData, [field]: value });
  };

  const generateToken = async () => {
    const { cardHolderName } = cardData;
    if (!stripe || !elements) return;
    const cardNumberElement = elements.getElement(CardNumberElement);
    const { token, error } = await stripe.createToken(cardNumberElement, {
      card_holder_name: cardHolderName,
    });
    if (!token || error) {
      toast.error(error);
    }

    return token;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = await generateToken();
      toast.success(token?.id);
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  // const Elements = dynamic(() => import('@stripe/react-stripe-js').then(mod => mod.Elements), { ssr: false });
  // axios.post(
  //   "https://walcr-backend.onrender.com/wallet/add-card",
  //   {
  //     card_holder_name: "me",
  //     card_number: token.card.last4,
  //     // brand:token.card.brand,
  //     exp_month: token.card.exp_month,
  //     exp_year: token.card.exp_year,
  //     paymentMethodId: token.id,
  //   },
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   }
  // );
  // handleNext();

  return (
    // <Elements stripe={stripPromise}>
    <form onSubmit={handleSubmit}>
      {/* <CardElement
        id="card-element"
      
      /> */}
      <FormControl>
        <FormLabel>
          <FormLabel>Card number</FormLabel>
          <CardNumberElement className="input" />
        </FormLabel>
      </FormControl>
      {/* 
      <FormControl>
        <FormLabel>Card number</FormLabel>
        <InputGroup
          placeholder="0000 0000 0000 0000"
          size={"lg"}
          borderRadius={"6px"}
          boxShadow={" 0px 0px 0px 1px #CDD1DC"}
          focusBorderColor="0.5px solid #CDD1DC"
          className="card-element"
          padding={"15px"}
        >
          <CardNumberElement
            onChange={handleCardNumberChange}
            value={cardData.cardNumber}
          />
          {cardData.cardType && (
            <InputRightElement>
              <img
                src={cardTypeLogos[cardData.cardType]}
                alt={cardData.cardType}
              />
            </InputRightElement>
          )}
        </InputGroup>
      </FormControl> */}
      <FormControl>
        <FormLabel>Card holder name</FormLabel>
        <Input
          placeholder="Enter the name of the card"
          size={"lg"}
          borderRadius={"6px"}
          boxShadow={" 0px 0px 0px 1px #CDD1DC"}
          focusBorderColor="0.5px solid #CDD1DC"
          className="card-element"
          onChange={handleInputChange("cardHolderName", 50)} // Limit to 50 characters
        />
      </FormControl>
      <Box display={"flex"} gap={"20px"}>
        <FormControl>
          <FormLabel>Expiry date</FormLabel>
          {/* <InputGroup
            size={"lg"}
            borderRadius={"6px"}
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            focusBorderColor="0.5px solid #CDD1DC"
          > */}
          {/* <InputLeftElement>
              <DateIcon />
            </InputLeftElement> */}
          <CardExpiryElement
            placeholder="0000"
            // onChange={handleInputChange("expiryDate", 4)} // Limit to 4 characters
            // value={cardData.expiryDate}
            className="input"
          />
          {/* </InputGroup> */}
        </FormControl>{" "}
        <FormControl>
          <FormLabel>CVV</FormLabel>
          {/* <Input
            placeholder="967"
            size={"lg"}
            borderRadius={"6px"}
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            focusBorderColor="0.5px solid #CDD1DC"
            onChange={handleInputChange("cvv", 3)} // Limit to 3 characters
            value={cardData.cvv}
            className="card-element"
          /> */}

          <CardCvcElement className="input" />
        </FormControl>
      </Box>

      <Button
        marginTop={"100px"}
        background={"#1A1A1A"}
        color={"#fff"}
        borderRadius={"8px"}
        size={"lg"}
        type="submit"
        isDisabled={!stripe}
      >
        Add Card
      </Button>
    </form>
    // </Elements>
  );
};

export { StepTwo };
