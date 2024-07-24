import { AddIcon_Square } from "@/assets";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Define a mapping of brand names to background styles
const brandBackgrounds = {
  Visa: "images/visa-card.svg", // Shades of orange
  MasterCard: "images/master-card.svg", // Shades of violet
  Amex: "linear-gradient(135deg, #3cb371, #2e8b57)", // Shades of green
  Discover: "images/discover.svg", // Shades of blue
  Default: "linear-gradient(-125deg, #5dd2ef, #2e9ebe 55%)" // Default style
};

const StepThree = ({ cards, setStep }) => {
  const [cardOrder, setCardOrder] = useState([]);

  useEffect(() => {
    if (cards) {
      // Initialize card order based on the reversed cards
      setCardOrder([...cards].reverse());
    }
  }, [cards]);

  const handleCardClick = (clickedCardIndex) => {
    // Move the clicked card to the front
    const updatedCardOrder = [
      cardOrder[clickedCardIndex],
      ...cardOrder.filter((_, index) => index !== clickedCardIndex)
    ];
    setCardOrder(updatedCardOrder);
  };

  const getCardClass = (index) => `card-${index + 1}`;

  const getCardBackground = (brand) => brandBackgrounds[brand] || brandBackgrounds.Default;

  return (
    <>
      <div className="cards">
        {cardOrder.map((card, index) => (
          <div
            key={index}
            className={getCardClass(index)}
            style={{
              backgroundImage: `url(${getCardBackground(card.brand)})`,
              backgroundSize: 'contain',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
            onClick={() => handleCardClick(index)}
          >
            <header>
              {/* <h1>Credit</h1> */}
            </header>
            <div className="body">
              <div>{card.card_holder_name}</div>
              <div>**** - **** - **** - {card.card_number}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="add-new" onClick={() => setStep(2)}>
        <AddIcon_Square /> Add new card
      </div>
    </>
  );
};

export { StepThree };
