import { twMerge } from "tw-merge";
import clsx from "clsx";

export function cn(...classes) {
  return twMerge(clsx(...classes));
}
