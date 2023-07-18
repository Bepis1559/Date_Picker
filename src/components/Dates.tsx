import { ReactElement } from "react";
import { useDate } from "../hooks/useDate";
import { useAtom } from "jotai";
import { currentDateAtom } from "../context/date";
import { SingleDate_Button } from "./SingleDate_Button";

export function Dates(): ReactElement {
  // START HANDLING SELECTED DATE
  // class - .date.selected
  // also changes the DatePickerButton
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
        <SingleDate_Button key={date} date={date} />
      ))}
      {datesOfCurrentMonth.map((date) => (
        <SingleDate_Button
          key={date}
          date={date}
          classes={`${date == todaysDate ? "date today" : "date"}`}
        />
      ))}
      {datesToTakeFromNextMonth.map((date) => (
        <SingleDate_Button key={date} date={date} />
      ))}
    </div>
  );
}
