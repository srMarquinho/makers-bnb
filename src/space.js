'use strict';

var thinky = require('thinky')({
  host: 'localhost',
  port: 28015,
  db: 'makersBnbTest'
});
var type = thinky.type;

var Space = thinky.createModel("Space", {
  name: type.string(),
  description: type.string(),
  price: type.number(),
  available: type.boolean(),
});

exports.add = function (req, res) {
  var space = new Space({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    available:true
  });
  space.save().then(function(result){
    res.json(result);
  }).error(function(err) {
    res.json({ message: err });
  });
};

exports.get = function (req, res) {
  Space.get(req.params.id).run().then(function(space) {
    res.json(space);
  }).error(function(err) {
    res.json({ message: err });
  });
};

// exports.update = function (req, res) {
//   Space.get(req.params.id).run(),then(function(space) {
//     if (req.body.availability) {
//       space.availability = req.body.availability;
//     }
//   })
// };

exports.getAll = function (req, res) {
  Space.run().then(function(spaces) {
    res.render("spaces/index", {spaces: spaces});
  }).error(function(err) {
    res.json({ message: err });
  });
};

// function Space() {
//   this.booked = false;
// }
// Space.prototype = {
//   book : function() {
//     this.booked = true;
//   }
// };

// linking files for testing with jasmine
// module.exports = User;
