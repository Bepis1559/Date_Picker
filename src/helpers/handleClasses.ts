const defaultOtherMonthClasses = "date date-picker-other-month-date";
export function handleClasses(
  selectedButtonId: string,
  index: number,
  datesIds: string[],
) {
  return selectedButtonId !== datesIds[index]
    ? defaultOtherMonthClasses
    : defaultOtherMonthClasses.concat(" selected");
}
const today = new Date();
export function handleClassesForCurrentMonth(
  selectedButtonId: string,
  index: number,
  datesIds: string[],
) {
  if (selectedButtonId !== datesIds[index]) return "date";
  if (selectedButtonId == datesIds[index]) return "date selected";
}
