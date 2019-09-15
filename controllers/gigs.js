const express = require('express');
const router = express.Router();
const Gigs = require('../models/gig.js');


router.get('/', (req, res) => {
  Gigs.find({}, (err, foundGigs) => {
    res.json(foundGigs)
  })
})
























module.exports = router;
