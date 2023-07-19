import { ReactElement, MouseEvent } from "react";

type props = {
  date: number;
  classes?: string;
  id: string;
  selectedButtonId: string;
  handleClick: (e: MouseEvent<HTMLButtonElement>) => void;
};

export function SingleDate_Button({
  date,
  classes = "date date-picker-other-month-date",
  selectedButtonId,
  id,
  handleClick,
}: props): ReactElement {
  return (
    <button
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
