import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { Route } from "react-router-dom";

import { Container } from "./components/container";
// import { Home } from "./components/home";

const App = () => {
  // const [page, pageUpdate] = useState("home");
  return (
    <div className="App">
      <header className="App-header">
        <Container />
        {/* page={page} pageUpdate={pageUpdate} <Route path="/" exact component={Home} /> */}
      </header>
    </div>
  );
};

export default App;
