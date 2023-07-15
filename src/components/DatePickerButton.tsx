import { format } from "date-fns";
import { ReactElement } from "react";

export function DatePickerButton(): ReactElement {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "MMMM do,yyyy");
  return (
    <button type="button" className="date-picker-button">
      {formattedDate}
    </button>
  );
}
