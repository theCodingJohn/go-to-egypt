import React from "react";

import { Header, EgyptianCivilization } from "./components";

// style
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <EgyptianCivilization />
        <div className="test"></div>
      </main>
    </>
  );
};

export default App;
