import { ReactElement } from "react";
import { useDate } from "../hooks/useDate";
import { useAtom } from "jotai";
import { currentDateAtom } from "../context/date";

export function Dates(): ReactElement {
  const [today] = useAtom(currentDateAtom);
  const [
    datesToTakeFromPrevMonth,
    datesOfCurrentMonth,
    datesToTakeFromNextMonth,
  ] = useDate();
  const todaysDate = today.getDate();

  return (
    <div className="date-picker-grid-dates date-picker-grid">
      {datesToTakeFromPrevMonth.map((date) => (
        <button
          type="button"
          key={date}
          className="date date-picker-other-month-date">
          {date}
        </button>
      ))}
      {datesOfCurrentMonth.map((date) => (
        <button
          type="button"
          key={date}
          className={`${date == todaysDate ? "date today" : "date"}`}>
          {date}
        </button>
      ))}
      {datesToTakeFromNextMonth.map((date) => (
        <button
          type="button"
          key={date}
          className="date date-picker-other-month-date">
          {date}
        </button>
      ))}
    </div>
  );
}
