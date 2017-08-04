import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_LOCATION = 'GET_LOCATION'


/**
 * INITIAL STATE
 */
const defaultRests = {
    location:[]
}

/**
 * ACTION CREATORS
 */
const getLocation = location => ({type: GET_RESTS, location})


/**
 * THUNK CREATORS
 */
export const fetchLocation = (location) =>
  dispatch =>
    axios.get(`/api/yelp/ownLocation/${location}`)
      .then(res =>
        dispatch(getRestsOwn(res.data || defaultRests)))
      .catch(err => console.log(err))


export const fetchRests = () =>
  dispatch =>
    axios.get('/api/yelp/getLocation')
      .then(res =>
        dispatch(getRests(res.data || defaultRests)))
      .catch(err => console.log(err))

/**
/**
 * REDUCER
 */
export default function (state = defaultRests, action) {
  switch (action.type) {
    case GET_RESTS:
      return Object.assign({}, state, {listOfPlaces: action.places} );

    case GET_RESTS_OWN:
      return Object.assign({}, state, {listOfPlaces: action.places} );
  
    default:
      return state
  }
}
