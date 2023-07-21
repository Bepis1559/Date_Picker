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
    (startDate: Date, endDate: Date): Date[] => {
      const result: Date[] = [];
      const currentDate = new Date(startDate.getTime());
      // normalizing the time zone offsets
      currentDate.setHours(0, 0, 0, 0);
      endDate.setHours(0, 0, 0, 0);
      while (currentDate <= endDate) {
        result.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
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
    () => getPopulatedArray(firstDateOfPrevMonth, lastDateOfPrevMonth),
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
    () => getPopulatedArray(firstDateOfCurrentMonth, lastDateOfMonth),
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
    () => getPopulatedArray(firstDateOfNextMonth, lastDateOfNextMonth),

    [firstDateOfNextMonth, lastDateOfNextMonth, getPopulatedArray],
  );
  //
  //
  //
  // the results to be returned as arrays
  const datesToTakeFromPrevMonth = useMemo(
    () =>
      firstDateOfCurrentMonth_As_DayOfWeek == 0
        ? []
        : datesOfPrevMonth.slice(-firstDateOfCurrentMonth_As_DayOfWeek),
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
