import { useData } from "../contexts/dataContext";
import { usePreferences } from "../contexts/preferencesContext";

export default function CurrentWeather() {
  const { units, descriptions } = usePreferences();
  const { location, current, sevenDayForecast } = useData();

  if (location && current) {
    return (
      <div className="flex flex-col flex-1 text-center py-8 md:text-left md:px-5">
        <h1 className="text-4xl font-semibold text-slate-800 dark:text-slate-50 lg:text-5xl">
          {location.name}
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-500">
          {`${descriptions.chanceOfRain} ${sevenDayForecast[0].day.daily_chance_of_rain}%`}
        </p>

        <div className="flex flex-col items-center md:items-start md:mt-16 md:relative">
          <img
            src={current.condition.icon}
            alt={current.condition.text}
            className="w-36 h-36 mt-4 md:absolute md:bottom-0 md:right-0 md:w-40 md:h-40 lg:w-64 lg:h-64"
          />

          <span className="text-5xl font-semibold text-slate-800 dark:text-slate-50 lg:text-7xl">
            {units.temperature === "celsius" ? current.temp_c : current.temp_f}º
          </span>
        </div>
      </div>
    );
  }

  return <></>;
}
