const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name: String,
    ingredients: String,
    directions: String,
    culture: String,
    creator: String,
    img: String,
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe