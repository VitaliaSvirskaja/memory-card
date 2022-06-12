import { MemoryCard } from "../interfaces/MemoryCard";
import "../styles/memoryCards.css";
import { memoryCardsArray } from "../data/memoryCardsArray";
import { useEffect, useState } from "react";
import { shuffle } from "../utils/shuffle";

interface Props {
  onMemoryCardClick: () => void;
  onMemoryCardDoubleCLick: () => void;
  clickedMemoryCards: Array<string>;
  setClickedMemoryCards: (clickedMemoryCards: Array<string>) => void;
}

export const MemoryBoard = (props: Props) => {
  const [memoryCards, setMemoryCards] =
    useState<Array<MemoryCard>>(memoryCardsArray);
  function handleMemoryCardClick(memoryCardID: string) {
    if (props.clickedMemoryCards.includes(memoryCardID)) {
      props.onMemoryCardDoubleCLick();
    } else {
      const updatedClickedMemoryCards = [
        ...props.clickedMemoryCards,
        memoryCardID,
      ];
      props.setClickedMemoryCards(updatedClickedMemoryCards);
      props.onMemoryCardClick();
    }

    const randomizedMemoryCards: Array<MemoryCard> = shuffle(memoryCards);
    setMemoryCards(randomizedMemoryCards);
  }

  return (
    <div className="memoryBoard">
      {memoryCards.map((memoryCard) => {
        return (
          <div key={memoryCard.id} className="memoryCard">
            <img
              src={memoryCard.image}
              alt="fruit"
              onClick={() => {
                handleMemoryCardClick(memoryCard.id);
              }}
            />
            <p>{memoryCard.fruitname}</p>
          </div>
        );
      })}
    </div>
  );
};
