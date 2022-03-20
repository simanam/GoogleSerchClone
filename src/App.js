import React, { useState } from "react";
import "./App.css";

import { Navbar, RoutesT, Footer } from "./components";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <div className={darkTheme ? "dark" : " "}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <RoutesT />
        <Footer />
      </div>
    </div>
  );
};

export default App;
