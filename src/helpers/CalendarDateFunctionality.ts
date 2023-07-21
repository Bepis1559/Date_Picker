function determineCalendarGridRows(
  datesToTakeFromPrevMonth: number,
  datesOfCurrentMonth: number,
) {
  const inputSum = datesToTakeFromPrevMonth + datesOfCurrentMonth;
  if (inputSum <= 28) return 4;
  if (inputSum >= 28 && inputSum <= 35) return 5;
  if (inputSum > 35) return 6;
  throw new Error(
    "Something went wrong with determineCalendarGridRows() function ",
  );
}

export function howManyDatesToDisplayFromNextMonth(
  datesToTakeFromPrevMonth: number,
  datesOfCurrentMonth: number,
) {
  const gridRows = determineCalendarGridRows(
    datesToTakeFromPrevMonth,
    datesOfCurrentMonth,
  );
  return gridRows * 7 - (datesToTakeFromPrevMonth + datesOfCurrentMonth);
}
