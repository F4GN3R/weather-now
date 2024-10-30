import { format, parseISO } from "date-fns";
import { useData } from "../contexts/dataContext";
import { usePreferences } from "../contexts/preferencesContext";
import Card from "./Card";
import Title from "./Title";

export default function SevenDayForecastCard() {
  const { units, descriptions } = usePreferences();
  const { sevenDayForecast } = useData();

  const handleWeekDay = (date: string) => {
    return descriptions.forecast.week[
      format(parseISO(date), "iii").toLocaleLowerCase()
    ];
  };

  return (
    <Card className="w-full lg:w-5/12 lg:p-8">
      <Title title={descriptions.forecast.title} />

      <div className="flex flex-col justify-between lg:flex-1">
        {sevenDayForecast.map((forecast, index) => (
          <div className="py-1 flex items-center text-slate-500/70 dark:text-slate-400 border-b-2 last:border-b-0 border-slate-300 dark:border-slate-700 lg:flex-1">
            <span className="py-3 text-base w-[4rem] md:w-[5rem] lg:w-[3.5rem] lg:text-lg">
              {index === 0
                ? descriptions.forecast.today
                : handleWeekDay(forecast.date)}
            </span>
            <div className="flex flex-1 items-center gap-2">
              <img
                src={forecast.day.condition.icon}
                alt={forecast.day.condition.text}
                className="w-10 lg:w-20"
              />

              <b className="flex-1 text-sm md:text-base lg:text-lg font-semibold text-slate-700 dark:text-slate-300 pl-4">
                {forecast.day.condition.text}
              </b>
              <div className="flex gap-1 text-base ml-auto lg:text-lg lg:pl-4">
                <b className="font-semibold text-slate-700 dark:text-slate-300 ml-auto">
                  {units.temperature === "celsius"
                    ? forecast.day.maxtemp_c.toFixed(0)
                    : forecast.day.maxtemp_f.toFixed(0)}
                </b>
                <span>/</span>
                <span>
                  {units.temperature === "celsius"
                    ? forecast.day.mintemp_c.toFixed(0)
                    : forecast.day.mintemp_f.toFixed(0)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
