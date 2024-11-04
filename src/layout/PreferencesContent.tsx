import { Github } from "lucide-react";
import Card from "../components/Card";
import RadiosGroup from "../components/RadiosGroup";
import { usePreferences } from "../contexts/preferencesContext";
import logo from "../assets/weather-now.png";

const UNITS_VALUES = {
  temperature: ["c", "f"],
  windSpeed: ["kph", "mph"],
  pressure: ["mb", "in"],
  precipitation: ["milimeters", "inches"],
  distance: ["kilometers", "miles"],
};

const GENERAL_VALUES = {
  theme: ["dark", "light"],
  language: ["pt", "en", "sp"],
};

export default function PreferencesContent() {
  const { descriptions, units, general, updatePreferences } = usePreferences();

  return (
    <div className="flex flex-1 flex-col lg:flex-row gap-7 pb-16 lg:pb-0">
      <div className="flex flex-1 flex-col gap-8">
        <h1 className="block text-3xl font-semibold dark:text-slate-50">
          {descriptions.preferences.menu}
        </h1>
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
                updatePreferences("general", {
                  ...general,
                  [option.key]: value,
                })
              }
              labels={option.labels}
              options={GENERAL_VALUES[option.key]}
            />
          ))}
        </Card>
      </div>
      <div className="flex w-full lg:w-4/12 flex-col gap-8">
        <Card className="mt-2 lg:mt-12">
          <div className="flex flex-col items-center gap-4">
            <img
              src={logo}
              alt="Weather Now Logo"
              width={100}
              className="mb-2"
            />
            <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-100">
              Weather Now
            </h1>
            <p className="text-center text-slate-500 dark:text-slate-500">
              {descriptions.preferences.project.description}
            </p>
            <a
              href="https://github.com/F4GN3R/weather-now"
              target="_blank"
              className="w-full rounded-2xl flex justify-center items-center gap-2 p-3 bg-slate-500 dark:bg-slate-700 text-slate-50  font-semibold"
            >
              <Github />
              <span>Github</span>
            </a>
            <small className="text-slate-400 dark:text-slate-600 text-center">
              {descriptions.preferences.project.created}
            </small>
          </div>
        </Card>
      </div>
    </div>
  );
}
