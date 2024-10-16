import { usePreferences } from "../contexts/preferencesContext";
import Navbar from "../components/Navbar";
import WeatherContent from "./WeatherContent";
import PreferencesContent from "./PreferencesContent";

function App() {
  const { general, content } = usePreferences();

  return (
    <main
      className={`${general.theme} min-h-screen h-auto lg:h-screen bg-slate-100 dark:bg-slate-950`}
    >
      <div className="container flex gap-7 mx-auto p-6 lg:p-10">
        <Navbar />
        <div className="flex flex-1">
          {content === "weather" && <WeatherContent />}
          {content === "preferences" && <PreferencesContent />}
        </div>
      </div>
    </main>
  );
}

export default App;
