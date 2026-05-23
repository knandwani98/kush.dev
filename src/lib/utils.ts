import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { DateProps, ExperienceProps } from "./types";

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

export const sumExperiencePeriods = (
  periods: { years: number; months: number }[]
) => {
  let years = 0;
  let months = 0;

  for (const period of periods) {
    years += period.years;
    months += period.months;
  }

  if (months >= 12) {
    years += Math.floor(months / 12);
    months %= 12;
  }

  return { years, months };
};

export const formatExpTime = ({
  years,
  months,
}: {
  years: number;
  months: number;
}) => {
  const parts: string[] = [];

  if (years > 0) {
    parts.push(`${years} ${years > 1 ? "yrs" : "yr"}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months > 1 ? "mos" : "mo"}`);
  }

  return parts.join(" ") || "0 mos";
};

export const getTotalWorkExperience = (experiences: ExperienceProps[]) => {
  const workPeriods = experiences
    .filter((experience) => experience.type === "work")
    .map((experience) =>
      getTotalExpTime(
        experience.date.from,
        experience.date.isPresent ? "current" : experience.date.to!
      )
    );

  return sumExperiencePeriods(workPeriods);
};

export const getMonthName = (monthNumber?: number) => {
  if (!monthNumber) return null;

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return monthNames[monthNumber - 1];
};
