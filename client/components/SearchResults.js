import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {fetchShopsOwn} from '../store'
import store from '../store'

export default class Places extends Component {

  constructor (props) {
    super(props);
    this.state = store.getState()
  }

  componentDidMount() {
    const query = this.props.match.params.query;
    console.log(query);
    this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState())
        });

    store.dispatch(fetchShopsOwn(query));

  }

  componentWillUnmount(){
        this.unsubscribe();
  }

  render() {
    console.log('SE RESULT', this.state)    

    const places = this.state.yelp.listOfPlaces 
    console.log(places);
    return (
        <div>
        <span> Where are you? </span>
        {places.map(place => (
                <div className="col-xs-4" key={place.id}>
                        <h5>{place.name}</h5>
                </div>  ))
              }    
        </div>
    )

    }
  }