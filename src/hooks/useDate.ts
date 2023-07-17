import { addMonths, format, lastDayOfMonth, subMonths } from "date-fns";
import { useAtom } from "jotai";
import { useMemo } from "react";
import { currentDateAtom } from "../context/date";

// add dependancy for the useMemo
export function useDate(): useDateResultType {
  const [today] = useAtom(currentDateAtom);

  const firstDateOfPrevMonth = useMemo(
    () => new Date(format(subMonths(today, 1), "yyyy-MM-01")),
    [today],
  );
  const lastDateOfPrevMonth = lastDayOfMonth(subMonths(today, 1));
  const datesOfPrevMonth = useMemo(() => {
    const result: number[] = [];
    for (
      let i = firstDateOfPrevMonth.getDate();
      i <= lastDateOfPrevMonth.getDate();
      i++
    ) {
      result.push(i);
    }
    return result;
  }, [firstDateOfPrevMonth, lastDateOfPrevMonth]);
  //   current month
  const firstDateOfMonth = useMemo(
    () => new Date(format(today, "yyyy-MM-01")),
    [today],
  );
  const lastDateOfMonth = lastDayOfMonth(today);
  const firstDateOfCurrentMonth_As_DayOfWeek = firstDateOfMonth.getDay();
  const lastDateOfCurrentMonth_As_DayOfWeek = lastDateOfMonth.getDay();
  const datesOfCurrentMonth = useMemo(() => {
    const result: number[] = [];
    for (
      let i = firstDateOfMonth.getDate();
      i <= lastDateOfMonth.getDate();
      i++
    ) {
      result.push(i);
    }
    return result;
  }, [firstDateOfMonth, lastDateOfMonth]);
  // next month
  const firstDateOfNextMonth = useMemo(
    () => new Date(format(addMonths(today, 1), "yyyy-MM-01")),
    [today],
  );
  const lastDateOfNextMonth = lastDayOfMonth(addMonths(today, 1));
  const datesOfNextMonth = useMemo(() => {
    const result: number[] = [];
    for (
      let i = firstDateOfNextMonth.getDate();
      i <= lastDateOfNextMonth.getDate();
      i++
    ) {
      result.push(i);
    }
    return result;
  }, [firstDateOfNextMonth, lastDateOfNextMonth]);

  return [
    firstDateOfCurrentMonth_As_DayOfWeek,
    lastDateOfCurrentMonth_As_DayOfWeek,
    datesOfPrevMonth,
    datesOfCurrentMonth,
    datesOfNextMonth,
  ];
}
