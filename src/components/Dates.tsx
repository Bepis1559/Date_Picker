import { ReactElement, useState, useEffect } from "react";
import { useDate } from "../hooks/useDate";
import { useAtom } from "jotai";
import { currentDateAtom } from "../context/date";
import { datePickerButtonDateAtom } from "../context/datePickerButton";
import { useIds } from "../hooks/useIds";
import { handleClick } from "../helpers/datesClickEvent";
import {
  handleClasses,
  handleClassesForCurrentMonth,
} from "../helpers/handleClasses";

export function Dates(): ReactElement {
  const [
    datesToTakeFromPrevMonth,
    datesOfCurrentMonth,
    datesToTakeFromNextMonth,
  ] = useDate();
  const [, setCurrentDayForButton] = useAtom(datePickerButtonDateAtom);

  const prevMonthDatesIds = useIds(datesToTakeFromPrevMonth.length);
  const currentMonthDatesIds = useIds(datesOfCurrentMonth.length);
  const nextMonthDatesIds = useIds(datesToTakeFromNextMonth.length);

  const [today] = useAtom(currentDateAtom);
  const todaysDate = today.getDate();

  const [selectedButtonId, setSelectedButtonId] = useState(
    currentMonthDatesIds[todaysDate - 1].toString(),
  );
  // to make sure the current date is selected when the app
  // first mounts or when the file is saved
  useEffect(() => {
    setSelectedButtonId(currentMonthDatesIds[todaysDate - 1]);
  }, [currentMonthDatesIds, todaysDate]);

  return (
    // SEPARATE THE BUTTONS IN A COMPONENT AGAIN
    <div className="date-picker-grid-dates date-picker-grid">
      {datesToTakeFromPrevMonth.map((date, index) => (
        <button
          key={date.getDate()}
          onClick={(e) =>
            handleClick(e, setSelectedButtonId, setCurrentDayForButton)
          }
          data-date={date.getDate()}
          data-month={date.getMonth()}
          data-year={date.getFullYear()}
          data-cryptoid={prevMonthDatesIds[index]}
          type="button"
          className={handleClasses(selectedButtonId, index, prevMonthDatesIds)}>
          {date.getDate()}
        </button>
      ))}
      {datesOfCurrentMonth.map((date, index) => (
        <button
          key={date.getDate()}
          onClick={(e) =>
            handleClick(e, setSelectedButtonId, setCurrentDayForButton)
          }
          data-cryptoid={currentMonthDatesIds[index]}
          data-date={date.getDate()}
          data-month={date.getMonth()}
          data-year={date.getFullYear()}
          type="button"
          className={handleClassesForCurrentMonth(
            date.getDate(),
            date.getMonth(),
            date.getFullYear(),
            selectedButtonId,
            index,
            currentMonthDatesIds,
          )}>
          {date.getDate()}
        </button>
      ))}

      {datesToTakeFromNextMonth.map((date, index) => (
        <button
          key={date.getDate()}
          onClick={(e) =>
            handleClick(e, setSelectedButtonId, setCurrentDayForButton)
          }
          data-cryptoid={nextMonthDatesIds[index]}
          data-date={date.getDate()}
          data-month={date.getMonth()}
          data-year={date.getFullYear()}
          type="button"
          className={handleClasses(selectedButtonId, index, nextMonthDatesIds)}>
          {date.getDate()}
        </button>
      ))}
    </div>
  );
}
