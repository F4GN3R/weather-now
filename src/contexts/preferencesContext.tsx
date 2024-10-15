import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
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

type ContentType = "a" | "b" | "c" | "setting";

type PreferencesContextProps = {
  general: GeneralPreferences;
  units: UnitPreferences;
  updatePreferences: (
    type: "general" | "units",
    preferences: GeneralPreferences | UnitPreferences
  ) => void;
  content: ContentType;
  setContent: Dispatch<SetStateAction<ContentType>>;
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
  const [content, setContent] = useState<ContentType>("setting");
  const descriptions = descriptionsBylanguage[general.language];

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
    const generalStorage = localStorage.getItem("general");
    if (generalStorage) setGeneral(JSON.parse(generalStorage));

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
        setContent,
      }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}

export const usePreferences = (): PreferencesContextProps => {
  return useContext(PreferencesContext);
};
