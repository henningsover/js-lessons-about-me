import React from "react";
import { Switch, Route } from "react-router-dom";
import StartPage from "./pages/StartPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SimpleLayout from "./components/SimpleLayout";
import "./styles/style.css";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/contact">
          <SimpleLayout mainContent={<ContactPage />} />
        </Route>
        <Route path="/about">
          <SimpleLayout mainContent={<AboutPage />} />
        </Route>
        <Route path="/">
          <SimpleLayout mainContent={<StartPage />} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
