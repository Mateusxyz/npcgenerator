import express from 'express';
export const router = express.Router()

// use res.render to load up an ejs view file

// index page
router.get('/', function (req, res) {
    res.render('index');
});

// about page
router.get('/about', function (req, res) {
    res.render('about');
});

//expondo a pasta public
router.use(express.static('public'))