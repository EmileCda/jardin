/**
 * this function do ...
 */

import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { textScreen } from "../lib/utils";
import { newSeedStore, Tseed } from "../store/NewSeed.store";
import {
  newVarietyStore,
  setInput,
  setInputNumber,
  TfieldNumber,
} from "../store/NewVariety.store";
import { SeedStore } from "../store/Seed.store";
import { varietyStore } from "../store/Variety.store";
import {
  InputGroup2Container,
  InputGroup2Input,
  InputGroup2Label,
  NewVarietyContainer,
} from "../style/NewVariety.style";
import { HeaderScreen } from "./Commun";

export type Tinput = {
  name: TfieldNumber;
  label: string;
  value: number;
};
export type TinputGroup2Props = {
  label: string;
  input1: Tinput;
  input2: Tinput;
};

export function InputGroup2(inputGroup: TinputGroup2Props) {
  return (
    <InputGroup2Container>
      <InputGroup2Label>
        <h1>{inputGroup.label}</h1>
      </InputGroup2Label>
      <InputGroup2Input>
        <input
          type="number"
          onChange={(e) =>
            setInputNumber(inputGroup.input1.name, e.currentTarget.value)
          }
          value={inputGroup.input1.value}
          placeholder={inputGroup.input1.label}
        />
        <input
          type="number"
          onChange={(e) =>
            setInputNumber(inputGroup.input2.name, e.currentTarget.value)
          }
          value={inputGroup.input2.value}
          placeholder={inputGroup.input2.label}
        />
      </InputGroup2Input>
    </InputGroup2Container>
  );
}

export default function NewVariety() {
  // const inputGroupList :TfieldNumber= {
  //   {germTemp,minGermTemp,maxGermTemp},
  //   [germTime,minGermTime,maxGermTime],
  //   [cultTemp,minGrowTemp,maxGrowTemp],
  //   [cultTime,minGrowTime,minGrowTime],

  // };

  const inputGroupList = [
    {
      label: "germTemp",
      name1: TfieldNumber.minGermTemp,
      name2: TfieldNumber.maxGermTemp,
    },
    {
      label: "germTime",
      name1: TfieldNumber.minGermTime,
      name2: TfieldNumber.maxGermTime,
    },
    {
      label: "growTemp",
      name1: TfieldNumber.minGrowTemp,
      name2: TfieldNumber.maxGrowTemp,
    },
    {
      label: "growTime",
      name1: TfieldNumber.minGrowTime,
      name2: TfieldNumber.maxGrowTime,
    },
    {
      label: "yield",
      name1: TfieldNumber.minYield,
      name2: TfieldNumber.maxYield,
    },
    {
      label: "rusticity",
      name1: TfieldNumber.rusticity,
      name2: TfieldNumber.zeroVeg,
    },
  ];

  const myTextScreen = textScreen("NewVariety");
  const { variety } = useStore(newVarietyStore);
  return (
    <>
      <NewVarietyContainer>
      <HeaderScreen
        link="/Variety"
        icon="fa-solid fa-chevron-left"
        title={myTextScreen.screenName}
      />
<ul>
      {inputGroupList.map((item, index: number) => 
        <li key={index}> 
          <InputGroup2
          label={myTextScreen[item.label]}
          input1={{
            name: item.name1,
            label: myTextScreen[item.name1],
            // value: variety[item[1]],
            value: variety[item.name1],
          }}
          input2={{
            name: item.name2,
            label: myTextScreen[item.name2],
            // value: variety[item[1]],
            value: variety[item.name2],
          }}
        />
        </li>
      )}
</ul>
      <Link to="/Variety">
        <button>{myTextScreen.saveVariety}</button>
      </Link>
      </NewVarietyContainer>
    </>
  );
}
