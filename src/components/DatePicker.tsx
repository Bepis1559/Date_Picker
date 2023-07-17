import { ReactElement } from "react";
import { DatePickerHeader } from "./DatePickerHeader";
import { DaysOfWeek } from "./DaysOfWeek";
import { Dates } from "./Dates";

export function DatePicker(): ReactElement {
  return (
    <div className="date-picker">
      <DatePickerHeader />
      <DaysOfWeek />
      <Dates />
    </div>
  );
}
