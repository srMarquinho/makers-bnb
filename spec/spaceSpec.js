
casper.test.begin("has a form to list new space", function(test) {
  casper.start("http://localhost:3000/space/new", function() {
    test.assertHttpStatus(200);
    test.assertExists("#space-form")
    test.assertExists("#name-of-space")
    test.assertExists("#description")
    test.assertExists("#price")
  }).run(function() {
    test.done();
  })
})

casper.test.begin("listing a new space", function(test) {
  casper.start("http://localhost:3000/space/new", function() {
    this.fill("form#space-form", {
      "name": "Amazing flat",
      "description": "blabla",
      "price": 20,
    })
  casper.then(function() {
    this.clickLabel("List a space", "button");
  });
  casper.then(function() {
    test.assertTextExists("Amazing flat")
  })

  }).run(function() {
    test.done();
  })
})
