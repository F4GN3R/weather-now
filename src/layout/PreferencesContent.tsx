import Card from "../components/Card";
import RadiosGroup from "../components/RadiosGroup";
import { usePreferences } from "../contexts/preferencesContext";

const UNITS_VALUES = {
  temperature: ["celsius", "fahrenHeit"],
  windSpeed: ["km/h", "m/s", "knots"],
  pressure: ["hpa", "inches", "kpa", "mm"],
  precipitation: ["milimeters", "inches"],
  distance: ["kilometers", "miles"],
};

const GENERAL_VALUES = {
  theme: ["dark", "light"],
  language: ["portuguese", "english", "spanish"],
};

export default function PreferencesContent() {
  const { descriptions, units, general, updatePreferences } = usePreferences();

  return (
    <div className="flex flex-1 flex-col gap-8">
      <Card title={descriptions.preferences.units.title}>
        {descriptions.preferences.units.options.map((option) => (
          <RadiosGroup
            key={option.title}
            title={option.title}
            value={units[option.key]}
            onChange={(value) =>
              updatePreferences("units", { ...units, [option.key]: value })
            }
            labels={option.labels}
            options={UNITS_VALUES[option.key]}
          />
        ))}
      </Card>
      <Card title={descriptions.preferences.general.title}>
        {descriptions.preferences.general.options.map((option) => (
          <RadiosGroup
            key={option.title}
            title={option.title}
            value={general[option.key]}
            onChange={(value) =>
              updatePreferences("general", { ...general, [option.key]: value })
            }
            labels={option.labels}
            options={GENERAL_VALUES[option.key]}
          />
        ))}
      </Card>
    </div>
  );
}
