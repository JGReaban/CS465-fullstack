const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');
const User = mongoose.model("users");

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
    { 
        // Database returned no data
        return res
                .status(404)
                .json(err);
    } else { 
        // if there is return data
        return res
                .status(200)
                .json(q);
    }
};

// Post
//
//  This adds a trip

const tripsAddTrip = async (req, res) => {
    await getUser(req, res, (req, res) => {
      const q = Model.create({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description,
      })
        .then((data) => {
          res.send(data);
        })
        .catch((err) => {
          res.send(err);
        });
    });
  };
  
// PUT
//
// This actually updates the Trip
const tripsUpdateTrip = async (req, res) => {
    await getUser(req, res, (req, res) => {
      try {
        const q = Model.findOneAndUpdate(
          { code: req.params.tripCode },
          {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description,
          }
        ).exec();
        if (!q) {
          // Database returned no data
          return res.status(404).json({ message: "Trip not found" });
        } else {
          // Return resulting updated trip
          return res.status(200).json(q);
        }
      } catch (error) {
        console.error("Error updating trip:", error);
        return res.status(500).json({ error: "Internal server error" });
      }
    });
  };

// Get User Function
const getUser = async (req, res, callback) => {
    if (req.auth && req.auth.email) {
      try {
        const user = await User.findOne({ email: req.auth.email }).exec();
        if (!user) {
          return res.status(404).json({ message: "User not found1" });
        }
        callback(req, res, user.name);
      } catch (err) {
        console.log(err);
        return res.status(404).json({ message: "User not found2" });
      }
    }
  };
  
    

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};