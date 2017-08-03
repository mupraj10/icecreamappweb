const router = require('express').Router()
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll({
      
  })
    .then(users => res.json(users))
    .catch(next)
})
