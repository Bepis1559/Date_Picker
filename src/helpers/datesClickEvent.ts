import { MouseEvent } from "react";

export function handleClick(
  e: MouseEvent<HTMLButtonElement>,
  setSelectedButtonId: React.Dispatch<React.SetStateAction<string>>,
  setCurrentDayForButton: React.Dispatch<React.SetStateAction<number>>,
) {
  const cryptoId = e.currentTarget.getAttribute("data-cryptoid");
  setSelectedButtonId(cryptoId ?? "");
  const dayOfSelectedDate = Number(e.currentTarget.innerText);
  setCurrentDayForButton(dayOfSelectedDate);
}
