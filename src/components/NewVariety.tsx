/**
 * this function do ...
 */

import { useStore } from "@nanostores/react";
import { Link } from "react-router-dom";
import { bitValue, textScreen } from "../lib/utils";
import {
  ID_INIT,
  MIN_TEMP,
  TfieldNumber,
  saveVariety,
  setInput,
  setInputNumber,
  setSeedType,
  setVarietyName,
  varietyStore,
} from "../store/Variety.store";
import {
  InputGroup2Container,
  InputGroup2Label,
  InputGroup3Container,
  NewVarietyContainer,
  InputGroup,
} from "../style/NewVariety.style";
import jsonData from "./../data/localData.json";
import { ComposeName, HeaderScreen } from "./Common";
import { SeedStore, Tseed } from "../store/Seed.store";
import { AddSeed } from "../style/Seeds.style";
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

export type SeedTypeprops={
  value : number,

}


export function SeedType({value} :SeedTypeprops ) {
  const seedTypeList = localData.seedType;
  const typeArray : number[] = bitValue(value,seedTypeList.length);

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
                  value={typeArray[index]}
                  checked ={typeArray[index]===0 ? false : true} 
                  // value={item.value}
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
  const { currentVariety, currentId, idFirebase } = useStore(varietyStore);
  const { currentSeed } = useStore(SeedStore);
  const seedTypeList = localData.seedType;
  return (
    <>
      <NewVarietyContainer>
        <HeaderScreen
          link="/Variety"
          icon="fa-solid fa-chevron-left"
          title={myTextScreen.screenName}
          info={ComposeName(currentSeed)}
        />

        <AddSeed idFirebase={currentSeed.idFirebase}>
          <input
            type="Text"
            onChange={(e) => setInput("seedName", e.currentTarget.value)}
            value={currentVariety.seedName}
            placeholder={myTextScreen.seedName}
          />
          <input
            type="Text"
            onChange={(e) => setInput("gender", e.currentTarget.value)}
            value={currentVariety.gender}
            placeholder={myTextScreen.gender}
          />
          <input
            type="Text"
            onChange={(e) => setInput("species", e.currentTarget.value)}
            value={currentVariety.species}
            placeholder={myTextScreen.species}
          />
        </AddSeed>

        <input
          type="Text"
          onChange={(e) => setInput("varietyName", e.currentTarget.value)}
          value={currentVariety.varietyName}
          placeholder={myTextScreen.varietyName}
        />
        <ul>
          {inputGroupList.map((item, index: number) => (
            <li key={index}>
              <InputGroup2
                label={myTextScreen[item.label]}
                input1={{
                  name: item.name1,
                  label: myTextScreen[item.name1],
                  // value: currentVariety[item[1]],
                  value: currentVariety[item.name1],
                }}
                input2={{
                  name: item.name2,
                  label: myTextScreen[item.name2],
                  // value: currentVariety[item[1]],
                  value: currentVariety[item.name2],
                }}
              />
            </li>
          ))}
          <li key={1000}>
            {myTextScreen.calorieGramme}

            <input
              type="number"
              onChange={(e) =>
                setInputNumber(TfieldNumber.calorie, e.currentTarget.value)
              }
              value={
                currentVariety.calorie === MIN_TEMP
                  ? ""
                  : currentVariety.calorie
              }
              placeholder={TfieldNumber.calorie}
            />
          </li>
          <li key={2000}>
            <InputGroup3
              label={""}
              input1={{
                name: TfieldNumber.protein,
                label: TfieldNumber.protein,
                value: currentVariety.protein,
              }}
              input2={{
                name: TfieldNumber.lipid,
                label: TfieldNumber.lipid,
                value: currentVariety.lipid,
              }}
              input3={{
                name: TfieldNumber.carbohydrate,
                label: TfieldNumber.carbohydrate,
                value: currentVariety.carbohydrate,
              }}
            />
          </li>
          <li key={3000}>
            <InputGroup3
              label={""}
              input1={{
                name: TfieldNumber.tGW,
                label: TfieldNumber.tGW,
                value: currentVariety.tGW,
              }}
              input2={{
                name: TfieldNumber.seedSpacing,
                label: TfieldNumber.seedSpacing,
                value: currentVariety.seedSpacing,
              }}
              input3={{
                name: TfieldNumber.rowSpacing,
                label: TfieldNumber.rowSpacing,
                value: currentVariety.rowSpacing,
              }}
            />
          </li>
          <li key={4000}>
            <InputGroup2
              label={""}
              input1={{
                name: TfieldNumber.height,
                label: TfieldNumber.height,
                value: currentVariety.height,
              }}
              input2={{
                name: TfieldNumber.floorSpace,
                label: TfieldNumber.floorSpace,
                value: currentVariety.floorSpace,
              }}
            />
          </li>
          <li key={5000}>
            <SeedType value={currentVariety.seedType} />
          </li>
        </ul>
        <Link to="/Variety">
          <button onClick={saveVariety}>
            {`[${currentId}]   `}
            {currentId === ID_INIT
              ? myTextScreen.saveVariety
              : myTextScreen.updateVariety}
          </button>
        </Link>
      </NewVarietyContainer>
    </>
  );
}
