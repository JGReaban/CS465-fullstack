var fs = require('fs');
var roomTypes = JSON.parse(fs.readFileSync("./data/roomtypes.json", "utf8"));

/* Get Rooms Page */
const rooms = (req,res) =>{
    res.render('rooms', {title: "Travlr Getaways",roomTypes});
};

module.exports = {
    rooms
};