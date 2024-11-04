/* eslint-disable @typescript-eslint/no-explicit-any */

import { format, parseISO } from "date-fns";

export const dataFormatter = (
  key: string,
  value: any,
  unit?: string
): string => {
  if (!value || !key) return "";

  switch (key) {
    case "temp":
    case "feelslike":
      return `${value[`${key}_${unit}`]}º`;
    case "maxtemp":
    case "mintemp":
      return `${value[`${key}_${unit}`].toFixed(0)}º`;
    case "wind":
      return `${value[`${key}_${unit}`]} ${unit === "kph" ? "km/h" : "mi/h"}`;
    case "daily_chance_of_rain":
      return `${value[key]} %`;
    case "last_updated":
      return format(parseISO(value[key]), "HH'h'mm");
    default:
      return "";
  }
};
