import React, { Component } from "react";
import Header from "./views/Components/Header/Header";
import ProfileCard from "./views/Components/ProfileCard/ProfileCard";
import ChallengeList from "./views/Components/ChallengeList/ChallengeList";
import ScoreboardList from "./views/Components/ScoreboadList/ScoreboardList";
import MapCard from "./views/Components/Map/Map";
import Grid from "@material-ui/core/Grid";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ backgroundColor: "#87CEEB" }}>
        <Grid container spacing={0}>
          <Grid item lg={12} sm={"auto"}>
            <Header />
          </Grid>
          <Grid container>
            <Grid
              item
              sm
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <MapCard />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              sm
              style={{ display: "grid", justifyContent: "flex-end" }}
            />
          </Grid>
          <Grid container>
            <Grid
              item
              sm
              style={{ display: "grid", justifyContent: "flex-end" }}
            >
              <ChallengeList />
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              sm
              style={{ display: "grid", justifyContent: "flex-end" }}
            >
              <ScoreboardList />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
