import { addMonths, format, lastDayOfMonth, subMonths } from "date-fns";
import { useAtom } from "jotai";
import { useCallback, useMemo } from "react";
import { currentDateAtom } from "../context/date";
import { howManyDatesToDisplayFromNextMonth } from "../helpers/CalendarDateFunctionality";

export function useDate(): useDateResultType {
  // the shared today among components
  const [today] = useAtom(currentDateAtom);

  // function to get the date arrays populated
  const getPopulatedArray = useCallback(
    (start: number, end: number): number[] => {
      const result: number[] = [];
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
      return result;
    },
    [],
  );

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
    [firstDateOfPrevMonth, lastDateOfPrevMonth, getPopulatedArray],
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
    [firstDateOfCurrentMonth, lastDateOfMonth, getPopulatedArray],
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

    [firstDateOfNextMonth, lastDateOfNextMonth, getPopulatedArray],
  );
  //
  //
  //
  // the results to be returned as arrays
  const datesToTakeFromPrevMonth = useMemo(
    () => datesOfPrevMonth.slice(-firstDateOfCurrentMonth_As_DayOfWeek),
    [datesOfPrevMonth, firstDateOfCurrentMonth_As_DayOfWeek],
  );
  const numberOfDaysToTakeFromNextMonth = useMemo(
    () =>
      howManyDatesToDisplayFromNextMonth(
        datesToTakeFromPrevMonth.length,
        datesOfCurrentMonth.length,
      ),
    [datesToTakeFromPrevMonth, datesOfCurrentMonth],
  );
  const datesToTakeFromNextMonth = useMemo(
    () => datesOfNextMonth.slice(0, numberOfDaysToTakeFromNextMonth),
    [datesOfNextMonth, numberOfDaysToTakeFromNextMonth],
  );

  return [
    datesToTakeFromPrevMonth,
    datesOfCurrentMonth,
    datesToTakeFromNextMonth,
  ];
}
