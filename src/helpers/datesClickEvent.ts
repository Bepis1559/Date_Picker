import { MouseEvent } from "react";

export function handleClick(
  e: MouseEvent<HTMLButtonElement>,
  setSelectedButtonId: React.Dispatch<React.SetStateAction<string>>,
  setCurrentDayForButton: React.Dispatch<React.SetStateAction<Date>>,
) {
  const cryptoId = e.currentTarget.getAttribute("data-cryptoid");
  setSelectedButtonId(cryptoId ?? "");
  const dayOfSelectedDate = Number(e.currentTarget.getAttribute("data-date"));
  const monthOfSelectedDate = Number(
    e.currentTarget.getAttribute("data-month"),
  );
  const yearOfSelectedDate = Number(e.currentTarget.getAttribute("data-year"));
  const buttonDate = new Date(
    yearOfSelectedDate,
    monthOfSelectedDate,
    dayOfSelectedDate,
  );
  setCurrentDayForButton(buttonDate);
}
