import { Link } from "react-router-dom";
import {
  IconContainer,
  ScreenHeader,
  TextContainer,
} from "../style/Common.style";
import { Tseed } from "../store/Seed.store";

export type TheaderScreenProps = {
  title: string;
  info: string;
  link: string;
  icon: string;
};
export function ComposeName(seed: Tseed) {
  return seed.idFirebase === ""
    ? ""
    : `${seed.seedName}:${seed.gender}-${seed.species}` ;
}

export function HeaderScreen(headerParam: TheaderScreenProps) {
  
  return (
    <>
      <ScreenHeader>
        <IconContainer>
          <Link to={headerParam.link}>
            <i className={headerParam.icon}></i>
          </Link>
        </IconContainer>
        <TextContainer>
          <h1>{headerParam.title}</h1>
          <h2>{headerParam.info}</h2>
        </TextContainer>
      </ScreenHeader>
    </>
  );
}
