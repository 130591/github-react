import React from "react";

import GlobalStyles from "./config/globalStyles";
import { Header } from "./views/components/header";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
    </div>
  );
}

export default App;
