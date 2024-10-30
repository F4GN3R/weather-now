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
  navbar: string[];
  chanceOfRain: string;
  forecast: {
    title: string;
    today: string;
    week: {
      [day: string]: string;
    };
  };
  weather: {
    menu: string;
    inputPlaceholder: string;
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

const pt: LanguageDescriptions = {
  navbar: ["Clima", "Cidades", "Mapa", "Configurações"],
  chanceOfRain: "Chance de chuva:",
  forecast: {
    title: "Previsão de 7 dias",
    today: "Hoje",
    week: {
      sun: "Dom",
      mon: "Seg",
      tue: "Ter",
      wed: "Qua",
      thu: "Qui",
      fri: "Sex",
      sat: "Sab",
    },
  },
  weather: {
    menu: "Clima",
    inputPlaceholder: "Buscar por cidades",
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

const en: LanguageDescriptions = {
  navbar: ["Weather", "Cities", "Map", "Settings"],
  chanceOfRain: "Chance of rain:",
  forecast: {
    title: "7-Day forecast",
    today: "Today",
    week: {
      sun: "Sum",
      mon: "Mon",
      tue: "Tue",
      wed: "Wed",
      thu: "Thu",
      fri: "Fri",
      sat: "Sat",
    },
  },
  weather: {
    menu: "Weather",
    inputPlaceholder: "Search for cities",
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

const sp: LanguageDescriptions = {
  navbar: ["Clima", "Ciudades", "Mapa", "Ajustes"],
  chanceOfRain: "Probabilidad de lluvia:",
  forecast: {
    title: "Pronóstico de 7 días",
    today: "Hoy",
    week: {
      sun: "Dom",
      mon: "Lun",
      tue: "Mar",
      wed: "Mié",
      thu: "Jue",
      fri: "Vie",
      sat: "Sáb",
    },
  },
  weather: {
    menu: "Clima",
    inputPlaceholder: "Buscar ciudades",
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

export default { pt, en, sp };
