'use strict';

var thinky = require('thinky')({
  host: 'localhost',
  port: 28015,
  db: 'makersBnBTest'
});

var r = thinky.r;
var type = thinky.type;

var Space = thinky.createModel("Space", {
  name: type.string(),
  description: type.string(),
  price: type.number(),
  available: type.boolean(),
})

exports.add = function (req, res) {
  var space = new Space(req.body);

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

exports.update = function (req, res) {
  Space.get(req.params.id).run(),then(function(space) {
    if (req.body.availability) {
      space.availability = req.body.availability;
    }
  })
}

exports.getAll = function (req, res) {
  Space.run().then(function(space) {
    console.log(space);
    res.json(space);
  }).error(function(err) {
    res.json({ message: err });
  });
};

function Space() {
  this.booked = false
};

Space.prototype = {
  book : function() {
    this.booked = true
  }
}


//  this is for linking files for testing with jasmine
// module.exports = Space;
