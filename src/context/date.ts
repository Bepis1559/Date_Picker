import { atom } from "jotai";

const today = new Date();
const datePickerButtonDay = today.getDate();
export const currentDateAtom = atom(today);
// reducer can be used for the datePickerButton
export const datePickerButtonDayAtom = atom(datePickerButtonDay);
