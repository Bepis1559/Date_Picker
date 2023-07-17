import { ReactElement } from "react";
import { useDate } from "../hooks/useDate";

export function Dates(): ReactElement {
  const [
    datesToTakeFromPrevMonth,
    datesOfCurrentMonth,
    datesToTakeFromNextMonth,
  ] = useDate();
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
        <button type="button" key={date} className="date">
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
