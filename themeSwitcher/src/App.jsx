import React, { useState, useEffect } from "react";
import { ThemeButton, Card } from "./components";
import { ThemeProvider } from "./context/theme";

function App() {
  const [themeMode, setThemeMode] = useState("dark");

  const darkMode = () => {
    setThemeMode("dark");
  };

  const lightMode = () => {
    setThemeMode("light");
  };
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkMode, lightMode }}>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col">
          <div className="flex justify-end">
            <ThemeButton />
          </div>

          <div className="mt-3">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
