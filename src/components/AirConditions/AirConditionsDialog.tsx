import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import CurrentWeather from "../../components/CurrentWeather";
import { usePreferences } from "../../contexts/preferencesContext";
import AirConditionInformation from "./AirConditionInformation";
import { useData } from "../../contexts/dataContext";
import {
  Wind,
  Droplet,
  Thermometer,
  Sun,
  Gauge,
  Umbrella,
  Milestone,
  Sunset,
  Eye,
  CloudRain,
} from "lucide-react";
import Card from "../Card";
import { dataFormatter } from "../../utils/dataFormatter";

export const CLASS_ICON =
  "w-5 h-5 lg:w-6 lg:h-6 text-slate-500 dark:text-slate-400";

export default function AirConditionsDialog() {
  const { units, descriptions, general } = usePreferences();
  const { current, sevenDayForecast } = useData();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        type="button"
        className="bg-indigo-500 hover:bg-indigo-600 hover:ring-4 ring-indigo-500/10 transition-all ease-linear duration-200 rounded-full text-slate-50 py-1 px-5 disabled:cursor-not-allowed disabled:bg-slate-500 disabled:opacity-50 disabled:hover:ring-0"
        onClick={() => setIsOpen(true)}
        disabled={!current || !sevenDayForecast}
      >
        {descriptions.airConditions.button}
      </button>

      {isOpen && current && (
        <div className="fixed inset-0 z-20 w-screen overflow-y-auto bg-slate-100 dark:bg-slate-950 p-5">
          <button
            type="button"
            className="absolute left-4 top-5 z-30 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <ChevronLeft size={32} className="text-slate-50" />
          </button>

          <p className="text-lg font-medium dark:text-slate-400 text-center">
            {descriptions.airConditions.title}
          </p>

          <CurrentWeather />

          <div className="flex gap-5 flex-wrap">
            {/* Sensação real */}
            <Card className="w-[calc(50%-10px)] !px-3.5 !py-5">
              <AirConditionInformation
                className="w-full"
                icon={<Thermometer className={CLASS_ICON} />}
                name={descriptions.airConditions.informations[0]}
                value={`${current[`feelslike_${units.temperature}`]}º`}
              />
            </Card>

            {/* Velocidade do vento */}
            <Card className="w-[calc(50%-10px)] !px-3.5 !py-5">
              <AirConditionInformation
                className="w-full"
                icon={<Wind className={CLASS_ICON} />}
                name={descriptions.airConditions.informations[1]}
                value={`${current[`pressure_${units.pressure}`]} ${
                  units.pressure === "in" ? "″" : "mbar"
                }`}
              />
            </Card>

            {/* Chance de chuva */}
            <Card className="w-[calc(50%-10px)] !px-3.5 !py-5">
              <AirConditionInformation
                className="w-full"
                icon={<Umbrella className={CLASS_ICON} />}
                name={descriptions.airConditions.informations[2]}
                value={`${sevenDayForecast[0].day.daily_chance_of_rain} %`}
              />
            </Card>

            {/* Índice UV */}
            <Card className="w-[calc(50%-10px)] !px-3.5 !py-5">
              <AirConditionInformation
                className="w-full"
                icon={<Sun className={CLASS_ICON} />}
                name={descriptions.airConditions.informations[3]}
                value={current.uv}
              />
            </Card>

            {/* Umidade */}
            <Card className="w-[calc(50%-10px)] !px-3.5 !py-5">
              <AirConditionInformation
                className="w-full"
                icon={<Droplet className={CLASS_ICON} />}
                name={descriptions.airConditions.informations[4]}
                value={`${current.humidity} %`}
              />
            </Card>

            {/* Visibilidade */}
            <Card className="w-[calc(50%-10px)] !px-3.5 !py-5">
              <AirConditionInformation
                className="w-full"
                icon={<Eye className={CLASS_ICON} />}
                name={descriptions.airConditions.informations[5]}
                value={
                  units.distance === "kilometers"
                    ? `${sevenDayForecast[0].day.avgvis_km} km`
                    : `${sevenDayForecast[0].day.avgvis_miles} mi`
                }
              />
            </Card>

            {/* Pressão */}
            <Card className="w-[calc(50%-10px)] !px-3.5 !py-5">
              <AirConditionInformation
                className="w-full"
                icon={<Gauge className={CLASS_ICON} />}
                name={descriptions.airConditions.informations[6]}
                value={`${current[`pressure_${units.pressure}`]} ${
                  units.pressure === "in" ? "″" : "mbar"
                }`}
              />
            </Card>

            {/* Pôr do sol */}
            <Card className="w-[calc(50%-10px)] !px-3.5 !py-5">
              <AirConditionInformation
                className="w-full"
                icon={<Sunset className={CLASS_ICON} />}
                name={descriptions.airConditions.informations[7]}
                value={
                  general.twelveClock === "12"
                    ? sevenDayForecast[0].astro.sunset
                    : dataFormatter(
                        "sunset_24",
                        sevenDayForecast[0].astro.sunset
                      )
                }
              />
            </Card>

            {/* Direção do vento */}
            <Card className="w-[calc(50%-10px)] !px-3.5 !py-5">
              <AirConditionInformation
                className="w-full"
                icon={<Milestone className={CLASS_ICON} />}
                name={descriptions.airConditions.informations[8]}
                value={current.wind_dir}
              />
            </Card>

            {/* Precipitação */}
            <Card className="w-[calc(50%-10px)] !px-3.5 !py-5">
              <AirConditionInformation
                className="w-full"
                icon={<CloudRain className={CLASS_ICON} />}
                name={descriptions.airConditions.informations[9]}
                value={`${current[`precip_${units.precipitation}`]} ${
                  units.precipitation === "in" ? "″" : "mm"
                }`}
              />
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
