import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_LOCATION = 'GET_LOCATION'


/**
 * INITIAL STATE
 */
const defaultLocation = {
    location:''
}

/**
 * ACTION CREATORS
 */
const getLocation = location => ({type: GET_LOCATION, location})


/**
 * THUNK CREATORS
 */
export const fetchLocation = ((location) =>
  dispatch => 
    getLocation(){
        console.log('in get location', navigator)
    if(navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(this.showPosition); //add error handling
            } else {
                console.log('Geolocation is not supported');
            }
    }

)

/**
/**
 * REDUCER
 */
export default function (state = defaultRests, action) {
  switch (action.type) {
    case GET_LOCATION:
      return Object.assign({}, state, {listOfPlaces: action.places} );
    default:
      return state
  }
}
