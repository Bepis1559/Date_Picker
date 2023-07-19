import { format } from "date-fns";
import { useAtom } from "jotai";
import { ReactElement } from "react";
import { currentDateAtom, currentDayAtom } from "../context/date";

type props = {
  setIsDatePickerHidden: React.Dispatch<React.SetStateAction<boolean>>;
};

export function DatePickerButton({
  setIsDatePickerHidden,
}: props): ReactElement {
  // const [today] = useAtom(currentDateAtom);
  // const formattedDate = format(today, "MMMM do,yyyy");
  const [currentDay] = useAtom(currentDayAtom);
  const hideDatePicker = () => setIsDatePickerHidden((prev) => !prev);
  return (
    <button
      onClick={hideDatePicker}
      type="button"
      className="date-picker-button">
      {`July ${currentDay}th 2023`}
    </button>
  );
}
