import { format } from "date-fns";
import { useAtom } from "jotai";
import { ReactElement } from "react";
import { currentDateAtom } from "../context/date";

export function DatePickerButton(): ReactElement {
  const [today] = useAtom(currentDateAtom);

  const formattedDate = format(today, "MMMM do,yyyy");
  return (
    <button type="button" className="date-picker-button">
      {formattedDate}
    </button>
  );
}
