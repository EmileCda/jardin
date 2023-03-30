import { textScreen } from "../lib/utils";
import Carousel from "./Carousel";

/**
 * this function do ...
 */
export default function Home() {
  const myTextScreen = textScreen("Home");

  return (
    <>
      <h1>{myTextScreen.home}</h1>
      <Carousel />
      
    </>
  );
}

