import { ReactElement } from "react";
import { DatePickerHeader } from "./DatePickerHeader";

export function DatePicker(): ReactElement {
  return (
    <div className="date-picker">
      <DatePickerHeader />
    </div>
  );
}
