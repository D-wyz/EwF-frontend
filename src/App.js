import React, { Component } from "react";
import Header from "./views/Components/Header/Header";
import ProfileCard from "./views/Components/ProfileCard/ProfileCard";
<<<<<<< HEAD
import ChallengeList from "./views/Components/ChallengeList/ChallengeList";
import ScoreboardList from "./views/Components/ScoreboadList/ScoreboardList";
import Grid from "@material-ui/core/Grid";
=======
import ChallengeList from "./views/Components/Challenge List/ChallangeList";
import ScoreboardList from "./views/Components/Scoreboard List/ScoreboardList";
>>>>>>> master

import "./App.css";

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App" style={{ backgroundColor: "#87CEEB" }}>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid container>
            <Grid
              item
              sm
              style={{ display: "grid", justifyContent: "flex-end" }}
            >
              <ProfileCard />
            </Grid>
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
=======
      <div className="App">
        <Header />
        <ProfileCard />
        <ChallengeList />
        <ScoreboardList />
>>>>>>> master
      </div>
    );
  }
}

export default App;
