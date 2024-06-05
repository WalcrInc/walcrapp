import React from "react";

const StepThree = ({ cards }) => {
  const getCardClass = (index) => `card-${index + 1}`;

  return (
    <>
      <div className="cards">
        {cards?.map((card, index) => (
          <div key={index} className={getCardClass(index)}>
            <header>
              <h1>Credit</h1>
              <p>{card.brand}</p>
            </header>
            <div className="body">
              <div>{card.card_holder_name}</div>
              <div>**** - **** - **** - {card.card_number}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export { StepThree };
