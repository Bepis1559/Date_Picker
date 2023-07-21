import { atom } from "jotai";

const datePickerButtonToday = new Date();

export const datePickerButtonDateAtom = atom(datePickerButtonToday);
