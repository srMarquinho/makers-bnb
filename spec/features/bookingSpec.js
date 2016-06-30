casper.test.begin("can book a space", function(test) {
  casper.start("http://localhost:3000/spaces", function() {
    test.assertHttpStatus(200);
    casper.then(function() {
      this.clickLabel("Book this space", "button");
    });
    casper.then(function() {
      test.assertTextExists("pick a date");
    });

    console.log("can input a date");
    casper.then(function() {
      this.fill("form#calendar", {
        "date": "01/01/2017"
      });
      this.clickLabel("Request booking", "button");
    });

    casper.then(function() {
      test.assertTextExists("Your request has been submitted");
    });

  }).run(function() {
    test.done();
  });
});
