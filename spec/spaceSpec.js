// this is for linking files for testing
// var Cow = require("../src/space.js");
//
// casper.test.begin('Cow can moo', 2, function suite(test) {
//     var cow = new Cow();
//     test.assertEquals(cow.moo(), 'moo!');
//     test.assert(cow.mowed);
//     test.done();
// });
var Space = require("../src/space.js");

describe("Space", function() {
  var space;

  beforeEach(function() {
    space = new Space("Newington Green", "Islington",20);
  });

  it("has a name", function() {
    expect(space.name).toEqual("Newington Green")
  });

  it("has a description", function() {
    expect(space.description).toEqual("Islington")
  });

  it("has a price", function() {
    expect(space.price).toEqual(20)
  });

  it("knows if it's available", function() {
    expect(space.available).toEqual(true)
  });

  it("is no longer available when booked", function() {
    space.booked();
    expect(space.available).toEqual(false)
  });

});
