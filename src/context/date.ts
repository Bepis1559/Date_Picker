import { atom } from "jotai";

const today = new Date();
today.setFullYear(2023);
today.setMonth(1);
export const currentDateAtom = atom(today);
