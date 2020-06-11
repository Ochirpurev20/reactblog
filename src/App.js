import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";

import { Container } from "./components/container";

const App = () => {
  const [page, pageUpdate] = useState("home");
  return (
    <div className="App">
      <header className="App-header">
        <Container page={page} pageUpdate={pageUpdate} />
      </header>
    </div>
  );
};

export default App;
