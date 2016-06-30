casper.test.begin("can book a space", function(test) {
  casper.start("http://localhost:3000/spaces", function() {
    test.assertHttpStatus(200);
    casper.then(function() {
      this.clickLabel("Book this space", "button");
    });

    console.log("can pick a date");
    casper.then(function() {
      test.assertTextExists("pick a date");
    });
  }).run(function() {
    test.done();
  });
});
