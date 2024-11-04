import AirConditions from "../components/AirConditions";
import CurrentWeather from "../components/CurrentWeather";
import DayForecast from "../components/DayForecast";
import SevenDayForecastCard from "../components/SevenDayForecastCard";

export default function WeatherContent() {
  return (
    <>
      <div className="flex flex-1 flex-col lg:flex-row gap-6 pb-16 lg:pb-0">
        <div className="flex flex-col flex-1 gap-6">
          <CurrentWeather />
          <DayForecast />
          <AirConditions />
        </div>

        <SevenDayForecastCard />
      </div>
    </>
  );
}
