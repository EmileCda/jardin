import React from "react";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive/types/Component";
import { textScreen } from "../lib/utils";

export default function Test() {
  const isMobile = useMediaQuery({ query: "(max-width: 400x)" });
  const isTablette = useMediaQuery({ query: "(max-width: 780x)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 781)" });

  const textReturn = textScreen("Seeds");

  return (
    <>
      <h1>Device Test!</h1>
    </>
  );
}
