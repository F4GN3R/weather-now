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
  updatedAt: string;
  airConditions: {
    title: string;
    button: string;
    informations: string[];
  };
  todayForecast: string;
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
  updatedAt: "Atualizado às",
  airConditions: {
    title: "Condições do ar",
    button: "Ver mais",
    informations: [
      "Sensação Real",
      "Vento",
      "Chance de chuva",
      "Índice UV",
      "Umidade",
      "Visibilidade",
      "Pressão",
      "Pôr do sol",
      "Direção do vento",
    ],
  },
  todayForecast: "Previsão de hoje",
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
          labels: ["km/h", "m/h"],
        },
        {
          key: "pressure",
          title: "Pressão",
          labels: ["Milibares", "Polegadas"],
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
  updatedAt: "Updated at",
  airConditions: {
    title: "Air conditions",
    button: "See more",
    informations: [
      "Real Feel",
      "Wind",
      "Chance of rain",
      "UV Index",
      "Humidity",
      "Visibility",
      "Pressure",
      "Sunset",
      "Wind direction",
    ],
  },
  todayForecast: "Today's forecast",
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
          labels: ["km/h", "m/h"],
        },
        {
          key: "pressure",
          title: "Pressure",
          labels: ["Millibars", "Inches"],
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
  updatedAt: "Actualizado en",
  airConditions: {
    title: "Condiciones del aire",
    button: "Ver más",
    informations: [
      "Sensación real",
      "Viento",
      "Probabilidad de lluvia",
      "Índice UV",
      "Humedad",
      "Visibilidad",
      "Presión",
      "Puesta de sol",
      "Dirección del viento",
    ],
  },
  todayForecast: "El pronóstico de hoy",
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
          labels: ["km/h", "m/h"],
        },
        {
          key: "pressure",
          title: "Presión",
          labels: ["Milibares", "Inches"],
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
