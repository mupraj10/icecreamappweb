const router = require('express').Router()
const yelp = require('yelp-fusion');

module.exports = router

const clientId = process.env.YELP_CLIENT_ID;
const clientSecret = process.env.YELP_CLIENT_SECRET;


//GET /api/yelp/input
router.get('/:location', (req, res, next) => {
let location = req.params.location
console.log(location);

yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  //place should be on query string,
  client.search({
     location: location,
     term: 'ice cream',
     limit: 10

  }).then( response => {
   res.json(response.jsonBody.businesses);
  });

    }).catch( err => {
        console.log(err,'yelp error');
});

})

//using buttton to get location
router.get('/getLocation', (req, res, next) => {

yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  let location = req.params.location
  console.log(location);
  //place should be on query string,
  client.search({
     lattitude: req.query,
     longitude:req.query
  }).then( response => {
   res.json(response.jsonBody.businesses);
  });

    }).catch( err => {
        console.log(err,'yelp error');
});

})

//get a single place GET api/yelp/:id
router.get('/:id', (req, res, next) => {
  const id = req.params.id
yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  client.business(id).then( response => {
   res.json(response.jsonBody.businesses);
  });

    }).catch( err => {
        console.log(err,'yelp error');
});

})