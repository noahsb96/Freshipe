const express = require('express')
const app = express()
const Recipe = require('./models/recipes.js')
const methodOverride = require('method-override')
const { render } = require('ejs')
const session = require('express-session')
require('dotenv').config()
const PORT = process.env.PORT
const SESSION_SECRET = process.env.SESSION_SECRET
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use((req, res, next) => {
    res.locals.currentUser = req.session.currentUser
    next()
})

const mongoose = require('mongoose')
const db = mongoose.connection
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.once('open', () => {
	console.log(`connected to mongo at ${db.host}: ${db.port}`);
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'))

const recipesController = require('./controllers/recipesController.js')

app.use('/recipes', recipesController)

const userController = require('./controllers/userController.js')
app.use('/users', userController)

app.get('/', (req, res) => {
    res.redirect('/recipes')
  })
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })