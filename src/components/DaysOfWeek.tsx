import { ReactElement, useMemo } from "react";

enum daysOfWeek {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat,
}

export function DaysOfWeek(): ReactElement {
  const days = useMemo(() => {
    const daysArray: ReactElement[] = [];
    for (let i = 0; i < Object.keys(daysOfWeek).length / 2; i++) {
      daysArray.push(<div key={i}>{daysOfWeek[i]}</div>);
    }
    return daysArray;
  }, []);
  return <div className="date-picker-grid-header date-picker-grid">{days}</div>;
}
