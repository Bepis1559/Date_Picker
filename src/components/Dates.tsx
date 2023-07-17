import { ReactElement } from "react";
import { useDate } from "../hooks/useDate";
import { howManyDatesToDisplayFromNextMonth } from "../helpers/CalendarDateFunctionality";

export function Dates(): ReactElement {
  const [
    // Sunday is 0 and Saturday is 6
    firstDateOfCurrentMonth_As_DayOfWeek,
    lastDateOfCurrentMonth_As_DayOfWeek,
    datesOfPrevMonth,
    datesOfCurrentMonth,
    datesOfNextMonth,
  ] = useDate();
  const datesToTakeFromPrevMonth = datesOfPrevMonth.slice(
    -firstDateOfCurrentMonth_As_DayOfWeek,
  );
  const numberOfdatesToTakeFromNextMonth = howManyDatesToDisplayFromNextMonth(
    datesToTakeFromPrevMonth.length,
    datesOfCurrentMonth.length,
  );
  const datesToTakeFromNextMonth = datesOfNextMonth.slice(
    0,
    numberOfdatesToTakeFromNextMonth,
  );
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
