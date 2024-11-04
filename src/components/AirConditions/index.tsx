import Card from "../../components/Card";
import Title from "../../components/Title";
import AirConditionInformation from "./AirConditionInformation";
import { Wind, Droplet, Thermometer, Sun } from "lucide-react";
import AirConditionsDialog, { CLASS_ICON } from "./AirConditionsDialog";
import { useData } from "../../contexts/dataContext";
import { usePreferences } from "../../contexts/preferencesContext";
import { dataFormatter } from "../../utils/dataFormatter";

export default function AirConditions() {
  const { units, descriptions } = usePreferences();
  const { current, sevenDayForecast } = useData();

  return (
    <Card className="flex-1">
      <div className="flex justify-between items-center">
        <Title title={descriptions.airConditions.title} className="lg:ml-3" />
        <AirConditionsDialog />
      </div>

      <div className="flex gap-y-5 flex-wrap lg:px-5">
        <AirConditionInformation
          icon={<Thermometer className={CLASS_ICON} />}
          name={descriptions.airConditions.informations[0]}
          value={
            current
              ? dataFormatter("feelslike", current, units.temperature)
              : null
          }
        />

        <AirConditionInformation
          icon={<Wind className={CLASS_ICON} />}
          name={descriptions.airConditions.informations[1]}
          value={
            current ? dataFormatter("wind", current, units.windSpeed) : null
          }
        />

        <AirConditionInformation
          icon={<Droplet className={CLASS_ICON} />}
          name={descriptions.airConditions.informations[2]}
          value={
            sevenDayForecast[0]
              ? dataFormatter("daily_chance_of_rain", sevenDayForecast[0].day)
              : null
          }
        />

        <AirConditionInformation
          icon={<Sun className={CLASS_ICON} />}
          name={descriptions.airConditions.informations[3]}
          value={current ? current.uv : null}
        />
      </div>
    </Card>
  );
}
