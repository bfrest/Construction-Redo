import React from "react";
import "./app.scss";
import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import MachineHome from "./components/MachineHome";
import Nav from "./components/Nav";
import GpsHome from "./components/GpsHome";
import Calcs from "./components/Calcs";
import ViewMachine from "./components/ViewMachine";

const App = () => {
  return (
    // todo: get routing done

    <div className="appWrap">
      {/* all the routes ..... for routing */}

      <Nav />
      {/* if not logged in show log in, else show preferred home page */}
      {/* <Login /> */}

      <Switch>
        <Route path="/machine/:id">
          <ViewMachine />
        </Route>

        <Route path="/gps">
          <GpsHome />
        </Route>

        <Route path="/calcs">
          <Calcs />
        </Route>

        <Route path="/">
          <MachineHome />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
