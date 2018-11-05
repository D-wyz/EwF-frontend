import React, { Component } from 'react';
import { Nav } from '../layout';

class Header extends Component {
  render() {
    return (
      // Header
      <section id="header">
        <div className="container">
          <h1 id="logo">
            Scoring With Friends
          </h1>
          <p>Because life is about winning</p>
          <Nav />
        </div>
      </section>
    );
  }
}

export default Header;
