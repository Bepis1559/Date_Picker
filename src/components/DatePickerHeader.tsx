import { format } from "date-fns";
import { ReactElement } from "react";

export function DatePickerHeader(): ReactElement {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "MMMM - yyyy");
  return (
    <div className="date-picker-header">
      <button type="button" className="prev-month-button month-button">
        &larr;
      </button>
      <div className="current-month">{formattedDate}</div>
      <button type="button" className="next-month-button month-button">
        &rarr;
      </button>
    </div>
  );
}
