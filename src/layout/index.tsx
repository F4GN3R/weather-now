import { usePreferences } from "../contexts/preferencesContext";
import Navbar from "../components/Navbar";
import WeatherContent from "./WeatherContent";
import PreferencesContent from "./PreferencesContent";
import DataProvider from "../contexts/dataContext";

function App() {
  const { general, content } = usePreferences();

  return (
    <DataProvider lang={general.language}>
      <main
        className={`${general.theme} min-h-screen h-auto bg-slate-100/50 dark:bg-slate-950`}
      >
        <div className="xl:container flex gap-7 mx-auto p-6 lg:p-10">
          <Navbar />
          <div className="flex flex-1">
            {content === "weather" && <WeatherContent />}
            {content === "preferences" && <PreferencesContent />}
          </div>
        </div>
      </main>
    </DataProvider>
  );
}

export default App;
