// import AnimatedIcon from "../../components/AnimatedIcon";
// import Card from "../../components/Card";
// import Title from "../../components/Title";
// import AirConditions from "./AirConditions";
import CurrentWeather from "../../components/CurrentWeather";
// import SevenDayForecastCard from "../../components/SevenDayForecastCard";

export default function WeatherContent() {
  return (
    <>
      <div className="flex flex-1 flex-col lg:flex-row gap-6 pb-16 lg:pb-0">
        <div className="flex flex-col flex-1 gap-6">
          <CurrentWeather />

          {/* <Card className="flex-1 lg:justify-center">
            <Title title="Today's forecast" className="lg:ml-3" />

            <div className="flex md:mt-4">
              <div className="flex flex-1 flex-col items-center text-lg gap-2 border-r-2 border-slate-300 dark:border-slate-700 last:border-r-0 px-2">
                <p className="font-semibold text-slate-500 dark:text-slate-400">
                  9:00 AM
                </p>
                <AnimatedIcon className="w-20 h-20" />
                <b className="font-semibold text-slate-800 dark:text-slate-300 lg:text-2xl">
                  25º
                </b>
              </div>
              <div className="flex flex-1 flex-col items-center text-lg gap-2 border-r-2 border-slate-300 dark:border-slate-700 last:border-r-0 px-2">
                <p className="font-semibold text-slate-500 dark:text-slate-400">
                  9:00 AM
                </p>
                <AnimatedIcon className="w-20 h-20" />
                <b className="font-semibold text-slate-800 dark:text-slate-300 lg:text-2xl">
                  25º
                </b>
              </div>
              <div className="flex flex-1 flex-col items-center text-lg gap-2 border-r-2 border-slate-300 dark:border-slate-700 last:border-r-0 px-2">
                <p className="font-semibold text-slate-500 dark:text-slate-400">
                  9:00 AM
                </p>
                <AnimatedIcon className="w-20 h-20" />
                <b className="font-semibold text-slate-800 dark:text-slate-300 lg:text-2xl">
                  25º
                </b>
              </div>
            </div>
          </Card> */}

          {/* <AirConditions /> */}
        </div>

        {/* <SevenDayForecastCard /> */}
      </div>
    </>
  );
}
