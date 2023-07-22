import { ReactElement } from "react";

export function SingleDate_Button(
  props: SingleDate_Button_Props,
): ReactElement {
  const {
    handleClick,
    setSelectedButtonId,
    setDateForDatePickerButton,
    handleClasses,
    cryptoId,
    date,
    dateForDatePickerButton,
  } = props;
  const classes = handleClasses(
    dateForDatePickerButton,
    date.getDate(),
    date.getMonth(),
    date.getFullYear(),
  );
  return (
    <button
      type="button"
      onClick={(e) =>
        handleClick(e, setSelectedButtonId, setDateForDatePickerButton)
      }
      data-cryptoid={cryptoId}
      data-date={date.getDate()}
      data-month={date.getMonth()}
      data-year={date.getFullYear()}
      className={classes}>
      {date.getDate()}
    </button>
  );
}
