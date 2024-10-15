type UnitsProps = {
  title: string;
  options: Array<{
    key:
      | "temperature"
      | "windSpeed"
      | "pressure"
      | "precipitation"
      | "distance";
    title: string;
    labels: string[];
  }>;
};

type GeneralProps = {
  title: string;
  options: Array<{
    key: "theme" | "language";
    title: string;
    labels: string[];
  }>;
};

export type LanguageDescriptions = {
  weather: {
    menu: string;
  };
  cities: {
    menu: string;
  };
  map: {
    menu: string;
  };
  preferences: {
    menu: string;
    units: UnitsProps;
    general: GeneralProps;
  };
};

const portuguese: LanguageDescriptions = {
  weather: {
    menu: "Clima",
  },
  cities: {
    menu: "Cidades",
  },
  map: {
    menu: "Mapa",
  },
  preferences: {
    menu: "Opções",
    units: {
      title: "Units",
      options: [
        {
          key: "temperature",
          title: "Temperature",
          labels: ["Celsius", "FahrenHeit"],
        },
        {
          key: "windSpeed",
          title: "Wind Speed",
          labels: ["km/h", "m/s", "Knots"],
        },
        {
          key: "pressure",
          title: "Pressure",
          labels: ["hPa", "Inches", "kPa", "mm"],
        },
        {
          key: "precipitation",
          title: "Precipitation",
          labels: ["Milimeters", "Inches"],
        },
        {
          key: "distance",
          title: "Distance",
          labels: ["Kilometers", "Miles"],
        },
      ],
    },
    general: {
      title: "General",
      options: [
        {
          key: "theme",
          title: "Theme",
          labels: ["Dark", "Light"],
        },
        {
          key: "language",
          title: "Language",
          labels: ["Portuguese", "English", "Spanish"],
        },
      ],
    },
  },
};

const english: LanguageDescriptions = {
  weather: {
    menu: "Weather",
  },
  cities: {
    menu: "Cities",
  },
  map: {
    menu: "Map",
  },
  preferences: {
    menu: "Options",
    units: {
      title: "Units",
      options: [
        {
          key: "temperature",
          title: "Temperature",
          labels: ["Celsius", "FahrenHeit"],
        },
        {
          key: "windSpeed",
          title: "Wind Speed",
          labels: ["km/h", "m/s", "Knots"],
        },
        {
          key: "pressure",
          title: "Pressure",
          labels: ["hPa", "Inches", "kPa", "mm"],
        },
        {
          key: "precipitation",
          title: "Precipitation",
          labels: ["Milimeters", "Inches"],
        },
        {
          key: "distance",
          title: "Distance",
          labels: ["Kilometers", "Miles"],
        },
      ],
    },
    general: {
      title: "General",
      options: [
        {
          key: "theme",
          title: "Theme",
          labels: ["Dark", "Light"],
        },
        {
          key: "language",
          title: "Language",
          labels: ["Portuguese", "English", "Spanish"],
        },
      ],
    },
  },
};

const spanish: LanguageDescriptions = {
  weather: {
    menu: "Clima",
  },
  cities: {
    menu: "Ciudades",
  },
  map: {
    menu: "Mapa",
  },
  preferences: {
    menu: "Opciones",
    units: {
      title: "Units",
      options: [
        {
          key: "temperature",
          title: "Temperature",
          labels: ["Celsius", "FahrenHeit"],
        },
        {
          key: "windSpeed",
          title: "Wind Speed",
          labels: ["km/h", "m/s", "Knots"],
        },
        {
          key: "pressure",
          title: "Pressure",
          labels: ["hPa", "Inches", "kPa", "mm"],
        },
        {
          key: "precipitation",
          title: "Precipitation",
          labels: ["Milimeters", "Inches"],
        },
        {
          key: "distance",
          title: "Distance",
          labels: ["Kilometers", "Miles"],
        },
      ],
    },
    general: {
      title: "General",
      options: [
        {
          key: "theme",
          title: "Theme",
          labels: ["Dark", "Light"],
        },
        {
          key: "language",
          title: "Language",
          labels: ["Portuguese", "English", "Spanish"],
        },
      ],
    },
  },
};

export default { portuguese, english, spanish };
