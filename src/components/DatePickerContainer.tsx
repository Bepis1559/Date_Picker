import { ReactElement } from "react";
import { DatePickerButton } from "./DatePickerButton";
import { DatePicker } from "./DatePicker";

export function DatePickerContainer(): ReactElement {
  return (
    <div className="date-picker-container">
      <DatePickerButton />
      <DatePicker />
    </div>
  );
}
