const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    name: String,
    ingredients: [{ type: String }],
    directions: [{ type: String }],
    culture: String,
    img: String,
})

const Recipe = mongoose.model('Recipe', recipeSchema)

module.exports = Recipe