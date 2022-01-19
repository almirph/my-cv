import React, { useState } from "react";
import "./App.css";
import { ThemeContext, themes } from "./Context/ThemeContext";
import HomePage from "./pages/HomePage";

function App() {
  const [actualTheme, setActualTheme] = useState(themes.light);

  const toogleTheme = () => {
    setActualTheme(actualTheme === themes.dark ? themes.light : themes.dark);
  }

  return (
    <React.Fragment>
      <ThemeContext.Provider value={{theme: actualTheme, toogleTheme: toogleTheme}}>
        <HomePage></HomePage>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
