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
import { useState } from "react";

const StepTwo = ({ handleNext }) => {
  const [cardData, setCardData] = useState({
    cardNumber: "",
    cardHolderName: "",
    expiryDate: "",
    cvv: "",
    cardType: "",
  });

  const detectCardType = (cardNumber) => {
    const cardPatterns = {
      visa: /^4/,
      mastercard: /^5[1-5]/,
      venmo: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/,
      applePay: /^(?:5[0-9]{14})$/,
    };

    for (const [type, pattern] of Object.entries(cardPatterns)) {
      if (pattern.test(cardNumber)) {
        return type;
      }
    }

    return "";
  };

  const cardTypeLogos = {
    visa: "/images/Visa.svg",
    mastercard: "/images/Mastercard.svg",
    venmo: "/images/Venmo.svg",
    applePay: "/images/Apple.svg",
  };

  const handleCardNumberChange = (event) => {
    let cardNumber = event.target.value;
    // Limit card number to 16 digits
    cardNumber = cardNumber.slice(0, 19);
    const formattedCardNumber = cardNumber
      .replace(/[^0-9]/g, "") // Remove non-numeric characters
      .replace(/(.{4})/g, "$1 ") // Add a space after every 4 characters
      .trim(); // Remove trailing space
    const cardType = detectCardType(cardNumber); // Detect card type
    console.log("Card Type:", cardType);
    setCardData({ ...cardData, cardNumber, cardType }); // Update card number and type
  };

  const handleInputChange = (field, maxLength) => (event) => {
    let value = event.target.value;
    // Limit input length
    if (value.length > maxLength) {
      value = value.slice(0, maxLength);
    }
    setCardData({ ...cardData, [field]: value });
  };

  // Function to handle submission of the form
  const handleSubmit = (event) => {
    event.preventDefault();
   console.log(cardData)
    handleNext(); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <FormLabel>Card number</FormLabel>
        <InputGroup
          placeholder="0000 0000 0000 0000"
          size={"lg"}
          borderRadius={"6px"}
          boxShadow={" 0px 0px 0px 1px #CDD1DC"}
          focusBorderColor="0.5px solid #CDD1DC"
        >
          <Input onChange={handleCardNumberChange} value={cardData.cardNumber} />
          {cardData.cardType && (
            <InputRightElement>
              <img
                src={cardTypeLogos[cardData.cardType]}
                alt={cardData.cardType}
              />
            </InputRightElement>
          )}
        </InputGroup>
      </FormControl>
      <FormControl>
        <FormLabel>Card holder name</FormLabel>
        <Input
          placeholder="Enter the name of the card"
          size={"lg"}
          borderRadius={"6px"}
          boxShadow={" 0px 0px 0px 1px #CDD1DC"}
          focusBorderColor="0.5px solid #CDD1DC"
          onChange={handleInputChange("cardHolderName", 50)} // Limit to 50 characters
        />
      </FormControl>
      <Box display={"flex"} gap={"20px"}>
        <FormControl>
          <FormLabel>Expiry date</FormLabel>
          <InputGroup
            size={"lg"}
            borderRadius={"6px"}
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            focusBorderColor="0.5px solid #CDD1DC"
          >
            <InputLeftElement>
              <DateIcon />
            </InputLeftElement>
            <Input
              placeholder="0000"
              onChange={handleInputChange("expiryDate", 4)} // Limit to 4 characters
              value={cardData.expiryDate}
            />
          </InputGroup>
        </FormControl>{" "}
        <FormControl>
          <FormLabel>CVV</FormLabel>
          <Input
            placeholder="967"
            size={"lg"}
            borderRadius={"6px"}
            boxShadow={" 0px 0px 0px 1px #CDD1DC"}
            focusBorderColor="0.5px solid #CDD1DC"
            onChange={handleInputChange("cvv", 3)} // Limit to 3 characters
            value={cardData.cvv}
          />
        </FormControl>
      </Box>

      <Button
        marginTop={"100px"}
        background={"#1A1A1A"}
        color={"#fff"}
        borderRadius={"8px"}
        size={"lg"}
        type="submit"
      >
        Add Card
      </Button>
    </form>
  );
};

export { StepTwo };
