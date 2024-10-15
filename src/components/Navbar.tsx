import { CloudSunRain, TextSearch, Map, Settings } from "lucide-react";
import { usePreferences } from "../contexts/preferencesContext";
import { LanguageDescriptions } from "../utils/language";

const NAV_ICONS: { [key: string]: JSX.Element } = {
  weather: <CloudSunRain size={30} />,
  cities: <TextSearch size={30} />,
  map: <Map size={30} />,
  preferences: <Settings size={30} />,
};

export default function Navbar() {
  const { descriptions } = usePreferences();

  return (
    <nav className="w-28 h-[calc(100vh-5rem)] rounded-3xl flex flex-col justify-center items-center gap-9 bg-slate-200 dark:bg-slate-800">
      {Object.keys(descriptions).map((key) => (
        <button
          type="button"
          key={key}
          className="flex flex-col items-center gap-2 focus:outline-none focus:underline underline-offset-2 text-slate-900hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        >
          {NAV_ICONS[key]}
          <span>{descriptions[key as keyof LanguageDescriptions].menu}</span>
        </button>
      ))}
    </nav>
  );
}
