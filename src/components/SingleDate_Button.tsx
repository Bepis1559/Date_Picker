import { ReactElement, MouseEvent } from "react";

type props = {
  date: number;
  classes?: string;
  id: string;
  selectedButtonId: string;
  month: number;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function SingleDate_Button({
  date,
  classes = "date date-picker-other-month-date",
  selectedButtonId,
  id,
  month,
  handleClick,
}: props): ReactElement {
  return (
    <button
      data-month={month}
      onClick={handleClick}
      id={id}
      type="button"
      className={`${
        selectedButtonId !== id ? classes : classes.concat(" selected")
      }`}>
      {date}
    </button>
  );
}
