import { format } from "date-fns";
import { useAtom } from "jotai";
import { ReactElement } from "react";
import { currentDateAtom } from "../context/date";

export function DatePickerHeader(): ReactElement {
  const [today, setToday] = useAtom(currentDateAtom);
  const formattedDate = format(today, "MMMM - yyyy");
  //  SHOULD NOT INFLUENCE THE SELECTED DATE
  function handleForwardsButton() {
    setToday(
      new Date(today.getFullYear(), today.getMonth() + 1, today.getDate()),
    );
  }
  function handleBackwardsButton() {
    setToday(
      new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()),
    );
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
