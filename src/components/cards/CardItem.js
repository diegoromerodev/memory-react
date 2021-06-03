import React from "react";

import "../../styles/cards/CardItem.css";

const CardItem = (props) => {
  const { id, image, info, numberLoaded, setNumberLoaded, clickedCard 
} = props;
  return (
    <div className="CardItem" id={id} onClick={clickedCard}>
      <div>
        <img
          src={image}
          alt={`${info.name} card`}
          onLoad={() => setNumberLoaded(numberLoaded + 1)}
        />
      </div>
      <h2>{info.name}</h2>
      <h3>{info.artist}</h3>
    </div>
  );
};

export default CardItem;
