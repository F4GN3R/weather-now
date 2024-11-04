import { useData } from "../contexts/dataContext";
import { usePreferences } from "../contexts/preferencesContext";
import AnimatedIcon from "./AnimatedIcon";
import Skeleton from "./Skeleton";
import { dataFormatter } from "../utils/dataFormatter";

export default function CurrentWeather() {
  const { units, descriptions } = usePreferences();
  const { location, current } = useData();

  return (
    <div className="flex flex-col flex-1 text-center py-8 md:text-left md:px-5">
      {location ? (
        <h1 className="text-4xl font-semibold text-slate-800 dark:text-slate-50 lg:text-5xl">
          {location.name}
        </h1>
      ) : (
        <Skeleton className="w-32 h-12" />
      )}

      {current ? (
        <p className="mt-2 text-slate-500 dark:text-slate-500">
          {`${descriptions.updatedAt} ${dataFormatter(
            "last_updated",
            current
          )}`}
        </p>
      ) : (
        <Skeleton className="mt-2 w-40 h-3" />
      )}

      <div className="flex flex-col items-center md:items-start md:mt-16 md:relative">
        {current ? (
          <AnimatedIcon
            isDay={current.is_day === 1}
            iconNumber={current.condition.code}
            className="w-36 mt-4 md:absolute md:bottom-0 md:right-0 md:w-40 md:h-40 lg:w-64"
          />
        ) : (
          <Skeleton className="w-36 mt-4 md:absolute md:bottom-2 md:right-14 md:w-36 md:h-36" />
        )}

        {current ? (
          <span className="text-5xl font-semibold text-slate-800 dark:text-slate-50 lg:text-7xl">
            {dataFormatter("temp", current, units.temperature)}
          </span>
        ) : (
          <Skeleton className="mt-2 w-44 h-20" />
        )}
      </div>
    </div>
  );
}
