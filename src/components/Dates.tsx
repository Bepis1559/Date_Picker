import { ReactElement, useState, useEffect } from "react";
import { useDate } from "../hooks/useDate";
import { useAtom } from "jotai";
import { currentDateAtom, datePickerButtonDayAtom } from "../context/date";
import { useIds } from "../hooks/useIds";
import { handleClick } from "../helpers/datesClickEvent";
import {
  handleClasses,
  handleClassesForCurrentMonth,
} from "../helpers/handleClasses";

export function Dates(): ReactElement {
  // START HANDLING SELECTED DATE
  // also changes the DatePickerButton
  // October is not ok
  const [
    datesToTakeFromPrevMonth,
    datesOfCurrentMonth,
    datesToTakeFromNextMonth,
  ] = useDate();
  const [, setCurrentDayForButton] = useAtom(datePickerButtonDayAtom);

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
    <div className="date-picker-grid-dates date-picker-grid">
      {datesToTakeFromPrevMonth.map((date, index) => (
        <button
          key={date}
          onClick={(e) =>
            handleClick(e, setSelectedButtonId, setCurrentDayForButton)
          }
          data-cryptoid={prevMonthDatesIds[index]}
          type="button"
          className={handleClasses(selectedButtonId, index, prevMonthDatesIds)}>
          {date}
        </button>
      ))}
      {datesOfCurrentMonth.map((date, index) => (
        <button
          key={date}
          data-month={today.getMonth()}
          onClick={(e) =>
            handleClick(e, setSelectedButtonId, setCurrentDayForButton)
          }
          data-cryptoid={currentMonthDatesIds[index]}
          type="button"
          className={handleClassesForCurrentMonth(
            selectedButtonId,
            index,
            currentMonthDatesIds,
          )}>
          {date}
        </button>
      ))}

      {datesToTakeFromNextMonth.map((date, index) => (
        <button
          key={date}
          onClick={(e) =>
            handleClick(e, setSelectedButtonId, setCurrentDayForButton)
          }
          data-cryptoid={nextMonthDatesIds[index]}
          type="button"
          className={handleClasses(selectedButtonId, index, nextMonthDatesIds)}>
          {date}
        </button>
      ))}
    </div>
  );
}
