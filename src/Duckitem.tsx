import React from "react";
import { Duck } from "./demo";

interface Props {
  item: Duck;
}
const Duckitem = ({ item }: Props) => {
  return (
    <div>
      <span>{item.name}</span>
      <button onClick={() => item.makeSound(`${item.name} : quack`)}>
        Make sound 
      </button>
    </div>
  );
};
export default Duckitem;
