import { CloudSunRain, TextSearch, Map, Settings } from "lucide-react";
import { ContentType, usePreferences } from "../contexts/preferencesContext";
import { LanguageDescriptions } from "../utils/language";

type NavItemProps = {
  icon: JSX.Element;
  content: string;
};

const NAV_ITEM: { [key: string]: NavItemProps } = {
  weather: { icon: <CloudSunRain size={30} />, content: "weather" },
  cities: { icon: <TextSearch size={30} />, content: "cities" },
  map: { icon: <Map size={30} />, content: "map" },
  preferences: { icon: <Settings size={30} />, content: "preferences" },
};

export default function Navbar() {
  const { descriptions, updateContent } = usePreferences();

  return (
    <nav className="fixed bottom-0 left-0 w-full h-auto flex flex-row justify-evenly py-4 bg-slate-200 dark:bg-slate-800 lg:relative lg:w-28 lg:h-[calc(100vh-5rem)] lg:rounded-3xl  lg:flex-col lg:justify-center lg:items-center lg:gap-9 lg:py-2">
      {Object.keys(descriptions).map((key) => (
        <button
          type="button"
          key={key}
          onClick={() => updateContent(NAV_ITEM[key].content as ContentType)}
          disabled={["cities", "map"].includes(NAV_ITEM[key].content)}
          className="flex lg:flex-col items-center gap-2 focus:outline-none text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 disabled:cursor-not-allowed disabled:text-slate-500/30 disabled:hover:text-slate-500/30 dark:disabled:text-slate-400/30 dark:disabled:hover:text-slate-400/30"
        >
          {NAV_ITEM[key].icon}
          <span className="hidden md:block">
            {descriptions[key as keyof LanguageDescriptions].menu}
          </span>
        </button>
      ))}
    </nav>
  );
}
