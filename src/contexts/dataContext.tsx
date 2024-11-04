import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type LocationProps = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

type CurrentWeatherProps = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
};

export type HourWeatherProps = {
  chance_of_rain: number;
  chance_of_snow: number;
  cloud: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  dewpoint_c: number;
  dewpoint_f: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  is_day: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  snow_cm: number;
  temp_c: number;
  temp_f: number;
  time: string;
  time_epoch: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  will_it_rain: number;
  will_it_snow: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  windchill_c: number;
  windchill_f: number;
};

type ForecastProps = {
  date: string;
  date_epoch: number;
  day: {
    maxtemp_c: number;
    maxtemp_f: number;
    mintemp_c: number;
    mintemp_f: number;
    avgtemp_c: number;
    avgtemp_f: number;
    maxwind_mph: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalprecip_in: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avgvis_miles: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    uv: number;
  };
  astro: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: number;
    is_moon_up: number;
    is_sun_up: number;
  };
  hour: HourWeatherProps[];
};

type DataContextProps = {
  location: LocationProps | null;
  current: CurrentWeatherProps | null;
  sevenDayForecast: ForecastProps[];
};

const DataContext = createContext<DataContextProps>({} as DataContextProps);

type DataProviderProps = {
  lang: "pt" | "en" | "sp";
  children: ReactNode;
};

export default function DataProvider({ lang, children }: DataProviderProps) {
  const [sevenDayForecast, setSevenDayForecast] = useState<ForecastProps[]>([]);
  const [location, setLocation] = useState<LocationProps | null>(null);
  const [current, setCurrent] = useState<CurrentWeatherProps | null>(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      const onSuccess = async (position: GeolocationPosition) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=47e8ff4b2c034d17b5d193251242210&q=${latitude},${longitude}&days=7&lang=${lang}`
          );
          const data = await response.json();
          console.log(data);
          setLocation(data.location);
          setCurrent(data.current);
          setSevenDayForecast(data.forecast.forecastday);
        } catch (error) {
          console.error("An error occurred in the request: ", error);
        }
      };

      const onError = () => {
        console.error("Sorry, no position available.");
      };

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    getLocation();
  }, [lang]);

  return (
    <DataContext.Provider
      value={{
        location,
        current,
        sevenDayForecast,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export const useData = (): DataContextProps => {
  return useContext(DataContext);
};
