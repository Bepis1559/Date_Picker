import { addMonths, format, lastDayOfMonth, subMonths } from "date-fns";
import { useAtom } from "jotai";
import { useMemo } from "react";
import { currentDateAtom } from "../context/date";
import { howManyDatesToDisplayFromNextMonth } from "../helpers/CalendarDateFunctionality";

// add dependancy for the useMemo
export function useDate(): useDateResultType {
  const [today] = useAtom(currentDateAtom);

  // previous month
  //
  //
  //
  //
  const firstDateOfPrevMonth = useMemo(
    () => new Date(format(subMonths(today, 1), "yyyy-MM-01")),
    [today],
  );
  const lastDateOfPrevMonth = lastDayOfMonth(subMonths(today, 1));
  const datesOfPrevMonth = useMemo(
    () =>
      getPopulatedArray(
        firstDateOfPrevMonth.getDate(),
        lastDateOfPrevMonth.getDate(),
      ),
    [firstDateOfPrevMonth, lastDateOfPrevMonth],
  );

  //
  //
  //
  //
  //
  //   current month
  const firstDateOfCurrentMonth = useMemo(
    () => new Date(format(today, "yyyy-MM-01")),
    [today],
  );
  const lastDateOfMonth = lastDayOfMonth(today);
  const firstDateOfCurrentMonth_As_DayOfWeek = firstDateOfCurrentMonth.getDay();
  const datesOfCurrentMonth = useMemo(
    () =>
      getPopulatedArray(
        firstDateOfCurrentMonth.getDate(),
        lastDateOfMonth.getDate(),
      ),
    [firstDateOfCurrentMonth, lastDateOfMonth],
  );

  //
  //
  //
  //
  //
  // next month
  const firstDateOfNextMonth = useMemo(
    () => new Date(format(addMonths(today, 1), "yyyy-MM-01")),
    [today],
  );
  const lastDateOfNextMonth = lastDayOfMonth(addMonths(today, 1));
  const datesOfNextMonth = useMemo(
    () =>
      getPopulatedArray(
        firstDateOfNextMonth.getDate(),
        lastDateOfNextMonth.getDate(),
      ),

    [firstDateOfNextMonth, lastDateOfNextMonth],
  );
  //
  //
  //
  // the results to be returned as arrays
  const datesToTakeFromPrevMonth = datesOfPrevMonth.slice(
    -firstDateOfCurrentMonth_As_DayOfWeek,
  );
  const numberOfDaysToTakeFromNextMonth = howManyDatesToDisplayFromNextMonth(
    datesToTakeFromPrevMonth.length,
    datesOfCurrentMonth.length,
  );
  const datesToTakeFromNextMonth = datesOfNextMonth.slice(
    0,
    numberOfDaysToTakeFromNextMonth,
  );

  return [
    datesToTakeFromPrevMonth,
    datesOfCurrentMonth,
    datesToTakeFromNextMonth,
  ];
}

function getPopulatedArray(start: number, end: number): number[] {
  const result: number[] = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
