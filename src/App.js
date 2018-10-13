import React, { Component } from "react";
import Header from "./views/Components/Header/Header";
import ProfileCard from "./views/Components/ProfileCard/ProfileCard";
import ChallengeList from "./views/Components/Challenge List/ChallangeList";
import ScoreboardList from "./views/Components/Scoreboard List/ScoreboardList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ProfileCard />
        <ChallengeList />
        <ScoreboardList />
      </div>
    );
  }
}

export default App;
