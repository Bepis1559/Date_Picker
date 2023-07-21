import { atom } from "jotai";

const today = new Date();

export const currentDateAtom = atom(today);
// reducer can be used for the datePickerButton
