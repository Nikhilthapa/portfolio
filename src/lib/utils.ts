import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Career start date used to compute "years of experience" dynamically. */
export const CAREER_START_DATE = new Date(2023, 5, 1); // June 2023

/**
 * Returns a display string like "3+ years" or "2.5+ years", rounded down to
 * the nearest half-year so the headline never overstates experience.
 */
export function getYearsOfExperience(startDate: Date = CAREER_START_DATE): string {
  const msPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const rawYears = (Date.now() - startDate.getTime()) / msPerYear;
  const roundedToHalf = Math.floor(rawYears * 2) / 2;
  const value = Number.isInteger(roundedToHalf)
    ? roundedToHalf.toString()
    : roundedToHalf.toFixed(1);
  return `${value}+ years`;
}
