import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import descriptionsBylanguage, {
  LanguageDescriptions,
} from "../utils/language";

export type UnitPreferences = {
  temperature: "celsius" | "fahrenHeit";
  windSpeed: "km/h" | "m/s" | "knots";
  pressure: "hpa" | "inches" | "kpa" | "mm";
  precipitation: "milimeters" | "inches";
  distance: "kilometers" | "miles";
};

type GeneralPreferences = {
  theme: "dark" | "light";
  language: "portuguese" | "english" | "spanish";
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
  language: "portuguese",
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
  const descriptions = descriptionsBylanguage[general.language];

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
  }, []);

  return (
    <PreferencesContext.Provider
      value={{
        general,
        units,
        updatePreferences,
        descriptions,
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
