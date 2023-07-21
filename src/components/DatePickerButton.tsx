import { useAtom } from "jotai";
import { ReactElement } from "react";
import { datePickerButtonDateAtom } from "../context/datePickerButton";
import { format } from "date-fns";

type props = {
  setIsDatePickerHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DatePickerButton({
  setIsDatePickerHidden,
}: props): ReactElement {
  const [currentDateForButton] = useAtom(datePickerButtonDateAtom);
  const hideDatePicker = () => setIsDatePickerHidden((prev) => !prev);
  const formattedDate = format(currentDateForButton, "MMMM do, yyyy");
  return (
    <button
      onClick={hideDatePicker}
      type="button"
      className="date-picker-button">
      {formattedDate}
    </button>
  );
}
