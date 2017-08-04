const router = require('express').Router()
const yelp = require('yelp-fusion');

module.exports = router

const clientId = process.env.YELP_CLIENT_ID;
const clientSecret = process.env.YELP_CLIENT_SECRET;


//GET /apo/yelp/places REQUEST FOR THE FOOD PLACE NEAR YOU WHEN YOU INPUT
// the location
router.get('/yelp/places', (req, res, next) => {

yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  //place should be on query string,
  client.search({
    location: req.query,
    category: 'restaurants, All',
    limit: 20

  }).then( response => {
    console.log(response.jsonBody.businesses[0].name);
  });

    }).catch( err => {
        console.log(err);
});

 
})



