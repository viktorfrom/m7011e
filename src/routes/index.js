const express = require('express');
const router = express.Router();
const auth = require('../config/auth.js')

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Green Lean Electrics',
    user: req.user
  });
});
router.get('/pricing', function (req, res, next) {
  res.render('pricing', {
    title: 'Green Lean Electrics',
    user: req.user
  });
});

router.get('/aboutus', function (req, res, next) {
  res.render('aboutus', {
    title: 'Green Lean Electrics',
    user: req.user
  });
});


router.get('/dashboard', auth.ensureAuthenticated, function (req, res, next) {
  res.render('dashboard', {
    title: 'Green Lean Electrics',
    query: req.query ? req.query : null,
    user: req.user
  });
});

router.get('/dashboard/powerplant', auth.ensureAuthenticated, function (req, res, next) {
  res.render('powerplant', {
    title: 'Green Lean Electrics',
    query: req.query ? req.query : null,
    user: req.user
  });
});

router.get('/dashboard/region', auth.ensureAuthenticated, function (req, res, next) {
  res.render('region', {
    title: 'Green Lean Electrics',
    user: req.user
  });
});

router.get('/dashboard/marketprice', auth.ensureAuthenticated, function (req, res, next) {
  res.render('marketprice', {
    title: 'Green Lean Electrics',
    query: req.query ? req.query : null,
    user: req.user
  });
});

router.get('/dashboard/profile', auth.ensureAuthenticated, function (req, res, next) {
  res.render('profile', {
    title: 'Green Lean Electrics',
    query: req.query ? req.query : null,
    user: req.user
  });
});


module.exports = router;