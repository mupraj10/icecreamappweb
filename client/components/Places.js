import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

export default class Places extends Component {

  constructor (props) {
    super(props);
    this.state = {
        input: ''
    }
this.getLocation = this.getLocation.bind(this);
this.showPosition = this.showPosition.bind(this);
  }

//   handleSubmit(event){
//     evt.preventDefault()
//       const location = evt.target.email.value
//       dispatch(auth(email, password, formName))
//   }
handleClick(event){
    event.preventDefault();
        console.log('inside handle click')
        console.log('navigator', navigator)
    this.getLocation();

}

getLocation() {
    console.log('in get location', navigator)
 if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition); //add error handling
        } else {
            console.log('Geolocation is not supported');
        }
}

showPosition (position) {
    console.log('in show ', position)
    let locationCoords = <p> {position.coords.latitude + ',' + position.coords.longitude} </p>
    }

  render() {
    return (
        <div>
        <button onClick={this.getLocation}>Get Location!</button>
            <h3>Locations</h3>
            {locationCoords}
        </div>
    )

    }
  }


// const mapState = (state) => ({
//   product: state.product
// });

// const mapDispatch = null;

// export default connect(mapState, mapDispatch)(AllProducts);
