import { ReactElement } from "react";

const daysOfWeek = [
  { id: 0, day: "Sun" },
  { id: 1, day: "Mon" },
  { id: 2, day: "Tue" },
  { id: 3, day: "Wed" },
  { id: 4, day: "Thu" },
  { id: 5, day: "Fri" },
  { id: 6, day: "Sat" },
];

export function DaysOfWeek(): ReactElement {
  return (
    <div className="date-picker-grid-header date-picker-grid">
      {daysOfWeek.map(({ id, day }) => (
        <div key={id}>{day}</div>
      ))}
    </div>
  );
}
