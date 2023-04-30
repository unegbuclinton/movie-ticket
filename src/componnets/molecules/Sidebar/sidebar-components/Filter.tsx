import React, { useState } from "react";
import SideBarAccordion from "./SidebarAccordion";
import RadioButton from "@/componnets/atom/RadioButton";
import Checkbox from "@/componnets/atom/checkbox";
import { checkboxData, filterData } from "@/utils/jsonData/filterData";
import { useAppDispatch, useAppSelector } from "@/utils/hooks";
import { RootState } from "@/store";
import { filterBy } from "@/utils/redux/FilterSlice";

const Filter = () => {
  const { filterType } = useAppSelector((state: RootState) => state.filter);
  const dispatch = useAppDispatch();
  const [check, setCheck] = useState<string>(checkboxData[0].value);

  const checkedRadio = (value: string) => {
    dispatch(filterBy(value));
  };

  const checkbox = (value: string) => {
    setCheck(value);
  };
  // console.log(check);
  return (
    <SideBarAccordion open={false} label="Filter">
      <RadioButton
        selectedValue={filterType}
        onChange={checkedRadio}
        radioData={filterData}
        legend="Show Me"
      />
      <div>
        <p></p>
        <Checkbox
          checkboxData={checkboxData}
          legend="Availability"
          selectedValue={check}
          onChange={checkbox}
        />
      </div>
    </SideBarAccordion>
  );
};

export default Filter;
