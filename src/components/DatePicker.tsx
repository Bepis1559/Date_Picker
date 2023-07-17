import { ReactElement } from "react";
import { DatePickerHeader } from "./DatePickerHeader";
import { DaysOfWeek } from "./DaysOfWeek";
import { Dates } from "./Dates";

type props = {
  isDatePickerHidden: boolean;
};

export function DatePicker({ isDatePickerHidden }: props): ReactElement {
  return (
    <div className={`${isDatePickerHidden ? "display-none" : "date-picker"}`}>
      <DatePickerHeader />
      <DaysOfWeek />
      <Dates />
    </div>
  );
}
