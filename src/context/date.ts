import { atom } from "jotai";

const today = new Date();
export const currentDateAtom = atom(today);
