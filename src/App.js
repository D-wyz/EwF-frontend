import React, { Component } from "react";
import Header from "./views/Components/Header/Header";
import ChallengeList from "./views/Components/ChallengeList/ChallengeList";
import ScoreboardList from "./views/Components/ScoreboadList/ScoreboardList";
import MapCard from "./views/Components/Map/Map";
import Grid from "@material-ui/core/Grid";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={0}>
          <Grid item lg={12} sm={"auto"}>
            <Header />
          </Grid>
          <Grid
            style={{
              width: "100%",
              backgroundImage: "profile-bg.jpg"
            }}
          >
            <Grid container1>
              <Grid
                item
                sm
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <MapCard />
              </Grid>
            </Grid>
            <Grid container2>
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
        </Grid>
      </div>
    );
  }
}

export default App;
