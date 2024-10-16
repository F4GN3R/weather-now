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
    project: {
      description: string;
      created: string;
    };
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
      title: "Unidades",
      options: [
        {
          key: "temperature",
          title: "Temperatura",
          labels: ["Celsius", "FahrenHeit"],
        },
        {
          key: "windSpeed",
          title: "Velocidade do Vento",
          labels: ["km/h", "m/s", "Knots"],
        },
        {
          key: "pressure",
          title: "Pressão",
          labels: ["hPa", "Polegadas", "kPa", "mm"],
        },
        {
          key: "precipitation",
          title: "Precipitação",
          labels: ["Milímetros", "Polegadas"],
        },
        {
          key: "distance",
          title: "Distância",
          labels: ["Quilômetros", "Milhas"],
        },
      ],
    },
    general: {
      title: "Geral",
      options: [
        {
          key: "theme",
          title: "Tema",
          labels: ["Escuro", "Claro"],
        },
        {
          key: "language",
          title: "Idioma",
          labels: ["Português", "Inglês", "Espanhol"],
        },
      ],
    },
    project: {
      description:
        "Se gostou, não esqueça de deixar sua estrela no repositório.",
      created: "Desenvolvido em outubro de 2024 por Fagner Morais",
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
    project: {
      description:
        "If you liked it, don't forget to leave your star in the repository.",
      created: "Developed in october 2024 by Fagner Morais",
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
      title: "Unidades",
      options: [
        {
          key: "temperature",
          title: "Temperatura",
          labels: ["Celsius", "FahrenHeit"],
        },
        {
          key: "windSpeed",
          title: "Velocidad del viento",
          labels: ["km/h", "m/s", "Knots"],
        },
        {
          key: "pressure",
          title: "Presión",
          labels: ["hPa", "Inches", "kPa", "mm"],
        },
        {
          key: "precipitation",
          title: "Precipitación",
          labels: ["Milímetros", "Pulgadas"],
        },
        {
          key: "distance",
          title: "Distancia",
          labels: ["Kilómetros", "Millas"],
        },
      ],
    },
    general: {
      title: "General",
      options: [
        {
          key: "theme",
          title: "Tema",
          labels: ["Oscuro", "Ligero"],
        },
        {
          key: "language",
          title: "Idioma",
          labels: ["Portugués", "Inglés", "Español"],
        },
      ],
    },
    project: {
      description:
        "Si te ha gustado no olvides dejar tu estrella en el repositorio.",
      created: "Desarrollado en octubre de 2024 por Fagner Morais",
    },
  },
};

export default { portuguese, english, spanish };
