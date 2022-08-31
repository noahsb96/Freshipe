const express = require('express');
const { Types } = require('mongoose');
const router = express.Router()
const Recipe = require('../models/recipes.js')

const authRequired = (req, res, next) => {
	if(req.session.currentUser) {
		next()
	} else {
		res.send('You must be logged in to do that!')

	}
}

router.get('/', async (req, res) => {
    let recipes = await Recipe.find({})
	res.render('index.ejs', { recipes })
})

router.get('/cultures', async (req, res) => {
    let recipes = await Recipe.find({})
	res.render('cultures.ejs', { recipes })
})


// router.get('/seed', (req, res) => {
// 	Recipe.create(
// 		[
// 			{
// 				name: 'Tomato Wine',
//     			ingredients: ['3 1/2 quarts RO of wine', '2 lbs. of sugar or 2lbs. light honey', '4 lbs. ripe tomatoes', '2 tsp. acid blend (mallic acid)', '1/8 tsp. tannin', '1 tsp. yeast nutrient', '1/2 tsp Campden powder', '1/2 tsp. pectic enzyme', '5 gm fruit cider yeast'],
//     			directions: ['Clean and chop all tomatoes', 'Put your tomatoes in a bag or pillow cover and mash it to juice it down', 'Add honey/sugar and take the hydrometer reading', 'Add yeast and cover the fermenter for 24 hours with a cloth', 'After 24 hours rack it and transfer to a secondary fermenter and attach an airlock', 'After 10 days rack it again to remove the sediment and allow it to age for about 30-60 days. Wine becomes clearer and tastes better'],
//     			culture: 'Indian',
//     			img: 'https://www.arishtam.com/wp-content/uploads/2020/08/tomato-wine-300x300.jpg'
// 			},
			
// 			{
// 				name: 'Spaghetti and Meatballs',
// 				ingredients: ['3 slices white bread, (crusts removed), diced or torn to pieces', '2/3 cup cold water', '1 lb lean ground beef, (7%-15% fat)', '1 lb Sweet Ground Italian sausage, casings removed', '1/4 cup grated parmesan cheese, plus more to serve', '4 cloves garlic, minced', '1 tsp sea salt', '1/2 tsp black pepper', '1 large egg', '3/4 cup all-purpose flour, to dredge meatballs', '3 Tbsp Light olive oil to saute, or use vegetable oil', '1 medium yellow onion, (1 cup chopped)', '4 cloves garlic, minced', '56 oz crushed tomatoes, (from 2 - 28 oz cans)', '2 bay leaves, optional', 'Salt & pepper , to taste', '2 Tbsp basil, finely minced', '1 lb spaghetti'],
// 				directions: ['Combine bread pieces with 2/3 cup water and set aside 5 min then mash with a fork.', 'In a large mixing bowl add: 1 lb ground beef, 1 lb sausage, 1/4 cup parmesan, 4 minced garlic cloves, 1 tsp salt, 1/2 tsp black pepper, 1 egg and mashed bread crumbs. Mix until well combined.', 'Form into 1 1/2" meatballs (about a flat ice cream scoop of meat). Dredge/roll meatballs in flour, dusting off excess. Heat a deep, large, heavy skillet or a Dutch oven over medium heat with about 3 Tbsp oil. Add meatballs in 2 batches without crowding the pan and saute until browned on all sides (about 6 min total or 2 min per side). Remove meatballs and set aside (don\'t worry about cooking through at this point).', 'In the same skillet over medium heat, add more oil if needed and saute 1 cup chopped onion stirring often until soft and golden (5 min). Add 4 cloves minced garlic and stir 1-2 min until fragrant.', 'Stir in 2 cans of crushed tomatoes and 2 bay leaves. Bring to a light boil (stir to make sure it\'s actually boiling and not just sending bubbles to the surface).', 'Add meatballs back into the pan with tomato sauce, partially cover with lid or cover with a splatter screen to reduce splatter and cook at a gentle simmer for 30 min, turning the meatballs occasionally. Meatballs will be tender and sauce will be thickened. Five minutes before sauce is done, stir in chopped fresh basil and season with salt and pepper to taste.', 'Cook pasta according to package instructions until aldente (or to desired doneness), drain and return to the empty pot.', 'Pour sauce and meatballs over spaghetti and toss gently to combine. To serve family-style, transfer to a large platter, garnish with parmesan cheese and fresh basil and serve hot.'],
// 				culture: 'Italian',
// 				img: 'https://natashaskitchen.com/wp-content/uploads/2015/01/Spaghetti-and-Meatballs-Recipe-11.jpg'
// 			},

