import { ReactElement, useState } from "react";
import { DatePickerButton } from "./DatePickerButton";
import { DatePicker } from "./DatePicker";

export function DatePickerContainer(): ReactElement {
  const [isDatePickerHidden, setIsDatePickerHidden] = useState(false);
  return (
    <div className="date-picker-container">
      <DatePickerButton setIsDatePickerHidden={setIsDatePickerHidden} />
      {!isDatePickerHidden && <DatePicker />}
    </div>
  );
}
