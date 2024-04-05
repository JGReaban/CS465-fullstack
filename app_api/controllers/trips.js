const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// Get Trips - lists all trips
// Regardless of outcome, repsonse must include HTML thing
// and JSON mesaage to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // No filter, return all records
        .exec();

        // comment out to show log
        // console.log(q);

    if(!q)  // if there is no q
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // if there is return data
        return res
                .status(200)
                .json(q);
    }

};

// Get a single trip by a given code

const tripsFindByCode = async(req,res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // get single record
        .exec();

        // comment out to show log
        // console.log(q);

    if(!q)  // if there is no q (data)
    { // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { // if there is return data
        return res
                .status(200)
                .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};