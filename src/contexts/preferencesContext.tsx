import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import descriptions, { LanguageDescriptions } from "../utils/language";

export type UnitPreferences = {
  temperature: "celsius" | "fahrenHeit";
  windSpeed: "km/h" | "m/s" | "knots";
  pressure: "hpa" | "inches" | "kpa" | "mm";
  precipitation: "milimeters" | "inches";
  distance: "kilometers" | "miles";
};

type GeneralPreferences = {
  theme: "dark" | "light";
  language: "pt" | "en" | "sp";
};

export type ContentType = "weather" | "cities" | "map" | "preferences";

type PreferencesContextProps = {
  general: GeneralPreferences;
  units: UnitPreferences;
  updatePreferences: (
    type: "general" | "units",
    preferences: GeneralPreferences | UnitPreferences
  ) => void;
  content: ContentType;
  updateContent: (content: ContentType) => void;
  descriptions: LanguageDescriptions;
};

const PreferencesContext = createContext<PreferencesContextProps>(
  {} as PreferencesContextProps
);

type PreferencesProviderProps = {
  children: ReactNode;
};

const DEFAULT_GENERAL: GeneralPreferences = {
  theme: "dark",
  language: "pt",
};

const DEFAULT_UNITS: UnitPreferences = {
  temperature: "celsius",
  windSpeed: "km/h",
  pressure: "mm",
  precipitation: "milimeters",
  distance: "kilometers",
};

export default function PreferencesProvider({
  children,
}: PreferencesProviderProps) {
  const [general, setGeneral] = useState<GeneralPreferences>(DEFAULT_GENERAL);
  const [units, setUnits] = useState<UnitPreferences>(DEFAULT_UNITS);
  const [content, setContent] = useState<ContentType>("weather");

  const updateContent = (content: ContentType) => {
    localStorage.setItem("content", content);
    setContent(content);
  };

  const updatePreferences = (
    type: "general" | "units",
    preferences: GeneralPreferences | UnitPreferences
  ) => {
    localStorage.setItem(type, JSON.stringify(preferences));

    if (type === "general") {
      setGeneral(preferences as GeneralPreferences);
    } else {
      setUnits(preferences as UnitPreferences);
    }
  };

  // const getLocation = () => {
  //   if (navigator.geolocation) {
  //     const onSuccess = async (position: GeolocationPosition) => {
  //       const { latitude, longitude } = position.coords;
  //       const response = await fetch(
  //         `http://api.weatherapi.com/v1/current.json?key=47e8ff4b2c034d17b5d193251242210&q=${latitude},${longitude}`
  //       );
  //       const data = await response.json();
  //       console.log(data);
  //       setCurrentWeather(data);
  //     };

  //     const onError = () => {
  //       console.error("Sorry, no position available.");
  //     };

  //     navigator.geolocation.getCurrentPosition(onSuccess, onError);
  //   } else {
  //     console.error("Geolocation is not supported by this browser.");
  //   }
  // };

  useEffect(() => {
    const contentStorage = localStorage.getItem("content");
    if (contentStorage) setContent(contentStorage as ContentType);

    const generalStorage = localStorage.getItem("general");
    if (generalStorage) {
      setGeneral(JSON.parse(generalStorage));
    } else {
      setGeneral({
        ...DEFAULT_GENERAL,
        theme: window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      });
    }

    const unitsStorage = localStorage.getItem("units");
    if (unitsStorage) setUnits(JSON.parse(unitsStorage));

    // getLocation();
  }, []);

  return (
    <PreferencesContext.Provider
      value={{
        general,
        units,
        updatePreferences,
        descriptions: descriptions[general.language],
        content,
        updateContent,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export const usePreferences = (): PreferencesContextProps => {
  return useContext(PreferencesContext);
};
