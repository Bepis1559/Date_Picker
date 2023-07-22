import { ReactElement, useState, useEffect } from "react";
import { useDate } from "../hooks/useDate";
import { useAtom } from "jotai";
import { currentDateAtom } from "../context/date";
import { datePickerButtonDateAtom } from "../context/datePickerButton";
import { useIds } from "../hooks/useIds";
import { handleClick } from "../helpers/datesClickEvent";
import {
  handleClassesForNonCurrentMonth,
  handleClassesForCurrentMonth,
} from "../helpers/handleClasses";
import { SingleDate_Button } from "./SingleDate_Button";

export function Dates(): ReactElement {
  const [
    datesToTakeFromPrevMonth,
    datesOfCurrentMonth,
    datesToTakeFromNextMonth,
  ] = useDate();
  const [dateForDatePickerButton, setDateForDatePickerButton] = useAtom(
    datePickerButtonDateAtom,
  );

  const prevMonthDatesIds = useIds(datesToTakeFromPrevMonth.length);
  const currentMonthDatesIds = useIds(datesOfCurrentMonth.length);
  const nextMonthDatesIds = useIds(datesToTakeFromNextMonth.length);

  const [today] = useAtom(currentDateAtom);
  const todaysDate = today.getDate();

  const [, setSelectedButtonId] = useState(
    currentMonthDatesIds[todaysDate - 1].toString(),
  );
  // to make sure the current date is selected when the app
  // first mounts or when the file is saved
  useEffect(() => {
    setSelectedButtonId(currentMonthDatesIds[todaysDate - 1]);
  }, [currentMonthDatesIds, todaysDate]);

  return (
    // * SEPARATE THE BUTTONS IN A COMPONENT AGAIN
    <div className="date-picker-grid-dates date-picker-grid">
      {datesToTakeFromPrevMonth.map((date, index) => (
        // key={date.getDate()}
        //  data-cryptoid={prevMonthDatesIds[index]}
        <SingleDate_Button
          key={date.getDate()}
          handleClick={handleClick}
          handleClasses={handleClassesForNonCurrentMonth}
          cryptoId={prevMonthDatesIds[index]}
          date={date}
          dateForDatePickerButton={dateForDatePickerButton}
          setSelectedButtonId={setSelectedButtonId}
          setDateForDatePickerButton={setDateForDatePickerButton}
        />
      ))}
      {datesOfCurrentMonth.map((date, index) => (
        <SingleDate_Button
          key={date.getDate()}
          handleClick={handleClick}
          handleClasses={handleClassesForCurrentMonth}
          cryptoId={currentMonthDatesIds[index]}
          date={date}
          dateForDatePickerButton={dateForDatePickerButton}
          setSelectedButtonId={setSelectedButtonId}
          setDateForDatePickerButton={setDateForDatePickerButton}
        />
      ))}

      {datesToTakeFromNextMonth.map((date, index) => (
        <SingleDate_Button
          key={date.getDate()}
          handleClick={handleClick}
          handleClasses={handleClassesForNonCurrentMonth}
          cryptoId={nextMonthDatesIds[index]}
          date={date}
          dateForDatePickerButton={dateForDatePickerButton}
          setSelectedButtonId={setSelectedButtonId}
          setDateForDatePickerButton={setDateForDatePickerButton}
        />
      ))}
    </div>
  );
}
