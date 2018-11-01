// import React, { Component } from 'react';

// import axios from 'axios';

// export class MapContainer extends Component {

//   state = {
//     users: [],
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {},
//     markers: []
//   };

//   componentDidMount() {
//     axios.get('http://localhost:3001/users/getallusers')
//       .then((response) => {
//         let users = response.data.data;

//         console.log(users)

//         this.setState({
//           users: users
//         })
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     // this.state.users.forEach(function (user) {

//     //   var marker = new Map.Marker({
//     //     position: user.position,
//     //     map: Map
//     //   });
//     // });
//   }

//   // onMarkerClick = (props, marker, e) =>
//   //   this.setState({
//   //     selectedPlace: e.target.name,
//   //     activeMarker: marker,
//   //     showingInfoWindow: true
//   //   });

//   // onMapClicked = (props) => {
//   //   if (this.state.showingInfoWindow) {
//   //     this.setState({
//   //       showingInfoWindow: false,
//   //       activeMarker: null
//   //     })
//   //   }
//   // };


//   render() {
//     // let showPeople;


//     // if (this.props.people.peopleDetails !== null) {
//     //   let pDetails = this.props.people.peopleDetails
//     //   showPeople = pDetails.map((item, index) => {
//     //     return (
//     //       <ShowPeople item={item} key={index} />
//     //     )
//     //   })
//     // }

//     let markers;
//     if (this.state.users.length > 0) {
//       markers = this.state.users.map((user, index) => {

//         return (
//           <Marker key={index} position={{ lat: user.position.lat, lng: user.position.lng }} />
//         )
//       })
//     } else {
//       markers = '';
//     }

//     return (
//       <Map google={this.props.google} zoom={14} style={{ width: '50%', height: '80%', position: 'relative' }}>
//         {markers}
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow} >
//           <div>
//             <h1>{this.state.selectedPlace.name}</h1>
//           </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: ('AIzaSyA9yaECapkFCvALX1Ko1LG7lkGY3oWUnKI')
// })(MapContainer)