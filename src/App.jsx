import React from "react";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BarChart from "./charts/BarChart";
import ScatterplotGraph from "./charts/ScatterplotGraph";
import HeatMap from "./charts/HeatMap";
import Home from "./charts/Home";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "lightgrey",
    height: "calc(100vh - 64px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="Root">
      <Navbar />
      <div className={classes.root}>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/bar-chart">
            <BarChart />
          </Route>
          <Route exact path="/scatterplot-graph">
            <ScatterplotGraph />
          </Route>
          <Route exact path="/heat-map">
            <HeatMap />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
