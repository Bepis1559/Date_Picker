import { useMemo } from "react";

export function useIds(totalDatesToDisplay: number) {
  const datesIds = useMemo(
    () =>
      Array(totalDatesToDisplay)
        .fill(null)
        .map(() => crypto.randomUUID()),
    [totalDatesToDisplay],
  );

  return datesIds;
}
