import { format } from "date-fns";
import { ReactElement } from "react";
const currentDate = new Date();

export function DatePickerButton(): ReactElement {
  const formattedDate = format(currentDate, "MMMM do,yyyy");
  return (
    <button type="button" className="date-picker-button">
      {formattedDate}
    </button>
  );
}
