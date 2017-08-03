import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
const querystring = require('querystring');

export default class Places extends Component {

  constructor (props) {
    super(props);
    this.state = {
        location:[], 
        locationInput:'',
        foodInput:''
    }
this.getLocation = this.getLocation.bind(this);
this.showPosition = this.showPosition.bind(this);
this.handleChange = this.handleChange.bind(this);
  }


handleClick(event){
    event.preventDefault();
        console.log('inside handle click')
        console.log('navigator', navigator)
    this.getLocation();

}

handleChange(event){
      event.preventDefault();
      console.log(event.target.value);
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
    let location = <p> {position.coords.latitude + ',' + position.coords.longitude} </p>
    this.setState({location});
    }


  render() {
      const location = this.state.location;
    return (
        <div>
        <span> Where are you? </span>
        <button onClick={this.getLocation}>Get Location!</button>
        <p> Tell Us Where You Want To Search </p>
        <input name='locationInput'defaultValue="Zip Code, City, State" onChange={this.handleChange} />
        <button> Click me! </button>
        <p> What do you want to eat? </p>
        <input name='foodInput' defaultValue="Burgers, Milkshake, French Fries" onChange={this.handleChange} />
         <button> Click me! </button>
            <h3>Locations</h3>
            {location}

        </div>
    )

    }
  }