// this is for linking files for testing
var User = require("../src/user.js");

describe("User", function() {
  var user;

  beforeEach(function() {
    user = new User();
  });

  it("has a new user", function() {
    expect(user.name).toEqual("Marlon")
  });
});
