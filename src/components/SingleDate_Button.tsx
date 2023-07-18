import { ReactElement, MouseEvent } from "react";

type props = {
  date: number;
  classes?: string;
};

export function SingleDate_Button({
  date,
  classes = "date date-picker-other-month-date",
}: props): ReactElement {
  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.currentTarget.classList.add("date", "selected");
  }
  return (
    <button
      onClick={handleClick}
      type="button"
      // key={date}
      className={classes}>
      {date}
    </button>
  );
}
