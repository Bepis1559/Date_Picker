const dateClasses = {
  justDate: "date",
  otherMonthClasses: "date date-picker-other-month-date",
  selectedOtherMonthClasses: "date date-picker-other-month-date selected",
  todaysDate: "date today",
  todaysDateSelected: "date today selected",
  selectedDate: "date selected",
};

export function handleClasses(
  selectedButtonId: string,
  index: number,
  datesIds: string[],
) {
  const { otherMonthClasses, selectedOtherMonthClasses } = dateClasses;
  return selectedButtonId !== datesIds[index]
    ? otherMonthClasses
    : selectedOtherMonthClasses;
}
const today = new Date();

export function handleClassesForCurrentMonth(
  day: number,
  month: number,
  year: number,
  selectedButtonId: string,
  index: number,
  datesIds: string[],
) {
  const { justDate, todaysDate, todaysDateSelected, selectedDate } =
    dateClasses;
  const isSelected = selectedButtonId === datesIds[index];
  const isItToday =
    today.getDate() == day &&
    today.getMonth() == month &&
    today.getFullYear() == year;
  if (isItToday) {
    return isSelected ? todaysDateSelected : todaysDate;
  } else {
    return isSelected ? selectedDate : justDate;
  }
}
