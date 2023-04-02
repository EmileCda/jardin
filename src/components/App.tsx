import { StrictMode } from "react";
import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppGlobalStyle } from "../style/App.style";
import About from "./About";
import Calendar from "./Calendar";
import Header from "./Header";
import Home from "./Home";
import Needs from "./Needs";
import NewVariety from "./NewVariety";
import Seeds from "./Seeds";
import Test from "./Test";
import Tomate from "./Tomate";
import Variety from "./Variety";

export default function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTabletDevice = useMediaQuery({
    query: "(min-device-width: 768px)",
  });

  const isLaptop = useMediaQuery({
    query: "(min-device-width: 1024px)",
  });

  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  const isBigScreen = useMediaQuery({
    query: "(min-device-width: 1201px )",
  });

  return (
    <StrictMode>
      <BrowserRouter>
      <Header />
        <AppGlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Needs" element={<Needs />} />
          <Route path="/Seeds" element={<Seeds />} />
          <Route path="/Calendar" element={<Calendar />} />
          <Route path="/About" element={<About />} />
          <Route path="/NewVariety" element={<NewVariety />} />
          <Route path="/Tomate" element={<Tomate />} />
          <Route path="/Variety" element={<Variety />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
}
