import { ReactElement, useRef } from "react";
import { useDate } from "../hooks/useDate";
import { howManyDatesToDisplayFromNextMonth } from "../helpers/CalendarDateFunctionality";

export function Dates(): ReactElement {
  const gridColumns = useRef(7);
  const datesInFourRowsGrid = useRef(4 * gridColumns.current);
  const datesInFiveRowsGrid = useRef(5 * gridColumns.current);
  const datesInSixRowsGrid = useRef(6 * gridColumns.current);
  const [
    // Sunday is 0 and Saturday is 6
    firstDateOfCurrentMonth_As_DayOfWeek,
    lastDateOfCurrentMonth_As_DayOfWeek,
    datesOfPrevMonth,
    datesOfCurrentMonth,
    datesOfNextMonth,
  ] = useDate();
  const numberOfDatesToTakeFromPrevMonth = datesOfPrevMonth.slice(
    -firstDateOfCurrentMonth_As_DayOfWeek,
  );
  const numberOfdatesToTakeFromNextMonth = howManyDatesToDisplayFromNextMonth(
    numberOfDatesToTakeFromPrevMonth.length,
    datesOfCurrentMonth.length,
  );
  return (
    <div className="date-picker-grid-dates date-picker-grid">
      {numberOfDatesToTakeFromPrevMonth.map((date) => (
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
      {/* {datesToTakeFromNextMonth.map((date) => (
        <button
          type="button"
          key={date}
          className="date date-picker-other-month-date">
          {date}
        </button>
      ))} */}
    </div>
  );
}
