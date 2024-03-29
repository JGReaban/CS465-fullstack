// Import db and trips json
const Mongoose = require('./db');
const Trip = require('./travlr');

// Read see file data
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf-8'));

// Delete any existing records and insert ones read from file
const seedDB = async() => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

// Close the MongoDB connection and exit
seedDB().then(async() => {
   await Mongoose.connection.close();
   process.exit(0); 
} );