var fs = require('fs');
// var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));
//var trips = [{"name": "Test"},{"image" : "reef1.jpg"},{"description" : "Some French"}]
var trips = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

/* Get Travel Page */
const travel = (req,res) =>{
    res.render('travel', {title: "Travlr Getaways",trips});
};

module.exports = {
    travel
};