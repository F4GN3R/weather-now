/* eslint-disable react-hooks/exhaustive-deps */
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

type HourWeatherProps = {
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
    maxtemp_c: 29.4;
    maxtemp_f: 84.9;
    mintemp_c: 24.3;
    mintemp_f: 75.7;
    avgtemp_c: 26.3;
    avgtemp_f: 79.4;
    maxwind_mph: 13.9;
    maxwind_kph: 22.3;
    totalprecip_mm: 0.14;
    totalprecip_in: 0.01;
    totalsnow_cm: 0;
    avgvis_km: 10;
    avgvis_miles: 6;
    avghumidity: 63;
    daily_will_it_rain: 1;
    daily_chance_of_rain: 88;
    daily_will_it_snow: 0;
    daily_chance_of_snow: 0;
    condition: {
      text: "Possibilidade de chuva irregular";
      icon: "//cdn.weatherapi.com/weather/64x64/day/176.png";
      code: 1063;
    };
    uv: 1.3;
  };
  astro: {
    sunrise: "04:56 AM";
    sunset: "05:14 PM";
    moonrise: "12:15 AM";
    moonset: "12:19 PM";
    moon_phase: "Waning Crescent";
    moon_illumination: 43;
    is_moon_up: 0;
    is_sun_up: 0;
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
