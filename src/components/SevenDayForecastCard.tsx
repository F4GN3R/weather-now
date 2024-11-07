import { useData } from "../contexts/dataContext";
import { usePreferences } from "../contexts/preferencesContext";
import Card from "./Card";
import Title from "./Title";
import AnimatedIcon from "./AnimatedIcon";
import { dataFormatter } from "../utils/dataFormatter";
import Skeleton from "./Skeleton";

export default function SevenDayForecastCard() {
  const { units, descriptions } = usePreferences();
  const { sevenDayForecast } = useData();

  return (
    <Card className="w-full lg:w-5/12 lg:p-8">
      <Title title={descriptions.forecast.title} />

      <div className="flex flex-col justify-between lg:flex-1">
        {sevenDayForecast.length ? (
          <>
            {sevenDayForecast.map((forecast, index) => (
              <div
                key={forecast.date}
                className="py-1 flex items-center text-slate-500/70 dark:text-slate-400 border-b-2 last:border-b-0 border-slate-300 dark:border-slate-700 lg:flex-1"
              >
                <span className="py-3 text-base w-[4rem] md:w-[5rem] lg:w-[3.5rem] lg:text-lg">
                  {index === 0
                    ? descriptions.forecast.today
                    : descriptions.forecast.week[
                        dataFormatter("day", forecast.date)
                      ]}
                </span>
                <div className="flex flex-1 items-center gap-2">
                  <AnimatedIcon
                    isDay
                    iconNumber={1000}
                    className="w-14 md:w-20"
                  />
                  <b className="flex-1 text-sm md:text-base lg:text-lg font-semibold text-slate-700 dark:text-slate-300 pl-4">
                    {forecast.day.condition.text}
                  </b>
                  <div className="flex gap-1 text-base ml-auto lg:text-lg lg:pl-4">
                    <b className="font-semibold text-slate-700 dark:text-slate-300 ml-auto">
                      {dataFormatter(
                        "maxtemp",
                        forecast.day,
                        units.temperature
                      )}
                    </b>
                    <span>/</span>
                    <span>
                      {dataFormatter(
                        "mintemp",
                        forecast.day,
                        units.temperature
                      )}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {["1", "2", "3", "4", "5", "6", "7"].map((item) => (
              <div
                key={item}
                className="py-2 flex gap-8 items-center border-b-2 last:border-b-0 border-slate-300 dark:border-slate-700 lg:flex-1 lg:py-1 lg:gap-4"
              >
                <Skeleton className="w-10 h-4" />
                <div className="flex flex-1 items-center gap-8 lg:gap-4">
                  <Skeleton className="w-12 h-12 md:w-16 md:h-16" />
                  <Skeleton className="w-32 h-4 md:w-64 lg:w-40" />
                  <div className="flex items-center gap-1 text-base ml-auto text-slate-700 dark:text-slate-300 lg:text-lg ">
                    <Skeleton className="w-8 h-4" />
                    <span>/</span>
                    <Skeleton className="w-8 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </Card>
  );
}
