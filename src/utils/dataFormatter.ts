/* eslint-disable @typescript-eslint/no-explicit-any */

import { format, parseISO } from "date-fns";

const TIMES: { [key: string]: string } = {
  "01": "13",
  "02": "14",
  "03": "15",
  "04": "16",
  "05": "17",
  "06": "18",
  "07": "19",
  "08": "20",
  "09": "21",
  "10": "22",
  "11": "23",
};

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
    case "time_12":
      return format(parseISO(value), "h:mm aa");
    case "time_24":
      return format(parseISO(value), "HH:mm");
    case "day":
      return format(parseISO(value), "iii").toLocaleLowerCase();
    case "sunset_24": {
      const [hour, minute] = value.slice(0, 5).split(":");
      return `${TIMES[hour] ?? hour}:${minute}`;
    }
    default:
      return "";
  }
};
