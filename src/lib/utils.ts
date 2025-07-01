import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateProps } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const myAge = () => {
  const today = new Date();
  const birth = new Date("1998-09-13");
  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }
  return age;
};

const getCurrentDate = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  return { currentMonth, currentYear };
};

export const getTotalExpTime = (
  startDate: DateProps,
  endDate: DateProps | "current"
) => {
  const { currentMonth, currentYear } = getCurrentDate();

  const startYear = startDate.year;
  const startMonth = startDate.month;
  const endYear = endDate === "current" ? currentYear : endDate.year;
  const endMonth = endDate === "current" ? currentMonth : endDate.month;

  let years = endYear - startYear;
  let months = endMonth - startMonth;

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
};

export const getMonthName = (monthNumber?: number) => {
  if (!monthNumber) return null;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames[monthNumber - 1];
};
