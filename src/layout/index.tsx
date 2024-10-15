import { usePreferences } from "../contexts/preferencesContext";
import Navbar from "../components/Navbar";
import PreferencesContent from "./PreferencesContent";

function App() {
  const { general, content } = usePreferences();

  return (
    <main
      className={`${general.theme} h-auto lg:h-screen w-screen bg-slate-100 dark:bg-slate-950`}
    >
      <div className="container mx-auto p-10 flex flex-row gap-7">
        <Navbar />
        {content === "setting" && <PreferencesContent />}
      </div>
    </main>
  );
}

export default App;
