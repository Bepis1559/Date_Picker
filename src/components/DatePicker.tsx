import { ReactElement } from "react";
import { DatePickerHeader } from "./DatePickerHeader";
import { DaysOfWeek } from "./DaysOfWeek";

export function DatePicker(): ReactElement {
  return (
    <div className="date-picker">
      <DatePickerHeader />
      <DaysOfWeek />
    </div>
  );
}
