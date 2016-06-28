//pull in thinky into the application
var thinky = require('thinky')({
  host: 'localhost',
  port: 28015,
  db: 'makersBnbTest'
});

var r = thinky.r;
var type = thinky.type;

var User = thinky.createModel("User", {
  name: type.string(),
  email: type.string(),
  password: type.string()
});

exports.add = function (req, res) {
  var user = new User(req.body);

  user.save().then(function(result){
    res.json(result);
  }).error(function(err) {
    res.json({ message: err });
  });
};

//  this is for linking files for testing
module.exports = User;

// THIS IS AN EXAMPLE ON HOW TO CREATE ROWS AND STUFF
// var newUser = new User({
//   name: "Marco",
//   email: "test@test.com",
//   password: "secret"
// });
// newUser.save();
Status API Training Shop Blog About
