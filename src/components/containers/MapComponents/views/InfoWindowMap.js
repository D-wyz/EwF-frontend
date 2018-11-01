import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Marker, InfoWindow } from 'react-google-maps';
import { checkChallenge } from '../../../../actions/locationAction';

class InfoWindowMap extends Component {
  state = {
    isOpen: false,
    test: 'working!'
  };

  handleToggle = () => {
    this.setState({
      isOpen: true
    });
  };

  render() {

    return (
      <Marker
        key={this.props.index}
        title={this.props.title}
        position={{
          lat: this.props.lat,
          lng: this.props.lng
        }}
        onClick={this.handleToggle}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={() => this.setState({ isOpen: false })}>
            <div>
              {this.props.title}{this.props.title2}
              <hr />
              {this.props.info}
              <hr />
              {/* need to pass in team id here, not sure how to get it */}
              <button onClick={checkChallenge.bind(this, this.props.index, this.props.lat, this.props.lng, this.props.title)}>Check in</button>
            </div>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

const stateToProps = state => {
  return {
    isOpen: state.isOpen,
    test: state.test,
    map: state.map
  };
};

export default connect(
  stateToProps,
  null)(InfoWindowMap);

  //how do I make the nameOfPlace match up with the appropriate address.
  //if(nameofplace[])
  // for(let i =0; i< this.props.map.nameOfPlace; i++){

  // }