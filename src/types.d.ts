type SingleDate_Button_Props = {
  handleClick: (
    e: MouseEvent<HTMLButtonElement, MouseEvent>,
    setSelectedButtonId: React.Dispatch<React.SetStateAction<string>>,
    setDateForDatePickerButton: React.Dispatch<React.SetStateAction<Date>>,
  ) => void;
  setSelectedButtonId: React.Dispatch<React.SetStateAction<string>>;
  setDateForDatePickerButton: React.Dispatch<React.SetStateAction<Date>>;
  handleClasses: (
    dateForDatePickerButton: Date,
    day: number,
    month: number,
    year: number,
  ) => string;
  cryptoId: string;
  date: Date;
  dateForDatePickerButton: Date;
};

type useDateResultType = [
  datesToTakeFromPrevMonth: Date[],
  datesOfCurrentMonth: Date[],
  datesToTakeFromNextMonth: Date[],
];
