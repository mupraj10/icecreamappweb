import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
const querystring = require('querystring');

export default class Places extends Component {

  constructor (props) {
    super(props);
    this.state = {
        location: [], 
        locationInput: '',
        foodInput: ''
    }
this.getLocation = this.getLocation.bind(this);
this.showPosition = this.showPosition.bind(this);
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
  }

// componentDidMount(){
//      this.setState({location});
// }

handleClick(event){
    event.preventDefault();
        console.log('inside handle click')
        console.log('navigator', navigator)
    this.getLocation();

}

handleChange(event){
      event.preventDefault();
      const target = event.target;
      const value = target.value
      const name = target.name;
      console.log('in handle change')
      this.setState({
          [name]:value
      })
}

handleSubmit(event){
    console.log('in handle submit')
      const target = event.target;
      const name = target.name;
    event.preventDefault();
    this.setState({
        [name]: ''
    })
    
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
    let location =  position.coords.latitude + ',' + position.coords.longitude
    //  console.log('in show ', location)
    }


  render() {
      const location = this.state.location;
      const locationInput = this.state.locationInput;
      const foodInput = this.state.foodInput;

      console.log("STATE NOW", this.state);

    return (
        <div>
        <span> Where are you? </span>
          <Link to={`/places/${this.state.location}`}>
        <button onClick={this.getLocation}>Get Location!</button>
        </Link>
       
            <h3>Locations</h3>
            {location}
            <h1>{locationInput}</h1>
            <h1>{foodInput}</h1>

 <p> Tell Us Where You Want To Search </p>
          <form name='locationInput' onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input 
          name='locationInput'
          placeholder='Zip Code, City' 
           type="text" value={locationInput} 
           onChange={this.handleChange} />
        </label>
        <Link to={`/places/${this.state.locationInput}`}>
        <input  name='locationInput' type="submit" value="Submit" />
        </Link>
      </form>

       <p> What do you want to eat? </p>

         <form name='foodInput' onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input 
          name='foodInput' 
          placeholder='Burger, Pizza, Indian' 
          type="text" 
          value={foodInput} 
          onChange={this.handleChange} />
        </label>
        <Link to={`/food/${this.state.foodInput}`}>
        <input name='foodInput' type="submit" value="Submit" />
        </Link>
      </form>

        </div>
    )

    }
  }