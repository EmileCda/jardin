/**
 * this function do ...
 */

import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { textScreen } from "../lib/utils";
import {
  newVarietyStore,
  setInputNumber,
  TfieldNumber,
  setSeedType,
  setInput,
  TfieldString,
  saveNewVarity,
} from "../store/NewVariety.store";
import { MIN_TEMP } from "../store/Variety.store";
import {
  InputGroup2Container,
  InputGroup2Label,
  InputGroup3Container,
  NewVarietyContainer,
  InputGroup,
} from "../style/NewVariety.style";
import { HeaderScreen } from "./Commun";
import jsonData from "./../data/localData.json";
export const localData: any = jsonData;

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
  const inputArray: Tinput[] = [inputGroup.input1, inputGroup.input2];
  return (
    <InputGroup2Container>
      <InputGroup2Label>
        <h1>{inputGroup.label}</h1>
      </InputGroup2Label>
      <InputGroup>
        {inputArray.map((item: Tinput, index: number) => (
          <input
            key={index}
            type="number"
            onChange={(e) => setInputNumber(item.name, e.currentTarget.value)}
            value={item.value === MIN_TEMP ? "" : item.value}
            placeholder={item.label}
          />
        ))}
      </InputGroup>
    </InputGroup2Container>
  );
}

export type TinputGroup3Props = {
  label: string;
  input1: Tinput;
  input2: Tinput;
  input3: Tinput;
};
export function InputGroup3(inputGroup: TinputGroup3Props) {
  const inputArray: Tinput[] = [
    inputGroup.input1,
    inputGroup.input2,
    inputGroup.input3,
  ];
  return (
    <InputGroup3Container>
      <InputGroup>
        {inputArray.map((item: Tinput, index: number) => (
          <input
            key={index}
            type="number"
            onChange={(e) => setInputNumber(item.name, e.currentTarget.value)}
            value={item.value === MIN_TEMP ? "" : item.value}
            placeholder={item.label}
          />
        ))}
      </InputGroup>
    </InputGroup3Container>
  );
}

export function SeedType() {
  const seedTypeList = localData.seedType;
  // console.log("SeedType");
  // console.log(seedTypeList);
  return (
    <>
      <ul>
        {seedTypeList.map(
          (item: { name: string; value: number }, index: number) => (
            <li key={index}>
              <label>
                <input
                  type="checkbox"
                  id={item.name}
                  name={item.name}
                  value={item.value}
                  onChange={(e) => setSeedType(e.target.checked, item.value)}
                />
                {item.name}
              </label>
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default function NewVariety() {
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
  const seedTypeList = localData.seedType;
  return (
    <>
      <NewVarietyContainer>
        <HeaderScreen
          link="/Variety"
          icon="fa-solid fa-chevron-left"
          title={myTextScreen.screenName}
        />

        <input
          type="Text"
          onChange={(e) => setInput("name", e.currentTarget.value)}
          value={variety.name}
          placeholder={TfieldString.name}
        />

        <ul>
          {inputGroupList.map((item, index: number) => (
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
          ))}
          <li key={1000}>
            Colorie / gramme
            <input
              type="number"
              onChange={(e) =>
                setInputNumber(TfieldNumber.calorie, e.currentTarget.value)
              }
              value={variety.calorie}
              placeholder={TfieldNumber.calorie}
            />
          </li>
          <li key={2000}>
            <InputGroup3
              label={""}
              input1={{
                name: TfieldNumber.protein,
                label: TfieldNumber.protein,
                value: variety.protein,
              }}
              input2={{
                name: TfieldNumber.lipid,
                label: TfieldNumber.lipid,
                value: variety.lipid,
              }}
              input3={{
                name: TfieldNumber.carbohydrate,
                label: TfieldNumber.carbohydrate,
                value: variety.carbohydrate,
              }}
            />
          </li>
          <li key={3000}>
            <InputGroup3
              label={""}
              input1={{
                name: TfieldNumber.tGW,
                label: TfieldNumber.tGW,
                value: variety.tGW,
              }}
              input2={{
                name: TfieldNumber.seedSpacing,
                label: TfieldNumber.seedSpacing,
                value: variety.seedSpacing,
              }}
              input3={{
                name: TfieldNumber.rowSpacing,
                label: TfieldNumber.rowSpacing,
                value: variety.rowSpacing,
              }}
            />
          </li>
          <li key={4000}>
            <InputGroup2
              label={""}
              input1={{
                name: TfieldNumber.height,
                label: TfieldNumber.height,
                value: variety.height,
              }}
              input2={{
                name: TfieldNumber.floorSpace,
                label: TfieldNumber.floorSpace,
                value: variety.floorSpace,
              }}
            />
          </li>
          <li key={5000}>
            <SeedType />
          </li>
        </ul>
        <Link to="/Variety">
          <button onClick={saveNewVarity}>{myTextScreen.saveVariety}</button>
        </Link>
      </NewVarietyContainer>
    </>
  );
}
