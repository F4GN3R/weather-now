import { CloudSunRain, TextSearch, Map, Settings } from "lucide-react";
import { ContentType, usePreferences } from "../contexts/preferencesContext";
import logo from "../assets/weather-now.png";

type NavItemProps = {
  icon: JSX.Element;
  content: ContentType;
};

const NAV_ITEM: NavItemProps[] = [
  { icon: <CloudSunRain size={30} />, content: "weather" },
  { icon: <TextSearch size={30} />, content: "cities" },
  { icon: <Map size={30} />, content: "map" },
  { icon: <Settings size={30} />, content: "preferences" },
];

export default function Navbar() {
  const { descriptions, updateContent } = usePreferences();

  return (
    <nav className="z-10 fixed bottom-0 left-0 w-full h-auto flex flex-row justify-evenly py-4 bg-slate-200/50 dark:bg-slate-800 lg:relative lg:w-36 lg:h-[calc(100vh-5rem)] lg:rounded-3xl  lg:flex-col lg:justify-start lg:items-center lg:gap-9 lg:py-8">
      <img
        src={logo}
        alt="Weather Now Logo"
        width={70}
        className="hidden lg:block lg:mb-16"
      />
      {descriptions.navbar.map((item, index) => (
        <button
          type="button"
          key={item}
          onClick={() => updateContent(NAV_ITEM[index].content)}
          disabled={[1, 2].includes(index)}
          className="flex lg:flex-col items-center gap-2 focus:outline-none text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 disabled:cursor-not-allowed disabled:text-slate-500/30 disabled:hover:text-slate-500/30 dark:disabled:text-slate-400/30 dark:disabled:hover:text-slate-400/30"
        >
          {NAV_ITEM[index].icon}
          <span className="hidden md:block">{item}</span>
        </button>
      ))}
    </nav>
  );
}
