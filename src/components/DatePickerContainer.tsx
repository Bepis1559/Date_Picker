import { ReactElement } from "react";
import { DatePickerButton } from "./DatePickerButton";

export function DatePickerContainer(): ReactElement {
  return (
    <div className="date-picker-container">
      <DatePickerButton />
    </div>
  );
}
