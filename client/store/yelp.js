import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_SHOPS = 'GET_SHOPS'
const GET_SHOPS_OWN = 'GET_SHOPS_OWN'
const GET_SHOPS_BY_ID = 'GET_SHOPS_BY_ID'

/**
 * INITIAL STATE
 */
const defaultShops = {
    listOfPlaces: [],
    singlePlace: []
} 

/**
 * ACTION CREATORS
 */
const getShopsOwn = places => ({type: GET_SHOPS, places});
const getShops = places => ({type: GET_SHOPS, places});
const getShopsById = places => ({type: GET_SHOPS_BY_ID, places});


/**
 * THUNK CREATORS
 */
//if input
export const fetchShopsOwn = (location) =>
  dispatch =>
    axios.get(`/api/yelp/${location}`)
      .then(res =>
        dispatch(getShopsOwn(res.data || defaultShops)))
      .catch(err => console.log(err))

//if button
export const fetchShops = () =>
  dispatch =>
    axios.get('/api/yelp/getLocation')
      .then(res =>
        dispatch(getShops(res.data || defaultShops)))
      .catch(err => console.log(err)) 

export const fetchShopById = (id) =>
  dispatch =>
    axios.get(`/api/yelp/${id}`)
      .then(res =>
        dispatch(getShopsById(res.data || defaultShops)))
      .catch(err => console.log(err))


/**
/**
 * REDUCER
 */
export default function (state = defaultShops, action) {
  switch (action.type) {
    case GET_SHOPS:
      return Object.assign({}, state, {listOfPlaces: action.places} );

    case GET_SHOPS_OWN:
      return Object.assign({}, state, {listOfPlaces: action.places} );
  
    default:
      return state
  }
}
