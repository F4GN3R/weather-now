import { format, isPast, parseISO } from "date-fns";
import { HourWeatherProps, useData } from "../contexts/dataContext";
import {
  UnitPreferences,
  usePreferences,
} from "../contexts/preferencesContext";
import Card from "./Card";
import Title from "./Title";
import { useEffect, useState } from "react";
import AnimatedIcon from "./AnimatedIcon";
import { dataFormatter } from "../utils/dataFormatter";
import Skeleton from "./Skeleton";

type HourForecastProps = {
  units: UnitPreferences;
  hour: HourWeatherProps | null;
};
const HourForecast = (props: HourForecastProps) => {
  const { units, hour } = props;

  return (
    <div className="flex flex-1 flex-col items-center text-lg gap-4 border-r-2 border-slate-300 dark:border-slate-700 last:border-r-0 px-2">
      {hour ? (
        <>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            {format(parseISO(hour.time), "h:mm aa")}
          </p>
          <AnimatedIcon
            isDay={hour.is_day === 1}
            iconNumber={1000}
            className="w-20 lg:w-16"
          />
          <b className="font-semibold text-slate-800 dark:text-slate-300 lg:text-xl">
            {dataFormatter("temp", hour, units.temperature)}
          </b>
        </>
      ) : (
        <>
          <Skeleton className="w-16 h-6" />
          <Skeleton className="w-20 h-20 lg:w-16 lg:h-16" />
          <Skeleton className="w-12 h-6" />
        </>
      )}
    </div>
  );
};

export default function DayForecast() {
  const { units, descriptions } = usePreferences();
  const { sevenDayForecast } = useData();
  const [nextHours, setNextHours] = useState<{
    sm: HourWeatherProps[] | null[];
    md: HourWeatherProps[] | null[];
  }>({
    sm: [null, null, null],
    md: [null, null, null, null, null, null, null],
  });

  useEffect(() => {
    const changeNextHours = () => {
      const currentDay = sevenDayForecast[0].hour;
      const hours = currentDay.filter((_, index) => index % 3 === 0);
      const nextHours = hours.filter((hour) => !isPast(parseISO(hour.time)));
      setNextHours({
        sm: nextHours.length < 3 ? hours.slice(-3) : nextHours.slice(0, 3),
        md: nextHours.length < 6 ? hours.slice(-6) : nextHours.slice(0, 6),
      });
    };

    if (sevenDayForecast.length > 0) changeNextHours();
  }, [sevenDayForecast]);

  return (
    <Card className="flex-1 lg:p-8">
      <Title title={descriptions.todayForecast} />

      <div className="flex md:hidden md:mt-4">
        {nextHours.sm.map((hour, index) => (
          <HourForecast key={`${index}`} units={units} hour={hour} />
        ))}
      </div>

      <div className="hidden md:flex md:mt-4">
        {nextHours.md.map((hour, index) => (
          <HourForecast key={`${index}`} units={units} hour={hour} />
        ))}
      </div>
    </Card>
  );
}
