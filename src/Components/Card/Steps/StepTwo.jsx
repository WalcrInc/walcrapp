import { DateIcon, DeleteIcon_Red, WarningIcon } from "Src/Assets/index";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const StepTwo = ({ handleNext, cards }) => {
  const { user } = useSelector((state) => state.auth);
  const [cardIndex, setCardIndex] = useState(0);
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
  const [isLoading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const brandLogos = {
    Visa: "@/Assets/images/Visa.svg",
    MasterCard: "@/Assets/images/Mastercard.svg",
    venmo: "@/Assets/images/Venmo.svg",
    applePay: "@/Assets/images/Apple.svg",
    // Add more brand logos as needed
  };

  useEffect(() => {
    if (cards) {
      setCardIndex(0);
    }
  }, [cards]);

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
      if (cards?.length === 5) {
        onOpen();
      } else if (token) {
        setLoading(true);
        axios
          .post(
            "https://reluctant-jean-cliqpod-e187c94a.koyeb.app/v1/wallet/add-card",
            {
              card: {
                details: [
                  {
                    card_holder_name: cardData.cardHolderName,
                    card_number: token.card.last4,
                    brand: token.card.brand,
                    exp_month: token.card.exp_month,
                    exp_year: token.card.exp_year,
                    paymentMethodId: token.id,
                  },
                ],
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          )
          .then((response) => {
            setLoading(false);
            toast.success(response.data?.message, {
              theme: "dark",
            });
            handleNext();
          })
          .catch((error) => {
            setLoading(false);
            toast.error(error);
          });
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  return (
    <div
      clasName="container"
      style={{ display: "flex", flexDirection: "column", gap: "50px" }}
    >
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Card number</FormLabel>
          <CardNumberElement className="input" />
        </FormControl>

        <FormControl>
          <FormLabel>Card holder name</FormLabel>
          <Input
            placeholder="Enter the name of the card"
            size={"lg"}
            borderRadius={"6px"}
            boxShadow={"0px 0px 0px 1px #CDD1DC"}
            focusBorderColor="0.5px solid #CDD1DC"
            className="card-element"
            onChange={handleInputChange("cardHolderName", 50)} // Limit to 50 characters
          />
        </FormControl>
        <Box display={"flex"} gap={"20px"}>
          <FormControl>
            <FormLabel>Expiry date</FormLabel>
            <CardExpiryElement placeholder="0000" className="input" />
          </FormControl>
          <FormControl>
            <FormLabel>CVV</FormLabel>
            <CardCvcElement className="input" />
          </FormControl>
        </Box>
      </form>

      <div className="card">
        <p>Primary Card</p>

        {cards && cards.length > 0 && (
          <div className="card-details" key={cards[cardIndex]?.card_number}>
            <div className="brand-logo">
              <Image
                src={brandLogos[cards[cardIndex]?.brand]}
                alt={`${cards[cardIndex]?.brand} logo`}
                style={{ width: "100px", height: "auto" }}
              />
            </div>
            <div className="cardnumber">
              <p>**** {cards[cardIndex]?.card_number}</p>
              <DeleteIcon_Red />
            </div>
          </div>
        )}
        <span>View all cards</span>
      </div>
      <Button
        width={"100%"}
        background={"#1A1A1A"}
        color={"#fff"}
        borderRadius={"8px"}
        size={"lg"}
        type="submit"
        isDisabled={!stripe}
        onClick={handleSubmit}
      >
        {isLoading ? <Spinner /> : " Add Card"}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          display={"flex"}
          flexDirection={"column"}
          textAlign={"center"}
          justifyContent={"center"}
          alignItems={"center"}
          p={10}
          gap={"40px"}
          margin={"auto"}
          borderRadius={"32px 32px 0 0"}
          position={"absolute"}
          bottom={"0px"}
        >
          <WarningIcon />
          <div
            className="text"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Text fontSize={"22px"} fontWeight={"700"}>
              Sorry you can’t add more than five cards
            </Text>
            <Text color={"#8C92AB"} fontSize={"14px"} fontWeight={"400"}>
              Tap Edit Cards to delete unused cards.
            </Text>
          </div>

          <Button
            width={"100%"}
            background={"#1A1A1A"}
            color={"#fff"}
            borderRadius={"8px"}
            size={"lg"}
            onClick={onClose}
          >
            Edit cards
          </Button>
        </ModalContent>
      </Modal>
    </div>
  );
};

export { StepTwo };
