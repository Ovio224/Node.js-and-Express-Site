const express = require('express');
const { projects } = require('../data/data.json');
const router = express.Router();


// Index routing
router.get('/', (req, res) => {
    // res.locals = projects
    res.render('index', { projects });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/data', (req, res) => {
    res.json(projects);
});



module.exports = router;