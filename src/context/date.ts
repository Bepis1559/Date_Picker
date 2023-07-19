import { atom } from "jotai";

const today = new Date();

const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

export const currentDateAtom = atom(today);
export const currentDayAtom = atom(currentDay);
export const currentMonthAtom = atom(currentMonth);
export const currentYearAtom = atom(currentYear);
