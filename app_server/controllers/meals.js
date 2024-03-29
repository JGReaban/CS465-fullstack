var fs = require('fs');
var mealTypes = JSON.parse(fs.readFileSync("./data/mealtypes.json", "utf8"));

/* Get Meals Page */
const meals = (req,res) =>{
    res.render('meals', {title: "Travlr Getaways",mealTypes});
};

module.exports = {
    meals
};