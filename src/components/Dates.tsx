import { ReactElement, useState, MouseEvent } from "react";
import { useDate } from "../hooks/useDate";
import { useAtom } from "jotai";
import { currentDateAtom } from "../context/date";
import { SingleDate_Button } from "./SingleDate_Button";
import { useIds } from "../hooks/useIds";

export function Dates(): ReactElement {
  // START HANDLING SELECTED DATE
  // class - .date.selected
  // also changes the DatePickerButton
  const [
    datesToTakeFromPrevMonth,
    datesOfCurrentMonth,
    datesToTakeFromNextMonth,
  ] = useDate();

  const prevMonthDatesIds = useIds(datesToTakeFromPrevMonth.length);
  const currentMonthDatesIds = useIds(datesOfCurrentMonth.length);
  const nextMonthDatesIds = useIds(datesToTakeFromNextMonth.length);

  const [today] = useAtom(currentDateAtom);
  const todaysDate = today.getDate();
  const todaysDateId = useIds(1);
  const [selectedButtonId, setSelectedButtonId] = useState(
    todaysDateId.toString(),
  );

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    setSelectedButtonId(e.currentTarget.id);
    // console.log(e.currentTarget.innerText);
    // console.log("e.currentTarget.id : " + e.currentTarget.id);
    // console.log("selectedButtonId : " + selectedButtonId);
  }

  return (
    <div className="date-picker-grid-dates date-picker-grid">
      {datesToTakeFromPrevMonth.map((date, index) => (
        <SingleDate_Button
          selectedButtonId={selectedButtonId}
          id={prevMonthDatesIds[index]}
          handleClick={handleClick}
          key={date}
          date={date}
        />
      ))}
      {datesOfCurrentMonth.map((date, index) => (
        <SingleDate_Button
          selectedButtonId={selectedButtonId}
          key={date}
          date={date}
          id={`${
            date == todaysDate ? todaysDateId[0] : currentMonthDatesIds[index]
          }`}
          handleClick={handleClick}
          classes="date"
        />
      ))}
      {datesToTakeFromNextMonth.map((date, index) => (
        <SingleDate_Button
          selectedButtonId={selectedButtonId}
          id={nextMonthDatesIds[index]}
          handleClick={handleClick}
          key={date}
          date={date}
        />
      ))}
    </div>
  );
}
