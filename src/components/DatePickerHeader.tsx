import { ReactElement } from "react";

export function DatePickerHeader(): ReactElement {
  return (
    <div className="date-picker-header">
      <button type="button" className="prev-month-button month-button">
        &larr;
      </button>
      <div className="current-month">June - 2023</div>
      <button type="button" className="next-month-button month-button">
        &rarr;
      </button>
    </div>
  );
}
