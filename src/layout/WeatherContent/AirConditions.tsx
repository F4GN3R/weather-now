import Card from "../../components/Card";
import Title from "../../components/Title";
import AirConditionInformation from "../../components/AirConditionInformation";
import { Droplet, Sun, Thermometer, Wind } from "lucide-react";
import AirConditionsDialog from "./AirConditionsDialog";
import { useData } from "../../contexts/dataContext";

export default function AirConditions() {
  const { current } = useData();

  return (
    <Card className="flex-1 lg:justify-center">
      <div className="flex justify-between items-center">
        <Title title="Air conditions" className="lg:ml-3" />
        <AirConditionsDialog />
      </div>

      <div className="flex gap-y-5 flex-wrap lg:px-5">
        <AirConditionInformation
          icon={
            <Thermometer className="w-5 h-5 lg:w-8 lg:h-8 text-slate-500 dark:text-slate-400" />
          }
          name="Real Feel"
          value={`${current.feelslike_c}º`}
        />
        <AirConditionInformation
          icon={
            <Wind className="w-5 h-5 lg:w-8 lg:h-8 text-slate-500 dark:text-slate-400" />
          }
          name="Wind"
          value={`${current.wind_kph} km/h`}
        />
        {/* <AirConditionInformation
          icon={
            <Droplet className="w-5 h-5 lg:w-8 lg:h-8 text-slate-500 dark:text-slate-400" />
          }
          name="Chance of rain"
          value="0%"
        /> */}
        <AirConditionInformation
          icon={
            <Sun className="w-5 h-5 lg:w-8 lg:h-8 text-slate-500 dark:text-slate-400" />
          }
          name="UV Index"
          value={current.uv}
        />
      </div>
    </Card>
  );
}
