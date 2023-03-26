import { Link } from "react-router-dom";
import { IconContainer, ScreenHeader, TextContainer } from "../style/Common.style";

export type TheaderScreenProps = {
    title: string;
    link: string;
    icon: string;
  };
  
export function HeaderScreen(headerParam: TheaderScreenProps) {
    return (
      <>
        {" "}
        <ScreenHeader>
          <IconContainer>
            <Link to={headerParam.link}>
              <i className={headerParam.icon}></i>
            </Link>
          </IconContainer>
          <TextContainer>
            <h1>{headerParam.title}</h1>
          </TextContainer>
        </ScreenHeader>
      </>
    );
  }