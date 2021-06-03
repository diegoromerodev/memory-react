import React, { useEffect, useState } from "react";
import uniqid from "uniqid";

import Header from "./Header";
import CardsGrid from "./cards/CardsGrid";

import { fetchAlbums, shuffleCards } from "../lib/manageCards";

const App = () => {
  const [score, setScore] = useState({ current: 0, best: 0 });
  const [cards, setCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [loading, setLoading] = useState(true);

  const albums = [
    { artist: "Kanye", name: "Yeezus" },
    { artist: "Dr Dre", name: "The Chronic" },
    { artist: "Snoop Dogg", name: "Doggystyle" },
    { artist: "Nas", name: "Illmatic" },
    { artist: "2Pac", name: "All Eyez On Me" },
    { artist: "Kanye", name: "My Beautiful Dark Twisted Fantasy" },
    { artist: "Pink Floyd", name: "The Dark Side of the Moon" },
    { artist: "Eminem", name: "Recovery" },
  ];

  useEffect(() => {
    fetchAlbums(albums)
      .then((arrURL) =>
        arrURL.map((url, i) => ({
        id: uniqid(),
        image: url,
        info: albums[i],
        clicked: false,
      }))
      )
      .then((arr) => setCards(arr));
  }, []);

  useEffect(() => {
    shuffleCards(cards);
  }, [cards]);

  const manageScore = (call) => {
    switch (call) {
      case "increment":
        setScore((state) => {
          const prevState = Object.create(state);
          prevState.current += 1;
          if (prevState.current > prevState.best) {
            prevState.best = prevState.current;
          }
          return prevState;
        });

        break;
      default:
        setGameOver(true);
        setTimeout(() => setGameOver(false), 1000);
        setScore((state) => {
          const prevState = Object.create(state);
          prevState.current = 0;
          return prevState;
        });
        setCards((state) => {
          const newState = Object.create(state);
          newState.forEach((card) => {
            card.clicked = false;
          });
        });
    }
  };

  return (
    <div className="App">
      <Header score={score} />
      <CardsGrid
        cards={cards}
        score={score}
        gameOver={gameOver}
        setScore={setScore}
        setCards={setCards}
        manageScore={manageScore}
      />
    </div>
  );
};
export default App;
