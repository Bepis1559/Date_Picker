import { format } from "date-fns";
import { useAtom } from "jotai";
import { ReactElement } from "react";
import { currentDateAtom } from "../context/date";

export function DatePickerHeader(): ReactElement {
  const [today] = useAtom(currentDateAtom);
  const formattedDate = format(today, "MMMM - yyyy");
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
