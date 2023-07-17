import { atom } from "jotai";

const currentDate = new Date();
export const currentDateAtom = atom(currentDate);
