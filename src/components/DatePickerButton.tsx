import { format } from "date-fns";
import { useAtom } from "jotai";
import { ReactElement } from "react";
import { currentDateAtom } from "../context/date";

type props = {
  setIsDatePickerHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DatePickerButton({
  setIsDatePickerHidden,
}: props): ReactElement {
  const [today] = useAtom(currentDateAtom);
  const formattedDate = format(today, "MMMM do,yyyy");
  const hideDatePicker = () => setIsDatePickerHidden((prev) => !prev);
  return (
    <button
      onClick={hideDatePicker}
      type="button"
      className="date-picker-button">
      {formattedDate}
    </button>
  );
}
