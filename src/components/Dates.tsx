import { ReactElement, useState, MouseEvent, useEffect } from "react";
import { useDate } from "../hooks/useDate";
import { useAtom } from "jotai";
import { currentDateAtom } from "../context/date";
import { SingleDate_Button } from "./SingleDate_Button";
import { useIds } from "../hooks/useIds";

export function Dates(): ReactElement {
  // START HANDLING SELECTED DATE
  // also changes the DatePickerButton
  // October is not ok
  const [
    datesToTakeFromPrevMonth,
    datesOfCurrentMonth,
    datesToTakeFromNextMonth,
  ] = useDate();

  const prevMonthDatesIds = useIds(datesToTakeFromPrevMonth.length);
  const currentMonthDatesIds = useIds(datesOfCurrentMonth.length);
  const nextMonthDatesIds = useIds(datesToTakeFromNextMonth.length);

  const [today, setToday] = useAtom(currentDateAtom);
  const todaysDate = today.getDate();

  const [selectedButtonId, setSelectedButtonId] = useState(
    currentMonthDatesIds[todaysDate - 1].toString(),
  );
  // to make sure the current date is selected when the app
  // first mounts or when the file is saved
  useEffect(() => {
    setSelectedButtonId(currentMonthDatesIds[todaysDate - 1]);
  }, [currentMonthDatesIds, todaysDate]);
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    setSelectedButtonId(e.currentTarget.id);
    // const dayOfSelectedDate = Number(e.currentTarget.innerText);
    // const monthOfSelectedDate = Number(
    //   e.currentTarget.getAttribute("data-month"),
    // );
    // setToday(new Date(2023, monthOfSelectedDate, dayOfSelectedDate));
  }
  // testing with useEffect ; delete it
  // useEffect(() => {
  //   console.log(today);
  // }, [today]);

  return (
    <div className="date-picker-grid-dates date-picker-grid">
      {datesToTakeFromPrevMonth.map((date, index) => (
        <SingleDate_Button
          month={today.getMonth() - 1}
          selectedButtonId={selectedButtonId}
          id={prevMonthDatesIds[index]}
          handleClick={handleClick}
          key={date}
          date={date}
        />
      ))}
      {datesOfCurrentMonth.map((date, index) => (
        <SingleDate_Button
          month={today.getMonth()}
          selectedButtonId={selectedButtonId}
          key={date}
          date={date}
          id={`${
            date == todaysDate
              ? currentMonthDatesIds[todaysDate - 1]
              : currentMonthDatesIds[index]
          }`}
          handleClick={handleClick}
          classes="date"
        />
      ))}
      {datesToTakeFromNextMonth.map((date, index) => (
        <SingleDate_Button
          month={today.getMonth() + 1}
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
