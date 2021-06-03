import React, { useEffect, useRef, useState } from "react";

import CardItem from "./CardItem";
import LoadingScreen from "../LoadingScreen";
import { shuffleCards } from "../../lib/manageCards";

import "../../styles/cards/CardsGrid.css";
import GameOverScreen from "../GameOverScreen";

const CardsGrid = (props) => {
  const { cards, score, setScore, setCards, manageScore, gameOver 
} = props;
  const [numberLoaded, setNumberLoaded] = useState(0);
  const clickedCard = (e) => {
    const selected = cards.findIndex((card) => e.currentTarget.id === card.id);
    if (!cards[selected].clicked) {
      cards[selected].clicked = true;
      manageScore("increment");
    } else {
      manageScore();
    }
    setCards(shuffleCards(cards));
  };

  useEffect(() => {
    const cardsDOM = document.querySelectorAll(".cards-container > *");
    cardsDOM.forEach((card) => {
      card.style.animation = "card-rotate 2s";
    });
  });

  return (
    <div className="CardsGrid">
      {numberLoaded !== cards.length || numberLoaded === 0 ? (
        <LoadingScreen />
      ) : (
        ""
      )}
      {gameOver ? <GameOverScreen /> : ""}
      <div className="cards-container">
        {cards.map((card) => (
          <CardItem
            id={card.id}
            key={card.id}
            info={card.info}
            image={card.image}
            setNumberLoaded={setNumberLoaded}
            numberLoaded={numberLoaded}
            clickedCard={clickedCard}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
