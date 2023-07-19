import { format } from "date-fns";
import { useAtom } from "jotai";
import { ReactElement } from "react";
import { currentDateAtom } from "../context/date";

export function DatePickerHeader(): ReactElement {
  const [today, setToday] = useAtom(currentDateAtom);
  const formattedDate = format(today, "MMMM - yyyy");
  function handleForwardsButton() {
    setToday(new Date(2023, today.getMonth() + 1));
  }
  function handleBackwardsButton() {
    setToday(new Date(2023, today.getMonth() - 1));
  }
  return (
    <div className="date-picker-header">
      <button
        onClick={() => handleBackwardsButton()}
        type="button"
        className="prev-month-button month-button">
        &larr;
      </button>
      <div className="current-month">{formattedDate}</div>
      <button
        onClick={() => handleForwardsButton()}
        type="button"
        className="next-month-button month-button">
        &rarr;
      </button>
    </div>
  );
}
