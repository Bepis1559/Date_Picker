const today = new Date();
const dateClasses = {
  justDate: "date",
  otherMonthClasses: "date date-picker-other-month-date",
  selectedOtherMonthClasses: "date date-picker-other-month-date selected",
  todaysDate: "date today",
  todaysDateSelected: "date today selected",
  selectedDate: "date selected",
};

const isSelected = (
  dateForDatePickerButton: Date,
  day: number,
  month: number,
  year: number,
) =>
  dateForDatePickerButton.getDate() === day &&
  dateForDatePickerButton.getMonth() === month &&
  dateForDatePickerButton.getFullYear() === year;

export function handleClasses(
  dateForDatePickerButton: Date,
  day: number,
  month: number,
  year: number,
) {
  const isDateSelected = isSelected(dateForDatePickerButton, day, month, year);
  const { otherMonthClasses, selectedOtherMonthClasses } = dateClasses;
  return isDateSelected ? selectedOtherMonthClasses : otherMonthClasses;
}

export function handleClassesForCurrentMonth(
  dateForDatePickerButton: Date,
  day: number,
  month: number,
  year: number,
) {
  const { justDate, todaysDate, todaysDateSelected, selectedDate } =
    dateClasses;
  const isDateSelected = isSelected(dateForDatePickerButton, day, month, year);
  dateForDatePickerButton.getDate() === day &&
    dateForDatePickerButton.getMonth() === month &&
    dateForDatePickerButton.getFullYear() === year;
  const isItToday =
    today.getDate() == day &&
    today.getMonth() == month &&
    today.getFullYear() == year;
  if (isItToday) {
    return isDateSelected ? todaysDateSelected : todaysDate;
  } else {
    return isDateSelected ? selectedDate : justDate;
  }
}
