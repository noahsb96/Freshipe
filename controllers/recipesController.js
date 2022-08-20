const express = require('express');
const router = express.Router()
const Recipe = require('../models/recipes.js')

const authRequired = (req, res, next) => {
	if(req.session.currentUser) {
		next()
	} else {
		res.send('You must be logged in to do that!')

	}
}

router.get('/', (req, res) => {
    Recipe.find({}, (error, recipes) => {
        res.render('index.ejs', { recipes })
    })
})