// 			{
// 				name: 'Brown Butter Chocolate Chip Cookies',
// 				ingredients: ['2 1/4 cup all-purpose flour', '1 teaspoon baking soda', '1/2 teaspoon salt', '1 cup unsalted butter (2 sticks)', '1 1/2 cups packed dark brown sugar', '1/4 cup granulated sugar', '1 large egg + 1 additional egg yolk, at room temperature', '1 tablespoon vanilla extract', '1 tablespoon plain greek yogurt', '3/4 cup semi-sweet chocolate chips', '3/4 cup milk chocolate chips (or sub dark chocolate chips)', 'Maldon sea salt, for sprinkling on top'],
// 				directions: ['First, brown your butter: add butter to a large saucepan and place over medium heat. The butter will begin to crackle, and then eventually foam. Make sure you whisk constantly during this process. After a couple of minutes, the butter will begin to brown and turn a nice golden amber color on the bottom of the saucepan. Continue to whisk and remove from heat as soon as the butter begins to brown and give off a nutty aroma. Immediately transfer the butter to a medium bowl to prevent burning. Set aside to cool for 10 minutes or until cool enough to touch.', 'With an electric mixer, mix the brown butter and sugars until well combined, about 1 minute. Beat in the egg, egg yolk, vanilla, and yogurt until combined.', 'In a separate large bowl, whisk together the flour, baking soda, and salt. Slowly add the dry ingredients to the wet ingredients and beat on low-speed just until combined. Add both chocolate chips and mix on low speed until just incorporated into the dough.', 'Chill your dough for 2 hours in the refrigerator, or up to 12-24 hours. Do not try to speed up this process. The dough needs to chill in order to be perfect.','Helpful tip: If you want to make it easier to bake the cookies, I suggest rolling them into balls BEFORE chilling the dough. That way you can simply place them on the prepared baking sheet and bake! Up to you. I usually put my dough in the fridge for 10 minutes, then I take it out roll them into balls, place on a plate or baking sheet and place in the fridge for another hour or two.', 'Once dough is chilled, preheat the oven to 350 degrees F and line a baking sheet with parchment paper. You might need to take out the dough and thaw it out a bit before measuring the dough if it is super hard and you did not already roll the cookie dough into balls. This should take about 20 minutes. Once ready to bake, measure 2 heaping tablespoons of the dough or use a medium cookie scoop. It doesn\'t have to be perfectly rolled. Place dough balls on cookie sheet, 2 inches apart.', 'Bake the cookies 9-11 minutes or until the edges of the cookies begin to turn golden brown. They will look a bit underdone in the middle, but will continue to cook once out of the oven.', 'Cool the cookies on the sheets for 5 minutes to allow them to set up, then sprinkle each cookie with sea salt. Remove the cooled cookies from the baking sheets and transfer to a wire rack to cool completely. Makes 24-36 cookies.'],
// 				culture: 'American',
// 				img: 'https://www.ambitiouskitchen.com/wp-content/uploads/2016/10/AK-Brown-Butter-CCCs-2-594x594.jpg'
// 			}
// 		],
// 		(err, data) => {
// 			res.redirect('/recipes');
// 		}
// 	)
// })

router.get('/new', (req, res) => {
	res.render('new.ejs');
});

router.get('/:id', async (req, res) => {
	const recipe = await Recipe.findById(req.params.id)
	res.render('show.ejs', { recipe: recipe, })
})

router.get('/culturesindex/:culture', async (req, res) => {
	const recipes = await Recipe.find({ culture: req.params.culture })
	res.render('culturesindex.ejs', { recipes: recipes, })
})

router.post('/', (req, res) => {
	Recipe.create(req.body, (error, createdRecipe) => {
		if (error) {
			console.log(error)
			res.send(error)
		} else {
			const recipeId = createdRecipe.id
			res.redirect(`/recipes/${recipeId}`)
		}
	})
})

router.delete('/:id', (req, res) => {
	Recipe.findByIdAndRemove(req.params.id, (err, data)=> {
		if(err) console.log(err)
		res.redirect('/recipes')
	})
})

router.get('/:id/edit', (req, res) => {
	Recipe.findById(req.params.id, (err, foundRecipe) => {
		res.render('edit.ejs', {recipe: foundRecipe})
	})
})

router.put('/:id', (req, res) => {
	Recipe.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRecipe) => {
		res.redirect(`/recipes/${req.params.id}`)
	})
})

module.exports = router